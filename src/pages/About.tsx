export default function About() {
    return (
        <div className="relative w-full min-h-screen bg-black pt-24 px-8 pb-8 flex flex-col items-center justify-center">
            <h1 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">
                About the Duo
            </h1>
            <div className="max-w-2xl text-white/70 text-sm md:text-base leading-relaxed tracking-wide text-center uppercase">
                <p className="mb-6">
                    Daft Punk were a French electronic music duo formed in 1993 in Paris by Guy-Manuel de Homem-Christo and Thomas Bangalter.
                </p>
                <p className="mb-6">
                    They achieved popularity in the late 1990s as part of the French house movement; they also had success in the years following, combining elements of house music with funk, techno, disco, indie rock and synth-pop.
                </p>
                <p>
                    They are regarded as one of the most influential acts in dance music history.
                </p>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
                <div className="border border-white/10 p-6 bg-white/5">
                    <h2 className="text-white text-xs tracking-[0.3em] uppercase mb-4">Origins</h2>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest">Paris, France (1993)</p>
                </div>
                <div className="border border-white/10 p-6 bg-white/5">
                    <h2 className="text-white text-xs tracking-[0.3em] uppercase mb-4">Genre</h2>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest">Electronic / House / Disco / Funk</p>
                </div>
            </div>
        </div>
    );
}
