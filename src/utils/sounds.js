// Background music (loops)
export const bgMusic = new Audio("/ai-orb-portfolio/src/assets/sounds/mixkit-romantic-659.mp3");
bgMusic.loop = true;
bgMusic.volume = 0.35;

// Click sound only
export function playUiSound(type, enabled) {
  if (!enabled) return;

  if (type === "click") {
    const audio = new Audio("/ai-orb-portfolio/src/assets/sounds/click.wav");
    audio.volume = 0.4;
    audio.play().catch(() => {});
  }
}
