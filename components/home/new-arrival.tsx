import { div } from "framer-motion/client";
import Heading from "../shared/heading";
import ProductCard from "./productCard";
import image1 from "@/assets/images/product-image.png"

interface IData {
    title: string,
    desc: string,
    ammount: number,
    image: string,
    status: string

}

const NewArrival = () => {

    const categories = ["Men's Fashion", "Women's Fashion"]

    const data: IData[] = [
        {
            title: "shiny Dress",
            desc: "Testing",
            ammount: 23.5,
            image: "test",
            status: "available"
        }
    ]

    return (
        <section className="px-10">
            <Heading title="New Arrivals" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dicta excepturi tenetur repellendus officia exercitationem architecto blanditiis voluptates dolore in." />
            <div className="grid grid-cols-4 gap-8 justify-items-center">
                {Array.from({ length: 5 }).map((_, idx) => (
                    <div key={idx} className="hover:scale-105 duration-300 transition-all">
                        <ProductCard
                            title="Title here" 
                            desc={"Testinggngbngbbg gbngbnbgbg jbgnb"} 
                            amount={9.55}
                            status={"Still Available"}
                            image={image1.src}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
 
export default NewArrival;