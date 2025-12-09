export function playUiSound(type, enabled) {
  if (!enabled) return;

  let src = null;

  if (type === "click") src = "/ai-orb-portfolio/sounds/click.wav";
  if (type === "section") src = "/ai-orb-portfolio/sounds/section-change.wav";

  if (!src) return;

  const audio = new Audio(src);
  audio.volume = 0.4;

  audio.play().catch(() => {
    // autoplay error ignored
  });
}
