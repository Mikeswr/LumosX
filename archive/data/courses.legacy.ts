import { Course } from '../types';

export const COURSES: Course[] = [
  {
    id: 'earth-observation-101',
    title: 'Earth Observation 101',
    tagline: 'Learn how orbital sensors measure our changing planet and power environmental decisions',
    description: 'A comprehensive foundational course exploring remote sensing physics, satellite orbits, multispectral image analysis, and real-world environmental applications across Ghana and West Africa.',
    difficulty: 'Beginner',
    durationHours: 6,
    modulesCount: 8,
    modules: [
      {
        id: 'eo-m1',
        moduleNumber: 1,
        title: 'Our Planet From Space',
        description: 'Discover how orbital vantage points revolutionized human understanding of the biosphere, weather systems, and human settlements.',
        lessons: [
          {
            id: 'eo-m1-l1',
            title: 'The Blue Marble and the Overview Effect',
            summary: 'How viewing Earth from space transformed science and ecological management.',
            videoTitle: 'Earth from Orbit: An Ecological Vantage Point',
            videoUrl: 'https://www.youtube.com/embed/2aCOyOvOw5c',
            content: [
              'Earth observation (EO) refers to the gathering of information about planet Earth’s physical, chemical, and biological systems via remote sensing technologies—predominantly satellites, aircraft, and drones.',
              'Before orbital satellites existed, our understanding of weather, ocean currents, and deforestation was limited to sparse ground observations. Satellites allow us to observe the entire globe simultaneously, revisiting the same point on Earth at regular intervals.',
              'In Ghana, Earth observation is critical for monitoring coastal erosion along the Gulf of Guinea, tracking deforestation in the Ashanti and Western regions, and planning the rapid growth of urban centers like Accra and Kumasi.'
            ],
            interactiveType: 'orbit',
            keyConcepts: [
              'Synoptic View: The ability to view large geographic expanses at a single instant in time.',
              'Temporal Revisit: The frequency at which a satellite returns to photograph the exact same geographic footprint.',
              'Global Baseline: Establishing long-term photographic records to measure multi-decade environmental changes.'
            ],
            quickCheck: {
              id: 'eo-q1',
              question: 'What is the primary scientific advantage of satellite Earth observation compared to ground survey teams?',
              options: [
                'Satellites can take pictures through the center of the Earth',
                'Satellites provide continuous, synoptic coverage with consistent revisit intervals over vast regions',
                'Satellites only collect data when the weather is warm',
                'Satellites do not require electricity to operate'
              ],
              correctIndex: 1,
              explanation: 'Satellites provide consistent, repeated, synoptic coverage over entire continents, enabling scientists to track changes over years and decades without physical barriers.'
            },
            nextLessonId: 'eo-m2-l1'
          }
        ]
      },
      {
        id: 'eo-m2',
        moduleNumber: 2,
        title: 'What Is Remote Sensing?',
        description: 'Understand the fundamental physics of the electromagnetic spectrum, reflectance, and how sensors detect energy without physical contact.',
        lessons: [
          {
            id: 'eo-m2-l1',
            title: 'Electromagnetic Radiation and Spectral Signatures',
            summary: 'How different materials absorb and reflect light at distinct wavelengths.',
            videoTitle: 'Remote Sensing and the Electromagnetic Spectrum',
            videoUrl: 'https://www.youtube.com/embed/eXbN8fC9n4g',
            content: [
              'Remote sensing is the science of acquiring information about an object or phenomenon without making physical contact with it.',
              'The primary source of electromagnetic radiation for optical remote sensing is the Sun. When solar radiation strikes an object on Earth, energy is either reflected, absorbed, or transmitted.',
              'Every material on Earth has a distinct "spectral signature"—a unique pattern of reflectance across visible, near-infrared (NIR), and shortwave infrared (SWIR) wavelengths. For example, healthy green leaves strongly absorb red light (using chlorophyll) and intensely reflect near-infrared radiation.'
            ],
            interactiveType: 'spectral-bands',
            keyConcepts: [
              'Active vs Passive Sensors: Passive sensors measure reflected solar light or emitted thermal radiation; active sensors (like radar) emit their own pulses.',
              'Spectral Signature: The unique reflectance percentage curve across various electromagnetic wavelengths for a specific material.',
              'Near-Infrared (NIR): Light just beyond human vision (700-1100 nm) that reveals plant cellular structure and water stress.'
            ],
            quickCheck: {
              id: 'eo-q2',
              question: 'Why does healthy green vegetation reflect high amounts of Near-Infrared (NIR) light?',
              options: [
                'Because the spongy mesophyll cell structure of healthy leaves scatters NIR light to prevent overheating',
                'Because leaves are painted with artificial reflective chemicals',
                'Because the human eye sees NIR light as dark purple',
                'Because soil beneath the leaves absorbs all other light'
              ],
              correctIndex: 0,
              explanation: 'Healthy plant cell walls (spongy mesophyll) scatter Near-Infrared radiation very strongly. When plants experience drought or disease, this cellular structure collapses, reducing NIR reflection.'
            },
            nextLessonId: 'eo-m3-l1'
          }
        ]
      },
      {
        id: 'eo-m3',
        moduleNumber: 3,
        title: 'How Satellites See Earth',
        description: 'Explore sensor types, multispectral vs hyperspectral imaging, spatial resolution, and radiometry.',
        lessons: [
          {
            id: 'eo-m3-l1',
            title: 'Spatial, Spectral, and Radiometric Resolutions',
            summary: 'The four resolutions that define every Earth observation satellite mission.',
            content: [
              'To choose the right satellite dataset, scientists evaluate the four core resolutions: Spatial, Spectral, Radiometric, and Temporal.',
              'Spatial resolution describes the pixel size on the ground (e.g., Landsat has 30m pixels, Sentinel-2 has 10m pixels, while commercial satellites like PlanetScope offer 3m).',
              'Radiometric resolution describes the sensor’s sensitivity to subtle brightness differences (e.g., 8-bit captures 256 brightness levels, while 12-bit captures 4,096 levels).'
            ],
            interactiveType: 'spectral-bands',
            keyConcepts: [
              'Spatial Resolution: Ground sample distance represented by a single image pixel.',
              'Spectral Resolution: The number and bandwidth of individual wavelength channels recorded.',
              'Temporal Resolution: Time elapsed between successive passes over the exact same location.'
            ],
            quickCheck: {
              id: 'eo-q3',
              question: 'If a satellite image has a 10-meter spatial resolution (like Sentinel-2), what does one pixel represent?',
              options: [
                'A 100 meter by 100 meter square on the ground',
                'A 10 meter by 10 meter area on the ground (100 square meters)',
                'A 10 kilometer country boundary',
                'A single leaf on a tree'
              ],
              correctIndex: 1,
              explanation: 'Spatial resolution indicates the dimensions of the ground area sampled by each pixel. A 10m resolution pixel represents a 10m × 10m area on Earth.'
            },
            nextLessonId: 'eo-m4-l1'
          }
        ]
      },
      {
        id: 'eo-m4',
        moduleNumber: 4,
        title: 'Satellite Orbits',
        description: 'Low Earth Orbit (LEO), Sun-Synchronous, Geostationary, and how orbital mechanics dictate coverage.',
        lessons: [
          {
            id: 'eo-m4-l1',
            title: 'Orbital Mechanics for Earth Observers',
            summary: 'Why most Earth observation satellites use Sun-Synchronous polar orbits.',
            content: [
              'Satellites do not hover in one place unless they are positioned in Geostationary Orbit (GEO) 35,786 km directly above the equator. GEO satellites match Earth’s rotation, providing continuous weather updates over a fixed hemisphere.',
              'Most Earth observation satellites (such as Landsat and Sentinel) operate in Low Earth Orbit (LEO) between 500 km and 800 km in Sun-Synchronous Orbits (SSO).',
              'A Sun-Synchronous Orbit crosses the equator at the exact same local solar time on every pass (typically around 10:30 AM). This ensures uniform shadow lengths and solar angles, allowing accurate multi-year comparisons of land change.'
            ],
            interactiveType: 'orbit',
            keyConcepts: [
              'Sun-Synchronous Orbit (SSO): Polar orbit that maintains a constant angle between the orbital plane and the Sun.',
              'Geostationary Orbit (GEO): 35,786 km orbit where orbital period equals Earth’s rotation (23h 56m).',
              'Ground Track: The projected path of a satellite over Earth’s rotating surface.'
            ],
            quickCheck: {
              id: 'eo-q4',
              question: 'Why do environmental satellites prefer passing over locations at the same local solar time (e.g. 10:30 AM)?',
              options: [
                'Because the satellites need to rest at night',
                'To minimize changes in shadow angles and solar illumination between different dates, allowing fair comparisons',
                'Because lunch break happens at noon',
                'To avoid running into the moon'
              ],
              correctIndex: 1,
              explanation: 'Constant sun angles ensure that shadows and lighting conditions remain consistent, making automated change detection and vegetation analysis accurate over time.'
            },
            nextLessonId: 'eo-m5-l1'
          }
        ]
      },
      {
        id: 'eo-m5',
        moduleNumber: 5,
        title: 'Understanding Satellite Images',
        description: 'True-color vs false-color band combinations, radiometric indices, and visual interpretation.',
        lessons: [
          {
            id: 'eo-m5-l1',
            title: 'Band Combinations and False Color Composites',
            summary: 'How assigning non-visible wavelengths to Red, Green, and Blue displays invisible patterns.',
            content: [
              'Computer monitors create images using three color channels: Red, Green, and Blue (RGB).',
              'A True Color composite assigns Red sensor data to the Red channel, Green to Green, and Blue to Blue. This produces an image similar to human vision.',
              'A Standard False Color composite (NIR, Red, Green) assigns Near-Infrared to the Red channel. In this view, healthy vegetation glows bright crimson red, clear deep water appears black, and urban concrete appears cyan or light grey.'
            ],
            interactiveType: 'spectral-bands',
            keyConcepts: [
              'True Color Composite: 4-3-2 band combination matching human ocular perception.',
              'False Color Infrared: NIR assigned to Red channel to dramatically emphasize vegetation health and moisture.',
              'SWIR Composite: Shortwave Infrared bands highlighting burnt scars, bare soil, and mineral deposits.'
            ],
            quickCheck: {
              id: 'eo-q5',
              question: 'In a standard False Color Infrared satellite image (NIR mapped to Red), what color does healthy dense forest appear?',
              options: [
                'Bright vibrant red / crimson',
                'Dark navy blue',
                'Golden yellow',
                'Pure white'
              ],
              correctIndex: 0,
              explanation: 'Because healthy plants reflect immense amounts of Near-Infrared energy, mapping NIR to the monitor’s Red display channel causes dense vegetation to appear bright red.'
            },
            nextLessonId: 'eo-m6-l1'
          }
        ]
      },
      {
        id: 'eo-m6',
        moduleNumber: 6,
        title: 'Reading Changes on Earth',
        description: 'Multi-temporal analysis, NDVI calculation, change detection, and urban expansion.',
        lessons: [
          {
            id: 'eo-m6-l1',
            title: 'Calculating the Normalized Difference Vegetation Index (NDVI)',
            summary: 'The mathematical equation that quantifies plant vitality from space.',
            content: [
              'The Normalized Difference Vegetation Index (NDVI) is the most widely used index in remote sensing:',
              'NDVI = (NIR - Red) / (NIR + Red)',
              'NDVI values range from -1.0 to +1.0. Water typically produces negative values (-0.5 to -0.1). Bare soil and sand produce low values near zero (0.05 to 0.15). Healthy crops and tropical rainforests produce high values between 0.60 and 0.90.'
            ],
            interactiveType: 'ndvi-calculator',
            keyConcepts: [
              'NDVI Formula: (NIR - Red) / (NIR + Red).',
              'Threshold Classification: Grouping continuous NDVI values into discrete land-cover classes.',
              'Multi-Temporal Difference: Subtracting older NDVI maps from newer ones to quantify deforestation or regrowth.'
            ],
            quickCheck: {
              id: 'eo-q6',
              question: 'If a pixel over Pokuase has an NIR reflectance of 0.50 and Red reflectance of 0.10, what is its NDVI?',
              options: [
                '0.67 (Indicating healthy vegetation)',
                '-0.40 (Indicating deep water)',
                '0.05 (Indicating bare paved road)',
                '1.50 (Exceeds mathematical limits)'
              ],
              correctIndex: 0,
              explanation: 'NDVI = (0.50 - 0.10) / (0.50 + 0.10) = 0.40 / 0.60 = 0.67, which indicates vigorous green vegetation.'
            },
            nextLessonId: 'eo-m7-l1'
          }
        ]
      },
      {
        id: 'eo-m7',
        moduleNumber: 7,
        title: 'Applications of Earth Observation',
        description: 'Agriculture yield estimation, flood monitoring, disaster management, and forestry protection.',
        lessons: [
          {
            id: 'eo-m7-l1',
            title: 'Space Data for Sustainable Development Goals',
            summary: 'How Earth observation directly informs water security, food supply, and climate resilience.',
            content: [
              'Earth observation data directly supports the UN Sustainable Development Goals (SDGs), especially Zero Hunger (SDG 2), Clean Water (SDG 6), and Climate Action (SDG 13).',
              'Synthetic Aperture Radar (SAR) satellites like Sentinel-1 emit radar microwaves that penetrate thick tropical cloud cover. In West Africa during the rainy season, SAR enables real-time flood monitoring even through heavy thunderstorms.',
              'Thermal infrared sensors track surface water evaporation from reservoirs like Lake Volta, assisting engineers in predicting hydroelectric power output at the Akosombo Dam.'
            ],
            interactiveType: 'ndvi-calculator',
            keyConcepts: [
              'SAR Radar: Active microwave sensing capable of seeing through clouds and darkness.',
              'Crop Phenology: Tracking seasonal vegetative cycles to forecast grain harvests.',
              'Hydrologic Inundation Mapping: Delineating flood extents to coordinate disaster evacuation.'
            ],
            quickCheck: {
              id: 'eo-q7',
              question: 'Why is Synthetic Aperture Radar (SAR) vital for disaster response during Ghana’s rainy season?',
              options: [
                'Because SAR microwaves can penetrate dense cloud cover and operate day or night',
                'Because optical cameras break when they get wet in orbit',
                'Because SAR can stop rain from falling',
                'Because radar signals only work near the ocean'
              ],
              correctIndex: 0,
              explanation: 'Radar waves operate at centimeter wavelengths, passing straight through cloud droplets and atmospheric moisture, delivering reliable flood extent maps when optical cameras are blinded by clouds.'
            },
            nextLessonId: 'eo-m8-l1'
          }
        ]
      },
      {
        id: 'eo-m8',
        moduleNumber: 8,
        title: 'Earth Observation in Ghana',
        description: 'Local applications: combating illegal mining (galamsey), coastal erosion in Ada/Keta, and urban planning.',
        lessons: [
          {
            id: 'eo-m8-l1',
            title: 'Monitoring Ghana’s Ecosystems from Orbit',
            summary: 'How Ghanaian scientists and institutions use satellite data to protect natural resources.',
            content: [
              'In Ghana, the Ghana Space Science and Technology Institute (GSSTI) collaborates with international partners to monitor critical national challenges using Earth observation.',
              'Water Turbidity Tracking: Illegal alluvial mining (galamsey) along rivers like the Pra, Ankobra, and Birim causes massive increases in suspended sediment. High-reflectance yellowish mud shows up immediately in satellite bands.',
              'Coastal Erosion: Along the Keta and Ada coastlines, tidal surges erode several meters of shoreline annually. Historical satellite archives from 1984 to 2025 allow geomorphologists to measure shoreline retreat and design protective sea defense walls.'
            ],
            interactiveType: 'spectral-bands',
            keyConcepts: [
              'GSSTI: Ghana Space Science and Technology Institute, leading national space and remote sensing initiatives.',
              'Water Turbidity Index: Identifying suspended solids in inland waterways from spectral changes.',
              'Shoreline Delineation: Long-term coastal change measurement using multi-decadal Landsat archives.'
            ],
            quickCheck: {
              id: 'eo-q8',
              question: 'How do satellite spectral indices help authorities identify river sections affected by illegal mining?',
              options: [
                'Clear water absorbs light, whereas sediment-choked muddy water reflects high amounts of red and NIR wavelengths',
                'Satellites take photographs of miners’ identification badges from orbit',
                'By detecting the sound of excavators',
                'By testing water temperature through chemical sniffers'
              ],
              correctIndex: 0,
              explanation: 'Clear water is a strong absorber of light, appearing dark. Heavy sediment from mining dramatically increases water turbidity, reflecting bright visible and NIR light that sensors detect with high accuracy.'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'astronomy-101',
    title: 'Astronomy 101',
    tagline: 'From celestial coordinate systems to exoplanets and cosmic evolution',
    description: 'Explore the fundamental architecture of the cosmos, star formation, radio astronomy at Kuntunse, black hole thermodynamics, and the expanding universe.',
    difficulty: 'Beginner',
    durationHours: 6,
    modulesCount: 8,
    modules: [
      {
        id: 'astro-m1',
        moduleNumber: 1,
        title: 'Our Place in the Universe',
        description: 'Scale of the cosmos, cosmic distance ladders, and equatorial celestial coordinates.',
        lessons: [
          {
            id: 'astro-m1-l1',
            title: 'Cosmic Scales and the Local Universe',
            summary: 'Mapping our address from Earth to the Laniakea Supercluster.',
            content: [
              'Humanity resides on Earth, the third planet from our Sun in the Orion Arm of the Milky Way galaxy. The Milky Way is a barred spiral galaxy containing over 100 billion stars.',
              'Because light travels at a finite velocity of 299,792 km/s, looking deeper into space means looking further back in time.'
            ],
            interactiveType: 'orbit',
            keyConcepts: [
              'Light-Year: The distance light travels in one Julian year (~9.46 trillion km).',
              'Astronomical Unit (AU): Mean distance from Earth to Sun (~149.6 million km).'
            ],
            quickCheck: {
              id: 'astro-q1',
              question: 'What is an Astronomical Unit (AU)?',
              options: [
                'The distance from Earth to the Sun',
                'The distance to the nearest galaxy',
                'The time it takes for Jupiter to orbit once',
                'The diameter of the Moon'
              ],
              correctIndex: 0,
              explanation: 'One Astronomical Unit (1 AU) is defined as approximately 149.6 million kilometers—the mean distance between the Earth and the Sun.'
            }
          }
        ]
      },
      {
        id: 'astro-m2',
        moduleNumber: 2,
        title: 'The Solar System',
        description: 'Comparative planetology, orbital dynamics, and Kuiper belt objects.',
        lessons: [
          {
            id: 'astro-m2-l1',
            title: 'The Architecture of the Planetary System',
            summary: 'Formation of rocky worlds, gas giants, and orbital resonances.',
            content: [
              'The solar system formed 4.6 billion years ago from the gravitational collapse of a giant interstellar molecular cloud.',
              'The inner planets (Mercury, Venus, Earth, Mars) are rocky and dense, while the outer planets (Jupiter, Saturn, Uranus, Neptune) contain predominantly hydrogen, helium, and volatile ices.'
            ],
            interactiveType: 'orbit',
            keyConcepts: ['Frost Line: The orbital boundary beyond which hydrogen compounds condense into solid ice.', 'Resonances: Gravitational synchronization between orbiting bodies.'],
            quickCheck: {
              id: 'astro-q2',
              question: 'Which boundary in the early solar nebula allowed gas giants to accumulate large icy cores?',
              options: ['The Frost Line (Snow Line)', 'The Kuiper Cliff', 'The Van Allen Belt', 'The Solar Corona'],
              correctIndex: 0,
              explanation: 'Beyond the frost line (roughly 3 to 5 AU), temperatures were low enough for volatile compounds like water, ammonia, and methane to freeze, providing massive solid cores.'
            }
          }
        ]
      },
      {
        id: 'astro-m3',
        moduleNumber: 3,
        title: 'The Sun',
        description: 'Stellar physics, nuclear fusion, radiative and convective zones, and solar magnetism.',
        lessons: [
          {
            id: 'astro-m3-l1',
            title: 'The Anatomy of our Star',
            summary: 'How proton-proton fusion in the core sustains solar hydrostatic equilibrium.',
            content: [
              'The Sun is in hydrostatic equilibrium, where inward gravitational pull is precisely balanced by outward thermal and radiation pressure from nuclear fusion in its core.',
              'At 15 million Kelvin, hydrogen nuclei overcome electrostatic repulsion through quantum tunneling to fuse into helium, releasing energy described by Einstein’s equation E = mc².'
            ],
            interactiveType: 'spectral-bands',
            keyConcepts: ['Hydrostatic Equilibrium: The balance between gravity and outward radiation pressure.', 'Proton-Proton Chain: The primary fusion reaction powering main-sequence stars.'],
            quickCheck: {
              id: 'astro-q3',
              question: 'What keeps the Sun from collapsing under its immense gravitational force?',
              options: ['Outward thermal and radiation pressure produced by nuclear fusion in its core', 'A solid iron crust', 'Electromagnetic repulsion from Jupiter', 'Solar wind friction'],
              correctIndex: 0,
              explanation: 'Hydrostatic equilibrium maintains stellar stability: inward gravitational compression is balanced by outward thermal and radiation pressure generated by core fusion.'
            }
          }
        ]
      },
      {
        id: 'astro-m4',
        moduleNumber: 4,
        title: 'Stars',
        description: 'Stellar evolution, the Hertzsprung-Russell diagram, supernovae, and neutron stars.',
        lessons: [
          {
            id: 'astro-m4-l1',
            title: 'The Life Cycles of Stars',
            summary: 'From protostars to white dwarfs, neutron stars, and stellar-mass black holes.',
            content: [
              'A star’s initial mass determines its entire evolutionary destiny.',
              'Stars like our Sun swell into red giants before gently expelling their outer envelopes as planetary nebulae, leaving behind a dense carbon-oxygen white dwarf.',
              'Massive stars greater than 8 solar masses end their lives in catastrophic core-collapse supernova explosions, leaving behind neutron stars or black holes.'
            ],
            interactiveType: 'spectral-bands',
            keyConcepts: ['Hertzsprung-Russell Diagram: Plot of stellar luminosity versus surface temperature.', 'Chandrasekhar Limit: 1.44 solar masses—the maximum mass of a stable white dwarf.'],
            quickCheck: {
              id: 'astro-q4',
              question: 'What is the Chandrasekhar limit?',
              options: ['The maximum mass of a white dwarf (~1.44 solar masses) before electron degeneracy pressure fails', 'The distance to the closest star', 'The speed of light in deep space', 'The temperature of a sunspot'],
              correctIndex: 0,
              explanation: 'Subrahmanyan Chandrasekhar calculated that above ~1.44 solar masses, electron degeneracy pressure cannot prevent gravitational collapse, triggering a supernova.'
            }
          }
        ]
      },
      {
        id: 'astro-m5',
        moduleNumber: 5,
        title: 'Galaxies',
        description: 'Spiral, elliptical, and irregular galaxies; galactic collisions; and dark matter halos.',
        lessons: [
          {
            id: 'astro-m5-l1',
            title: 'Galactic Morphology and Dark Matter',
            summary: 'How galaxy rotation curves proved the presence of unseen dark matter halos.',
            content: [
              'Vera Rubin’s measurements of spiral galaxy rotation curves revealed that outer stars orbit at the same speed as inner stars, defying Newtonian expectations based solely on visible matter.',
              'This provided conclusive evidence that galaxies are embedded in massive spherical halos of non-baryonic dark matter.'
            ],
            interactiveType: 'orbit',
            keyConcepts: ['Flat Rotation Curves: Proof that unseen mass dominates galaxy perimeters.', 'Hubble Tuning Fork: Classification scheme for spiral, lenticular, and elliptical galaxies.'],
            quickCheck: {
              id: 'astro-q5',
              question: 'What observation led astronomer Vera Rubin to conclude that galaxies are surrounded by dark matter halos?',
              options: ['Outer stars in spiral galaxies orbit just as fast as inner stars rather than slowing down', 'Stars at the edge fall into the center', 'Galaxies stop spinning after 1 billion years', 'Galaxies glow red at night'],
              correctIndex: 0,
              explanation: 'Newtonian gravity predicts outer stars should travel slower (like outer planets in our solar system). Flat rotation curves showed massive unseen matter throughout the outer disk.'
            }
          }
        ]
      },
      {
        id: 'astro-m6',
        moduleNumber: 6,
        title: 'Black Holes',
        description: 'Event horizons, singularity physics, gravitational lensing, and supermassive black holes.',
        lessons: [
          {
            id: 'astro-m6-l1',
            title: 'General Relativity and the Event Horizon',
            summary: 'Spacetime curvature so severe that not even light can escape.',
            content: [
              'Albert Einstein’s General Relativity showed that mass curves spacetime.',
              'A black hole forms when mass is compressed inside its Schwarzschild radius. The boundary where escape velocity equals the speed of light is called the event horizon.'
            ],
            interactiveType: 'orbit',
            keyConcepts: ['Event Horizon: The point of no return where escape velocity equals c.', 'Schwarzschild Radius: Rs = 2GM/c².'],
            quickCheck: {
              id: 'astro-q6',
              question: 'What is the Schwarzschild radius of a black hole?',
              options: ['The radius of the event horizon where escape velocity equals the speed of light', 'The distance to its nearest orbiting star', 'The width of the accretion disk', 'The radius of the event horizon multiplied by zero'],
              correctIndex: 0,
              explanation: 'The Schwarzschild radius defines the physical size of the event horizon for a non-rotating spherically symmetric black hole.'
            }
          }
        ]
      },
      {
        id: 'astro-m7',
        moduleNumber: 7,
        title: 'Exoplanets',
        description: 'Transit photometry, radial velocity Doppler shifts, habitable zones, and atmospheric spectroscopy.',
        lessons: [
          {
            id: 'astro-m7-l1',
            title: 'Detecting Alien Worlds Across the Stars',
            summary: 'How space telescopes detect minute brightness dips when planets transit distant stars.',
            content: [
              'Over 5,500 exoplanets have been confirmed orbiting stars outside our solar system.',
              'The Transit Method measures tiny periodic dips in stellar brightness as a planet passes in front of its parent star. By measuring the transit depth, astronomers calculate the planet’s radius.'
            ],
            interactiveType: 'exoplanet-transit',
            keyConcepts: ['Transit Depth: (Radius of planet / Radius of star)²', 'Habitable Zone: The orbital range where liquid water can persist on a planet’s surface.'],
            quickCheck: {
              id: 'astro-q7',
              question: 'If a planet blocks 1% of a star’s light during a transit, what does this tell astronomers?',
              options: ['The cross-sectional area of the planet is 1% of the star’s cross-sectional area', 'The planet is made of pure coal', 'The star is about to explode', 'The planet is 100 degrees Celsius'],
              correctIndex: 0,
              explanation: 'Transit depth directly measures the ratio of the planet’s circular cross-sectional area to that of the parent star: ΔF/F = (Rp/Rs)².'
            }
          }
        ]
      },
      {
        id: 'astro-m8',
        moduleNumber: 8,
        title: 'The Expanding Universe',
        description: 'The Big Bang, Cosmic Microwave Background radiation, cosmological redshift, and dark energy.',
        lessons: [
          {
            id: 'astro-m8-l1',
            title: 'The Cosmic Horizon and Dark Energy',
            summary: 'How observations of Type Ia supernovae revealed the accelerating expansion of the universe.',
            content: [
              'Edwin Hubble discovered that spectral absorption lines from distant galaxies are shifted toward longer (redder) wavelengths, proportional to distance.',
              'In 1998, measurements of distant Type Ia supernovae revealed that cosmic expansion is not slowing down—it is accelerating, driven by dark energy, which constitutes 68% of the universe.'
            ],
            interactiveType: 'spectral-bands',
            keyConcepts: ['Cosmological Redshift: Stretching of photon wavelengths by expanding spacetime.', 'Cosmic Microwave Background (CMB): Thermal remnant radiation from 380,000 years after the Big Bang.'],
            quickCheck: {
              id: 'astro-q8',
              question: 'What unexpected discovery was made in 1998 using distant Type Ia supernovae as standard candles?',
              options: ['The expansion rate of the universe is accelerating rather than slowing down', 'The universe is shrinking', 'All galaxies are moving toward Earth', 'Black holes are made of light'],
              correctIndex: 0,
              explanation: 'Observations of distant supernovae revealed that the universe began accelerating in its expansion roughly 5 billion years ago, driven by dark energy.'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'space-weather-101',
    title: 'Space Weather 101',
    tagline: 'Solar physics, magnetospheric storms, auroral dynamics, and technological impacts',
    description: 'Understand how solar flares, coronal mass ejections, and the solar wind interact with Earth’s magnetic field, impacting satellites, power grids, and radio communication.',
    difficulty: 'Intermediate',
    durationHours: 5,
    modulesCount: 8,
    modules: [
      {
        id: 'sw-m1',
        moduleNumber: 1,
        title: 'The Sun as a Variable Star',
        description: 'Solar activity, magnetic flux tubes, and solar corona thermodynamics.',
        lessons: [
          {
            id: 'sw-m1-l1',
            title: 'Dynamic Magnetic Architecture of the Sun',
            summary: 'Differential rotation and the twisting of solar magnetic field lines.',
            content: ['The Sun does not rotate as a rigid body. Its equator completes a rotation in ~25 days, while polar regions take ~35 days. This differential rotation twists and tangles magnetic field lines over time.'],
            interactiveType: 'solar-wind',
            keyConcepts: ['Differential Rotation: Faster equatorial rotation stretching magnetic field lines.', 'Corona: The outer solar atmosphere heated to over 1,000,000 K.'],
            quickCheck: {
              id: 'sw-q1',
              question: 'Why does the Sun experience magnetic tangling and cyclical activity?',
              options: ['Differential rotation causes the equator to rotate faster than the poles, winding up the magnetic field', 'Because planets pull it in different directions', 'Because nuclear fusion stops at night', 'Because iron rusts in the core'],
              correctIndex: 0,
              explanation: 'Differential rotation stretches and twists solar magnetic flux lines, storing massive magnetic energy that periodically breaks through the surface.'
            }
          }
        ]
      },
      {
        id: 'sw-m2',
        moduleNumber: 2,
        title: 'Solar Radiation',
        description: 'Total Solar Irradiance (TSI), solar spectra, ultraviolet and X-ray emission peaks.',
        lessons: [
          {
            id: 'sw-m2-l1',
            title: 'Measuring Electromagnetic Irradiance',
            summary: 'How solar irradiance variations affect upper atmospheric heating.',
            content: ['Total Solar Irradiance (TSI) at the top of Earth’s atmosphere averages ~1,361 W/m². During solar maximum, high-energy UV and X-ray outputs fluctuate by factors of hundreds.'],
            interactiveType: 'solar-wind',
            keyConcepts: ['Solar Constant: 1,361 W/m² top-of-atmosphere solar flux.', 'EUV Absorption: Solar extreme UV heating the terrestrial thermosphere.'],
            quickCheck: {
              id: 'sw-q2',
              question: 'Which portion of the solar spectrum fluctuates most violently during active solar flares?',
              options: ['Extreme Ultraviolet (EUV) and X-rays', 'Visible green light', 'Infrared heat', 'Microwaves'],
              correctIndex: 0,
              explanation: 'While visible light output varies by less than 0.1%, high-energy X-ray and EUV emissions can surge by several orders of magnitude during flare eruptions.'
            }
          }
        ]
      },
      {
        id: 'sw-m3',
        moduleNumber: 3,
        title: 'Sunspots',
        description: 'Magnetic origins of sunspots, umbra and penumbra, and the Schwabe 11-year cycle.',
        lessons: [
          {
            id: 'sw-m3-l1',
            title: 'Sunspot Anatomy and Hale’s Polarity Law',
            summary: 'Intense magnetic fields suppressing convection to create cooler, darker spots.',
            content: ['Sunspots are temporary phenomena in the Sun’s photosphere where intense magnetic fields (thousands of Gauss) inhibit convection, making them cooler (~3,800 K) than the surrounding surface (~5,800 K).'],
            interactiveType: 'solar-wind',
            keyConcepts: ['Umbra: The darkest, coolest central magnetic core of a sunspot.', 'Penumbra: The lighter filamentary perimeter of a sunspot.'],
            quickCheck: {
              id: 'sw-q3',
              question: 'Why do sunspots appear darker than the surrounding photosphere?',
              options: ['They are thousands of degrees cooler because strong magnetic fields suppress hot plasma convection', 'They are giant holes leading into empty space', 'They are shadowed by the moon', 'They are covered in carbon soot'],
              correctIndex: 0,
              explanation: 'Intense localized magnetic fields act like brakes on plasma convection, cooling the area by ~2,000 K. By contrast with the incandescent photosphere, they appear dark.'
            }
          }
        ]
      },
      {
        id: 'sw-m4',
        moduleNumber: 4,
        title: 'Solar Flares',
        description: 'Magnetic reconnection, flare classifications (A, B, C, M, X), and radio blackouts.',
        lessons: [
          {
            id: 'sw-m4-l1',
            title: 'Magnetic Reconnection and High-Energy Flares',
            summary: 'Sudden conversion of stored magnetic tension into billions of megatons of explosive energy.',
            content: ['When opposing magnetic field lines snap and reconnect, trillions of joules of magnetic energy are instantly converted into kinetic energy and radiation, producing a solar flare in minutes.'],
            interactiveType: 'solar-wind',
            keyConcepts: ['X-Class Flares: The most powerful solar flares capable of worldwide radio blackouts.', 'GOES Scale: Logarithmic classification based on 0.1-0.8 nm peak X-ray flux.'],
            quickCheck: {
              id: 'sw-q4',
              question: 'How fast do the electromagnetic waves from a solar flare reach Earth?',
              options: ['In approximately 8 minutes and 20 seconds (at the speed of light)', 'In 3 to 4 days', 'In 24 hours', 'Instantly with zero time delay'],
              correctIndex: 0,
              explanation: 'Because flares emit electromagnetic radiation (X-rays and radio waves), their signals travel at the speed of light, reaching Earth in ~8.3 minutes.'
            }
          }
        ]
      },
      {
        id: 'sw-m5',
        moduleNumber: 5,
        title: 'Solar Wind',
        description: 'Fast and slow solar wind streams, coronal holes, and the interplanetary magnetic field (IMF).',
        lessons: [
          {
            id: 'sw-m5-l1',
            title: 'The Supersonic Heliospheric Plasma Stream',
            summary: 'Continuous outflow of ionized gas permeating the entire solar system.',
            content: ['The solar wind is a continuous stream of ionized plasma (protons and electrons) dragging the Sun’s magnetic field outward into the solar system, forming the Parker Spiral.'],
            interactiveType: 'solar-wind',
            keyConcepts: ['Parker Spiral: The Archimedean spiral shape assumed by the IMF due to solar rotation.', 'Coronal Holes: Unipolar open magnetic field regions generating high-speed solar wind (~800 km/s).'],
            quickCheck: {
              id: 'sw-q5',
              question: 'What causes the Interplanetary Magnetic Field (IMF) to take on a spiral pattern across the solar system?',
              options: ['The Sun’s rotation while continuously releasing plasma (like a spinning garden sprinkler)', 'Gravitational pull of Saturn', 'Magnetic collisions with asteroids', 'Earth’s ocean currents'],
              correctIndex: 0,
              explanation: 'As the Sun spins, magnetic field lines anchored to its surface are wound into an Archimedean spiral known as the Parker Spiral.'
            }
          }
        ]
      },
      {
        id: 'sw-m6',
        moduleNumber: 6,
        title: 'Earth\'s Magnetic Field',
        description: 'The magnetosphere, bow shock, magnetopause, and Van Allen radiation belts.',
        lessons: [
          {
            id: 'sw-m6-l1',
            title: 'Earth’s Geomagnetic Shield',
            summary: 'Deflecting lethal cosmic rays and retaining our life-sustaining atmosphere.',
            content: ['Earth’s molten metallic core acts as a geodynamo, generating a protective magnetic bubble. The solar wind compresses this bubble on the day side to ~10 Earth radii and stretches it on the night side into a magnetotail.'],
            interactiveType: 'solar-wind',
            keyConcepts: ['Bow Shock: Supersonic shockwave formed where solar wind first impacts Earth’s magnetic field.', 'Van Allen Belts: Toroidal zones of trapped high-energy protons and electrons.'],
            quickCheck: {
              id: 'sw-q6',
              question: 'What would happen to Earth’s atmosphere over millions of years without its geomagnetic field?',
              options: ['Solar wind plasma would strip away the upper atmosphere, as occurred on Mars', 'The atmosphere would turn into solid ice', 'Gravity would immediately cease', 'Clouds would spin backwards'],
              correctIndex: 0,
              explanation: 'Without a magnetic dynamo, solar wind sputtering strips light atmospheric gases into space over geological time—the exact fate suffered by Mars after its internal core dynamo died.'
            }
          }
        ]
      },
      {
        id: 'sw-m7',
        moduleNumber: 7,
        title: 'Auroras',
        description: 'Atmospheric excitation of oxygen and nitrogen atoms, auroral ovals, and geomagnetic storms.',
        lessons: [
          {
            id: 'sw-m7-l1',
            title: 'The Physics of the Northern and Southern Lights',
            summary: 'Collisions between precipitating magnetospheric particles and atmospheric gases.',
            content: ['When solar particles are channeled down magnetic field lines into polar regions, they collide with atmospheric atoms. Excited oxygen at ~100 km emits bright 557.7 nm green light, while atomic nitrogen emits deep crimson and violet hues.'],
            interactiveType: 'solar-wind',
            keyConcepts: ['Green Auroral Line: 557.7 nm forbidden transition emission from excited atomic oxygen.', 'Auroral Oval: Annular rings around the geomagnetic poles where particle precipitation occurs.'],
            quickCheck: {
              id: 'sw-q7',
              question: 'Which atmospheric element produces the characteristic green glow seen in auroras?',
              options: ['Excited atomic oxygen at altitudes between 100 and 150 kilometers', 'Pure carbon monoxide', 'Helium gas', 'Water droplets'],
              correctIndex: 0,
              explanation: 'Atomic oxygen in the upper atmosphere, when de-excited after collisions with energetic magnetospheric electrons, radiates monochromatic green photons at 557.7 nanometers.'
            }
          }
        ]
      },
      {
        id: 'sw-m8',
        moduleNumber: 8,
        title: 'Space Weather and Its Effects',
        description: 'Geomagnetically induced currents (GICs) in electrical grids, satellite anomalies, and GPS scintillation.',
        lessons: [
          {
            id: 'sw-m8-l1',
            title: 'Impacts on Modern Technological Infrastructure',
            summary: 'How geomagnetic storms induce dangerous electric currents in transformers and pipelines.',
            content: ['Severe geomagnetic storms (like the 1859 Carrington Event or the May 2024 G5 storm) induce currents in high-voltage power lines, causing catastrophic transformer overheating. In addition, ionospheric turbulence distorts satellite GPS navigation signals.'],
            interactiveType: 'solar-wind',
            keyConcepts: ['Geomagnetically Induced Currents (GIC): Low-frequency currents driven through power grids by ground electric fields.', 'GPS Scintillation: Rapid phase and amplitude fluctuations in satellite radio signals traversing an erratic ionosphere.'],
            quickCheck: {
              id: 'sw-q8',
              question: 'Why are long electrical power transmission lines particularly vulnerable to geomagnetic storms?',
              options: ['Fluctuating geomagnetic fields induce low-frequency quasi-DC currents across long conductors, saturating transformer magnetic cores', 'Rockets crash into them', 'They attract lightning strikes exclusively', 'Wires freeze and shatter'],
              correctIndex: 0,
              explanation: 'Faraday’s Law dictates that rapid changes in Earth’s magnetic field induce ground electric currents that flow into long transmission lines, driving transformers into destructive saturation.'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'satellite-technology-101',
    title: 'Satellite Technology 101',
    tagline: 'Engineering aerospace hardware, power systems, antennas, and ground station operations',
    description: 'Learn how satellites are built, launched, stabilized, powered, and operated—from 1U CubeSats like GhanaSat-1 to massive multi-ton scientific observatories.',
    difficulty: 'Intermediate',
    durationHours: 6,
    modulesCount: 8,
    modules: [
      {
        id: 'sat-m1',
        moduleNumber: 1,
        title: 'What Is a Satellite?',
        description: 'History, orbital physics, classifications (CubeSats, SmallSats, Geostationary), and mission profiles.',
        lessons: [
          {
            id: 'sat-m1-l1',
            title: 'Spacecraft Fundamentals and Systems Engineering',
            summary: 'An artificial satellite is an autonomous spacecraft launched into closed Keplerian orbit around a celestial body.',
            content: ['Every satellite consists of two fundamental parts: the Bus (the spacecraft platform providing power, propulsion, thermal control, and communications) and the Payload (the specific scientific instrument, camera, or transponder fulfilling the mission purpose).'],
            interactiveType: 'orbit',
            keyConcepts: ['Spacecraft Bus: Platform hosting structural, electrical, and data handling subsystems.', 'Payload: Mission-specific hardware (cameras, radar, radiometers, transponders).'],
            quickCheck: {
              id: 'sat-q1',
              question: 'What is the distinction between a satellite’s "bus" and its "payload"?',
              options: ['The bus is the support infrastructure (power, control, communications), while the payload is the scientific or operational tool that fulfills the mission', 'The bus carries passengers; the payload is fuel', 'There is no difference', 'The bus only works on Earth'],
              correctIndex: 0,
              explanation: 'The satellite bus provides all foundational life-support (power, telemetry, attitude control) so that the payload instrument (camera, sensor, or transmitter) can conduct its mission.'
            }
          }
        ]
      },
      {
        id: 'sat-m2',
        moduleNumber: 2,
        title: 'How Satellites Stay in Orbit',
        description: 'Centripetal acceleration, circular orbital velocity, delta-v budgets, and orbital decay.',
        lessons: [
          {
            id: 'sat-m2-l1',
            title: 'Keplerian Mechanics and Orbital Velocity',
            summary: 'Why orbiting is simply falling toward Earth while traveling forward so fast you constantly miss it.',
            content: ['To stay in Low Earth Orbit (e.g. at 400 km altitude), a satellite must travel at approximately 7.67 km/s (over 27,600 km/h). At this exact speed, Earth’s curvature drops away at the exact same rate gravity pulls the spacecraft downward.'],
            interactiveType: 'orbit',
            keyConcepts: ['Circular Orbital Velocity: v = √(GM/r).', 'Orbital Decay: Gradual altitude loss caused by atmospheric drag in Low Earth Orbit.'],
            quickCheck: {
              id: 'sat-q2',
              question: 'What happens to a satellite in Low Earth Orbit if atmospheric drag gradually slows its forward speed?',
              options: ['Its orbit drops lower into thicker atmosphere, accelerating decay until it burns up', 'It flies out to Mars', 'It stops in place and floats', 'Its solar panels produce double electricity'],
              correctIndex: 0,
              explanation: 'Atmospheric drag bleeds orbital energy, reducing orbital altitude into denser atmospheric layers where friction increases exponentially, leading to re-entry.'
            }
          }
        ]
      },
      {
        id: 'sat-m3',
        moduleNumber: 3,
        title: 'Satellite Components',
        description: 'Structures, on-board computers (OBC), thermal control blankets, and attitude determination.',
        lessons: [
          {
            id: 'sat-m3-l1',
            title: 'Subsystems Integration inside a Spacecraft',
            summary: 'How reaction wheels, magnetorquers, and star trackers orient the satellite in microgravity.',
            content: ['Attitude Determination and Control Systems (ADCS) keep cameras pointed at Earth and solar panels pointed at the Sun using star trackers, sun sensors, and spinning reaction wheels.'],
            interactiveType: 'antenna-array',
            keyConcepts: ['ADCS: Attitude Determination and Control Subsystem.', 'Reaction Wheels: Flywheels that rotate the spacecraft via conservation of angular momentum.'],
            quickCheck: {
              id: 'sat-q3',
              question: 'How do reaction wheels rotate a satellite in the vacuum of space without using rocket propellant?',
              options: ['By spinning an internal electric flywheel; Newton’s third law causes the spacecraft body to rotate in the opposite direction', 'By pushing against air in space', 'By utilizing magnetic levitation from the moon', 'By expanding solar wings like fins'],
              correctIndex: 0,
              explanation: 'Conservation of angular momentum dictates that accelerating an internal rotor in one direction exerts an equal and opposite torque on the spacecraft structure.'
            }
          }
        ]
      },
      {
        id: 'sat-m4',
        moduleNumber: 4,
        title: 'Power Systems',
        description: 'Photovoltaic solar cells, gallium arsenide arrays, lithium-ion battery management, and eclipse cycles.',
        lessons: [
          {
            id: 'sat-m4-l1',
            title: 'Solar Generation and Orbital Eclipse Management',
            summary: 'Powering a satellite when it spends 35 minutes of every 90-minute orbit in complete planetary shadow.',
            content: ['Satellites use high-efficiency triple-junction Gallium Arsenide (GaAs) solar cells converting ~30% of sunlight into electricity. During orbital eclipse (when Earth blocks the Sun), batteries must supply 100% of the spacecraft’s power.'],
            interactiveType: 'spectral-bands',
            keyConcepts: ['Triple-Junction GaAs: Multi-bandgap solar cells capturing multiple portions of the solar spectrum.', 'Depth of Discharge (DoD): Battery capacity fraction utilized per orbit.'],
            quickCheck: {
              id: 'sat-q4',
              question: 'Why do spacecraft engineers strictly limit a satellite battery’s Depth of Discharge (DoD) to around 20-30%?',
              options: ['To ensure the battery survives tens of thousands of continuous charge-discharge cycles over a multi-year mission', 'Because batteries explode if charged more than 50%', 'Because solar panels don’t work in summer', 'To save weight during launch'],
              correctIndex: 0,
              explanation: 'In Low Earth Orbit, satellites cycle through an eclipse every 90 minutes (~5,800 cycles/year). Shallow depth of discharge prevents lithium battery degradation over 5+ year operational lifespans.'
            }
          }
        ]
      },
      {
        id: 'sat-m5',
        moduleNumber: 5,
        title: 'Communication Systems',
        description: 'Telemetry, tracking and command (TT&C), frequency bands (UHF, S-band, X-band, Ka-band), and link budgets.',
        lessons: [
          {
            id: 'sat-m5-l1',
            title: 'Radio Frequency Links and Ground Transceivers',
            summary: 'Transmitting gigabytes of imagery across thousands of kilometers through atmospheric attenuation.',
            content: ['TT&C systems send operational health metrics to engineers and receive commands. High-volume science data is downlinked on X-band (8 GHz) or Ka-band (26-40 GHz) directed directional antennas.'],
            interactiveType: 'antenna-array',
            keyConcepts: ['Link Budget: Calculation of gains and losses from satellite transmitter to ground receiver antenna.', 'Doppler Shift: Frequency shift caused by satellite velocity relative to ground station.'],
            quickCheck: {
              id: 'sat-q5',
              question: 'Why does the received radio frequency change as a satellite passes over an antenna station?',
              options: ['The Doppler effect shifts the frequency higher as the satellite approaches and lower as it recedes', 'The satellite battery drains during the pass', 'Earth’s gravity bends radio waves into heat', 'The antenna dish expands in the sun'],
              correctIndex: 0,
              explanation: 'Because the satellite travels at ~7.5 km/s relative to the ground station, the Doppler effect causes carrier waves to compress on approach and stretch on departure.'
            }
          }
        ]
      },
      {
        id: 'sat-m6',
        moduleNumber: 6,
        title: 'Sensors',
        description: 'Optical pushbroom scanners, infrared radiometers, spectrometers, and synthetic aperture radar.',
        lessons: [
          {
            id: 'sat-m6-l1',
            title: 'Pushbroom and Whiskbroom Imaging Detectors',
            summary: 'How linear charge-coupled device arrays scan swaths of Earth as the satellite sweeps forward.',
            content: ['Pushbroom scanners use a linear array of thousands of microscopic detectors perpendicular to the flight path. As the spacecraft flies forward, continuous lines of pixels build up a seamless swath across the country.'],
            interactiveType: 'spectral-bands',
            keyConcepts: ['Pushbroom Imager: Linear detector array with no moving mirrors, providing longer dwell time per pixel.', 'Swath Width: The cross-track strip of Earth surface observed during a single orbital pass.'],
            quickCheck: {
              id: 'sat-q6',
              question: 'What is the primary advantage of a pushbroom sensor over a mechanical whiskbroom scanner?',
              options: ['Pushbroom sensors have no moving mechanical mirrors and provide longer integration dwell time per pixel', 'Pushbroom sensors are made of wood', 'Pushbroom sensors only work in winter', 'They do not require optical glass'],
              correctIndex: 0,
              explanation: 'Pushbroom scanners have zero moving parts, reducing mechanical failure risk while allowing detectors to gather photons over a longer dwell time for superior signal-to-noise ratios.'
            }
          }
        ]
      },
      {
        id: 'sat-m7',
        moduleNumber: 7,
        title: 'Satellite Missions',
        description: 'Mission design lifecycle, launch vehicles, orbital insertion, commissioning, and decommissioning.',
        lessons: [
          {
            id: 'sat-m7-l1',
            title: 'From Concept to Orbit: The Mission Lifecycle',
            summary: 'Rigorous aerospace qualification testing: thermal vacuum, vibration, and radiation tolerance.',
            content: ['Before launch, satellites undergo severe shaker-table vibration testing to simulate rocket acoustic launch stresses, followed by thermal vacuum chamber cycling (-100°C to +100°C in vacuum) to ensure electronics do not fail in orbit.'],
            interactiveType: 'orbit',
            keyConcepts: ['Thermal Vacuum (TVAC) Chamber: Simulating the extreme temperatures and hard vacuum of space.', 'Decommissioning: De-orbiting or transferring into a graveyard orbit within 25 years to prevent orbital debris.'],
            quickCheck: {
              id: 'sat-q7',
              question: 'Why must satellites undergo Thermal Vacuum (TVAC) testing before launch?',
              options: ['Because space has no air to conduct heat, causing severe temperature extremes between sunlit and shadowed faces', 'To clean the satellite with disinfectant', 'To test if the satellite can float on water', 'To make the metal weigh less'],
              correctIndex: 0,
              explanation: 'In the vacuum of space, heat only transfers through radiation and conduction. TVAC testing verifies that internal heat pipes, radiators, and electronics function under extreme orbital temperature swings.'
            }
          }
        ]
      },
      {
        id: 'sat-m8',
        moduleNumber: 8,
        title: 'Ground Stations',
        description: 'Tracking antennas, dish mechanics, demodulation, GSSTI Kuntunse ground station, and telemetry operations.',
        lessons: [
          {
            id: 'sat-m8-l1',
            title: 'Operating Satellite Ground Stations in Ghana',
            summary: 'How parabolic tracking antennas lock onto satellites during 10-minute horizon-to-horizon passes.',
            content: ['A satellite in Low Earth Orbit is only visible to a single ground station for 8 to 12 minutes per pass. The ground antenna must track azimuth and elevation continuously with sub-degree accuracy while receiving downlinks.'],
            interactiveType: 'antenna-array',
            keyConcepts: ['Azimuth & Elevation: Coordinates used to steer antenna dishes toward passing satellites.', 'Pass Window: The brief 10-minute interval when an orbital satellite is above the local radio horizon.'],
            quickCheck: {
              id: 'sat-q8',
              question: 'Why do Low Earth Orbit ground station dishes need dual-axis motorized steerable mounts?',
              options: ['Because LEO satellites move rapidly across the sky from horizon to horizon in about 10 minutes', 'Because dishes must spin to stay clean', 'To point at the North Star at all times', 'To avoid receiving television channels'],
              correctIndex: 0,
              explanation: 'LEO satellites travel at ~27,000 km/h and cross the sky in just 8 to 12 minutes. Dishes must precisely track both azimuth (compass bearing) and elevation (angle above horizon) in real-time.'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'space-data-101',
    title: 'Space Data 101',
    tagline: 'Working with satellite rasters, spatial coordinate reference systems, and Python GIS analysis',
    description: 'Learn how to handle real Earth observation datasets, GeoTIFF rasters, Cloud-Optimized GeoTIFFs (COGs), spectral band calculations, and spatial analytics.',
    difficulty: 'Advanced',
    durationHours: 7,
    modulesCount: 8,
    modules: [
      {
        id: 'sd-m1',
        moduleNumber: 1,
        title: 'Understanding Space Data',
        description: 'Data products (Level 0 through Level 4), metadata files, and open satellite data archives.',
        lessons: [
          {
            id: 'sd-m1-l1',
            title: 'From Raw Telemetry to Calibrated Science Data',
            summary: 'How NASA and ESA process raw digital counts into Top-of-Atmosphere (TOA) and Bottom-of-Atmosphere (BOA) surface reflectance.',
            content: ['Satellite sensors record raw digital numbers (DNs). Level-1 products calibrate DNs into radiance and Top-of-Atmosphere (TOA) reflectance. Level-2 products apply atmospheric correction algorithms to remove haze and aerosol scattering, yielding true surface reflectance.'],
            interactiveType: 'spectral-bands',
            keyConcepts: ['Digital Numbers (DN): Uncalibrated integer values recorded by the detector.', 'Surface Reflectance (BOA): True ground reflectance after removing atmospheric scattering.'],
            quickCheck: {
              id: 'sd-q1',
              question: 'What is the purpose of atmospheric correction in satellite imagery processing?',
              options: ['To remove distortions caused by atmospheric gases and aerosols, yielding true surface reflectance', 'To create artificial clouds', 'To make images look warmer for social media', 'To decrease the file size by deleting pixels'],
              correctIndex: 0,
              explanation: 'Atmospheric correction removes the scattering and absorption caused by water vapor, ozone, and dust in the air column, allowing true ground surface reflectance to be measured.'
            }
          }
        ]
      },
      {
        id: 'sd-m2',
        moduleNumber: 2,
        title: 'Satellite Data',
        description: 'Copernicus Open Access Hub, USGS EarthExplorer, and NASA Earthdata access patterns.',
        lessons: [
          {
            id: 'sd-m2-l1',
            title: 'Open Data Repositories for African Researchers',
            summary: 'Accessing petabytes of free Sentinel and Landsat imagery covering Ghana.',
            content: ['Both the European Space Agency (Copernicus) and the US Geological Survey (Landsat) provide open, free access to all Earth observation imagery. Anyone in Ghana can download multi-decadal satellite archives without subscription fees.'],
            interactiveType: 'spectral-bands',
            keyConcepts: ['Sentinel-2: ESA twin optical satellites providing 10m multispectral imagery every 5 days.', 'Landsat 9: NASA/USGS satellite continuing a continuous 50-year Earth record since 1972.'],
            quickCheck: {
              id: 'sd-q2',
              question: 'Which satellite constellation provides free multispectral imagery at 10-meter resolution every 5 days worldwide?',
              options: ['Sentinel-2 (Copernicus Programme)', 'Hubble Space Telescope', 'Apollo 11', 'International Space Station'],
              correctIndex: 0,
              explanation: 'The European Space Agency’s Sentinel-2 constellation (2A and 2B) captures 13 spectral bands at up to 10m spatial resolution with a 5-day global revisit.'
            }
          }
        ]
      },
      {
        id: 'sd-m3',
        moduleNumber: 3,
        title: 'Satellite Images and Bands',
        description: 'GeoTIFF structure, Cloud-Optimized GeoTIFFs (COGs), pyramids, and multispectral stacks.',
        lessons: [
          {
            id: 'sd-m3-l1',
            title: 'The Architecture of Cloud-Optimized GeoTIFFs (COGs)',
            summary: 'How HTTP range requests allow querying a single crop field without downloading an entire 1-gigabyte scene.',
            content: ['A GeoTIFF embeds spatial metadata (coordinate reference system, map extents, and pixel resolution) directly inside the image header. Cloud-Optimized GeoTIFFs organize pixel data so users can stream small regional subsets instantly over the web.'],
            interactiveType: 'spectral-bands',
            keyConcepts: ['GeoTIFF: Tagged Image File Format with embedded georeferencing metadata.', 'COG: Cloud-Optimized GeoTIFF enabling fast HTTP byte-range read operations.'],
            quickCheck: {
              id: 'sd-q3',
              question: 'Why are Cloud-Optimized GeoTIFFs (COGs) revolutionary for big Earth observation data?',
              options: ['They allow web clients to read and display specific spatial extents without downloading the entire large file', 'They make satellite images 3D', 'They do not require internet access', 'They prevent computers from using RAM'],
              correctIndex: 0,
              explanation: 'COGs allow HTTP range requests to stream only the specific bounding box and zoom level needed, saving gigabytes of bandwidth.'
            }
          }
        ]
      },
      {
        id: 'sd-m4',
        moduleNumber: 4,
        title: 'Spatial Data',
        description: 'Coordinate Reference Systems (CRS), EPSG codes, WGS84, and UTM Zone 30N in Ghana.',
        lessons: [
          {
            id: 'sd-m4-l1',
            title: 'Map Projections and Ghana’s Coordinate Systems',
            summary: 'Why projecting a 3D oblate spheroid onto a 2D flat computer screen requires conformal projections.',
            content: ['Ghana lies almost entirely within Universal Transverse Mercator (UTM) Zone 30 North (EPSG:32630). UTM Zone 30N measures coordinates in meters (Easting and Northing), allowing accurate distance and area calculations across Ghana.'],
            interactiveType: 'orbit',
            keyConcepts: ['EPSG:32630: UTM Zone 30N projection standard for Ghana.', 'WGS 84 (EPSG:4326): Latitude/longitude angular coordinates in degrees.'],
            quickCheck: {
              id: 'sd-q4',
              question: 'Which coordinate projection is typically used in Ghana for accurate area and distance measurements in meters?',
              options: ['UTM Zone 30 North (EPSG:32630)', 'Mercator World Web (EPSG:3857)', 'Polar Stereographic', 'State Plane Alaska'],
              correctIndex: 0,
              explanation: 'Because Ghana sits between longitudes 3°W and 1°E, UTM Zone 30 North provides minimal distortion and expresses coordinates in metric eastings and northings.'
            }
          }
        ]
      },
      {
        id: 'sd-m5',
        moduleNumber: 5,
        title: 'GIS',
        description: 'Geographic Information Systems, vector layers vs rasters, QGIS workflows, and spatial joins.',
        lessons: [
          {
            id: 'sd-m5-l1',
            title: 'Vector vs Raster Integration in GIS',
            summary: 'Combining administrative district shapefiles with satellite vegetation grids.',
            content: ['A GIS combines raster data (grids of pixels, like satellite imagery or digital elevation models) with vector data (discrete points, lines, and polygons representing towns, roads, and farm parcels).'],
            interactiveType: 'ndvi-calculator',
            keyConcepts: ['Raster: Grid of cells/pixels each containing a numeric value (e.g., NDVI or elevation).', 'Vector: Geometric geometries (points, lines, polygons) with attribute tables.'],
            quickCheck: {
              id: 'sd-q5',
              question: 'In a GIS project monitoring forest reserves, which data format best represents the legal reserve boundary polygon?',
              options: ['Vector polygon geometry', 'Audio MP3 file', '1-band continuous raster', 'Text string without coordinates'],
              correctIndex: 0,
              explanation: 'Vector polygons store precise coordinate vertices defining discrete administrative boundaries, perfect for overlaying onto continuous satellite rasters.'
            }
          }
        ]
      },
      {
        id: 'sd-m6',
        moduleNumber: 6,
        title: 'Data Analysis',
        description: 'Zonal statistics, supervised classification, random forests, and confusion matrices.',
        lessons: [
          {
            id: 'sd-m6-l1',
            title: 'Classifying Land Cover with Machine Learning',
            summary: 'Training algorithms to automatically categorize every pixel into Forest, Water, Urban, or Farmland.',
            content: ['Supervised classification uses human-labeled ground truth training polygons to teach algorithms (such as Random Forest or Support Vector Machines) to classify every pixel in a satellite scene based on its spectral signature.'],
            interactiveType: 'ndvi-calculator',
            keyConcepts: ['Training Samples: Labeled regions used to teach classifiers.', 'Confusion Matrix: Statistical evaluation comparing classification results against validation data.'],
            quickCheck: {
              id: 'sd-q6',
              question: 'What is the role of a confusion matrix in satellite land-cover classification?',
              options: ['To quantitatively calculate user accuracy, producer accuracy, and overall classification error rates', 'To confuse the computer during training', 'To delete bad satellite pixels', 'To encrypt satellite images'],
              correctIndex: 0,
              explanation: 'A confusion matrix cross-tabulates predicted land-cover classes against true ground survey samples to measure accuracy and error rates.'
            }
          }
        ]
      },
      {
        id: 'sd-m7',
        moduleNumber: 7,
        title: 'Python for Space Science',
        description: 'Rasterio, Geopandas, Xarray, Numpy arrays, and Google Earth Engine Python API.',
        lessons: [
          {
            id: 'sd-m7-l1',
            title: 'Scientific Computing with Rasterio and NumPy',
            summary: 'Treating satellite image bands as multi-dimensional numerical arrays for rapid mathematical operations.',
            content: ['In modern geospatial science, Python is the premier language. Libraries like Rasterio read GeoTIFFs directly into NumPy multidimensional arrays, allowing millions of pixel calculations (like NDVI) to run in milliseconds using vectorized operations.'],
            interactiveType: 'ndvi-calculator',
            keyConcepts: ['Rasterio: Python library for reading and writing geospatial raster datasets.', 'NumPy Vectorization: Performing mathematical operations across entire matrices simultaneously.'],
            quickCheck: {
              id: 'sd-q7',
              question: 'Why are vectorized array operations in NumPy faster than Python loops for calculating NDVI across millions of pixels?',
              options: ['Vectorized operations execute compiled C code in continuous memory blocks rather than iterating through Python interpreter overhead', 'Because Python arrays do not use numbers', 'Because loops are not allowed in space science', 'Because Python converts pixels to text'],
              correctIndex: 0,
              explanation: 'Vectorized NumPy operations execute optimized SIMD instructions in compiled C/Fortran, running hundreds of times faster than interpreted Python for loops.'
            }
          }
        ]
      },
      {
        id: 'sd-m8',
        moduleNumber: 8,
        title: 'Earth Observation Data Projects',
        description: 'Building end-to-end cloud pipelines: monitoring Lake Volta surface water, urban heat islands, and crop stress.',
        lessons: [
          {
            id: 'sd-m8-l1',
            title: 'End-to-End Environmental Pipeline Case Study',
            summary: 'Deploying automated scripts to produce monthly drought and flood alerts for Ghanaian farmers.',
            content: ['The pinnacle of Earth observation data science is deploying automated scripts that ingest Sentinel-2 and Landsat data, calculate vegetation anomalies, and deliver actionable alerts to farmers, district planners, and water authorities across Ghana.'],
            interactiveType: 'ndvi-calculator',
            keyConcepts: ['Automated ETL: Extract, Transform, and Load spatial datasets automatically upon satellite downlink.', 'Actionable Intelligence: Transforming raw spectral numbers into practical crop and water recommendations.'],
            quickCheck: {
              id: 'sd-q8',
              question: 'What transforms raw satellite telemetry into actionable scientific insight for society?',
              options: ['Rigorous calibration, atmospheric correction, geospatial algorithms, and direct stakeholder communication', 'Printing posters with pretty colors', 'Storing hard drives in a closet', 'Launching more rockets without sensors'],
              correctIndex: 0,
              explanation: 'Actionable insight requires processing raw telemetry through scientific calibration, running validated environmental models, and delivering timely results to local decision-makers.'
            }
          }
        ]
      }
    ]
  }
];
