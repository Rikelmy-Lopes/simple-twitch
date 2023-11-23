/* eslint-disable @typescript-eslint/no-explicit-any */


export function getParent() {
  return import.meta.env.VITE_PARENT;
}

export function setPlayerConfig(player: any) {
  player.setVolume(0.05);
}
