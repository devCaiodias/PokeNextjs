import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logosemfundo.png"

export default function Navbar() {
    return (
        <nav>
            <div>
                <Image src={logo} alt="logo do site" width="90"  />
                <h1>NextPokedex</h1>
            </div>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/Sobre">Sobre</Link></li>
            </ul>
        </nav>
    )
}