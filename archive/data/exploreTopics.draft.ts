import { ExploreTopic } from '../types';

export const EXPLORE_TOPICS: ExploreTopic[] = [
  {
    id: 'earth',
    title: 'Earth',
    tagline: 'Our dynamic living oasis viewed from the vantage point of orbit',
    overview: 'From 700 kilometers above, Earth is not a flat map of political borders. It is an interconnected system of atmospheric swirls, swirling ocean currents, evolving vegetation biomes, and human civilization illuminated against the darkness of deep space.',
    keyIdeas: [
      {
        title: 'Atmospheric Shield',
        description: 'Earth possesses a multi-layered atmosphere that thins out gradually into space and absorbs lethal solar ultraviolet radiation and moderates extreme diurnal temperature swings.',
        metric: '101.3',
        metricUnit: 'kPa surface pressure',
      },
      {
        title: 'Geomagnetic Dynamo',
        description: 'Circulation of molten iron and nickel in Earth’s outer core generates a dipole magnetic field extending tens of thousands of kilometers into space, deflecting the solar wind.',
        metric: '30-60',
        metricUnit: 'μT field strength',
      },
      {
        title: 'Biospheric Albedo',
        description: 'Earth reflects roughly 30% of incoming solar radiation back into space. Satellite radiometric sensors measure subtle shifts in this albedo to monitor polar ice and tropical forest cover.',
        metric: '0.306',
        metricUnit: 'Bond albedo',
      },
      {
        title: 'Hydrologic Circulation',
        description: 'Liquid water covers 71% of Earth’s surface. Continuous satellite radar altimetry tracks sea surface height variations to within a few centimetres.',
        metric: '1.386',
        metricUnit: 'Billion km³ water',
      },
    ],
    facts: [
      'From low Earth orbit, astronauts see 16 sunrises and sunsets every 24 hours while travelling at roughly 27,600 km/h.',
    ],
    relatedTopics: ['sun', 'moon', 'space-exploration'],
    courseId: 'earth-from-space',
  },
  {
    id: 'sun',
    title: 'The Sun',
    tagline: 'The thermonuclear furnace powering weather, life, and the heliosphere',
    overview: 'At the gravitational center of our solar system sits a G-type main-sequence star containing 99.86% of the solar system’s total mass. Every second, it fuses 600 million tons of hydrogen into helium, bathing the planets in electromagnetic radiation and charged particle streams.',
    keyIdeas: [
      {
        title: 'Thermonuclear Core',
        description: 'Temperatures in the core reach 15 million Kelvin with pressures 250 billion times greater than Earth’s atmosphere, sustaining continuous proton-proton nuclear fusion.',
        metric: '1.5 × 10⁷',
        metricUnit: 'Kelvin',
      },
      {
        title: 'The Solar Wind',
        description: 'A supersonic plasma stream of protons, electrons, and alpha particles continuously escapes the solar corona, travelling outward at speeds between 300 and 800 km/s.',
        metric: '450',
        metricUnit: 'km/s average velocity',
      },
      {
        title: '11-Year Solar Cycle',
        description: 'The Sun undergoes a periodic magnetic field polarity flip roughly every 11 years, driving sunspot frequencies, coronal mass ejections (CMEs), and geomagnetic storm intensity.',
        metric: 'About 11',
        metricUnit: 'Years cycle period',
      },
      {
        title: 'Photospheric Convection',
        description: 'Solar convection cells (granules) about 1,000 km across churn hot plasma to the surface, where it cools, darkens slightly, and sinks back down in cycles that last around ten minutes.',
        metric: '5,778',
        metricUnit: 'K surface temperature',
      },
    ],
    facts: [
      'Photons created by nuclear fusion inside the Sun take between 10,000 and 170,000 years to reach the surface due to continuous scattering, but only 8 minutes and 20 seconds to reach Earth.',
      'A single coronal mass ejection can blast billions of tons of magnetized plasma across the solar system at speeds exceeding 3,000 km/s.',
    ],
    relatedTopics: ['earth', 'solar-system', 'stars-universe'],
    courseId: 'sun-and-night-sky',
  },
  {
    id: 'moon',
    title: 'The Moon',
    tagline: 'Earth’s gravitational companion and humanity’s celestial stepping stone',
    overview: 'Orbits 384,400 km away, the Moon is locked in synchronous rotation, showing only one hemisphere to Earth. It stabilizes Earth’s axial tilt, drives ocean tides, and preserves an undisturbed geological record of the early solar system’s violent bombardment.',
    keyIdeas: [
      {
        title: 'Tidal Locking',
        description: 'Earth’s tidal friction has synchronized the Moon’s rotational period with its orbital period (27.3 days), meaning one lunar side perpetually faces away from terrestrial telescopes.',
        metric: '27.32',
        metricUnit: 'Days orbital period',
      },
      {
        title: 'Lunar Regolith & Maria',
        description: 'The dark patches (maria) are ancient basaltic lava plains formed 3 to 3.8 billion years ago, covered by pulverised rock dust and glassy impact spherules up to 15 meters deep.',
        metric: '3,474',
        metricUnit: 'km equatorial diameter',
      },
      {
        title: 'Surface Gravity',
        description: 'With only 16.6% of Earth’s surface gravity, escaping the Moon requires a delta-v of just 2.38 km/s, making it an ideal staging platform for deep-space missions.',
        metric: '1.62',
        metricUnit: 'm/s² surface gravity',
      },
      {
        title: 'Permanently Shadowed Craters',
        description: 'Deep polar impact craters like Shackleton never receive direct sunlight, preserving water ice at temperatures below -240°C.',
        metric: '< 40',
        metricUnit: 'Kelvin at south pole',
      },
    ],
    facts: [
      'The Moon is drifting away from Earth at a measured rate of 3.8 centimeters per year due to tidal energy transfer.',
    ],
    relatedTopics: ['earth', 'solar-system', 'space-exploration'],
    courseId: 'sun-and-night-sky',
  },
  {
    id: 'solar-system',
    title: 'The Solar System',
    tagline: 'Eight diverse worlds, dwarf planets, and millions of wandering remnants',
    overview: 'Formed 4.6 billion years ago from a collapsing interstellar molecular cloud, our planetary neighborhood spans billions of kilometers from the scorched canyons of Mercury to the frozen Kuiper Belt beyond Neptune.',
    keyIdeas: [
      {
        title: 'Terrestrial vs Gas Giants',
        description: 'The inner system contains four rocky terrestrial planets with high densities, while beyond the asteroid belt lie massive gas giants (Jupiter, Saturn) and ice giants (Uranus, Neptune).',
        metric: '8',
        metricUnit: 'Major planets',
      },
      {
        title: 'Keplerian Orbital Mechanics',
        description: 'All planets follow elliptical orbits around the common center of mass, sweeping out equal areas in equal times with orbital periods proportional to distance raised to the 3/2 power.',
        metric: '1.00',
        metricUnit: 'AU (149.6M km) Earth-Sun',
      },
      {
        title: 'The Kuiper Belt & Oort Cloud',
        description: 'Beyond Neptune lies a ring of icy bodies and comets spanning 30 to 50 AU, surrounded by the distant theoretical spherical Oort Cloud extending nearly a light-year out.',
      },
    ],
    facts: [
      'Olympus Mons on Mars is a shield volcano about two and a half times taller than Mount Everest.',
      'Saturn’s rings are tens of thousands of kilometres wide but in places only about ten metres thick.',
      'Venus has a runaway greenhouse atmosphere with surface pressures comparable to being 900 meters underwater on Earth and temperatures hot enough to melt lead (465°C).',
    ],
    relatedTopics: ['sun', 'earth', 'stars-universe'],
    courseId: 'sun-and-night-sky',
  },
  {
    id: 'stars-universe',
    title: 'Stars and the Universe',
    tagline: 'Where stars come from, what galaxies are, and how old the universe is',
    overview: 'From stellar nurseries where gravity condenses gas into glowing proto-stars to supermassive black holes anchoring 200-billion-star galaxies, the observable universe spans 93 billion light-years of expanding spacetime.',
    keyIdeas: [
      {
        title: 'Hertzsprung-Russell Diagram',
        description: 'Stars are classified by surface temperature and luminosity, tracking their evolutionary paths from the hydrogen-burning Main Sequence to red giants or white dwarfs.',
      },
      {
        title: 'Cosmic Nucleosynthesis',
        description: 'Most chemical elements in your body heavier than helium, such as the carbon in DNA, oxygen in water, and iron in blood, were forged inside dying stars and supernova explosions.',
      },
      {
        title: 'Cosmic Expansion & Hubble Law',
        description: 'Distant galaxies recede from us at velocities directly proportional to their distance, driven by an accelerating expansion fueled by dark energy.',
        metric: 'About 70',
        metricUnit: 'km/s/Mpc Hubble parameter',
      },
      {
        title: 'Radio Astronomy & Pulsars',
        description: 'Rapidly rotating neutron stars emit beams of radio waves like cosmic lighthouses. Large radio dishes, including the one at Kuntunse in Ghana, can detect these regular pulses.',
      },
    ],
    facts: [
      'When you look at the Andromeda Galaxy through a telescope, the light hitting your retina left that galaxy 2.5 million years ago, before modern Homo sapiens existed.',
      'The Ghana Radio Astronomy Observatory at Kuntunse is a radio telescope used for astronomy research.',
    ],
    relatedTopics: ['sun', 'solar-system', 'space-exploration'],
    courseId: 'sun-and-night-sky',
  },
  {
    id: 'space-exploration',
    title: 'Space Exploration',
    tagline: 'Rockets, rovers, orbital constellations, and humanity’s journey outward',
    overview: 'From Sputnik and the Apollo moon landings to reusable orbital rockets, interplanetary robotic rovers, and constellation satellites monitoring planetary climate, space exploration is humanity’s quest to expand scientific knowledge and safeguard our future.',
    keyIdeas: [
      {
        title: 'Tsiolkovsky Rocket Equation',
        description: 'Escaping Earth’s gravity requires extreme velocity changes (delta-v ~ 9.4 km/s to LEO). Because rockets must carry their own propellant, mass ratios scale exponentially.',
        metric: '9.4',
        metricUnit: 'km/s delta-v to LEO',
      },
      {
        title: 'CubeSats & SmallSats',
        description: 'Standardized modular satellites (1U = 10×10×10 cm, ~1.3 kg) have democratized space access, enabling universities in nations like Ghana to design and operate orbital payloads.',
        metric: '1U',
        metricUnit: '10cm × 10cm × 10cm',
      },
      {
        title: 'Deep Space Telemetry',
        description: 'Radio waves travelling at the speed of light take up to 22 minutes to travel between Earth and Mars, requiring robotic exploration rovers to operate autonomously.',
        metric: '3 × 10⁸',
        metricUnit: 'm/s speed of light',
      },
    ],
    facts: [
      'GhanaSat-1 was released from the International Space Station on 7 July 2017.',
      'GhanaSat-1 was built by Ghanaian engineers at All Nations University in Koforidua, with support from the Kyushu Institute of Technology in Japan.',
      'Modern satellites in Low Earth Orbit circle the globe every 90 minutes, passing from night to day every 45 minutes.',
    ],
    relatedTopics: ['earth', 'moon', 'stars-universe'],
    courseId: 'earth-from-space',
  },
];
