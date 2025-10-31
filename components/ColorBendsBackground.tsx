export default function ColorBendsBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <svg
        className="h-full w-full blur-2xl opacity-60 dark:opacity-50"
        viewBox="0 0 1200 800"
        aria-hidden="true"
        role="img"
      >
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5B8CFF" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#9bb6ff" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="g2" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5B8CFF" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#bfe0ff" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="g3" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#5B8CFF" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.0" />
          </linearGradient>
          <filter id="softBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="30" />
          </filter>
        </defs>
        <g filter="url(#softBlur)">
          <path
            d="M0,200 C300,150 300,350 600,300 C900,250 900,450 1200,400 L1200,0 L0,0 Z"
            fill="url(#g1)"
          />
          <path
            d="M0,500 C300,460 300,640 600,600 C900,560 900,720 1200,680 L1200,0 L0,0 Z"
            fill="url(#g2)"
          />
          <path
            d="M0,740 C300,710 300,770 600,760 C900,750 900,790 1200,780 L1200,0 L0,0 Z"
            fill="url(#g3)"
          />
        </g>
      </svg>
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/10 to-background" />
    </div>
  );
}
