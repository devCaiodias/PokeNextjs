// import axios from "axios"
import styles from '../styles/Card.module.css'
import Image from "next/image";
import Link from "next/link";



export default function Card({pokemon}) {

    return (

        <div className={styles.card}>
            <Image src={`https://img.pokemondb.net/sprites/home/normal/${pokemon.name}.png`} width="120" height="120" alt={pokemon.name}/>
            <p className={styles.id}>#{pokemon.id}</p>
            <h3 className={styles.title} key={pokemon.id}>{pokemon.name}</h3>
            <Link href={`/pokemon/${pokemon.id}`} className={styles.btn} >Detallhes</Link>
        </div>
    )
}