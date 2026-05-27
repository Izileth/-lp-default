import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
    const [menuOpen, setMenuOpen] = useState(false);

    const leftLinks = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Shop", path: "/shop" },
    ];

    const rightLinks = [
        { name: "Spotify", path: "https://open.spotify.com", external: true },
        { name: "iTunes", path: "https://www.apple.com/itunes", external: true },
        { name: "Deezer", path: "https://www.deezer.com", external: true },
    ];

    return (
        <div className="min-h-screen bg-black text-white">
            {/* ── TOP NAV ─────────────────────────────────────── */}
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 py-4 bg-black/50 backdrop-blur-sm">

                {/* Left links — hidden on mobile */}
                <div className="hidden md:flex items-center gap-4 lg:gap-6">
                    {leftLinks.map((item) => (
                        <Link key={item.name} to={item.path}
                            className="text-white text-[10px] tracking-[0.2em] uppercase font-light hover:opacity-60 transition-opacity">
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Hamburger — visible on mobile only */}
                <button
                    className="md:hidden flex flex-col gap-[5px] p-1 z-50"
                    onClick={() => setMenuOpen((o) => !o)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-5 h-[1px] bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
                    <span className={`block w-5 h-[1px] bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                    <span className={`block w-5 h-[1px] bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
                </button>

                {/* Center logo */}
                <Link to="/" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1">
                    <span className="text-white text-sm font-bold tracking-[0.15em]">D</span>
                    <span className="text-white text-sm font-bold">—</span>
                    <span className="text-white text-sm font-bold tracking-[0.15em]">P</span>
                </Link>

                {/* Right links — hidden on mobile */}
                <div className="hidden md:flex items-center gap-4 lg:gap-6">
                    {rightLinks.map((item) => (
                        <a key={item.name} href={item.path} target="_blank" rel="noopener noreferrer"
                            className="text-white text-[10px] tracking-[0.2em] uppercase font-light hover:opacity-60 transition-opacity">
                            {item.name}
                        </a>
                    ))}
                </div>
            </nav>

            {/* ── MOBILE FULLSCREEN MENU ──────────────────────── */}
            <div className={`
        fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-8
        transition-all duration-500 md:hidden
        ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}>
                {leftLinks.map((item) => (
                    <Link key={item.name} to={item.path}
                        onClick={() => setMenuOpen(false)}
                        className="text-white text-2xl tracking-[0.3em] uppercase font-light hover:opacity-50 transition-opacity">
                        {item.name}
                    </Link>
                ))}
                {rightLinks.map((item) => (
                    <a key={item.name} href={item.path} target="_blank" rel="noopener noreferrer"
                        onClick={() => setMenuOpen(false)}
                        className="text-white text-2xl tracking-[0.3em] uppercase font-light hover:opacity-50 transition-opacity">
                        {item.name}
                    </a>
                ))}
            </div>

            <main>
                <Outlet />
            </main>
        </div>
    );
}
