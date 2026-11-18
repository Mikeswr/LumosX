import { SpaceExperiment } from '../types';

export const SPACE_EXPERIMENTS: SpaceExperiment[] = [
  {
    id: 'eratosthenes',
    title: 'Calculate Earth Circumference with Eratosthenes Method in Ghana',
    difficulty: 'Beginner',
    estimatedTime: '45 mins',
    objective: 'Measure the circumference of the Earth using shadow lengths measured simultaneously at solar noon between two locations in Ghana with a known north-south distance (e.g. Accra and Tamale).',
    materials: [
      'Two straight vertical sticks / meter rules (1 meter each)',
      'Plumb line or spirit level to ensure vertical alignment',
      'Measuring tape or centimeter ruler',
      'Solar noon table for Accra (approx 12:08 PM) and Tamale (approx 12:12 PM)',
      'Smartphone compass and calculator'
    ],
    procedure: [
      'Select two schools: one in Accra (5.6°N) and one in Tamale (9.4°N), giving an angular baseline separation of roughly 3.8° (approx 422 km north-south).',
      'At exact local solar noon on the same day, measure the shadow length cast by a 1-meter vertical gnomon on flat horizontal ground.',
      'Calculate the zenith angle θ = arctan(shadow_length / stick_height) in degrees for each station.',
      'Subtract the two zenith angles: Δθ = |θ_Tamale - θ_Accra|.',
      'Use the ratio formula: Circumference = (360° / Δθ) × Distance between cities.'
    ],
    interactiveSimType: 'eratosthenes',
    explanation: 'Over 2,200 years ago, Greek mathematician Eratosthenes calculated Earth’s circumference with remarkable accuracy using the difference in solar shadow angles between Alexandria and Syene (Aswan). Because Ghana spans over 650 kilometers from the coast to its northern border, Ghanaian students can replicate this historic calculation across their own country!',
    questions: [
      {
        id: 'exp-q1',
        question: 'Why must shadow measurements be taken at local solar noon rather than simply standard clock noon?',
        options: [
          'Because local solar noon is when the sun reaches its highest meridian altitude, casting the shortest and truest north-south shadow',
          'Because shadows disappear after lunch',
          'Because clocks don’t work in sunlight',
          'Because the Earth stops spinning at solar noon'
        ],
        correctIndex: 0,
        explanation: 'At local solar noon, the Sun crosses the local celestial meridian, providing an exact geometric reference for the zenith angle.'
      }
    ]
  },
  {
    id: 'kepler',
    title: 'Kepler’s Orbital Harmonic Law & Satellite Velocity Simulator',
    difficulty: 'Intermediate',
    estimatedTime: '30 mins',
    objective: 'Demonstrate Kepler’s Third Law (T² ∝ a³) by calculating how orbital altitude directly dictates satellite orbital velocity and revolution period.',
    materials: [
      'Stopwatch / timer',
      'Interactive gravitational simulation workspace',
      'Scientific calculator',
      'Earth mass constant: M = 5.972 × 10²⁴ kg, Gravitational constant: G = 6.674 × 10⁻¹¹ m³/(kg·s²)'
    ],
    procedure: [
      'Vary the orbital altitude slider from Low Earth Orbit (400 km - ISS/GhanaSat-1) up to Geostationary Orbit (35,786 km).',
      'Record the calculated orbital speed v = √(GM / r) where r = R_earth + altitude.',
      'Observe the time required for a single complete revolution around the planet.',
      'Plot Period squared (T²) against Semi-major axis cubed (r³) to verify the linear relationship.'
    ],
    interactiveSimType: 'kepler',
    explanation: 'Johannes Kepler showed that planets—and artificial satellites—move faster when closer to the gravitational source. In Low Earth Orbit (400 km), satellites travel at ~7.67 km/s to balance Earth’s gravity, orbiting every 92 minutes. At Geostationary altitude (35,786 km), orbital speed drops to 3.07 km/s, taking exactly 23 hours and 56 minutes—matching Earth’s rotation so the satellite appears stationary from the ground.',
    questions: [
      {
        id: 'exp-q2',
        question: 'If you move a satellite from 500 km to a higher orbit at 20,000 km, what happens to its orbital speed?',
        options: [
          'Its orbital speed decreases because gravitational attraction is weaker further from Earth’s center of mass',
          'Its orbital speed increases to the speed of light',
          'Its orbital speed remains identical',
          'It starts falling backward'
        ],
        correctIndex: 0,
        explanation: 'Orbital velocity is inversely proportional to the square root of orbital radius: v = √(GM/r). As altitude increases, required orbital speed decreases.'
      }
    ]
  },
  {
    id: 'spectroscope',
    title: 'Build a Pocket Diffraction Spectroscope to Identify Stellar Elements',
    difficulty: 'Beginner',
    estimatedTime: '60 mins',
    objective: 'Construct a simple optical spectroscope using a cardboard tube and a discarded DVD/CD diffraction grating to observe Fraunhofer absorption lines and emission spectra.',
    materials: [
      'Cardboard mailing tube or cereal box',
      'Blank DVD-R or CD (the microscopic recorded grooves act as a transmission diffraction grating with ~1,350 lines/mm)',
      'Razor blade / utility knife & black electrical tape',
      'Various light sources: Incandescent bulb, fluorescent tube, LED flashlight, and indirect daylight (DO NOT LOOK DIRECTLY AT THE SUN)'
    ],
    procedure: [
      'Carefully split the DVD layer to extract the clear polycarbonate disc with diffraction tracks.',
      'Cut a clean 0.5mm slit in one end of the cardboard tube using razor blades spaced with tape.',
      'Mount the DVD grating fragment at a 30-degree viewing angle at the opposite end of the tube.',
      'Point the slit toward indirect daylight reflected off a white cloud. Observe the discrete dark Fraunhofer lines (absorption of light by hydrogen, sodium, and iron in the solar atmosphere).',
      'Point at a fluorescent bulb to observe bright discrete green and blue mercury emission peaks.'
    ],
    interactiveSimType: 'spectroscope',
    explanation: 'Astronomers can never travel to distant stars, yet we know their exact chemical composition, temperature, and radial velocity because each chemical element absorbs and emits light at distinct quantum wavelengths. Spectroscopy is the foundational analytical tool of modern astrophysics.',
    questions: [
      {
        id: 'exp-q3',
        question: 'What creates the dark Fraunhofer absorption lines observed in the solar spectrum?',
        options: [
          'Cooler chemical elements in the outer solar atmosphere absorbing specific photon wavelengths emitted by the dense, hot interior',
          'Dust on the telescope lens',
          'Black holes passing between Earth and Sun',
          'The Moon casting tiny shadows'
        ],
        correctIndex: 0,
        explanation: 'As continuous white light leaves the solar core, atoms of hydrogen, sodium, calcium, and iron in the cooler solar corona absorb specific resonant photon frequencies.'
      }
    ]
  },
  {
    id: 'magnetometer',
    title: 'Smartphone Magnetometer Space Weather Storm Detector',
    difficulty: 'Intermediate',
    estimatedTime: '40 mins',
    objective: 'Use a smartphone’s built-in 3-axis Hall-effect magnetometer sensor to measure baseline geomagnetic field intensity and detect magnetic perturbations.',
    materials: [
      'Smartphone equipped with internal magnetometer sensor',
      'Free sensor data logger app (e.g. Physics Toolbox Sensor Suite or Phyphox)',
      'Stable non-magnetic wooden or plastic surface away from computers, steel rebar, and motors',
      'Bar magnet or iron object for calibration'
    ],
    procedure: [
      'Place the phone on a flat wooden table away from magnetic interference.',
      'Calibrate the sensor by rotating the phone in a figure-8 pattern.',
      'Record continuous total magnetic field B = √(Bx² + By² + Bz²) in microteslas (μT). Note that in Ghana, equatorial magnetic field strength typically measures between 32 μT and 36 μT.',
      'Introduce a steel object at varying distances to calculate the 1/r³ magnetic dipole decay curve.',
      'Compare local baseline measurements against real-time geomagnetic Kp index data from space weather satellites.'
    ],
    interactiveSimType: 'magnetometer',
    explanation: 'Space weather monitoring stations across Africa use induction coil magnetometers to detect minute fluctuations (nanoteslas) in Earth’s magnetic field caused by solar wind compressions and equatorial electrojet currents.',
    questions: [
      {
        id: 'exp-q4',
        question: 'Why is the geomagnetic field intensity in equatorial nations like Ghana lower (~34 μT) than near the magnetic poles (~60 μT)?',
        options: [
          'Earth’s magnetic field is a dipole; field lines are horizontal and spread apart at the magnetic equator, whereas they converge vertically at the poles',
          'Because the equator is warmer',
          'Because equatorial rocks have no iron',
          'Because satellites drain magnetic energy near the equator'
        ],
        correctIndex: 0,
        explanation: 'In a magnetic dipole, field line density is highest where lines converge at the magnetic poles, giving roughly double the intensity compared to the magnetic equator.'
      }
    ]
  }
];
