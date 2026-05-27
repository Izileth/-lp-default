import { useEffect, useRef } from "react";

export default function Home() {
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const el = titleRef.current;
        if (!el) return;
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        requestAnimationFrame(() => {
            el.style.transition = "opacity 0.9s ease, transform 0.9s ease";
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        });
    }, []);

    return (
        <div className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col">
            {/* ── LEFT DOTS — hidden on small mobile ──────────── */}
            <div className="hidden sm:flex absolute left-3 md:left-4 top-1/2 -translate-y-1/2 z-30 flex-col gap-3">
                {[0, 1, 2].map((i) => (
                    <span key={i} className="text-white text-[9px] tracking-widest opacity-60">·</span>
                ))}
            </div>

            {/* ── RIGHT VERTICAL LABEL — hidden on small mobile ── */}
            <div className="hidden sm:flex absolute right-2 md:right-3 top-1/2 -translate-y-1/2 z-30">
                <span
                    className="text-white text-[8px] tracking-[0.25em] uppercase opacity-40 font-light"
                    style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                >
                    About the duo
                </span>
            </div>

            {/* ── GIANT TITLE ─────────────────────────────────── */}
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none px-2">
                <h1
                    ref={titleRef}
                    className="text-white font-black uppercase leading-none select-none text-center"
                    style={{
                        fontSize: "clamp(52px, 16vw, 200px)",
                        letterSpacing: "-0.02em",
                        fontFamily: "'Arial Black', 'Arial', sans-serif",
                    }}
                >
                    DAFT PUNK
                </h1>
            </div>

            {/* ── IMAGE PLACEHOLDER ───────────────────────────── */}
            <div className="absolute inset-0 flex items-end justify-center z-20 pointer-events-none">
                <div
                    className="relative flex items-end justify-center"
                    style={{
                        width: "clamp(260px, 65%, 600px)",
                        height: "clamp(55%, 75%, 85%)",
                    }}
                >
                    <div
                        className="w-full h-full border border-dashed border-white/20 flex items-center justify-center"
                        style={{ background: "rgba(255,255,255,0.03)" }}
                    >
                        <div className="text-center px-4">
                            <div className="text-white/20 text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-2">
                                Image Placeholder
                            </div>
                            <div className="text-white/10 text-[9px] sm:text-[10px] tracking-widest">
                                Adicione a imagem principal aqui
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── BOTTOM SCROLL ICON ──────────────────────────── */}
            <div className="absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1">
                <div className="w-[1px] h-4 bg-white opacity-30" />
                <div className="w-4 h-4 rounded-full border border-white opacity-40 flex items-center justify-center">
                    <div className="w-[3px] h-[3px] rounded-full bg-white opacity-70" />
                </div>
            </div>
        </div>
    );
}
