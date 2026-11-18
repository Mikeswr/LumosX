import { StudentProject } from '../types';

export const STUDENT_PROJECTS: StudentProject[] = [
  {
    id: 'proj-veg-town',
    title: 'Map Vegetation Health and Urban Green Spaces Around Your Town',
    level: 'Beginner',
    estimatedHours: 4,
    whatYouWillLearn: [
      'How to obtain and inspect calibrated Sentinel-2 multispectral rasters',
      'Calculating Normalized Difference Vegetation Index (NDVI) across a 10 km × 10 km bounding box',
      'Distinguishing between healthy natural tree canopy, subsistence crops, and built-up land',
      'Producing an annotated environmental map highlighting vulnerable green belts in your district'
    ],
    problemStatement: 'Many Ghanaian towns are experiencing rapid peri-urban sprawl that clears vital forest fragments, reduces tree canopy shade, and increases local surface temperatures. Without baseline vegetation maps, municipal town planners cannot determine which green corridors require legal protection.',
    scientificBackground: 'Green chlorophyll pigments absorb blue and red light for photosynthesis while the spongy mesophyll cell structure of healthy leaves strongly reflects Near-Infrared (NIR) radiation. By calculating NDVI = (NIR - Red) / (NIR + Red), students can objectively classify land into distinct biological vitality tiers.',
    datasetName: 'Sentinel-2 Level-2A Bottom-of-Atmosphere Reflectance (B04 Red, B08 NIR)',
    datasetDescription: 'Calibrated surface reflectance raster tile covering a 10 km × 10 km area centered on your selected Ghanaian municipal district with 10-meter spatial resolution.',
    instructions: [
      'Step 1: Select your target Ghanaian town from the platform catalog (e.g. Pokuase, Kumasi, Tamale, or Cape Coast).',
      'Step 2: Inspect the raw pixel values for Red (Band 4) and Near-Infrared (Band 8).',
      'Step 3: Execute the pixel-wise NDVI calculation using the interactive workspace slider.',
      'Step 4: Define classification thresholds: High Canopy (NDVI > 0.60), Moderate Shrub/Crops (0.35–0.60), Grassland/Degraded (0.20–0.35), Urban/Bare (< 0.20).',
      'Step 5: Summarize total green space percentage and submit your recommendations for community tree-planting corridors.'
    ],
    deliverableDescription: 'A classified land-cover report summarizing the total green area in square kilometers, percentage change over the study period, and three targeted recommendations for urban forestry.'
  },
  {
    id: 'proj-urban-growth',
    title: 'Analyse Urban Growth in Pokuase and Greater Accra using Multi-Temporal Imagery',
    level: 'Intermediate',
    estimatedHours: 6,
    whatYouWillLearn: [
      'Comparing multi-temporal satellite imagery from 2017 to 2025 to measure urban expansion',
      'Using the Normalized Difference Built-up Index (NDBI) and Normalized Difference Water Index (NDWI)',
      'Calculating the exact area in hectares converted from agriculture to impervious infrastructure',
      'Correlating infrastructure developments (like the Pokuase Interchange) with localized commercial density'
    ],
    problemStatement: 'The completion of major transport infrastructure projects drastically accelerates surrounding real estate and commercial development. Planners need quantitative metrics on how many hectares of farmland and open land are absorbed each year following the construction of major highway interchanges.',
    scientificBackground: 'Built surfaces (concrete, asphalt, zinc roofing sheets) reflect high amounts of Shortwave Infrared (SWIR) light compared to Near-Infrared (NIR). The Normalized Difference Built-up Index: NDBI = (SWIR - NIR) / (SWIR + NIR) highlights urban settlements as bright positive values, making automated urbanization tracking possible.',
    datasetName: 'Landsat-8 & Sentinel-2 Multi-Temporal Composites (2017 vs 2025)',
    datasetDescription: 'Orthorectified, cloud-masked surface reflectance rasters of the Ga North Municipal District captured in January 2017 and January 2025 during the dry season.',
    instructions: [
      'Step 1: Load the 2017 baseline scene and 2025 current scene in the comparison viewer.',
      'Step 2: Trace the boundary of the Pokuase Interchange core footprint and ACP junction.',
      'Step 3: Calculate the change in built-up pixel count across the 25 square kilometer buffer zone.',
      'Step 4: Multiply pixel count by pixel ground area (100 m² per pixel for 10m Sentinel-2 data) to compute total hectares converted.',
      'Step 5: Formulate an urban planning brief detailing the relationship between highway access and peri-urban densification.'
    ],
    deliverableDescription: 'A multi-temporal change matrix, total urban hectares gained metric, and an executive briefing on municipal infrastructure impacts.'
  },
  {
    id: 'proj-ml-land-cover',
    title: 'Train a Machine-Learning Model to Classify Land Cover Across Southern Ghana',
    level: 'Advanced',
    estimatedHours: 8,
    whatYouWillLearn: [
      'Feature engineering: combining spectral bands (Blue, Green, Red, NIR, SWIR1, SWIR2) with texture metrics',
      'Creating labeled ground-truth training polygons for Water, Forest, Farmland, and Urban surfaces',
      'Training a Random Forest classifier to categorize unknown pixels',
      'Generating an error matrix (confusion matrix) to validate classification accuracy and Kappa coefficient'
    ],
    problemStatement: 'Manual visual inspection of satellite imagery over whole administrative regions is slow and subjective. Machine-learning algorithms can classify millions of pixels in seconds if trained with accurate field samples.',
    scientificBackground: 'Supervised machine learning algorithms like Random Forest construct ensembles of decision trees. Each tree evaluates spectral reflectance vectors across multi-dimensional wavelength feature space to assign land-cover class probabilities.',
    datasetName: 'Sentinel-2 10-Band Multispectral Stack with Ground Truth Polygons',
    datasetDescription: 'Standard Level-2A reflectance bands resampled to 10m grid, accompanied by 200 field-verified ground truth coordinates across the Ashanti and Greater Accra regions.',
    instructions: [
      'Step 1: Inspect the 4 spectral signature curves (Water, Dense Forest, Farmland, Urban Roofs).',
      'Step 2: Allocate 70% of ground-truth polygons for training and 30% for independent validation.',
      'Step 3: Run the classifier simulation to predict land-cover labels across the test tile.',
      'Step 4: Analyze the confusion matrix: identify where the model confounds bare agricultural soil with urban dirt roads.',
      'Step 5: Refine the decision threshold to achieve an overall classification accuracy exceeding 88%.'
    ],
    deliverableDescription: 'A machine-learning classification map, complete confusion matrix with producer/user accuracies, and a technical methodology report.'
  },
  {
    id: 'proj-pulsar-astronomy',
    title: 'Analyse Radio Pulsar Pulses with Kuntunse Telescope Data',
    level: 'Astronomy',
    estimatedHours: 5,
    whatYouWillLearn: [
      'How single-dish radio telescopes like the 32-meter Kuntunse dish capture high-time-resolution voltage data',
      'Applying epoch folding to reveal weak periodic pulses buried inside background radio noise',
      'Measuring Dispersion Measure (DM) to estimate the pulsar’s distance through interstellar ionized plasma',
      'Understanding the role of the Ghana Radio Astronomy Observatory in the African VLBI Network'
    ],
    problemStatement: 'Radio pulsars emit faint pulses that are thousands of times weaker than ambient radio frequency interference (RFI) from cell towers and satellite transmitters. To detect the signal, astronomers must fold thousands of periods synchronously.',
    scientificBackground: 'Pulsars are rapidly spinning neutron stars with extreme magnetic fields. As radio pulses travel through the ionized interstellar medium, lower frequencies travel slower than higher frequencies due to plasma dispersion: Δt = 4.15 × 10³ × DM × (f₁⁻² - f₂⁻²).',
    datasetName: 'GRAO Kuntunse 5 GHz Radio Telemetry Time-Series (Pulsar B0329+54)',
    datasetDescription: 'Digitized baseband radio frequency stream recorded at 5.0 GHz with microsecond timestamp sampling from the 32-meter Kuntunse parabolic antenna.',
    instructions: [
      'Step 1: Load the time-series radio voltage stream.',
      'Step 2: Apply a bandpass filter to eliminate local FM and mobile phone RFI spikes.',
      'Step 3: Test trial folding periods between 0.714500s and 0.714600s to locate the peak signal-to-noise ratio.',
      'Step 4: Measure the pulse profile width and compute the dispersion delay between 4.8 GHz and 5.2 GHz.',
      'Step 5: Compute the estimated distance in parsecs to the pulsar.'
    ],
    deliverableDescription: 'A folded pulse profile plot, calculated rotational period down to 6 decimal places, and an interstellar distance estimate.'
  },
  {
    id: 'proj-space-weather-activity',
    title: 'Correlate Solar Sunspot Numbers with Terrestrial Geomagnetic Storms',
    level: 'Space Weather',
    estimatedHours: 5,
    whatYouWillLearn: [
      'Time-series statistical analysis of international daily sunspot counts (SILSO)',
      'Comparing solar coronal mass ejection (CME) shock arrivals with planetary Kp geomagnetic disturbance index',
      'Identifying peak geomagnetic storm risks for equatorial power grids and submarine communication cables',
      'Understanding space weather vulnerability along the West African power pool transmission network'
    ],
    problemStatement: 'Space weather storms induce destructive currents in long electrical transmission lines and disrupt GNSS positioning used for aviation and maritime navigation. Forecasting requires understanding how solar magnetic complexity translates into geomagnetic storms.',
    scientificBackground: 'When a coronal mass ejection with a southward-pointing magnetic field (Bz < 0) strikes Earth’s magnetopause, magnetic reconnection injects energetic ions into the equatorial ring current, severely depressing the horizontal geomagnetic field component (Dst index).',
    datasetName: 'SILSO Daily Sunspot Series & GFZ Potsdam Planetary Kp Index (2020–2026)',
    datasetDescription: 'Synchronized daily time series tracking solar sunspot numbers, solar wind plasma speed (km/s), IMF Bz (nT), and planetary Kp index values (0 to 9).',
    instructions: [
      'Step 1: Plot daily sunspot numbers alongside the 3-hour Kp index across Solar Cycle 25.',
      'Step 2: Identify the major May 2024 geomagnetic storm event (Kp = 9.0).',
      'Step 3: Calculate the Pearson correlation coefficient between high solar wind velocity and severe geomagnetic disturbances.',
      'Step 4: Assess how equatorial electrojet currents over Ghana behave during intense solar storm conditions.',
      'Step 5: Write an operational advisory briefing for national electricity transmission operators.'
    ],
    deliverableDescription: 'A dual-axis correlation graph, statistical analysis summary, and a risk mitigation checklist for electrical grid operators.'
  }
];
