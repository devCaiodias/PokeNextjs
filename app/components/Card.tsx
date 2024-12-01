import styles from '../styles/Card.module.css'
import Image from "next/image";
import Link from "next/link";

interface Props {
    pokemon: {
        name: string,
        id: number
    }
}



export default function Card({pokemon}: Props) {

    return (

        <div className={styles.card}>
            <Image src={`https://img.pokemondb.net/sprites/home/normal/${pokemon.name}.png`} width="120" height="120" alt={pokemon.name}/>
            <p className={styles.id}>#{pokemon.id}</p>
            <h3 className={styles.title} key={pokemon.id}>{pokemon.name}</h3>
            <Link href={`/pokemons/${pokemon.id}`} className={styles.btn} >Detallhes</Link>
        </div>
    )
}