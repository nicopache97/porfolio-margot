interface MateShapeProps {
  children: React.ReactNode
  className?: string
  active?: boolean
}

/**
 * Mate gourd (calabaza) silhouette as a card container.
 * Narrow neck at top, rounded belly at bottom — like the original packaging.
 */
export function MateShape({ children, className = "", active = false }: MateShapeProps) {
  return (
    <div className={`relative flex flex-col items-center ${className}`}>
      {/* SVG shape background */}
      <svg
        viewBox="0 0 180 240"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Mate gourd outline — narrow mouth, wide belly */}
        <path
          d={`
            M 62 8
            C 62 4, 66 0, 90 0
            C 114 0, 118 4, 118 8
            L 118 18
            C 118 22, 116 26, 122 34
            C 138 52, 170 78, 174 120
            C 178 160, 160 210, 130 228
            C 114 238, 66 238, 50 228
            C 20 210, 2 160, 6 120
            C 10 78, 42 52, 58 34
            C 64 26, 62 22, 62 18
            Z
          `}
          className={`transition-all duration-500 ${
            active
              ? "stroke-primary fill-primary/8"
              : "stroke-border fill-card"
          }`}
          strokeWidth="1.5"
        />
        {/* Rim at the top */}
        <ellipse
          cx="90"
          cy="10"
          rx="28"
          ry="5"
          className={`transition-all duration-500 ${
            active ? "stroke-primary/60" : "stroke-border"
          }`}
          strokeWidth="1"
          fill="none"
        />
        {/* Subtle belly highlight */}
        <ellipse
          cx="90"
          cy="145"
          rx="55"
          ry="50"
          className="stroke-primary/10"
          strokeWidth="0.5"
          fill="none"
        />
      </svg>

      {/* Content overlay */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 py-10">
        {children}
      </div>
    </div>
  )
}
