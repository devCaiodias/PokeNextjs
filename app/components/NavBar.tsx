import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logosemfundo.png"

import styles from '../styles/NavBar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <h1>NEXT POKÉDEX</h1>
            </div>
                <Image className={styles.Image} src={logo} alt="logo do site" width="80"  />
            <ul className={styles.link_items}>
                <li><Link className={styles.link} href="/">Home</Link></li>
                <li><Link className={styles.link} href="/Sobre">Sobre</Link></li>
            </ul>
        </nav>
    )
}