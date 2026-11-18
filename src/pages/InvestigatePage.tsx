import React, { useEffect, useMemo, useState } from "react";
import { Activity, AlertCircle, ArrowUpRight, LoaderCircle, MapPin, RefreshCw } from "lucide-react";
import { usePageTitle } from "../lib/usePageTitle";
import {
  EarthScopeLocation,
  EarthScopeTrend,
  EarthScopeVariable,
  getEarthScopeLocations,
  getEarthScopeTrends,
  getEarthScopeVariables,
  isEarthScopeConfigured,
} from "../lib/earthscopeApi";

const formatNumber = (value: number | null | undefined, digits = 3) =>
  value == null || !Number.isFinite(value) ? "Not available" : value.toFixed(digits);

export const InvestigatePage: React.FC = () => {
  usePageTitle("Investigate environmental trends");
  const [locations, setLocations] = useState<EarthScopeLocation[]>([]);
  const [variables, setVariables] = useState<EarthScopeVariable[]>([]);
  const [trends, setTrends] = useState<EarthScopeTrend[]>([]);
  const [location, setLocation] = useState("Accra");
  const [variable, setVariable] = useState("T2M");
  const [loading, setLoading] = useState(false);
  const [catalogueLoading, setCatalogueLoading] = useState(true);
  const [error, setError] = useState("");

  const configured = isEarthScopeConfigured();
  const selectedVariable = useMemo(
    () => variables.find((item) => item.code === variable),
    [variables, variable],
  );
  const result = trends[0];

  useEffect(() => {
    if (!configured) {
      setCatalogueLoading(false);
      return;
    }
    const controller = new AbortController();
    setCatalogueLoading(true);
    Promise.all([
      getEarthScopeLocations(controller.signal),
      getEarthScopeVariables(controller.signal),
    ])
      .then(([nextLocations, nextVariables]) => {
        setLocations(nextLocations);
        setVariables(nextVariables);
        if (nextLocations.length && !nextLocations.some((item) => item.name === location)) {
          setLocation(nextLocations[0].name);
        }
      })
      .catch((err: unknown) => {
        if (err instanceof Error && err.name === "AbortError") return;
        setError(err instanceof Error ? err.message : "Could not load EarthScope.");
      })
      .finally(() => setCatalogueLoading(false));
    return () => controller.abort();
  }, [configured]);

  useEffect(() => {
    if (!configured || !location || !variable) return;
    const controller = new AbortController();
    setLoading(true);
    setError("");
    setTrends([]);
    getEarthScopeTrends(location, variable, controller.signal)
      .then(setTrends)
      .catch((err: unknown) => {
        if (err instanceof Error && err.name === "AbortError") return;
        setError(err instanceof Error ? err.message : "Could not load trend results.");
      })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, [configured, location, variable]);

  const retry = () => {
    if (!configured) return;
    setError("");
    setLoading(true);
    getEarthScopeTrends(location, variable)
      .then(setTrends)
      .catch((err: unknown) => setError(err instanceof Error ? err.message : "Could not load trend results."))
      .finally(() => setLoading(false));
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-8 min-w-0">
      <header className="max-w-3xl space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-ink">
          <Activity className="w-4 h-4" aria-hidden="true" /> EarthScope intelligence
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">Investigate environmental trends</h1>
        <p className="text-ink-2 leading-relaxed">
          Explore long-term climate signals for five Ghanaian locations using NASA POWER monthly data.
          Choose a place and a variable to inspect the existing statistical trend analysis.
        </p>
      </header>

      {!configured && (
        <section className="rounded-2xl border border-line bg-surface p-5 sm:p-6 space-y-3" aria-labelledby="connection-title">
          <div className="flex items-center gap-2 text-amber-ink">
            <AlertCircle className="w-5 h-5" aria-hidden="true" />
            <h2 id="connection-title" className="font-bold text-ink">EarthScope connection is being prepared</h2>
          </div>
          <p className="text-sm text-ink-2 leading-relaxed">
            This investigation page is ready, but the EarthScope API has not been deployed or connected yet.
            The existing Learn and Explore experiences remain available while the connection is completed.
          </p>
          <p className="text-xs text-ink-3">No sample or synthetic results are shown here.</p>
        </section>
      )}

      {configured && (
        <>
          <section className="grid sm:grid-cols-2 gap-4" aria-label="Analysis controls">
            <div className="bg-surface border border-line rounded-xl p-4 space-y-2">
              <label htmlFor="earthscope-location" className="block text-sm font-semibold text-ink">
                <MapPin className="inline w-4 h-4 mr-1" aria-hidden="true" /> Study location
              </label>
              <select
                id="earthscope-location"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                disabled={catalogueLoading || locations.length === 0}
                className="w-full bg-page border border-line-strong rounded-lg px-3 py-3 text-base text-ink"
              >
                {locations.map((item) => <option key={item.name} value={item.name}>{item.name}</option>)}
              </select>
            </div>
            <div className="bg-surface border border-line rounded-xl p-4 space-y-2">
              <label htmlFor="earthscope-variable" className="block text-sm font-semibold text-ink">Climate variable</label>
              <select
                id="earthscope-variable"
                value={variable}
                onChange={(event) => setVariable(event.target.value)}
                disabled={catalogueLoading || variables.length === 0}
                className="w-full bg-page border border-line-strong rounded-lg px-3 py-3 text-base text-ink"
              >
                {variables.map((item) => <option key={item.code} value={item.code}>{item.label}</option>)}
              </select>
            </div>
          </section>

          {selectedVariable && (
            <p className="text-xs text-ink-3">
              {selectedVariable.description}. Unit: {selectedVariable.unit}. Source: NASA POWER monthly product.
            </p>
          )}

          {error && (
            <div className="rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-800" role="alert">
              <div className="flex items-center justify-between gap-3">
                <span>{error}</span>
                <button onClick={retry} className="inline-flex items-center gap-1 font-semibold underline">
                  <RefreshCw className="w-3.5 h-3.5" aria-hidden="true" /> Retry
                </button>
              </div>
            </div>
          )}

          {loading || catalogueLoading ? (
            <div className="flex items-center gap-2 text-sm text-ink-3 py-8" role="status">
              <LoaderCircle className="w-4 h-4 animate-spin" aria-hidden="true" /> Loading climate analysis...
            </div>
          ) : result ? (
            <section className="space-y-4" aria-labelledby="trend-title">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h2 id="trend-title" className="text-xl font-bold text-ink">{location}: {selectedVariable?.label ?? variable}</h2>
                  <p className="text-xs text-ink-3">Analysis period: {result.first_year} to {result.last_year}</p>
                </div>
                <span className="rounded-full bg-surface-2 px-3 py-1 text-xs font-semibold text-ink-2">{result.evidence_class.replaceAll("_", " ")}</span>
              </div>
              <div className="grid sm:grid-cols-3 gap-3">
                <article className="bg-surface border border-line rounded-xl p-4 space-y-1">
                  <p className="text-xs text-ink-3">Trend direction</p>
                  <p className="text-xl font-bold text-ink capitalize">{result.mk_trend}</p>
                </article>
                <article className="bg-surface border border-line rounded-xl p-4 space-y-1">
                  <p className="text-xs text-ink-3">Sen's slope per decade</p>
                  <p className="text-xl font-bold text-ink">{formatNumber(result.sen_per_decade)} <span className="text-xs font-normal">{result.unit}</span></p>
                </article>
                <article className="bg-surface border border-line rounded-xl p-4 space-y-1">
                  <p className="text-xs text-ink-3">FDR-adjusted p-value</p>
                  <p className="text-xl font-bold text-ink">{formatNumber(result.mk_p_fdr, 4)}</p>
                </article>
              </div>
              <div className="rounded-xl border border-line bg-surface p-4 space-y-2">
                <h3 className="font-semibold text-ink">How to read this result</h3>
                <p className="text-sm text-ink-2 leading-relaxed">
                  {result.significant_fdr
                    ? "This trend remains statistically significant after false-discovery-rate correction. Statistical significance does not establish the cause of the change."
                    : "This result does not pass the false-discovery-rate significance threshold. It should not be described as a statistically significant long-term trend."}
                </p>
                <p className="text-xs text-ink-3">
                  NASA POWER values are gridded estimates, not direct station observations. This is a location-level time series, not a continuous map of Ghana.
                </p>
              </div>
            </section>
          ) : !error ? (
            <p className="text-sm text-ink-3 py-6">No trend result is available for this selection.</p>
          ) : null}
        </>
      )}

      <div className="border-t border-line pt-5 flex items-center justify-between gap-3 text-xs text-ink-3">
        <span>EarthScope scientific analysis, presented through LumosX.</span>
        <span className="inline-flex items-center gap-1"><ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" /> Method details will be linked here.</span>
      </div>
    </div>
  );
};
