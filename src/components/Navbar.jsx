import Link from "next/link";

const Navbar = () => {
    return (
        <div className="bg-lightWhite py-4 shadow-sm">
            <div className="flex items-center justify-between gap-4 container mx-auto">
                <div>
                    <Link className="text-xl font-bold text-primary" href={"/"}>Logo</Link>
                </div>
                <div className="flex items-center gap-8 text-base">
                    <Link href={"/"}>Home</Link>
                    <Link href={"/"}>News</Link>
                    <Link href={"/"}>About</Link>
                    <button className="bg-darkBlack hover:bg-primary duration-200 rounded-md text-white px-3 py-2 text-lg font-medium">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;