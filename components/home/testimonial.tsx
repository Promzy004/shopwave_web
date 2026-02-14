import Heading from "../shared/heading";
import TestimonialCard from "./testimonialCard";

const Testimonial = () => {
    return (
        <div className="py-16 bg-[#fafafa]">
            <Heading 
                title="This Is What Our Customers Say" 
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis" 
            />
            <TestimonialCard />
        </div>
    );
}
 
export default Testimonial;