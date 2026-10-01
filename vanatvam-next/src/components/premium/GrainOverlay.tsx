export default function GrainOverlay() {
  return (
    <div
      aria-hidden
      className="grain-overlay"
    >
      <svg width="100%" height="100%">
        <filter id="vt-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#vt-grain)" />
      </svg>
    </div>
  );
}
