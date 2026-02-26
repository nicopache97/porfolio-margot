interface FileteProps {
    className?: string
    width?: number
}

/** Herb-themed fileteado ornament with leaf motifs */
export function FileteHierbas({ className = "", width = 200 }: FileteProps) {
    const h = width * 0.2
    return (
        <svg
            viewBox="0 0 200 40"
            width={width}
            height={h}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-hidden="true"
        >
            {/* Central Herb Leaf */}
            <path
                d="M100 5 C105 15, 115 20, 100 35 C85 20, 95 15, 100 5 Z"
                className="fill-primary/20"
            />
            <path
                d="M100 5 L100 35"
                className="stroke-primary"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            <path
                d="M100 15 Q108 18, 112 15"
                className="stroke-primary"
                strokeWidth="1"
                strokeLinecap="round"
            />
            <path
                d="M100 22 Q92 25, 88 22"
                className="stroke-primary"
                strokeWidth="1"
                strokeLinecap="round"
            />

            {/* Left Symmetrical Flourish */}
            <path
                d="M90 20 C70 20, 60 5, 45 15 C30 25, 40 35, 20 30"
                className="stroke-primary/70"
                strokeWidth="1.2"
                strokeLinecap="round"
                fill="none"
            />
            <path
                d="M85 25 C75 35, 55 35, 40 25 C25 15, 15 25, 5 20"
                className="stroke-primary/40"
                strokeWidth="1"
                strokeLinecap="round"
                strokeDasharray="2 2"
                fill="none"
            />

            {/* Right Symmetrical Flourish (Mirror) */}
            <path
                d="M110 20 C130 20, 140 5, 155 15 C170 25, 160 35, 180 30"
                className="stroke-primary/70"
                strokeWidth="1.2"
                strokeLinecap="round"
                fill="none"
            />
            <path
                d="M115 25 C125 35, 145 35, 160 25 C175 15, 185 25, 195 20"
                className="stroke-primary/40"
                strokeWidth="1"
                strokeLinecap="round"
                strokeDasharray="2 2"
                fill="none"
            />

            {/* Decorative Buds/Dots */}
            <circle cx="45" cy="15" r="2" className="fill-primary/40" />
            <circle cx="155" cy="15" r="2" className="fill-primary/40" />
            <circle cx="20" cy="30" r="1.5" className="fill-primary" />
            <circle cx="180" cy="30" r="1.5" className="fill-primary" />
            <circle cx="100" cy="5" r="2" className="fill-primary" />
        </svg>
    )
}
