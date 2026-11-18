# LumosX narrated animations

This document describes how LumosX narrated animations are built, how to replace a voice recording, and the specification for the next three animations.

## Purpose

A narrated animation explains one core idea with a clean diagram, simple motion and a short voice. It does not read the lesson aloud. The learner reads the lesson for detail. A learner must never need to hear the narration to understand the lesson, so every animation has captions and a transcript.

## Style

- Clean scientific diagrams on a soft sky background. Flat shapes, few colours, big labels.
- Simple motion: things appear in step with the voice, satellites drift, beams flow.
- No cartoon characters, no childish space graphics, no 3D effects, no sound effects, no background music.
- Labels are large enough to read on a phone. The diagrams scale with the screen, so keep label text short.
- Length: 30 to 50 seconds. One idea per animation.

## One narrator

All animations use the same voice, so that LumosX has one consistent narrator. The voice should be natural, clear, calm and educational, not dramatic, suitable for secondary school learners and understandable to Ghanaian English speakers. Choose a voice once, then use the same voice and settings for every recording. The project is not tied to any voice tool. Any text to speech tool, or a human recording, can produce the MP3 files.

## How an animation is built

Files, all in `public/media`:

- `NAME.html`: the diagram. Each scene is an SVG group with its own id (for example `g1`, `g2`). The page has a heading, the scenes, a caption line, controls and a transcript.
- `NAME.json`: the manifest. This is the only place that connects the diagram to the voice.
- `audio/NAME.mp3`: the narration. It is not downloaded until the learner presses Play.
- `player.js` and `player.css`: the shared player and style. Do not copy them for each animation.

Manifest format:

    {
      "id": "intro",
      "title": "Why space science matters",
      "audio": "audio/intro.mp3",
      "duration": 40.8,
      "scenes": [
        { "id": "ig1", "start": 0,    "caption": "Short caption for scene one." },
        { "id": "ig2", "start": 10.3, "caption": "Short caption for scene two." }
      ],
      "transcript": ["Exactly what the narrator says in part one.", "Part two."]
    }

The learner controls are Play and Pause, Replay, Captions (on or off) and a slider. The transcript opens from a button and is never removed.

To use an animation in a lesson, add its id and path to `ANIMATIONS` in `src/components/common/NarratedAnimation.tsx` and set `narration` on the lesson in `src/data/courses.ts`.

## How to replace a recording

1. Record or generate the new audio with the same narrator. Put one pause of about 1.5 seconds between the parts.
2. Save it as `public/media/audio/NAME.mp3` (mono, about 56 kbps keeps it small).
3. Find when each part starts (a silence detector or an audio editor shows this). Set each scene `start` about one second before its part is spoken. Update `duration`.
4. Update the captions and the transcript so they match the new words exactly.
5. Run `npm run check:content`. It checks that the audio file exists, the scene ids exist in the page, and the times increase.

No lesson code changes are needed.

## Correct narration script for the intro

The current intro audio had its sentence about GhanaSat-1 removed, because it said Ghanaian engineers launched the satellite, which is not accurate. When the intro is re-recorded, use this third part, and add the 2017 item back to the timeline scene:

    Ghana is part of this too. In 2012, Ghana opened its own space science institute. In 2017, Ghana's first satellite, GhanaSat-1, was built by Ghanaian engineers. A rocket carried it to the International Space Station, and it was released into orbit from there.

Sources for these facts are listed on the Ghana in Space page.

## Specification 1: What Is a Satellite?

For Lesson 2. About 40 seconds.

Visual sequence:

1. Earth at the bottom of the frame, empty space above it.
2. A small satellite appears in orbit above the Earth.
3. The satellite travels around the Earth along a thin orbit line.
4. The Moon appears for a moment, labelled "Natural satellite", then the machine satellite is labelled "Human-made satellite".
5. Three small satellites appear around the Earth, each with a simple icon and a label: Observation (a camera), Communication (a signal), Navigation (a location pin).

Narration, in three parts:

    1. A satellite is an object that travels around a bigger object in space. The Moon is a natural satellite of the Earth.
    2. Most satellites are machines that people build and send into space. Each one has a job.
    3. Some carry phone and TV signals. Some help phones find where you are. Some take pictures of the Earth. Each one carries instruments built for its job.

Captions: one short line per part. Labels: Natural satellite, Human-made satellite, Observation, Communication, Navigation. Do not show real mission names in this animation.

## Specification 2: What Do Satellites See?

For Lesson 5. About 45 seconds.

Visual sequence:

1. A satellite above a patch of land, looking down.
2. An ordinary looking view of land: green fields, a brown road, a blue water body, grey buildings.
3. Sunlight arrives. A beam hits the land and bounces back up to the satellite.
4. A simple bar of light appears, from blue through green to red, with an extra region beyond red labelled "Infrared, we cannot see it".
5. Four surfaces appear as small tiles (plants, water, soil, buildings). Under each, a small bar shows that each reflects the light differently. These bars must be labelled "Illustration" because they are not real measurements.
6. The words "Measurements, not just photographs" appear.

Narration, in four parts:

    1. A satellite looks down at the land. Sunlight hits the ground, and some of it bounces back up.
    2. We can see red, green and blue light. There are also kinds of light our eyes cannot see, such as infrared. The satellite measures each kind separately. Each one is called a band.
    3. Plants, water, soil and buildings reflect light in different ways. Comparing bands helps scientists tell them apart.
    4. So a satellite picture is not only a photograph. It is a set of measurements.

Care: do not show numbers on the reflectance bars. Do not claim exact values.

## Specification 3: What Does Resolution Mean?

For Lesson 6. About 45 seconds.

Visual sequence:

1. A broad real satellite picture (use one of the town pictures, for example Pokuase, with its credit).
2. The view zooms into a small part of the same place.
3. The picture becomes visible as squares. The word "pixel" appears.
4. Two versions of the same small area appear side by side: large pixels (little detail) and small pixels (more detail).
5. A scale bar shows the pixel width on the ground: 10 metres for Sentinel-2, 30 metres for Landsat.
6. A calendar strip shows a satellite returning every 5 days, as a second idea (temporal resolution), kept brief.

Narration, in four parts:

    1. This is a satellite picture. If we zoom in, we find it is made of tiny squares called pixels.
    2. Spatial resolution is how wide each square is on the ground. Smaller squares show smaller things.
    3. In its red, green and blue bands, Sentinel-2 has pixels 10 metres wide. Landsat pixels are 30 metres wide.
    4. Temporal resolution is how often a satellite comes back. Two Sentinel-2 satellites give a new picture of the same place about every 5 days.

Care: use the real town picture only for the zoom. The two side by side versions of the small area must be made from the same real picture at two pixel sizes, and labelled as such. Do not invent detail.

## Production checklist for each new animation

- Facts match a source listed in `src/data/sources.ts`, or are marked in the lesson's `sourcesNote`.
- Same narrator and settings as the other animations.
- Captions and transcript match the audio exactly.
- Audio under 500 KB.
- Tested with sound off (captions only) and on a phone.
