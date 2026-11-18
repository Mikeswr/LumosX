// Only one narration may play at a time. When a narration starts, any other one that is playing is paused.
let current: HTMLAudioElement | null = null;

export function claimAudio(el: HTMLAudioElement) {
  if (current && current !== el && !current.paused) current.pause();
  current = el;
}

export function releaseAudio(el: HTMLAudioElement) {
  if (current === el) current = null;
}
