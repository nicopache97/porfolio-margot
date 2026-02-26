interface FileteProps {
  className?: string
  width?: number
  flip?: boolean
}

/** Horizontal filete porteno ornament — symmetric scrollwork in gold */
export function FileteOrnament({ className = "", width = 320 }: FileteProps) {
  const h = width * 0.18
  return (
    <svg
      viewBox="0 0 320 58"
      width={width}
      height={h}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Centre diamond */}
      <path
        d="M160 8l8 14-8 14-8-14z"
        className="fill-primary/80"
      />
      <path
        d="M160 12l5 10-5 10-5-10z"
        className="fill-background"
      />

      {/* Left scrollwork */}
      <path
        d="M152 22 C140 22 130 10 118 12 C106 14 100 26 88 24 C76 22 72 10 60 12 C48 14 42 26 30 24 C22 22 16 18 8 20"
        className="stroke-primary/70"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M152 22 C140 22 130 34 118 32 C106 30 100 18 88 20 C76 22 72 34 60 32 C48 30 42 18 30 20 C22 22 16 26 8 24"
        className="stroke-primary/70"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Left curls */}
      <circle cx="8" cy="22" r="4" className="stroke-primary/60" strokeWidth="1" fill="none" />
      <circle cx="8" cy="22" r="1.5" className="fill-primary/50" />

      {/* Right scrollwork (mirror) */}
      <path
        d="M168 22 C180 22 190 10 202 12 C214 14 220 26 232 24 C244 22 248 10 260 12 C272 14 278 26 290 24 C298 22 304 18 312 20"
        className="stroke-primary/70"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M168 22 C180 22 190 34 202 32 C214 30 220 18 232 20 C244 22 248 34 260 32 C272 30 278 18 290 20 C298 22 304 26 312 24"
        className="stroke-primary/70"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Right curls */}
      <circle cx="312" cy="22" r="4" className="stroke-primary/60" strokeWidth="1" fill="none" />
      <circle cx="312" cy="22" r="1.5" className="fill-primary/50" />

      {/* Fine inner lines */}
      <path
        d="M40 22 L152 22"
        className="stroke-primary/20"
        strokeWidth="0.5"
      />
      <path
        d="M168 22 L280 22"
        className="stroke-primary/20"
        strokeWidth="0.5"
      />

      {/* Bottom flourish dots */}
      <circle cx="100" cy="38" r="1.2" className="fill-primary/40" />
      <circle cx="130" cy="42" r="1" className="fill-primary/30" />
      <circle cx="160" cy="44" r="1.5" className="fill-primary/50" />
      <circle cx="190" cy="42" r="1" className="fill-primary/30" />
      <circle cx="220" cy="38" r="1.2" className="fill-primary/40" />

      {/* Top flourish dots */}
      <circle cx="100" cy="6" r="1.2" className="fill-primary/40" />
      <circle cx="130" cy="3" r="1" className="fill-primary/30" />
      <circle cx="160" cy="1" r="1.5" className="fill-primary/50" />
      <circle cx="190" cy="3" r="1" className="fill-primary/30" />
      <circle cx="220" cy="6" r="1.2" className="fill-primary/40" />
    </svg>
  )
}

/** Small corner filete curl — use rotated in 4 corners */
export function FileteCorner({ className = "", flip = false }: FileteProps) {
  return (
    <svg
      viewBox="0 0 60 60"
      width={60}
      height={60}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <path
        d="M4 56 C4 30 10 10 56 4"
        className="stroke-primary/40"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M8 56 C8 34 14 14 56 8"
        className="stroke-primary/25"
        strokeWidth="0.8"
        fill="none"
      />
      <circle cx="56" cy="4" r="2.5" className="fill-primary/40" />
      <circle cx="4" cy="56" r="2.5" className="fill-primary/40" />
      {/* inner curl */}
      <path
        d="M12 50 C12 30 22 18 48 12"
        className="stroke-primary/20"
        strokeWidth="0.6"
        fill="none"
      />
    </svg>
  )
}

/** Thin filete rule — a decorative horizontal line */
export function FileteRule({ className = "", width = 200 }: FileteProps) {
  return (
    <svg
      viewBox="0 0 200 12"
      width={width}
      height={width * 0.06}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <line x1="0" y1="6" x2="85" y2="6" className="stroke-primary/30" strokeWidth="0.8" />
      <line x1="115" y1="6" x2="200" y2="6" className="stroke-primary/30" strokeWidth="0.8" />
      <path d="M100 1l5 5-5 5-5-5z" className="fill-primary/60" />
      <circle cx="88" cy="6" r="1.5" className="fill-primary/30" />
      <circle cx="112" cy="6" r="1.5" className="fill-primary/30" />
    </svg>
  )
}
