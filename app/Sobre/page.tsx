import Image from "next/image"
import charizad from "../../public/charizard.png"
import styles from '../styles/Sobre.module.css'


export default function Sobre() {
    return (
        <div className={styles.sobre}>
                <h1 className={styles.sobreTitle}>NextPokédex</h1>
                <p className={styles.description}>Este é um projeto de uma Pokédex, inspirado no universo Pokémon, que permite aos usuários visualizar informações detalhadas sobre diferentes Pokémon.</p>
                <Image className={styles.charizad} src={charizad} alt="Imagem do charizad" width="300" height="300" />

        </div>
    )
}