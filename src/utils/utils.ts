/* eslint-disable @typescript-eslint/no-explicit-any */


export function getParent() {
  return import.meta.env.VITE_PARENT;
}

export function setPlayerConfig(player: any) {
  player.setQuality('160p30');
  player.setMuted(false);
  player.setVolume(0.05);
}

export function reloadPage(timeout: number) {
  setTimeout(() => {
    location.reload();
  }, timeout);
}