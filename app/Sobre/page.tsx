import Image from "next/image"
import charizad from "../../public/charizard.png"
import styles from '../styles/Sobre.module.css'


export default function Sobre() {
    return (
        <div className={styles.sobre}>
                <h1 className={styles.sobreTitle}>NextPokédex</h1>
                <p className={styles.description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vitae accusamus molestiae perferendis veniam. Cupiditate, harum odio! Id quam, aliquid recusandae deserunt atque dolorem culpa aperiam! Commodi minima eveniet dolorem?</p>
                <Image className={styles.charizad} src={charizad} alt="Imagem do charizad" width="300" height="300" />

        </div>
    )
}