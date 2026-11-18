import { Course, RawCourse } from '../types';
import { QUIZ_BANK } from './quizBank';
import { SRC } from './sources';

const earthFromSpace: RawCourse = {
  id: 'earth-from-space',
  title: 'Earth from Space',
  level: 'explorer',
  description: 'How satellites take pictures of our planet, and how two pictures of the same place show change.',
  learningOutcome:
    'By the end of this course you can explain how a satellite takes a picture of the Earth, and compare two pictures of the same town to describe what changed.',
  lessons: [
    {
      id: 'why-study-earth-from-space',
      narration: 'lesson-01',
      title: 'Why Study Earth From Space?',
      learningOutcome: 'Say why pictures from space help us understand our own towns and land.',
      status: 'ready',
      openingQuestion: 'How could you check whether your town has grown, without walking through every street?',
      sections: [
        {
          heading: 'One view of a whole place',
          body: [
            `A person on the ground sees only a small part of a place. A satellite flying high above can see a whole town, a farming area or a stretch of coast in a single picture.`,
          ],
        },
        {
          heading: 'The same place, again and again',
          body: [
            `A satellite does not visit once. It keeps coming back and taking new pictures. That means we can put a picture from one year next to a picture of the same place from a later year. If a green area becomes a built-up area, we can see it.`,
          ],
        },
        {
          heading: 'What this is used for',
          body: [
            `Pictures from space help people monitor plants, soil and water, and watch coasts and inland waters. Planners, farmers and scientists use them to understand how land is changing.`,
          ],
        },
      ],
      ghana: {
        heading: 'Ghana connection',
        body: [
          `Ghana opened its own space science institute in 2012. In 2017, Ghana's first satellite, GhanaSat-1, reached orbit. It carries cameras that were meant to take pictures of Ghana's coast. Later in this course you will use real satellite pictures of Ghanaian towns.`,
        ],
      },
      remember: [
        'A satellite can see a whole area in one picture.',
        'Pictures from different years let us see change.',
        'In the last lesson you will do this yourself for a Ghanaian town.',
      ],
      sources: [SRC.copernicusData, SRC.nasaFloodMapping, SRC.sentinelFloodStudy, SRC.anuGhanaSat, SRC.gsstiAbout],
    },
    {
      id: 'what-is-a-satellite',
      narration: 'lesson-02',
      title: 'What Is a Satellite?',
      learningOutcome: 'Explain what a satellite is and name the main jobs satellites do.',
      status: 'ready',
      openingQuestion: 'The Moon goes around the Earth. Is it a satellite?',
      sections: [
        {
          heading: 'Things that go around other things',
          body: [
            `A satellite is an object that travels around a bigger object in space. The Moon is a natural satellite of the Earth. Most satellites today are machines that people build and send into space.`,
          ],
        },
        {
          heading: 'Satellites have jobs',
          body: [
            `Some satellites carry phone and TV signals. Some, like the GPS satellites, help phones find where they are. Some watch the weather. Some take pictures and measurements of the Earth. And some, like the Hubble Space Telescope, look out at the stars.`,
          ],
        },
        {
          heading: 'Different jobs, different instruments',
          body: [
            `Each satellite carries instruments built for its job, so each one records different information. A weather satellite and a satellite that photographs towns are not the same machine. In this course we focus on satellites that watch the Earth.`,
          ],
        },
      ],
      ghana: {
        heading: 'Ghana connection',
        body: [
          `GhanaSat-1 is a small satellite called a CubeSat. It is built around a cube 10 centimetres wide and weighs about one kilogram.`,
        ],
      },
      remember: [
        'A satellite is an object that goes around a bigger object in space.',
        'The Moon is a natural satellite. Most others are machines we build.',
        'Satellites have different jobs, so they carry different instruments.',
      ],
      sources: [SRC.anuGhanaSat, SRC.gpsSpace, SRC.hubbleNasa, SRC.hubbleEsa, SRC.nasaMoonQuestions],
    },
    {
      id: 'how-satellites-get-to-space',
      narration: 'lesson-03',
      title: 'How Do Satellites Get to Space?',
      learningOutcome: 'Describe in simple steps how a satellite reaches orbit.',
      status: 'ready',
      openingQuestion: 'A satellite cannot fly to space by itself. How does it get so high?',
      sections: [
        {
          heading: 'A rocket does the heavy lifting',
          body: [
            `A satellite rides on a rocket. The rocket burns fuel and climbs fast. When one part of the rocket has used up its fuel, that part falls away. Each part is called a stage, and dropping stages makes the rocket lighter.`,
          ],
        },
        {
          heading: 'Why a satellite stays up',
          body: [
            `High above the air, the satellite is released moving very fast sideways. Gravity keeps pulling it down, but it moves sideways so quickly that it keeps missing the Earth. It falls all the way around. That path is called an orbit.`,
          ],
        },
        {
          heading: 'Other ways up',
          body: [
            `Some small satellites hitch a ride. A rocket carries them to the International Space Station, and they are released from there into their own orbit.`,
            `The first Sentinel-2 satellite, the one whose pictures we use, was launched on a European Vega rocket from Kourou in French Guiana in June 2015.`,
          ],
        },
      ],
      ghana: {
        heading: 'Ghana connection',
        body: [
          `GhanaSat-1 travelled the second way. A SpaceX rocket carried it to the International Space Station in early June 2017. On 7 July 2017 it was released from the station into orbit.`,
        ],
      },
      remember: [
        'Rockets lift satellites to space.',
        'A satellite stays in orbit because it moves sideways very fast, so it keeps falling around the Earth.',
        'Small satellites can also be released from the space station.',
      ],
      sources: [SRC.rocketPropulsion, SRC.cnesSentinel, SRC.oscarS2A, SRC.anuGhanaSat, SRC.jaxaKibo],
    },
    {
      id: 'how-satellites-orbit-earth',
      narration: 'lesson-04',
      title: 'How Do Satellites Orbit Earth?',
      learningOutcome: 'Explain why different satellites fly at different heights.',
      status: 'ready',
      openingQuestion: 'Do all satellites fly at the same height?',
      diagram: 'orbit-heights',
      sections: [
        {
          heading: 'Different jobs, different heights',
          body: [
            `Satellites that watch the Earth closely fly low, a few hundred kilometres up. Landsat satellites fly at about 705 km. Sentinel-2 flies at 786 km. At that height a satellite goes right around the Earth in about 100 minutes.`,
          ],
        },
        {
          heading: 'Covering the whole Earth',
          body: [
            `Many Earth-watching satellites fly over the poles while the Earth turns underneath them. Each lap passes over a new strip of land, so after some days the whole Earth has been covered.`,
            `Sentinel-2's orbit is also timed to the Sun. It passes over a place at about 10:30 in the morning, local time, on every visit. Similar sunlight each time makes pictures from different dates easier to compare.`,
          ],
        },
        {
          heading: 'Much higher orbits',
          body: [
            `Weather and TV satellites often fly about 36,000 km up. At that height a satellite goes round once in 24 hours, the same time the Earth takes to turn, so it seems to hang above one spot. Navigation satellites such as GPS fly in between, about 20,000 km up.`,
          ],
        },
      ],
      ghana: {
        heading: 'Ghana connection',
        body: [
          `GhanaSat-1 was released from the International Space Station, and its planned height was about 400 km above the Earth. That is a low orbit, like the Earth-watching satellites in this lesson.`,
        ],
      },
      remember: [
        'Earth-watching satellites fly low, a few hundred kilometres up, to see details.',
        'Weather and TV satellites fly about 36,000 km up, and seem to stay above one spot.',
        'Sentinel-2 passes over a place at about the same time of day on every visit.',
      ],
      sources: [SRC.esaOrbit, SRC.nasaOrbits, SRC.csisOrbit, SRC.gpsSpace, SRC.nasaOli, SRC.graphicGhanaSat],
    },
    {
      id: 'what-do-satellites-see',
      narration: 'lesson-05',
      title: 'What Do Satellites See?',
      learningOutcome: 'Explain that satellites record light, including kinds of light we cannot see.',
      status: 'ready',
      openingQuestion: 'Is a satellite picture just a photograph?',
      diagram: 'spectrum',
      sections: [
        {
          heading: 'Reflected light',
          body: [
            `The Sun lights up the ground. Some of that light bounces back up into space, and a satellite instrument measures the light that comes back.`,
          ],
        },
        {
          heading: 'Light we can see and light we cannot',
          body: [
            `Sunlight is a mix of many kinds of light. We can see red, green and blue. There are also kinds of light our eyes cannot see, such as infrared. A satellite can measure these too.`,
          ],
        },
        {
          heading: 'Bands',
          body: [
            `A satellite measures each kind of light separately. Each one is called a band. Sentinel-2 measures 13 bands. Landsat 8 and 9 measure 11. The number of bands a satellite measures is called its spectral resolution.`,
          ],
        },
        {
          heading: 'Why bands help',
          body: [
            `Plants, water, soil and buildings reflect light in different ways. Healthy plants, for example, reflect a lot of near-infrared light, which we cannot see. Comparing bands helps scientists tell these surfaces apart.`,
          ],
        },
        {
          heading: 'The pictures in this course',
          body: [
            `The pictures you will use look like ordinary colour photographs. They use just three of Sentinel-2's bands: red, green and blue.`,
          ],
        },
      ],
      ghana: {
        heading: 'Ghana connection',
        body: [`GhanaSat-1 carries low and high resolution cameras. They were meant to take pictures of Ghana's coastal borders.`],
      },
      remember: [
        'Satellites measure light that bounces off the ground.',
        'Each kind of light a satellite measures is called a band.',
        'Different bands help tell plants, water, soil and buildings apart.',
      ],
      sources: [SRC.copernicusMsi, SRC.nasaOli, SRC.nasaVegetation, SRC.copernicusData, SRC.anuGhanaSat],
    },
    {
      id: 'what-does-resolution-mean',
      narration: 'lesson-06',
      title: 'What Does Resolution Mean?',
      learningOutcome: 'Explain spatial and temporal resolution with examples.',
      status: 'ready',
      openingQuestion: 'Why can you see a house in one satellite picture and only a blur in another?',
      diagram: 'pixels',
      sections: [
        {
          heading: 'Spatial resolution: how big is each square?',
          body: [
            `A satellite picture is made of tiny squares called pixels. Spatial resolution is how wide each square is on the ground. In the red, green and blue bands, Sentinel-2 pixels are 10 metres wide, about the length of a bus. Landsat pixels are 30 metres wide.`,
            `Smaller pixels show smaller things. A 10 metre pixel cannot show one person or one car, but it can show a road, a large building or a field.`,
          ],
        },
        {
          heading: 'Temporal resolution: how often does it come back?',
          body: [
            `Temporal resolution is how often a satellite takes a picture of the same place. One Sentinel-2 satellite comes back about every 10 days. Two working together come back about every 5 days, near the equator. One Landsat satellite comes back every 16 days, and two together every 8.`,
          ],
        },
        {
          heading: 'Why clouds matter',
          body: [
            `Clouds hide the ground. A visit does not always give a clear picture, so more frequent visits give more chances of a clear view.`,
          ],
        },
        {
          heading: 'A trade-off',
          body: [
            `A very sharp picture often covers a smaller area, and a wide view is often less sharp. Scientists choose the satellite that fits their question. You have now met all three kinds of resolution: spatial, temporal and spectral.`,
          ],
        },
      ],
      remember: [
        'Spatial resolution is how wide each pixel is on the ground.',
        'Temporal resolution is how often a satellite returns to the same place.',
        'Spectral resolution is how many bands a satellite measures.',
      ],
      sources: [SRC.copernicusMsi, SRC.esaOverview, SRC.nasaOli],
    },
    {
      id: 'meet-sentinel-2',
      narration: 'lesson-07',
      extraAnimation: 'satellite',
      title: 'Meet Sentinel-2',
      learningOutcome: 'Say what Sentinel-2 is and why its pictures are used in this course.',
      status: 'ready',
      openingQuestion: 'Why do the pictures in this course come from Sentinel-2?',
      sections: [
        {
          heading: 'A family of satellites',
          body: [
            `Sentinel-2 is a set of Earth-watching satellites from the European Space Agency, part of the Copernicus programme. The first was launched in 2015, and more have followed. Satellites in the set fly in the same orbit, and two together give a new picture of the same place about every 5 days.`,
          ],
        },
        {
          heading: 'What it records',
          body: [
            `Sentinel-2 measures 13 bands: four with 10 metre pixels (blue, green, red and near-infrared), six with 20 metre pixels and three with 60 metre pixels. Each strip it photographs is 290 km wide.`,
          ],
        },
        {
          heading: 'Yearly pictures',
          body: [
            `The pictures in Find Your Town come from Digital Earth Africa, which shares them as open data. Each one is a yearly composite: many pictures taken during one year, blended into a single image that is largely free of clouds. The first year available is 2017, which is why we compare 2017 with 2025.`,
          ],
        },
        {
          heading: 'It is not the only choice',
          body: [
            `The Landsat satellites, from NASA and the US Geological Survey, have 30 metre pixels and return to a place every 16 days, or every 8 with two satellites. Different satellites suit different questions.`,
          ],
        },
      ],
      remember: [
        'Sentinel-2 has 10 metre pixels in the red, green, blue and near-infrared bands.',
        'Two Sentinel-2 satellites give a new picture of a place about every 5 days.',
        'A yearly composite blends many pictures from one year and removes most clouds.',
      ],
      sources: [SRC.esaOverview, SRC.copernicusMsi, SRC.deaGeomad, SRC.deaOpenData, SRC.nasaOli],
    },
    {
      id: 'find-what-changed-in-your-town',
      narration: 'lesson-08',
      title: 'Find What Changed in Your Town',
      learningOutcome: 'Compare two pictures of a town and describe what changed in your own words.',
      status: 'ready',
      openingQuestion: 'What has changed in the place you know best?',
      sections: [
        {
          heading: 'Your turn',
          body: [
            `Now you can use real satellite pictures. In Find Your Town you will choose a Ghanaian town and compare two yearly pictures of it, one from 2017 and one from 2025.`,
          ],
        },
        {
          heading: 'How to compare',
          body: [
            `Move the slider slowly. Look for new buildings, new or wider roads, areas where green has turned brown or grey, bare land, water, and changes around settlements.`,
          ],
        },
        {
          heading: 'Be careful with reasons',
          body: [
            `A picture can show that something changed. It cannot tell you why. Light, season and cloud can also change how a place looks. First describe what you see, then think about possible reasons.`,
          ],
        },
        {
          heading: 'Write it down',
          body: [`Choose one change you noticed and describe it in your own words. Find Your Town lets you save a note on your own device.`],
        },
      ],
      remember: [
        'Describe what you see before you explain why.',
        'A picture shows that something changed, not the reason.',
        'Compare the same area in both years.',
      ],
      activityPath: '/explore/find-your-town',
      activityLabel: 'Find Your Town',
      sources: [SRC.deaGeomad, SRC.deaOpenData, SRC.geonamesGhana],
    },
  ],
};

const sunAndNightSky: RawCourse = {
  id: 'sun-and-night-sky',
  title: 'The Sun and the Night Sky',
  level: 'explorer',
  description: 'The Sun, the Moon, the planets and the stars, and how Ghana listens to space.',
  learningOutcome:
    'By the end of this course you can describe the Sun, the Moon, the planets and the stars, and say how a radio telescope helps us study space.',
  lessons: [
    {
      id: 'the-sun',
      narration: 'lesson-09',
      title: 'The Sun',
      learningOutcome: 'Describe what the Sun is and how it affects the Earth.',
      status: 'ready',
      openingQuestion: 'The Sun looks about the size of a plate in the sky. How big is it really?',
      sections: [
        {
          heading: 'A star',
          body: [
            `The Sun is a star: a giant ball of hot gas that makes its own light. It looks different from the other stars only because it is much, much closer to us.`,
            `Never look straight at the Sun. It can damage your eyes, even through sunglasses or a phone camera.`,
          ],
        },
        {
          heading: 'How far and how big',
          body: [
            `The Sun is about 150 million kilometres from the Earth. Its light takes about 8 minutes and 20 seconds to reach us. The Sun is more than 100 times wider than the Earth, and it holds almost all of the material in our solar system.`,
          ],
        },
        {
          heading: 'Heat and light',
          body: [
            `The surface of the Sun is about 5,500 °C. Its heat and light warm the Earth, drive our weather and make life possible.`,
          ],
        },
        {
          heading: 'Space weather',
          body: [
            `The Sun also sends out a stream of tiny charged particles called the solar wind. Sometimes it throws out bigger bursts, such as solar flares. This is called space weather, and strong space weather can disturb satellites.`,
          ],
        },
      ],
      remember: [
        'The Sun is a star, and it only looks special because it is close.',
        'Sunlight takes about 8 minutes and 20 seconds to reach the Earth.',
        'The Sun also sends out the solar wind, which causes space weather.',
      ],
      sources: [SRC.nasaSun, SRC.ucarSun, SRC.amnhSun],
    },
    {
      id: 'the-moon',
      narration: 'lesson-10',
      title: 'The Moon',
      learningOutcome: 'Explain why the Moon seems to change shape.',
      status: 'ready',
      openingQuestion: 'Does the Moon really change shape during the month?',
      sections: [
        {
          heading: 'The Earth\'s natural satellite',
          body: [
            `The Moon travels around the Earth. One trip around takes about 27 days. The same side of the Moon always faces the Earth.`,
          ],
        },
        {
          heading: 'The Moon makes no light',
          body: [
            `The Moon has no light of its own. Moonlight is sunlight bouncing off the Moon's surface. The Sun always lights up half of the Moon.`,
          ],
        },
        {
          heading: 'Why the shape seems to change',
          body: [
            `As the Moon goes around the Earth, we look at its lit half from different angles. Sometimes we see all of it (Full Moon), sometimes half, sometimes a thin curve, and sometimes none (New Moon). These are the Moon's phases. The Moon itself does not change. It takes about 29.5 days to go from one New Moon to the next.`,
          ],
        },
        {
          heading: 'Tides',
          body: [
            `The Moon's gravity pulls on the oceans. This is the main cause of tides, the rise and fall of sea level that many coasts see each day.`,
          ],
        },
      ],
      activity: {
        heading: 'Try it this week',
        body: `Look at the Moon at about the same time each evening for a week. Draw its shape each night. Notice how the lit part grows or shrinks.`,
      },
      remember: [
        'The Moon has no light of its own. It reflects sunlight.',
        'Phases happen because we see different amounts of the lit half.',
        'The Moon\'s gravity is the main cause of tides.',
      ],
      sources: [SRC.nasaMoonQuestions, SRC.nasaMoonPhases, SRC.nasaOreoMoon, SRC.noaaTides],
    },
    {
      id: 'planets',
      narration: 'lesson-11',
      title: 'Planets',
      learningOutcome: 'Name the planets and tell rocky planets from giant planets.',
      status: 'ready',
      openingQuestion: 'How many planets travel around our Sun?',
      sections: [
        {
          heading: 'Eight planets',
          body: [
            `There are eight planets. In order from the Sun they are Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus and Neptune.`,
          ],
        },
        {
          heading: 'Rocky planets',
          body: [
            `The four closest to the Sun, Mercury, Venus, Earth and Mars, are rocky planets. They are made mostly of rock and metal and have a solid surface you could stand on.`,
          ],
        },
        {
          heading: 'Giant planets',
          body: [
            `The four furthest away are much bigger. Jupiter and Saturn are gas giants, made mostly of hydrogen and helium. Uranus and Neptune are ice giants, which contain a lot of water, ammonia and methane. Gas giants have no solid surface to stand on.`,
          ],
        },
        {
          heading: 'Planets you can see',
          body: [
            `You can see five planets without a telescope: Mercury, Venus, Mars, Jupiter and Saturn. They look like bright stars. A free sky map app on a phone can show you where to look tonight.`,
          ],
        },
      ],
      remember: [
        'There are eight planets, and Earth is the third from the Sun.',
        'Mercury, Venus, Earth and Mars are rocky planets.',
        'Jupiter and Saturn are gas giants. Uranus and Neptune are ice giants.',
      ],
      sources: [SRC.nasaPlanetsPage, SRC.nasaPlanets],
    },
    {
      id: 'stars-and-the-night-sky-in-ghana',
      narration: 'lesson-12',
      title: 'Stars and the Night Sky in Ghana',
      learningOutcome: 'Explain what stars are and why the sky over Ghana looks the way it does.',
      status: 'ready',
      openingQuestion: 'Why does the night sky look different in different parts of the world?',
      sections: [
        {
          heading: 'What stars are',
          body: [
            `Stars are giant balls of hot gas that make their own light, just like the Sun. They look tiny only because they are extremely far away.`,
          ],
        },
        {
          heading: 'Patterns in the sky',
          body: [
            `People have joined bright stars into patterns, called constellations, to help them find their way around the sky.`,
          ],
        },
        {
          heading: 'Your latitude decides your sky',
          body: [
            `Latitude tells you how far north or south of the equator you are. It decides which parts of the sky you can see.`,
            `Ghana lies close to the equator, between about 5 and 11 degrees north. From near the equator you can see parts of both the northern and the southern sky over the year.`,
          ],
        },
        {
          heading: 'The North Star',
          body: [
            `In the northern half of the world, the height of Polaris, the North Star, above the horizon is about the same as your latitude. In Accra, at about 5.6 degrees north, Polaris sits very low above the northern horizon. In Tamale, at about 9.4 degrees north, it is a little higher.`,
          ],
        },
        {
          heading: 'The Southern Cross',
          body: [
            `The Southern Cross is a small group of bright stars in the southern sky. From Ghana it can be seen low above the southern horizon at some times of the year, when the sky is clear.`,
          ],
        },
      ],
      activity: {
        heading: 'Try it on a clear night',
        body: `Go somewhere away from bright lights. Use a free sky map app to find Polaris. A closed fist held at arm's length is about 10 degrees wide, so in Tamale Polaris should sit about one fist above the northern horizon.`,
      },
      remember: [
        'Stars make their own light and look small because they are far away.',
        'Ghana is close to the equator, so we can see parts of both the northern and southern sky.',
        'Polaris is low in the north from Ghana, and its height matches your latitude.',
      ],
      sources: [SRC.buPolaris, SRC.msuLatitude, SRC.hokuleaLatitude, SRC.ghanaExtent, SRC.geonamesGhana, SRC.constellationsSn, SRC.constellationsBerkeley, SRC.nightSkyTextbook],
    },
    {
      id: 'listening-to-space-kuntunse',
      narration: 'lesson-13',
      title: 'Listening to Space: Kuntunse',
      learningOutcome: 'Explain how a radio telescope studies space, and name Ghana\'s radio telescope.',
      status: 'ready',
      openingQuestion: 'Can we listen to the stars?',
      sections: [
        {
          heading: 'More than the light we can see',
          body: [
            `Stars and galaxies give out visible light, and they also give out radio waves, which we cannot see. Radio waves from space are not sound.`,
          ],
        },
        {
          heading: 'What a radio telescope does',
          body: [
            `A radio telescope has a large dish that collects radio waves from space and focuses them. Computers turn the measurements into graphs and pictures. Radio astronomers use them to study objects such as pulsars, which are spinning stars that give out regular pulses of radio waves.`,
          ],
        },
        {
          heading: 'Working together',
          body: [
            `Telescopes in different places can observe the same object at the same time and combine their data. This is called very long baseline interferometry, or VLBI, and it lets the telescopes work like one much bigger telescope.`,
          ],
        },
        {
          heading: 'About the sounds of space',
          body: [
            `You may find recordings online called the sounds of space. These are usually made by turning measurements into sound, as one way to explore data. They are not sound that travelled through space, because space has no air to carry sound.`,
          ],
        },
      ],
      ghana: {
        heading: 'Ghana connection: Kuntunse',
        body: [
          `Ghana's radio telescope is at Kuntunse, near Accra. Its 32 metre dish was once a satellite communications antenna, and it was converted into a radio telescope. The Ghana Radio Astronomy Observatory was launched on 24 August 2017, and it is part of the African VLBI Network. Its first test observations included detections of methanol masers, which are natural radio signals from gas clouds in space, and observations of pulsars.`,
        ],
      },
      remember: [
        'A radio telescope collects radio waves from space, not sound.',
        'Ghana\'s radio telescope is at Kuntunse, near Accra.',
        'Telescopes in different places can be combined to work like one bigger telescope.',
      ],
      sources: [SRC.presidencyGrao, SRC.mestiGrao, SRC.govzaVlbi, SRC.gsstiAbout, SRC.atnfRadio, SRC.nasaRadioWaves, SRC.nasaPulsars, SRC.nasaSonification, SRC.chandraSound],
    },
  ],
};

// Every lesson's quiz comes from the approved quiz bank (6 questions per lesson). Lessons are defined without quizzes above.
const withQuiz = (c: RawCourse): Course => ({ ...c, lessons: c.lessons.map((l) => ({ ...l, quickChecks: QUIZ_BANK[l.id] ?? [] })) });

export const COURSES: Course[] = [withQuiz(earthFromSpace), withQuiz(sunAndNightSky)];

export const getCourse = (id?: string) => COURSES.find((c) => c.id === id);
export const getLesson = (courseId?: string, lessonId?: string) => getCourse(courseId)?.lessons.find((l) => l.id === lessonId);
