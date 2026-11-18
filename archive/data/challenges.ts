import { SpaceChallenge } from '../types';

export const SPACE_CHALLENGES: SpaceChallenge[] = [
  {
    id: 'challenge-land-cover',
    title: 'Identify the Greatest Land-Cover Change Sector in Greater Accra',
    category: 'Earth Observation',
    difficulty: 'Intermediate',
    points: 150,
    description: 'Between 2017 and 2025, rapid peri-urbanization expanded across three distinct municipal zones in Southern Ghana. Using multispectral satellite change metrics and NDVI differential rasters, determine which zone experienced the largest percentage conversion from vegetative green cover to built-up impervious surfaces.',
    whatYouNeedToKnow: [
      'NDVI ranges from -1 to +1; vegetated land has high values (0.5 to 0.8), while concrete, metal roofs, and asphalt exhibit low values (0.05 to 0.20).',
      'A large negative NDVI change (ΔNDVI < -0.30) across contiguous blocks indicates intense deforestation, land clearing, or construction.',
      'Impervious surface percentage measures the fraction of land where water cannot infiltrate the ground.'
    ],
    taskInstruction: 'Analyze the 3 test sectors below (Sector Alpha: Pokuase North Corridor, Sector Beta: Aburi Mountain Foothills, Sector Gamma: Kasoa West Extension). Calculate the loss percentage and select the sector with the greatest land-cover transformation.',
    taskType: 'land-cover-detect',
    questions: [
      {
        id: 'ch-q1',
        question: 'Based on the satellite change detection data, which sector underwent the greatest total percentage conversion to built-up impervious surfaces?',
        options: [
          'Sector Alpha (Pokuase North Corridor: -42% vegetative loss, +140% impervious increase)',
          'Sector Beta (Aburi Foothills: -12% vegetative loss, +28% impervious increase)',
          'Sector Gamma (Kasoa West Extension: -26% vegetative loss, +64% impervious increase)'
        ],
        correctIndex: 0,
        explanation: 'Sector Alpha around the Pokuase Interchange corridor experienced massive commercial and infrastructural development, converting over 42% of its former vegetated canopy to paved roads and concrete structures.'
      },
      {
        id: 'ch-q2',
        question: 'What environmental consequence typically accompanies such rapid impervious surface expansion without adequate stormwater retention basins?',
        options: [
          'Increased peak stormwater runoff volume and heightened flash flooding risks downstream along the Densu and Odaw river basins',
          'Immediate formation of permanent glaciers',
          'A decrease in local air temperatures by 15 degrees',
          'Earth’s magnetic field shifts direction'
        ],
        correctIndex: 0,
        explanation: 'When rainwater hits asphalt and roofs instead of soaking into soil, runoff velocity and volume spike dramatically, overwhelming drainage channels and triggering flash floods.'
      }
    ]
  },
  {
    id: 'challenge-solar-storm',
    title: 'Classify Solar Flare Severity & Predict High-Frequency Radio Blackouts',
    category: 'Solar Physics',
    difficulty: 'Intermediate',
    points: 200,
    description: 'A major active solar region on the Sun’s eastern limb just unleashed a potent solar flare detected by the GOES-18 satellite X-ray sensor. Analyze the peak X-ray flux measurement and classify the flare to determine if transatlantic and West African HF aviation radio communications face severe disruption.',
    whatYouNeedToKnow: [
      'Solar flares are classified logarithmically based on peak soft X-ray flux (0.1–0.8 nm): A (< 10⁻⁷ W/m²), B (10⁻⁷–10⁻⁶), C (10⁻⁶–10⁻⁵), M (10⁻⁵–10⁻⁴), and X (> 10⁻⁴ W/m²).',
      'X-class flares are major events capable of triggering planetary R3 (Strong) to R5 (Extreme) radio blackouts on the sunlit hemisphere of Earth.',
      'Solar ionizing radiation enhances electron density in the ionospheric D-region (~60–90 km), causing High Frequency (3–30 MHz) radio waves to be absorbed rather than reflected.'
    ],
    taskInstruction: 'The GOES X-ray detector registered a peak flux reading of 4.8 × 10⁻⁴ Watts/m² at 13:42 UTC. Classify the flare magnitude and assess the radio blackout risk for aviation corridors over Ghana.',
    taskType: 'solar-storm-classify',
    questions: [
      {
        id: 'ch-q3',
        question: 'A peak soft X-ray flux of 4.8 × 10⁻⁴ W/m² corresponds to which official solar flare classification?',
        options: [
          'X4.8 class flare (Severe high-energy event)',
          'M4.8 class flare (Moderate event)',
          'C4.8 class flare (Minor background event)',
          'A4.8 class flare (Negligible event)'
        ],
        correctIndex: 0,
        explanation: 'Since 10⁻⁴ W/m² defines the baseline of the X-class scale, a flux of 4.8 × 10⁻⁴ W/m² is classified as an X4.8 flare.'
      },
      {
        id: 'ch-q4',
        question: 'Because the flare occurred at 13:42 UTC (midday in West Africa), which critical communication system in Ghana is immediately degraded?',
        options: [
          'High Frequency (HF) aeronautical and maritime voice communications due to ionospheric D-layer radio wave absorption',
          'Undersea fiber optic cables',
          'Home FM radio stations broadcasting at 100 MHz within a few kilometers',
          'Landline copper telephone cables buried underground'
        ],
        correctIndex: 0,
        explanation: 'Solar flares ionize the ionospheric D-layer on the sunlit side of Earth, absorbing HF radio waves (3-30 MHz) used by long-distance oceanic aircraft and coastal maritime vessels.'
      }
    ]
  },
  {
    id: 'challenge-exoplanet-transit',
    title: 'Exoplanet Discovery: Light Curve Transit Inversion',
    category: 'Astronomy',
    difficulty: 'Advanced',
    points: 250,
    description: 'Astronomers analyzing space telescope photometry of a solar-analog star detect a recurring periodic drop in relative brightness. Analyze the normalized light curve to calculate the ratio of the planet’s radius to the star’s radius.',
    whatYouNeedToKnow: [
      'The Transit Method measures the fraction of light blocked by an exoplanet: Transit Depth (ΔF/F) = (R_planet / R_star)²',
      'If a star has a radius similar to our Sun (R_star = 696,340 km) and the transit depth is 0.01 (1%), R_planet = R_star × √(0.01) = 0.1 × R_star ≈ 69,634 km (roughly the size of Jupiter).',
      'The orbital period is the exact time interval between successive transit dips.'
    ],
    taskInstruction: 'The light curve shows a symmetrical dip where normalized flux drops from 1.000 to 0.984 (a 1.6% transit depth) recurring every 4.2 days. Calculate the radius ratio of the exoplanet.',
    taskType: 'light-curve',
    questions: [
      {
        id: 'ch-q5',
        question: 'Given a transit depth of 1.6% (ΔF/F = 0.016), what is the ratio of the planet radius to the stellar radius (R_p / R_s)?',
        options: [
          '0.126 (R_planet is approximately 12.6% of the star’s radius)',
          '0.016 (1.6%)',
          '0.000256 (0.025%)',
          '1.60 (Planet is bigger than the star)'
        ],
        correctIndex: 0,
        explanation: 'R_p / R_s = √(0.016) ≈ 0.1265. This indicates a gas giant exoplanet roughly 1.25 times the radius of Jupiter.'
      }
    ]
  },
  {
    id: 'challenge-water-turbidity',
    title: 'Detect Alluvial Mining Sediment Plumes in the Pra River Basin',
    category: 'Environmental',
    difficulty: 'Intermediate',
    points: 200,
    description: 'Illegal alluvial mining along the Pra River deposits thousands of tons of silt, turning clear river water into opaque yellowish-brown mud. Use multispectral band ratios to identify the upstream junction where illegal washings enter the main river channel.',
    whatYouNeedToKnow: [
      'Clear water absorbs red and near-infrared light strongly, producing low reflectance (< 0.03).',
      'Turbid water with suspended clay and sand particles reflects high amounts of red (665 nm) and green (560 nm) light (reflectance > 0.15).',
      'The Normalized Difference Turbidity Index (NDTI) uses (Red - Green) / (Red + Green) to quantify suspended matter.'
    ],
    taskInstruction: 'Examine spectral profiles at 4 tributary junctions along the Pra River. Determine which tributary carries the highest concentration of suspended mining sediment.',
    taskType: 'water-turbidity',
    questions: [
      {
        id: 'ch-q6',
        question: 'Which spectral band combination provides the clearest discrimination between sediment-polluted river water and healthy riparian tree cover?',
        options: [
          'False Color Infrared (NIR, Red, Green): muddy water appears bright cyan/brown, while healthy trees appear bright crimson red',
          'Monochrome blue only',
          'Thermal infrared at midnight only',
          'Ultraviolet without calibration'
        ],
        correctIndex: 0,
        explanation: 'Because sediment scatters visible red light while water absorbs NIR, and vegetation reflects massive amounts of NIR, the False Color NIR composite creates dramatic visual separation.'
      }
    ]
  }
];
