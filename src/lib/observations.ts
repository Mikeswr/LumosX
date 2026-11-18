// Learner notes about a town. Stored only in this browser, never sent anywhere.
const KEY = 'lumosx.observations.v1';

type Notes = Record<string, string>;

function read(): Notes {
  try {
    const raw = localStorage.getItem(KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

export function getObservation(townId: string): string {
  return read()[townId] ?? '';
}

export function saveObservation(townId: string, text: string): boolean {
  try {
    const notes = read();
    if (text.trim()) notes[townId] = text.trim();
    else delete notes[townId];
    localStorage.setItem(KEY, JSON.stringify(notes));
    return true;
  } catch {
    return false;
  }
}
