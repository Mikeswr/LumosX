# LumosX

An educational platform that teaches space science through Ghana. The goal: a student should find it easy to use even when the science becomes difficult.

## Run locally

Requires Node.js 20 or later.

    npm install
    npm run dev            # http://localhost:3000
    npm run build          # production build in dist/
    npm run lint           # type check
    npm run check:content  # checks every lesson and quiz question

## What is in the app

Routes:

- `/` Start
- `/learn`, `/learn/:course`, `/learn/:course/:lesson`
- `/explore` (goes to Find Your Town), `/explore/find-your-town`, `/explore/find-your-town/:town`
- `/ghana-in-space`
- `/feedback`

Content (all in `src/data`):

- `courses.ts`: two Explorer courses, 13 lessons, 26 quiz questions. Each lesson has an opening question, sections, an optional Ghana connection, key points, quick checks, and sources.
- `towns.ts` and `public/towns/`: 103 Ghanaian towns, each with a real 2017 and 2025 yearly Sentinel-2 picture (Digital Earth Africa GeoMAD). Files are named `{id}_2017.jpg` and `{id}_2025.jpg`. To add a town, add a row in `towns.ts` and the two pictures.
- `ghana.ts`: Ghana in Space facts, each with its sources.
- `sources.ts`: the list of sources used.
- `public/media/`: two narrated animations. Each has a page, a manifest (`.json`) and an audio file, so the voice can be replaced without changing code. See `docs/narrated-animations.md` for the system, the style rules and the specification of the next three animations.

Progress (completed lessons) and town notes are stored in the browser only. Nothing is sent anywhere. A lesson is complete only after the learner has answered its quick check questions. A wrong answer still counts, and a course is complete when all of its lessons are complete.

## Content rules

- Never add a fact without checking it against a source. If a source is weak or missing, say so in the lesson's `sourcesNote`.
- No quotations from real people without a verified source.
- No numbers that were not calculated from real data. Town pictures are visual comparisons, not measurements.
- Quiz questions store the right answer and the wrong answers separately, and options are shuffled when shown. Wrong answers must be as detailed as the right one. `npm run check:content` enforces this.
- Narration is a computer generated voice. Never describe generated sound as a recording of a scientist or spacecraft.

## Feedback

The feedback page works without a backend: learners can copy their answers. To send answers to a form service, set `VITE_FEEDBACK_ENDPOINT` (see `.env.example`) and rebuild.

## Deploying

The app uses browser URLs, so the host must send every path to `index.html`. `public/_redirects` does this on Netlify. For Netlify Drop, drag the contents of the built `dist` folder (as a zip).

## Archive

Older material is kept in `archive/`, outside the build: the original 40 lessons, challenges, projects, simulators and Explore topic pages. See `archive/README.md`. None of it has been checked, and it must not be reused without checking.
