import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, Compass, Radio, Sun, Satellite } from 'lucide-react';

// 1. ORBIT SIMULATOR
export const OrbitSimulator: React.FC = () => {
  const [altitude, setAltitude] = useState(650); // km
  const [isPlaying, setIsPlaying] = useState(true);
  const [angle, setAngle] = useState(0);

  // Constants
  const G = 6.674e-11;
  const M = 5.972e24; // Earth mass (kg)
  const R_earth = 6371; // km
  const r_total_meters = (R_earth + altitude) * 1000;
  const velocity_ms = Math.sqrt((G * M) / r_total_meters);
  const velocity_kms = (velocity_ms / 1000).toFixed(2);
  const period_minutes = ((2 * Math.PI * Math.sqrt(Math.pow(r_total_meters, 3) / (G * M))) / 60).toFixed(1);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setAngle((prev) => (prev + 1.5) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div>
          <h4 className="text-sm font-semibold text-white flex items-center gap-2">
            <Satellite className="w-4 h-4 text-cyan-400" />
            <span>Interactive Keplerian Orbit & Ground Velocity Simulator</span>
          </h4>
          <p className="text-xs text-slate-400">Simulate orbital mechanics in Low Earth Orbit over Ghana</p>
        </div>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="px-3 py-1 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-cyan-400 rounded transition-colors"
        >
          {isPlaying ? 'Pause Motion' : 'Resume Motion'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Orbital Canvas / Visual */}
        <div className="md:col-span-2 relative h-64 bg-slate-950 rounded-lg border border-slate-800 overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 space-grid-pattern opacity-30" />
          
          {/* Earth */}
          <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 via-emerald-600 to-indigo-900 shadow-lg shadow-blue-500/20 flex items-center justify-center border border-cyan-400/30">
            {/* Africa continent silhouette mock */}
            <div className="text-[10px] font-mono text-cyan-200 font-bold tracking-widest text-center">
              GHANA<br/>
              <span className="text-[8px] text-white/70">5.6°N 0.2°W</span>
            </div>
            {/* Equator line */}
            <div className="absolute inset-x-0 top-1/2 border-t border-cyan-400/40 border-dashed" />
          </div>

          {/* Orbit path */}
          <div
            className="absolute rounded-full border border-cyan-500/30 border-dashed transition-all duration-300 pointer-events-none"
            style={{
              width: `${120 + (altitude / 1000) * 110}px`,
              height: `${120 + (altitude / 1000) * 110}px`,
            }}
          />

          {/* Satellite */}
          <div
            className="absolute transition-transform duration-75 pointer-events-none"
            style={{
              transform: `rotate(${angle}deg) translate(${60 + (altitude / 1000) * 55}px) rotate(-${angle}deg)`,
            }}
          >
            <div className="relative">
              <div className="w-3.5 h-3.5 bg-cyan-400 rounded-sm shadow-md shadow-cyan-400/80 animate-pulse" />
              <div className="absolute -top-1 -left-2 w-1.5 h-5 bg-blue-400/80 rounded-xs" />
              <div className="absolute -top-1 -right-2 w-1.5 h-5 bg-blue-400/80 rounded-xs" />
            </div>
          </div>

          <div className="absolute bottom-2 left-2 text-[10px] font-mono text-slate-500">
            RADIAL DISTANCE: {(R_earth + altitude).toLocaleString()} KM
          </div>
        </div>

        {/* Telemetry Readouts & Sliders */}
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>Orbital Altitude</span>
              <span className="font-mono text-cyan-400 font-semibold">{altitude} km</span>
            </div>
            <input
              type="range"
              min="200"
              max="2000"
              step="50"
              value={altitude}
              onChange={(e) => setAltitude(Number(e.target.value))}
              className="w-full accent-cyan-400 bg-slate-800 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-0.5">
              <span>200 km (VLEO)</span>
              <span>2,000 km (LEO limit)</span>
            </div>
          </div>

          <div className="bg-slate-950/80 p-3 rounded-lg border border-slate-800 space-y-2 text-xs font-mono">
            <div className="flex justify-between">
              <span className="text-slate-400">Orbital Speed:</span>
              <span className="text-cyan-400 font-bold">{velocity_kms} km/s</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Revolution Period:</span>
              <span className="text-emerald-400 font-bold">{period_minutes} min</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Daily Passes:</span>
              <span className="text-amber-400 font-bold">{(1440 / Number(period_minutes)).toFixed(1)} orbits/day</span>
            </div>
          </div>

          <p className="text-[11px] text-slate-400 leading-relaxed">
            Satellites like <strong>GhanaSat-1</strong> and <strong>Sentinel-2</strong> operate in this 400–780 km altitude corridor to maximize spatial image resolution while maintaining a stable multi-year orbit.
          </p>
        </div>
      </div>
    </div>
  );
};

// 2. SPECTRAL BANDS SIMULATOR
export const SpectralBandsSimulator: React.FC = () => {
  const [bandCombo, setBandCombo] = useState<'rgb' | 'nir' | 'swir'>('rgb');

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div>
          <h4 className="text-sm font-semibold text-white">
            Multispectral Band Compositor & Spectral Curves
          </h4>
          <p className="text-xs text-slate-400">Understand how satellites translate invisible infrared wavelengths</p>
        </div>
        <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs">
          <button
            onClick={() => setBandCombo('rgb')}
            className={`px-2.5 py-1 rounded font-medium transition-colors ${
              bandCombo === 'rgb' ? 'bg-cyan-500 text-slate-950 font-semibold' : 'text-slate-400 hover:text-white'
            }`}
          >
            True Color (4-3-2)
          </button>
          <button
            onClick={() => setBandCombo('nir')}
            className={`px-2.5 py-1 rounded font-medium transition-colors ${
              bandCombo === 'nir' ? 'bg-cyan-500 text-slate-950 font-semibold' : 'text-slate-400 hover:text-white'
            }`}
          >
            False Color NIR (8-4-3)
          </button>
          <button
            onClick={() => setBandCombo('swir')}
            className={`px-2.5 py-1 rounded font-medium transition-colors ${
              bandCombo === 'swir' ? 'bg-cyan-500 text-slate-950 font-semibold' : 'text-slate-400 hover:text-white'
            }`}
          >
            SWIR Urban (12-8-4)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Visualized Representation */}
        <div className="relative h-60 rounded-lg overflow-hidden border border-slate-800 flex items-center justify-center p-4">
          {bandCombo === 'rgb' && (
            <div className="w-full h-full rounded bg-gradient-to-tr from-emerald-900 via-amber-950 to-slate-700 flex flex-col justify-between p-4 relative">
              <div className="text-xs font-semibold text-white/90">True Color: Human Eye Perception</div>
              <div className="flex gap-4 text-[11px] text-white/80 bg-black/40 p-2 rounded backdrop-blur-sm">
                <div>Forest: Natural Dark Green</div>
                <div>Water: Deep Blue/Black</div>
                <div>Urban: Grey/Beige</div>
              </div>
            </div>
          )}
          {bandCombo === 'nir' && (
            <div className="w-full h-full rounded bg-gradient-to-tr from-rose-700 via-red-900 to-cyan-900 flex flex-col justify-between p-4 relative">
              <div className="text-xs font-semibold text-white/90">False Color Infrared (NIR mapped to Red)</div>
              <div className="flex gap-4 text-[11px] text-white/90 bg-black/50 p-2 rounded backdrop-blur-sm">
                <div>Forest: Vibrant Bright Red</div>
                <div>Water: Absorbed Pitch Black</div>
                <div>Urban: Cyan/Light Grey</div>
              </div>
            </div>
          )}
          {bandCombo === 'swir' && (
            <div className="w-full h-full rounded bg-gradient-to-tr from-cyan-800 via-orange-950 to-amber-700 flex flex-col justify-between p-4 relative">
              <div className="text-xs font-semibold text-white/90">Shortwave Infrared (Urban & Soil Distinction)</div>
              <div className="flex gap-4 text-[11px] text-white/90 bg-black/50 p-2 rounded backdrop-blur-sm">
                <div>Built-up: Bright Orange/Brown</div>
                <div>Vegetation: Bright Green</div>
                <div>Moisture: Dark Navy</div>
              </div>
            </div>
          )}
        </div>

        {/* Spectral Signature Chart */}
        <div className="space-y-3">
          <div className="text-xs font-semibold text-slate-300">
            Laboratory Spectral Reflectance Curves
          </div>
          <div className="space-y-2 text-xs">
            <div>
              <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                <span className="text-emerald-400 font-medium">Healthy Vegetation (Chlorophyll + Mesophyll)</span>
                <span className="font-mono text-emerald-400">75% NIR Reflectance</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full w-[75%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                <span className="text-amber-400 font-medium">Urban Concrete & Asphalt (Ga North Pokuase)</span>
                <span className="font-mono text-amber-400">22% Reflectance</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-amber-500 h-full w-[22%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                <span className="text-blue-400 font-medium">Clear Lake Water (Lake Volta)</span>
                <span className="font-mono text-blue-400">4% Reflectance</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full w-[4%]" />
              </div>
            </div>
          </div>

          <div className="text-[11px] text-slate-400 pt-2 leading-relaxed">
            By assigning the invisible Near-Infrared band (842 nm) to the computer monitor’s red channel, healthy plant canopy leaps out instantly, allowing environmental scientists to spot deforestation immediately.
          </div>
        </div>
      </div>
    </div>
  );
};

// 3. SOLAR WIND & MAGNETOSPHERE SIMULATOR
export const SolarWindSimulator: React.FC = () => {
  const [solarFlareFlux, setSolarFlareFlux] = useState<number>(35); // 0 to 100
  const kpIndex = Math.min(9, Math.max(1, Math.round((solarFlareFlux / 100) * 8.5 + 0.5)));

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div>
          <h4 className="text-sm font-semibold text-white flex items-center gap-2">
            <Sun className="w-4 h-4 text-amber-400" />
            <span>Solar Wind & Terrestrial Magnetosphere Deflection</span>
          </h4>
          <p className="text-xs text-slate-400">Interact with coronal mass ejection flux and geomagnetic disturbance</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <div className="md:col-span-2 relative h-56 bg-slate-950 rounded-lg border border-slate-800 overflow-hidden flex items-center justify-between px-8">
          {/* Sun on left */}
          <div className="relative">
            <div className={`w-16 h-16 rounded-full bg-amber-400 shadow-xl transition-all ${
              solarFlareFlux > 60 ? 'shadow-amber-500/80 animate-pulse ring-4 ring-amber-300' : 'shadow-amber-500/30'
            } flex items-center justify-center font-bold text-xs text-slate-950`}>
              SUN
            </div>
          </div>

          {/* Particle stream */}
          <div className="flex-1 flex justify-around px-4 overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-amber-300 animate-ping"
                style={{ animationDuration: `${Math.max(0.4, 1.8 - (solarFlareFlux / 100) * 1.4)}s`, animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>

          {/* Earth with magnetic bubble */}
          <div className="relative flex items-center justify-center">
            {/* Bow shock curve */}
            <div
              className={`absolute -left-6 w-24 h-36 border-l-2 rounded-l-full transition-colors ${
                solarFlareFlux > 70 ? 'border-rose-400 animate-pulse' : 'border-cyan-400/80'
              }`}
            />
            {/* Earth */}
            <div className="w-10 h-10 rounded-full bg-blue-500 border border-white/60 flex items-center justify-center text-[8px] font-mono font-bold text-white shadow-md">
              EARTH
            </div>
          </div>
        </div>

        {/* Readouts & Slider */}
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>Solar Wind Plasma Pressure</span>
              <span className="font-mono text-amber-400 font-semibold">{solarFlareFlux}%</span>
            </div>
            <input
              type="range"
              min="5"
              max="100"
              value={solarFlareFlux}
              onChange={(e) => setSolarFlareFlux(Number(e.target.value))}
              className="w-full accent-amber-400 bg-slate-800 rounded-lg cursor-pointer"
            />
          </div>

          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 space-y-2 text-xs font-mono">
            <div className="flex justify-between">
              <span className="text-slate-400">Planetary Kp Index:</span>
              <span className={`font-bold ${kpIndex >= 7 ? 'text-rose-400' : kpIndex >= 5 ? 'text-amber-400' : 'text-emerald-400'}`}>
                Kp = {kpIndex} {kpIndex >= 8 ? '(G4/G5 Extreme)' : kpIndex >= 5 ? '(G1 Minor Storm)' : '(Quiet)'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Solar Wind Speed:</span>
              <span className="text-cyan-400 font-bold">{(350 + (solarFlareFlux / 100) * 450).toFixed(0)} km/s</span>
            </div>
          </div>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            When high-speed solar plasma strikes, Earth’s outer magnetopause compresses from 10 Earth radii down to 6 Earth radii, channeling energetic particles into polar auroral ovals.
          </p>
        </div>
      </div>
    </div>
  );
};

// 4. NDVI CALCULATOR SIMULATOR
export const NdviCalculatorSimulator: React.FC = () => {
  const [nirReflectance, setNirReflectance] = useState(0.65);
  const [redReflectance, setRedReflectance] = useState(0.12);

  const ndvi = Number(((nirReflectance - redReflectance) / (nirReflectance + redReflectance)).toFixed(3));

  let landClass = 'Dense Tropical Canopy / Rainforest';
  let badgeColor = 'text-emerald-400 border-emerald-500/40 bg-emerald-950/40';
  if (ndvi < 0) {
    landClass = 'Open Clear Water Body (e.g. Lake Volta / Gulf of Guinea)';
    badgeColor = 'text-blue-400 border-blue-500/40 bg-blue-950/40';
  } else if (ndvi < 0.2) {
    landClass = 'Impervious Urban Surface / Bare Construction Soil (e.g. Pokuase Interchange)';
    badgeColor = 'text-amber-400 border-amber-500/40 bg-amber-950/40';
  } else if (ndvi < 0.45) {
    landClass = 'Sparse Shrubland / Dry Guinea Savanna';
    badgeColor = 'text-yellow-400 border-yellow-500/40 bg-yellow-950/40';
  }

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
      <div className="border-b border-slate-800 pb-3">
        <h4 className="text-sm font-semibold text-white">
          Interactive NDVI (Normalized Difference Vegetation Index) Calculator
        </h4>
        <p className="text-xs text-slate-400">Formula: NDVI = (NIR - Red) / (NIR + Red)</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>Near-Infrared Reflectance (Band 8: 842nm)</span>
              <span className="font-mono text-cyan-400 font-semibold">{nirReflectance.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0.01"
              max="0.95"
              step="0.01"
              value={nirReflectance}
              onChange={(e) => setNirReflectance(Number(e.target.value))}
              className="w-full accent-cyan-400 bg-slate-800 rounded-lg cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>Visible Red Reflectance (Band 4: 665nm)</span>
              <span className="font-mono text-rose-400 font-semibold">{redReflectance.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0.01"
              max="0.95"
              step="0.01"
              value={redReflectance}
              onChange={(e) => setRedReflectance(Number(e.target.value))}
              className="w-full accent-rose-400 bg-slate-800 rounded-lg cursor-pointer"
            />
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => { setNirReflectance(0.72); setRedReflectance(0.08); }}
              className="text-[11px] px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded text-slate-300"
            >
              Preset: Rainforest
            </button>
            <button
              onClick={() => { setNirReflectance(0.25); setRedReflectance(0.20); }}
              className="text-[11px] px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded text-slate-300"
            >
              Preset: Pokuase Urban
            </button>
            <button
              onClick={() => { setNirReflectance(0.02); setRedReflectance(0.06); }}
              className="text-[11px] px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded text-slate-300"
            >
              Preset: Water
            </button>
          </div>
        </div>

        {/* Calculation Result HUD */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="text-[11px] font-mono text-slate-500 uppercase">Computed Vegetation Index</div>
            <div className="text-3xl font-mono font-bold text-white my-1 tabular-nums">
              {ndvi > 0 ? `+${ndvi.toFixed(3)}` : ndvi.toFixed(3)}
            </div>
            <div className={`inline-block text-xs font-semibold px-2.5 py-1 rounded border mt-2 ${badgeColor}`}>
              {landClass}
            </div>
          </div>
          <p className="text-[11px] text-slate-400 mt-4 leading-relaxed">
            In Pokuase between 2017 and 2025, clearing trees for roads shifted average pixel values from ~0.55 down to ~0.15, marking an unambiguous urban conversion.
          </p>
        </div>
      </div>
    </div>
  );
};

// 5. ANTENNA / KUNTUNSE DISH TRACKING SIMULATOR
export const AntennaArraySimulator: React.FC = () => {
  const [azimuth, setAzimuth] = useState(142);
  const [elevation, setElevation] = useState(48);

  const isLocked = Math.abs(azimuth - 150) < 15 && Math.abs(elevation - 52) < 10;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div>
          <h4 className="text-sm font-semibold text-white flex items-center gap-2">
            <Radio className="w-4 h-4 text-cyan-400" />
            <span>Kuntunse 32-Meter Dish Satellite Tracking Console</span>
          </h4>
          <p className="text-xs text-slate-400">Aim the steerable parabolic dish to lock onto passing orbital telemetry</p>
        </div>
        <div className={`px-2.5 py-1 text-xs font-mono font-semibold rounded ${
          isLocked ? 'bg-emerald-500 text-slate-950 animate-pulse' : 'bg-slate-800 text-slate-400'
        }`}>
          {isLocked ? 'SIGNAL LOCKED (AOS)' : 'SEARCHING CARRIER...'}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Visual Dish mount */}
        <div className="h-56 bg-slate-950 rounded-lg border border-slate-800 relative flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 space-grid-pattern opacity-25" />
          
          {/* Dish Base */}
          <div className="absolute bottom-6 w-20 h-10 bg-slate-800 border border-slate-700 rounded-t-lg" />
          
          {/* Steerable parabolic dish */}
          <div
            className="w-32 h-16 border-4 border-cyan-400 bg-slate-900/90 rounded-b-full shadow-lg shadow-cyan-500/20 flex items-center justify-center relative transition-transform duration-200"
            style={{
              transform: `rotate(${azimuth - 180}deg) scaleY(${Math.max(0.4, elevation / 90)})`,
            }}
          >
            {/* Feed horn */}
            <div className="absolute -top-6 w-1 h-6 bg-cyan-300" />
            <div className="text-[10px] font-mono text-cyan-300">GRAO 32M</div>
          </div>

          <div className="absolute top-2 left-2 text-[10px] font-mono text-slate-400">
            TARGET SATELLITE: AZ 150° / EL 52°
          </div>
        </div>

        {/* Controls */}
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>Azimuth Angle (Compass Bearing)</span>
              <span className="font-mono text-cyan-400 font-semibold">{azimuth}°</span>
            </div>
            <input
              type="range"
              min="0"
              max="360"
              value={azimuth}
              onChange={(e) => setAzimuth(Number(e.target.value))}
              className="w-full accent-cyan-400 bg-slate-800 rounded-lg cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>Elevation Angle (Above Horizon)</span>
              <span className="font-mono text-emerald-400 font-semibold">{elevation}°</span>
            </div>
            <input
              type="range"
              min="5"
              max="90"
              value={elevation}
              onChange={(e) => setElevation(Number(e.target.value))}
              className="w-full accent-emerald-400 bg-slate-800 rounded-lg cursor-pointer"
            />
          </div>

          <p className="text-[11px] text-slate-400 leading-relaxed">
            The Kuntunse 32-meter dish uses precision dual-axis servo drives to align with millimeter accuracy to track satellites in orbit and observe deep space radio masers.
          </p>
        </div>
      </div>
    </div>
  );
};
