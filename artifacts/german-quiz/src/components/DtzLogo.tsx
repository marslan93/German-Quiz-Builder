export default function DtzLogo({ size = 80 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="DTZ Logo"
    >
      <defs>
        <clipPath id="dtz-clip">
          <circle cx="40" cy="40" r="37" />
        </clipPath>
      </defs>

      {/* Outer ring */}
      <circle cx="40" cy="40" r="39" fill="white" />
      <circle cx="40" cy="40" r="39" fill="none" stroke="#e0e7ff" strokeWidth="1.5" />

      {/* Main background */}
      <circle cx="40" cy="40" r="37" fill="#1e1b4b" />

      {/* German flag stripes at bottom — clipped to circle */}
      <g clipPath="url(#dtz-clip)">
        <rect x="0" y="60" width="80" height="6.5" fill="#111111" />
        <rect x="0" y="66.5" width="80" height="6.5" fill="#CC0000" />
        <rect x="0" y="73" width="80" height="7" fill="#FFCE00" />
      </g>

      {/* Subtle top highlight arc */}
      <ellipse cx="40" cy="22" rx="20" ry="6" fill="white" fillOpacity="0.06" />

      {/* DTZ text */}
      <text
        x="40"
        y="43"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif"
        fontWeight="800"
        fontSize="21"
        letterSpacing="3"
        fill="white"
      >
        DTZ
      </text>
    </svg>
  );
}
