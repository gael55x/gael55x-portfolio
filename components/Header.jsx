import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header className="py-6 md:py-8 xl:py-10 text-white">
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <h1 className="text-3xl md:text-4xl font-semibold">
                        Gaille<span className="text-accent">.</span>
                    </h1>
                </Link>

                {/* desktop nav && Call Me button*/}
                <div className="hidden lg:flex items-center gap-8">
                    <Nav />
                    <Link href="mailto:gaille.amolong1@gmail.com">
                        <Button className="bg-accent hover:bg-accent/80 text-white rounded-full px-5 py-2 shadow-lg shadow-accent/20 transform hover:-translate-y-1 transition-all">
                            Contact Me
                        </Button>
                    </Link>
                </div>

                {/* mobile navigation */}
                <MobileNav />
            </div>
        </header>
    )
}

export default Header; 