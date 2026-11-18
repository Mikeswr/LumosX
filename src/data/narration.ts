// Lesson narrations: one voice recording per lesson (public/media/lessons/lesson-01.mp3 to lesson-13.mp3), with its full transcript.
// To replace a recording: put the new MP3 at the path below, update `seconds`, and update the transcript so it matches the audio exactly.
// The lesson text never depends on the audio. The audio is only downloaded when the learner presses Play.

export interface LessonNarration {
  audio: string;
  seconds: number;
  transcript: string[];
}

export const LESSON_NARRATION: Record<string, LessonNarration> = {
  'why-study-earth-from-space': {
    audio: '/media/lessons/lesson-01.mp3',
    seconds: 68.7,
    transcript: [
      "Have you ever wondered how we can tell whether a forest is shrinking, a town is growing, or a lake is changing over time?",
      "One way is to look at Earth from space.",
      "Satellites travel around our planet and collect information about its surface and atmosphere. They help us observe large areas that would be difficult to study from the ground alone.",
      "This is useful here in Ghana. Satellite images can help researchers monitor vegetation, study flooding, observe changes in settlements, and investigate patterns in water and land use.",
      "An important advantage is that satellites can observe the same places repeatedly. By comparing images from different dates, we can identify changes that might otherwise go unnoticed.",
      "However, an image does not always tell us why something changed. Clouds, seasons, shadows, and differences in image processing can affect what we see. Sometimes, researchers need measurements from the ground to understand the full story.",
      "In this course, you will learn how satellites observe Earth and how to begin exploring real satellite imagery.",
    ],
  },
  'what-is-a-satellite': {
    audio: '/media/lessons/lesson-02.mp3',
    seconds: 71.9,
    transcript: [
      "When you hear the word satellite, what comes to mind? Perhaps a spacecraft, a television dish, or an image of Earth taken from space.",
      "A satellite is an object that travels around another object in space.",
      "The Moon is a natural satellite because it orbits Earth. Human-made satellites are spacecraft placed into orbit to perform particular tasks.",
      "Some satellites support communication. Others help with navigation, weather monitoring, scientific research, or observing Earth’s surface.",
      "Earth observation satellites carry instruments that measure energy coming from Earth or reflected by its surface. Scientists use these measurements to study vegetation, water, cities, clouds, and many other features.",
      "A satellite is more than a camera floating above Earth. Its instruments collect specific kinds of information, and the data must be transmitted, processed, and interpreted before it becomes useful to us.",
      "Satellites are valuable because they allow us to collect observations from space and use them to answer questions about our planet.",
    ],
  },
  'how-satellites-get-to-space': {
    audio: '/media/lessons/lesson-03.mp3',
    seconds: 69.9,
    transcript: [
      "Satellites do not simply fly into space by themselves. Most human-made satellites are carried into space by rockets.",
      "A rocket produces thrust by expelling gas at high speed. This force pushes the rocket in the opposite direction.",
      "Launching a satellite requires enormous energy. The rocket must carry the spacecraft above much of Earth’s atmosphere and give it the right speed and direction for its intended orbit.",
      "Many rockets have multiple stages. Once a stage has used its fuel, it can separate so that the remaining rocket carries less mass.",
      "When the spacecraft reaches the required conditions, it can be released into its planned orbit. The satellite then uses its onboard systems to operate, communicate, and carry out its mission.",
      "Not every satellite follows the same route. Some are released directly into orbit by a rocket. Others may be transported to a space station and deployed from there.",
      "Once in orbit, the satellite still needs monitoring and control from the ground. Engineers check its health and help ensure that it performs its intended tasks.",
    ],
  },
  'how-satellites-orbit-earth': {
    audio: '/media/lessons/lesson-04.mp3',
    seconds: 70.0,
    transcript: [
      "Look up at the Moon. It travels around Earth, and human-made satellites can do the same.",
      "An orbit is the path an object follows around another object in space.",
      "Earth’s gravity pulls a satellite toward our planet. At the same time, the satellite moves forward at high speed. Together, its forward motion and gravity allow it to keep moving around Earth instead of simply falling straight down.",
      "Satellites can follow different orbits. Some travel relatively close to Earth and pass over different locations. Others operate in orbits designed to keep them over a similar region of the planet.",
      "The orbit affects what a satellite can observe and how frequently it returns to a location.",
      "For example, Earth observation satellites such as Sentinel-2 collect repeated images as they travel along their orbits. Scientists can use these observations to monitor changes over time.",
      "Remember that a satellite does not hover in one place just because it is in space. Its motion depends on its orbit, and different missions require different orbital designs.",
    ],
  },
  'what-do-satellites-see': {
    audio: '/media/lessons/lesson-05.mp3',
    seconds: 81.6,
    transcript: [
      "When we look at a photograph, we usually see familiar colours and objects. Satellite instruments can observe more than what our eyes can see.",
      "Many Earth observation satellites measure sunlight reflected from the land, water, and vegetation. Other instruments measure different forms of energy, including thermal radiation.",
      "The information collected depends on the instrument and the wavelengths it can detect. Visible light includes the colours that human eyes can see. Infrared wavelengths can reveal useful information about vegetation, land surfaces, and other features.",
      "Scientists often combine measurements from different wavelength bands to investigate environmental conditions.",
      "A satellite image displayed in natural colour is designed to resemble what we might see with our eyes. A false-colour image assigns different display colours to measurements, making some features easier to distinguish.",
      "For example, healthy vegetation can appear bright red in certain false-colour images because of its strong response in near-infrared wavelengths.",
      "However, image colours depend on how the data is displayed. Before interpreting an image, it is important to understand which bands were used and what they measure.",
    ],
  },
  'what-does-resolution-mean': {
    audio: '/media/lessons/lesson-06.mp3',
    seconds: 80.4,
    transcript: [
      "Imagine zooming in on an image until you can see the tiny squares that make it up. These squares are called pixels.",
      "In satellite imagery, spatial resolution describes the size of the ground area represented by a pixel. In this Sentinel-2 data, a pixel from a band with ten-metre spatial resolution represents an area about ten metres by ten metres on the ground.",
      "Smaller pixels can reveal smaller features, although the actual detail also depends on the sensor, image quality, and processing.",
      "Resolution has other meanings too.",
      "Temporal resolution concerns how frequently a satellite or satellite system can observe the same location. Some satellites revisit areas more frequently than others.",
      "Spectral resolution concerns a sensor’s ability to distinguish information across wavelengths. Radiometric resolution relates to how finely a sensor records differences in signal intensity.",
      "These are different concepts. An image with small pixels does not necessarily have the most frequent observations or the greatest spectral detail.",
      "When choosing satellite data, scientists consider which kind of resolution is most important for their research question.",
    ],
  },
  'meet-sentinel-2': {
    audio: '/media/lessons/lesson-07.mp3',
    seconds: 79.1,
    transcript: [
      "Now that you understand the basics of satellite imagery, let’s meet Sentinel-2.",
      "Sentinel-2 is part of the European Union’s Copernicus Earth observation programme. The mission uses optical instruments to collect information about Earth’s land and coastal areas.",
      "Its observations are useful for studying vegetation, land cover, agriculture, water bodies, and changes in settlements.",
      "Sentinel-2 measures reflected energy in several spectral bands. Some bands have ten-metre spatial resolution, while others have twenty-metre or sixty-metre resolution. The available detail therefore depends on the band you are using.",
      "The Sentinel-2 mission uses two satellites working together to provide frequent observations. Under favourable conditions, the combined mission can revisit a location approximately every five days, although actual usable observations depend on location, cloud cover, and other conditions.",
      "Clouds are an important limitation for optical imagery because they can obscure the surface. Scientists often use cloud masks and other quality checks before analysing an image.",
      "As you explore LumosX, remember that satellite images are measurements collected for scientific purposes, not simply photographs from space.",
    ],
  },
  'find-what-changed-in-your-town': {
    audio: '/media/lessons/lesson-08.mp3',
    seconds: 78.5,
    transcript: [
      "Let’s bring satellite science closer to home.",
      "Think of a town or community in Ghana that you know well. Perhaps it is where you grew up, where you attend school, or where you live today.",
      "When you compare satellite images from different years, you may notice changes in buildings, roads, vegetation, bare land, or water bodies.",
      "Start by identifying familiar landmarks. Look for major roads, rivers, large buildings, or other features that help you recognise the location.",
      "Next, compare the images carefully. Ask yourself what appears to have changed and what appears to have stayed the same.",
      "But be cautious. Different seasons can make vegetation look different. Clouds and shadows may hide features. Changes in image processing can also affect the appearance of the images.",
      "A difference between two images is evidence of a difference in appearance, but it is not always proof of a particular cause. Additional information may be needed to explain why a change occurred.",
      "Use the Find Your Town experience to explore a place you recognise. Observe first, describe what you see, and then think about what evidence would help you investigate further.",
    ],
  },
  'the-sun': {
    audio: '/media/lessons/lesson-09.mp3',
    seconds: 75.3,
    transcript: [
      "The Sun is the star at the centre of our solar system. It is an enormous, hot ball of gas that releases energy through nuclear fusion in its core.",
      "That energy travels through space and reaches Earth as sunlight. Sunlight provides much of the energy that drives weather, supports photosynthesis, and warms our planet.",
      "The Sun also helps explain the daily pattern of day and night. Earth rotates on its axis. As our part of Earth turns toward the Sun, we experience daytime. As it turns away, we experience night.",
      "The Sun appears to move across the sky during the day, but this apparent daily motion is mainly caused by Earth’s rotation.",
      "Scientists also study sunlight reflected from Earth’s surface using satellite instruments. Different surfaces reflect energy differently, which can help us learn about vegetation, water, and land.",
      "One important safety rule: never look directly at the Sun with your naked eyes, binoculars, or an ordinary telescope. Specialised, properly designed solar viewing equipment is needed for safe direct observation.",
    ],
  },
  'the-moon': {
    audio: '/media/lessons/lesson-10.mp3',
    seconds: 68.7,
    transcript: [
      "The Moon is Earth’s natural satellite. It travels around Earth and is the most familiar object in our night sky after the stars.",
      "Unlike the Sun, the Moon does not produce its own visible light through nuclear fusion. We see it because sunlight reflects from its surface.",
      "As the Moon orbits Earth, the positions of the Sun, Earth, and Moon change relative to one another. This changes how much of the Moon’s sunlit half we can see from Earth. These changing appearances are called lunar phases.",
      "The main phases include the new Moon, first quarter, full Moon, and last quarter. The cycle repeats over approximately twenty-nine and a half days.",
      "Lunar phases are not the same as eclipses. A lunar eclipse occurs when Earth moves between the Sun and Moon and Earth’s shadow falls on the Moon. A solar eclipse occurs when the Moon passes between Earth and the Sun and blocks some or all of the Sun from our view.",
      "The Moon also plays an important role in ocean tides through its gravitational pull, together with the influence of the Sun.",
    ],
  },
  'planets': {
    audio: '/media/lessons/lesson-11.mp3',
    seconds: 80.7,
    transcript: [
      "Our solar system contains eight recognised planets that orbit the Sun.",
      "Starting closest to the Sun, they are Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune.",
      "The four inner planets, Mercury, Venus, Earth, and Mars, are rocky worlds. Beyond them are four giant planets. Jupiter and Saturn are gas giants, while Uranus and Neptune are commonly described as ice giants.",
      "Planets do not usually produce visible light the way stars do. We see many planets in the night sky because they reflect sunlight. Some planets can appear exceptionally bright, depending on their position relative to Earth and the Sun.",
      "The planets orbit the Sun at different distances and speeds. Earth takes about one year to complete an orbit. Other planets take different amounts of time.",
      "From Ghana, several planets can be observed with the naked eye at suitable times, provided the sky and viewing conditions are favourable. A sky map or astronomy application can help you identify where to look.",
      "Remember that the planets are worlds with very different environments. Earth is the only planet currently known to support life.",
    ],
  },
  'stars-and-the-night-sky-in-ghana': {
    audio: '/media/lessons/lesson-12.mp3',
    seconds: 66.3,
    transcript: [
      "On a clear night in Ghana, look up and you may see many points of light scattered across the sky.",
      "Most of those points are stars: enormous, distant objects that produce their own light and energy. Our Sun is also a star, but it appears much brighter because it is far closer to Earth than the other stars we see.",
      "The patterns formed by stars can help people identify familiar regions of the sky. Some patterns are called constellations. Different cultures have developed their own stories and traditions connected to the stars.",
      "The stars appear to move across the sky during the night. This apparent motion is mainly caused by Earth’s rotation.",
      "What you can see also depends on the season, your location, the weather, and how much artificial light surrounds you. Bright city lights make faint stars harder to see. Moving away from strong lights can reveal more of the night sky.",
      "You do not need an expensive telescope to begin. Start by observing the sky with your eyes, learning a few bright stars, and using a reliable sky map to guide your exploration.",
    ],
  },
  'listening-to-space-kuntunse': {
    audio: '/media/lessons/lesson-13.mp3',
    seconds: 80.9,
    transcript: [
      "When you imagine listening to space, you might picture the sound of a spacecraft moving past the stars.",
      "But space is mostly a vacuum, so ordinary sound cannot travel through it in the way it travels through air on Earth.",
      "Astronomers can still study the universe using radio waves. Radio waves are a form of electromagnetic radiation. Unlike ordinary sound, they can travel through the vacuum of space.",
      "Radio telescopes detect radio signals from objects and processes in the universe. Scientists then analyse these signals to investigate astronomical sources and learn more about the cosmos.",
      "Sometimes, researchers convert measurements into sound so people can listen to patterns in the data. This process is called sonification. The sound is a way of representing the data; it is not necessarily the original sound of the astronomical object.",
      "Ghana has an important connection to radio astronomy through the Ghana Radio Astronomy Observatory at Kuntunse, near Accra. The facility uses a large radio telescope to support astronomical research and related scientific activities.",
      "By studying radio signals, researchers can investigate parts of the universe that are difficult or impossible to study using visible light alone.",
    ],
  },
};

// Course 1 introduction (shown on the Course 1 page, before Lesson 1). It is not Lesson 1.
// The transcript is the supplied script word for word.
export const COURSE_INTRO_NARRATION: Record<string, LessonNarration> = {
  'earth-from-space': {
    audio: '/media/lessons/course-01-intro.mp3',
    seconds: 19.1,
    transcript: [
      "Welcome to LumosX. In this lesson, we will explore how satellites help us understand our planet. From observing forests and rivers to studying how our towns change over time, satellite data helps us discover things that may not be obvious from the ground. Let's begin our journey into space science.",
    ],
  },
};

export const getNarration = (lessonId: string) => LESSON_NARRATION[lessonId];
export const getCourseIntro = (courseId: string) => COURSE_INTRO_NARRATION[courseId];
