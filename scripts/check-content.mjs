// Content checks for lessons and quizzes. Run with: npm run check:content
import { createServer } from 'vite';
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });
const { COURSES } = await vite.ssrLoadModule('/src/data/courses.ts');
const { reviewQuestion } = await vite.ssrLoadModule('/src/lib/quiz.ts');
const { LESSON_NARRATION, COURSE_INTRO_NARRATION } = await vite.ssrLoadModule('/src/data/narration.ts');
const { SRC } = await vite.ssrLoadModule('/src/data/sources.ts');
let problems = 0;
const fail = (m) => { problems++; console.log('PROBLEM:', m); };
let lessons = 0, questions = 0;
const answerPositions = [0, 0, 0, 0];
for (const c of COURSES) {
  for (const l of c.lessons) {
    lessons++;
    if (l.narration !== `lesson-${String(lessons).padStart(2, '0')}`) fail(`${l.id}: narration must be lesson-${String(lessons).padStart(2, '0')} (found ${l.narration})`);
    if (l.status !== 'ready') fail(`${l.id} is not ready`);
    if (!l.remember?.length) fail(`${l.id} has no key points`);
    if (l.quickChecks?.length !== 6) fail(`${l.id} has ${l.quickChecks?.length} questions, expected exactly 6`);
    if (!l.sources?.length) fail(`${l.id} has no sources`);
    else if (l.sources.length < 2) fail(`${l.id} has only one source`);
    if ('sourcesNote' in l) fail(`${l.id} has a sources note. Replace it with a real source.`);
    const nar = LESSON_NARRATION[l.id];
    if (!nar) fail(`${l.id} has no narration`);
    else {
      if (nar.audio !== `/media/lessons/lesson-${String(lessons).padStart(2, '0')}.mp3`) fail(`${l.id}: audio ${nar.audio} is not lesson-${String(lessons).padStart(2, '0')}.mp3`);
      const file = path.join('public', nar.audio);
      if (!fs.existsSync(file)) fail(`${l.id}: narration audio ${nar.audio} is missing`);
      else {
        if (fs.statSync(file).size > 600 * 1024) fail(`${l.id}: narration audio is larger than 600 KB`);
        const probe = spawnSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', file], { encoding: 'utf8' });
        if (probe.status === 0) {
          const real = parseFloat(probe.stdout);
          if (Math.abs(real - nar.seconds) > 1) fail(`${l.id}: narration is ${real.toFixed(1)} s but the data says ${nar.seconds} s`);
        }
      }
      const words = nar.transcript.join(' ').split(/\s+/).length;
      const wpm = (words / nar.seconds) * 60;
      if (wpm < 100 || wpm > 200) fail(`${l.id}: transcript and audio length do not fit together (${wpm.toFixed(0)} words per minute)`);
    }
    for (const q of l.quickChecks) {
      questions++;
      answerPositions[q.correctIndex]++;
      if (q.options.length !== 4) fail(`${q.id}: expected 4 options, found ${q.options.length}`);
      for (const w of reviewQuestion(q)) fail(`${q.id}: ${w}`);
    }
  }
}
// Course 1 introduction and the 14th audio file.
const intro = COURSE_INTRO_NARRATION['earth-from-space'];
if (!intro) fail('Course 1 introduction narration is missing');
else {
  if (intro.audio !== '/media/lessons/course-01-intro.mp3') fail('Course 1 intro audio must be course-01-intro.mp3');
  if (!fs.existsSync(path.join('public', intro.audio))) fail('Course 1 intro audio file is missing');
  if (!intro.transcript?.length) fail('Course 1 intro has no transcript');
}
if (LESSON_NARRATION && Object.keys(LESSON_NARRATION).length !== 13) fail(`expected 13 lesson narrations, found ${Object.keys(LESSON_NARRATION).length}`);
const lessonDir = fs.readdirSync('public/media/lessons').filter((f) => f.endsWith('.mp3'));
if (lessonDir.length !== 14) fail(`expected 14 audio files, found ${lessonDir.length}`);
for (const [id, n] of [...Object.entries(LESSON_NARRATION), ['course-01-intro', intro]]) {
  if (n && /\[[^\]]*\]/.test(n.transcript.join(' '))) fail(`${id}: transcript contains a production note in square brackets`);
}

// Animations are silent visuals: no audio, no second voice, every scene present in the page.
const media = 'public/media';
if (fs.existsSync(path.join(media, 'audio'))) fail('public/media/audio still exists (old animation narration)');
for (const f of fs.readdirSync(media).filter((x) => x.endsWith('.json'))) {
  const m = JSON.parse(fs.readFileSync(path.join(media, f), 'utf8'));
  const htmlFile = path.join(media, f.replace('.json', '.html'));
  if (!fs.existsSync(htmlFile)) fail(`${f}: page ${htmlFile} is missing`);
  const narrated = f.startsWith('lesson-');
  if (narrated) {
    // A narrated lesson animation: the voice-over is the lesson audio, and the transcript is the narration text word for word.
    const n = m.id.replace('lesson-', '');
    const nar = Object.values(LESSON_NARRATION).find((x) => x.audio === `/media/lessons/lesson-${n}.mp3`);
    if (m.audio !== `lessons/lesson-${n}.mp3`) fail(`${f}: audio must be lessons/lesson-${n}.mp3`);
    if (!fs.existsSync(path.join(media, m.audio))) fail(`${f}: audio file is missing`);
    if (!nar) fail(`${f}: no lesson narration for lesson ${n}`);
    else {
      if (JSON.stringify(m.transcript) !== JSON.stringify(nar.transcript)) fail(`${f}: transcript differs from the narration text`);
      if (Math.abs(m.duration - nar.seconds) > 1) fail(`${f}: duration ${m.duration}s does not match the audio (${nar.seconds}s)`);
      const words = (a) => a.join(' ').replace(/\s+/g, ' ');
      if (words(m.cues.map((c) => c.text)) !== words(nar.transcript)) fail(`${f}: caption cues do not add up to the transcript`);
    }
    if (m.silent) fail(`${f}: a narrated lesson animation must not be marked silent`);
    if (m.scenes.length !== m.transcript.length) fail(`${f}: expected one scene per narration paragraph (${m.transcript.length}), found ${m.scenes.length}`);
  } else {
    if (m.audio) fail(`${f}: animation still lists an audio file (duplicate narration)`);
    if (!m.silent) fail(`${f}: animation is not marked silent`);
  }
  const html = fs.existsSync(htmlFile) ? fs.readFileSync(htmlFile, 'utf8') : '';
  if (/<audio/i.test(html) || (!narrated && /trtext/.test(html))) fail(`${f}: page still has an old transcript or audio element`);
  let last = -1;
  for (const sc of m.scenes) {
    if (!html.includes(`id="${sc.id}"`)) fail(`${f}: scene ${sc.id} is not in the page`);
    if (sc.start <= last) fail(`${f}: scene start times must increase (${sc.id})`);
    if (sc.start >= m.duration) fail(`${f}: scene ${sc.id} starts after the animation ends`);
    if (!narrated && !sc.caption?.trim()) fail(`${f}: scene ${sc.id} has no caption`);
    last = sc.start;
  }
  console.log(`animation ${m.id}: ${m.scenes.length} scenes, ${m.duration}s, ${narrated ? 'with voice-over' : 'silent'}`);
}

// Every source needs a web address and a clean note.
for (const [key, src] of Object.entries(SRC)) {
  if (!/^https:\/\//.test(src.url)) fail(`source ${key} does not have an https address`);
  if (src.note && /will be added|should replace|not yet/i.test(src.note)) fail(`source ${key} has a placeholder note`);
}

let longest = 0, shortest = 0;
for (const c of COURSES) for (const l of c.lessons) for (const q of l.quickChecks) {
  const lens = q.options.map((s) => s.length);
  const right = q.options[q.correctIndex].length;
  if (right === Math.max(...lens)) longest++;
  if (right === Math.min(...lens)) shortest++;
}
// Across all questions, the correct answer should not tend to be the longest or the shortest option.
// The approved quiz bank is the source of truth, so these two checks only warn (they are a hint for future questions).
if (longest > questions * 0.4) console.log(`WARNING: correct answer is the longest option in ${longest} of ${questions} questions`);
if (shortest > questions * 0.4) console.log(`WARNING: correct answer is the shortest option in ${shortest} of ${questions} questions`);
if (lessons !== 13) fail(`expected 13 lessons, found ${lessons}`);
if (questions !== 78) fail(`expected 78 questions, found ${questions}`);
if (answerPositions.some((n) => n < 15)) fail(`correct answers are not spread across A to D: ${answerPositions.join('/')}`);
console.log(`correct answers by position A/B/C/D: ${answerPositions.join('/')}`);
console.log(`${lessons} lessons, ${questions} questions, correct is longest in ${longest} and shortest in ${shortest}, ${problems} problems`);
await vite.close();
process.exit(problems ? 1 : 0);
