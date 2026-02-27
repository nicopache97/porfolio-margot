interface FileteProps {
    className?: string
    width?: number
}

/** Herb-themed fileteado ornament with leaf motifs */
export function FileteHierbas({ className = "", width = 200 }: FileteProps) {
    return (
        <img
            src="/images/filete-hierbas.svg"
            alt="Fileteado ornament"
            style={{ width: width + "px", height: "auto" }}
            className={className}
        />
    )
}
