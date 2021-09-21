import Link from 'next/link'
import Image from 'next/dist/client/image';

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/MD_logo.png" alt="" width={50} height={50}/>
            </div>
            <div className="navlinks">
            <Link href="/"><a> Home </a></Link>
            <Link href="/projects"><a> Projects </a></Link>
            <Link href="/about"><a> About </a></Link>
            </div>
        </nav>
    );
};

export default Navbar;