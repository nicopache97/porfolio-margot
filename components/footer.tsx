"use client"

import { useEffect, useRef, useState } from "react"
import { FileteOrnament, FileteRule } from "./filete-porteno"

export function Footer() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <footer
      id="contacto"
      ref={ref}
      className={`px-6 py-24 transition-all duration-1000 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        {/* Thank you */}
        <div className="flex flex-col items-center gap-6 text-center">
          <FileteOrnament width={300} />
          <h2 className="font-serif text-5xl font-bold text-foreground md:text-7xl">
            GRACIAS.
          </h2>
          <FileteRule width={180} />
        </div>

        {/* Social Links */}
        <div className="flex gap-8">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:border-primary group-hover:bg-primary/10">
              <svg className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
              </svg>
            </div>
            <span className="text-xs tracking-wider text-muted-foreground transition-colors group-hover:text-primary">
              Instagram
            </span>
          </a>

          <a
            href="https://behance.net"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:border-primary group-hover:bg-primary/10">
              <svg className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
              </svg>
            </div>
            <span className="text-xs tracking-wider text-muted-foreground transition-colors group-hover:text-primary">
              Behance
            </span>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:border-primary group-hover:bg-primary/10">
              <svg className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
            <span className="text-xs tracking-wider text-muted-foreground transition-colors group-hover:text-primary">
              LinkedIn
            </span>
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="flex w-full max-w-md items-center justify-between text-xs text-muted-foreground">
          <span>Margot Castillo</span>
          <span>2026</span>
        </div>
      </div>
    </footer>
  )
}
