import Image from "next/image";
import Link from "next/link";
import man from "../../assets/images/man.png"
import woman from "../../assets/images/woman.png"

const Footer = () => {
    return (
        <footer className="bg-white max-w-7xl mx-auto w-full">
            <div className="flex relative justify-center items-center h-[600px]">
                <Image src={man} alt="man" height={500} className="absolute hidden lg:inline-block md:left-[5%] xl:left-[15%]" />
                <div className="flex items-center flex-col gap-8">
                    <div 
                        className="w-[80%] max-w-[600px] lg:max-w-[1000px] lg:w-[50%] xl:w-[45%] flex flex-col text-center items-center px-4 py-2 bg-white"
                        style={{
                            boxShadow: "0px 40px 30px rgba(0, 0, 0, 0.12)"
                        }}
                    >
                        <h4 className="text-2xl md:text-3xl font-medium mb-4">Subscribe To Our Newsletter</h4>
                        <p className="mb-7 md:w-[80%] text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ea sunt omnis nostrum commodi pariatur esse exercitationem quidem nihil accusamus!</p>
                        <p className="self-start text-lg">michael@ymail.com</p>
                    </div>
                    <button className="text-white bg-black rounded-xl px-6 py-2 text-sm">Subscribe Now</button>
                </div>
                <Image src={woman} alt="woman" height={500} className="absolute hidden lg:inline-block right-0 md:right-[5%] xl:right-[15%]" />
            </div>
            <div className="w-full flex flex-col items-start sm:items-center gap-6 px-10 py-5 border-t border-[#dedfe1]">
                <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <h4 className="text-3xl mb-6 sm:mb-0">ShopWave</h4>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                        <Link href="" >Support Center</Link>
                        <Link href="" >Contact us</Link>
                        <Link href="" >Careers</Link>
                        <Link href="" >Blog</Link>
                        <Link href="" >FAQs</Link>
                    </div>
                </div>
                <p className="py-3 border-t w-full sm:w-auto border-[#dedfe1] sm:py-0 sm:border-t-0">Copyright © 2022 Xpro . All Rights Reseved.</p>
            </div>
        </footer>
    );
}
 
export default Footer;
