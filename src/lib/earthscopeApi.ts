const API_BASE = (import.meta.env.VITE_EARTHSCOPE_API_URL ?? "").replace(/\/$/, "");

export type EarthScopeLocation = {
  name: string;
  latitude: number;
  longitude: number;
};

export type EarthScopeVariable = {
  code: string;
  label: string;
  description: string;
  unit: string;
  source: string;
  temporal_resolution: string;
  data_kind: string;
};

export type EarthScopeTrend = {
  location: string;
  variable: string;
  unit: string;
  first_year: number;
  last_year: number;
  sen_per_decade: number | null;
  mk_trend: string;
  mk_p_fdr: number | null;
  significant_fdr: boolean;
  evidence_class: string;
};

async function request<T>(path: string, signal?: AbortSignal): Promise<T> {
  if (!API_BASE) {
    throw new Error("EarthScope is not connected yet. The API address has not been configured.");
  }

  let response: Response;
  try {
    response = await fetch(`${API_BASE}${path}`, {
      headers: { Accept: "application/json" },
      signal,
    });
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") throw error;
    throw new Error("Could not reach EarthScope. Please try again later.");
  }

  if (!response.ok) {
    const message = response.status === 503
      ? "EarthScope data are temporarily unavailable."
      : `EarthScope returned an error (${response.status}).`;
    throw new Error(message);
  }

  return response.json() as Promise<T>;
}

export async function getEarthScopeLocations(signal?: AbortSignal) {
  const result = await request<{ locations: EarthScopeLocation[] }>("/api/v1/locations", signal);
  return result.locations;
}

export async function getEarthScopeVariables(signal?: AbortSignal) {
  const result = await request<{ variables: EarthScopeVariable[] }>("/api/v1/variables", signal);
  return result.variables;
}

export async function getEarthScopeTrends(
  location: string,
  variable: string,
  signal?: AbortSignal,
) {
  const params = new URLSearchParams({ location, variable });
  const result = await request<{ results: EarthScopeTrend[] }>(
    `/api/v1/trends?${params.toString()}`,
    signal,
  );
  return result.results;
}

export function isEarthScopeConfigured() {
  return Boolean(API_BASE);
}
