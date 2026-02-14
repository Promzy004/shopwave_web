import ProductCard from "@/components/home/productCard";
import ShopHero from "@/components/shop/shopHero";

const Shop = () => {
    return (
        <div>
            <ShopHero />
            <div className="grid grid-cols-5">
                <div className="flex flex-col gap-4 col-span-1 h-max sticky top-24 bg-purple-500">
                    <h3 className="text-3xl font-semibold mb-2">Filters</h3>
                    <div>
                        <h4 className="font-semibold">sizes</h4>
                        <div></div>
                    </div>
                    <div>
                        <h4 className="font-semibold">Colors</h4>
                        <div></div>
                    </div>
                    <div>
                        <h4 className="font-semibold">Prices</h4>
                        <div></div>
                    </div>
                    <div>
                        <h4 className="font-semibold">Brands</h4>
                        <div></div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-5 col-span-4">
                    {Array.from({ length: 15 }).map((_, idx) => (
                        <ProductCard 
                            key={idx}
                            title={"Rounded Hat test"} 
                            desc={"ffnbnfnmfnfnmfnfnf fknfmnmfnmfnmf mfnfmnfmnfmf fmnfnfmnfmfnf fmnfmfnmfnf fmfnmfnfmnff fmnfmnfmnf fnfmnfmnff"} 
                            amount={90} 
                            status={"Out of stock"} 
                            image={""} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default Shop;