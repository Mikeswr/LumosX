import { DataActivity } from '../types';

export const DATA_ACTIVITIES: DataActivity[] = [
  {
    id: 'ndvi-atewa',
    title: 'Calculate Canopy Health (NDVI) of Atewa Forest Reserve',
    field: 'Remote Sensing & Forestry',
    objective: 'Compute Normalized Difference Vegetation Index (NDVI) from calibrated Sentinel-2 surface reflectance values to evaluate dense forest cover versus degraded mining fringes.',
    difficulty: 'Beginner',
    datasetName: 'Copernicus Sentinel-2 Level-2A (Band 4 Red: 665nm, Band 8 NIR: 842nm)',
    instructions: [
      'Inspect the calibrated surface reflectance values for 5 distinct land-cover sample points extracted across the Atewa Range Forest Reserve in the Eastern Region of Ghana.',
      'Apply the standard remote sensing vegetation equation: NDVI = (NIR - Red) / (NIR + Red).',
      'Classify each pixel based on standard thresholds: High Forest (> 0.65), Degraded Secondary Forest (0.40 - 0.65), Bare Soil/Mining Pit (0.05 - 0.25), Open Water (< 0.05).',
      'Identify which sample sector requires urgent environmental reforestation intervention.'
    ],
    sampleData: [
      { label: 'Point A (Primary Upland Ridge Forest)', value: 0.78, unit: 'NDVI' },
      { label: 'Point B (Secondary Canopy / Cocoa Agroforestry)', value: 0.54, unit: 'NDVI' },
      { label: 'Point C (Active Encroachment & Bare Mud Pit)', value: 0.12, unit: 'NDVI' },
      { label: 'Point D (Rehabilitated Bamboo Buffer)', value: 0.62, unit: 'NDVI' },
      { label: 'Point E (Turbid Sediment Retention Pond)', value: -0.08, unit: 'NDVI' }
    ],
    interactiveCalcType: 'ndvi'
  },
  {
    id: 'sunspots-cycle25',
    title: 'Tracking Solar Sunspot Cycle 25 from SOHO & SDO Counts',
    field: 'Solar Physics & Space Weather',
    objective: 'Analyze international monthly sunspot number data from 2018 through 2026 to track the progression of Solar Cycle 25 toward solar maximum.',
    difficulty: 'Intermediate',
    datasetName: 'SILSO / Royal Observatory of Belgium Sunspot Index Data',
    instructions: [
      'Examine the monthly smoothed International Sunspot Number (ISN) records spanning Solar Cycle 24 minimum through Solar Cycle 25.',
      'Calculate the rate of increase dN/dt between the solar minimum in December 2019 and the peak in 2024-2025.',
      'Compare empirical observations with NOAA/NASA consensus forecasts to determine whether Cycle 25 outperformed initial conservative predictions.'
    ],
    sampleData: [
      { label: '2019-12 (Solar Minimum)', value: 1.8, unit: 'Sunspots' },
      { label: '2021-06 (Ascending Phase)', value: 24.5, unit: 'Sunspots' },
      { label: '2022-12 (Accelerated Growth)', value: 110.0, unit: 'Sunspots' },
      { label: '2024-05 (Historic G5 Solar Storm Month)', value: 171.6, unit: 'Sunspots' },
      { label: '2025-06 (Near Solar Maximum Peak)', value: 164.2, unit: 'Sunspots' }
    ],
    interactiveCalcType: 'sunspots'
  },
  {
    id: 'orbit-pass-tracker',
    title: 'GhanaSat-1 Ground Pass Predictor & Look Angle Calculation',
    field: 'Orbital Mechanics & Telecommunications',
    objective: 'Calculate the maximum elevation angle and acquisition-of-signal (AOS) duration for a satellite passing over the Koforidua ground station.',
    difficulty: 'Intermediate',
    datasetName: 'NORAD Two-Line Element (TLE) Orbital Ephemeris',
    instructions: [
      'Input satellite orbital altitude (410 km LEO circular orbit) and orbital inclination (51.6 degrees).',
      'Compute the slant range distance between ground station and satellite at closest approach.',
      'Calculate the maximum elevation angle above the radio horizon.',
      'Determine the minimum steerable dish angle required to maintain telemetry lock without losing carrier signal.'
    ],
    sampleData: [
      { label: 'Maximum Elevation at Koforidua', value: 72.4, unit: 'degrees' },
      { label: 'Slant Range at Meridian Transit', value: 428.0, unit: 'km' },
      { label: 'Doppler Frequency Offset at AOS', value: 9.8, unit: 'kHz' },
      { label: 'Total Pass Duration above 5° horizon', value: 9.6, unit: 'minutes' }
    ],
    interactiveCalcType: 'orbit-pass'
  },
  {
    id: 'atmosphere-profile',
    title: 'Atmospheric Temperature Profile & Greenhouse Gas Sounding',
    field: 'Atmospheric Physics & Climatology',
    objective: 'Analyze vertical atmospheric temperature soundings from satellite infrared radiometers to identify the tropopause boundary over the Gulf of Guinea.',
    difficulty: 'Advanced',
    datasetName: 'AIRS / NASA Aqua Atmospheric Infrared Sounder',
    instructions: [
      'Examine temperature profiles across atmospheric pressure levels from surface (1013 hPa) up to mesosphere (1 hPa).',
      'Identify the tropopause cold point where environmental lapse rate inverts from negative to positive.',
      'Observe why the tropical tropopause over Ghana is significantly higher and colder (~17 km, -80°C) than the polar tropopause (~9 km, -55°C).'
    ],
    sampleData: [
      { label: 'Surface (1000 hPa)', value: 29.8, unit: '°C' },
      { label: 'Mid-Troposphere (500 hPa, ~5.5 km)', value: -6.2, unit: '°C' },
      { label: 'Tropical Tropopause (100 hPa, ~16.5 km)', value: -79.4, unit: '°C' },
      { label: 'Stratopause Peak (1 hPa, ~50 km)', value: -2.1, unit: '°C' }
    ],
    interactiveCalcType: 'atmosphere-temp'
  }
];
