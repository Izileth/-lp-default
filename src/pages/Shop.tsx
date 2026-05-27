export default function Shop() {
    const products = [
        { id: 1, name: "Discovery Vinyl", price: "$34.99" },
        { id: 2, name: "Random Access Memories", price: "$39.99" },
        { id: 3, name: "Homework CD", price: "$14.99" },
        { id: 4, name: "Helmet Poster", price: "$19.99" },
    ];

    return (
        <div className="relative w-full min-h-[calc(100vh-64px)] bg-black p-8 flex flex-col items-center">
            <h1 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter my-12">
                Official Shop
            </h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
                {products.map((product) => (
                    <div key={product.id} className="group border border-white/10 p-4 bg-white/5 hover:bg-white/10 transition-all cursor-pointer">
                        <div className="aspect-square bg-white/5 border border-dashed border-white/20 mb-4 flex items-center justify-center">
                            <span className="text-white/20 text-[8px] tracking-[0.3em] uppercase">Product Image</span>
                        </div>
                        <h3 className="text-white text-[10px] tracking-[0.2em] uppercase mb-2 font-bold">{product.name}</h3>
                        <p className="text-white/50 text-[10px] tracking-[0.2em] uppercase">{product.price}</p>
                        <button className="mt-4 w-full py-2 border border-white/20 text-white text-[8px] tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-colors">
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
            
            <div className="mt-20 border-t border-white/10 pt-8 w-full max-w-6xl flex justify-between items-center">
                <span className="text-white/20 text-[8px] tracking-[0.5em] uppercase">Limited Edition releases available soon</span>
                <span className="text-white/40 text-[10px] tracking-[0.2em] uppercase underline cursor-pointer">View all items</span>
            </div>
        </div>
    );
}
