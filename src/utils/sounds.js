export function playUiSound(type, enabled) {
  if (!enabled) return; // sound off → do nothing

  let src = null;

  if (type === "click") src = "/sounds/click.wav";
  if (type === "section") src = "/sounds/section-change.wav";

  if (!src) return;

  const audio = new Audio(src);
  audio.volume = 0.4; // keep subtle
  audio.play().catch(() => {
    // ignore autoplay errors
  });
}
