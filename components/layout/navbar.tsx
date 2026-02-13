import Link from "next/link";
import { Store } from "@/assets/icons";
import { User } from "@/assets/icons";
import { Search } from "@/assets/icons";

const Navbar = () => {
    return (
        <header className="flex justify-between items-center px-10 py-5">
            <Link href="" className="text-4xl">ShopWave</Link>
            <nav className="flex gap-5">
                <Link href="">Home</Link>
                <Link href="">Shop</Link>
                <Link href="">Products</Link>
                <Link href="">Contact us</Link>
            </nav>
            <div className="flex gap-5">
                <Link href="">
                    <Search />
                </Link>
                <Link href="">
                    <User />
                </Link>
                <Link href="">
                    <Store />
                </Link>
            </div>
        </header>
    );
}
 
export default Navbar;