import React, { useEffect, useRef, useState } from 'react';

// Animations live in public/media. Each one is a small page that reads its own manifest.
// - "Narrated" animations (lesson-01 and up) play the lesson voice-over: the scenes follow what the narrator is saying,
//   and the transcript sits inside the player. These replace the separate audio player for that lesson.
// - Silent animations (the Course 1 intro and the Sentinel-2 satellite picture) carry no voice at all, so a page
//   never has two narrations.
const ANIMATIONS = {
  intro: { src: '/media/intro.html', title: 'Why space science matters', narrated: false },
  satellite: { src: '/media/satellite.html', title: 'How a satellite takes a picture of Pokuase', narrated: false },
  'lesson-01': { src: '/media/lesson-01.html', title: 'Why Study Earth From Space?', narrated: true },
  'lesson-02': { src: '/media/lesson-02.html', title: 'What Is a Satellite?', narrated: true },
  'lesson-03': { src: '/media/lesson-03.html', title: 'How Do Satellites Get to Space?', narrated: true },
  'lesson-04': { src: '/media/lesson-04.html', title: 'How Do Satellites Orbit Earth?', narrated: true },
  'lesson-05': { src: '/media/lesson-05.html', title: 'What Do Satellites See?', narrated: true },
  'lesson-06': { src: '/media/lesson-06.html', title: 'What Does Resolution Mean?', narrated: true },
  'lesson-07': { src: '/media/lesson-07.html', title: 'Meet Sentinel-2', narrated: true },
  'lesson-08': { src: '/media/lesson-08.html', title: 'Find What Changed in Your Town', narrated: true },
  'lesson-09': { src: '/media/lesson-09.html', title: 'The Sun', narrated: true },
  'lesson-10': { src: '/media/lesson-10.html', title: 'The Moon', narrated: true },
  'lesson-11': { src: '/media/lesson-11.html', title: 'Planets', narrated: true },
  'lesson-12': { src: '/media/lesson-12.html', title: 'Stars and the Night Sky in Ghana', narrated: true },
  'lesson-13': { src: '/media/lesson-13.html', title: 'Listening to Space: Kuntunse', narrated: true },
} as const;

export type AnimationId = keyof typeof ANIMATIONS;
export const isNarratedAnimation = (id?: string): boolean => !!id && id in ANIMATIONS && ANIMATIONS[id as AnimationId].narrated;

export const NarratedAnimation: React.FC<{ id: AnimationId }> = ({ id }) => {
  const a = ANIMATIONS[id];
  const frame = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(a.narrated ? 560 : 420);

  // The animation page reports its height (it grows when the transcript is opened), so nothing is cut off.
  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.source !== frame.current?.contentWindow) return;
      const d = e.data;
      if (d && d.lumosx === 'height' && typeof d.h === 'number') setHeight(Math.max(300, Math.ceil(d.h) + 4));
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  return (
    <section aria-label={a.narrated ? `Lesson animation with voice-over: ${a.title}` : `Animation: ${a.title}`} className="space-y-2">
      <h2 className="text-sm font-bold text-ink">
        {a.narrated ? 'Watch and listen' : `Watch: ${a.title}`} <span className="font-normal text-ink-3">{a.narrated ? '(animation with voice-over; press Play)' : '(animation, no sound)'}</span>
      </h2>
      <iframe ref={frame} src={a.src} title={a.title} loading="lazy" style={{ height }} className="w-full max-w-full border border-line rounded-2xl bg-sky shadow-sm" />
    </section>
  );
};
