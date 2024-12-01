import Image from "next/image"

import styles from "../../styles/Pokemon.module.css"

interface Props {
    params: {idpokemon: number}
}

export default async function PokemonsDetalhes({params}: Props) {
    const id = params.idpokemon
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const pokemon = await res.json()
    

    return (
        <>
            <div className={styles.pokemon_container}>
                <h1 className={styles.title}>{pokemon.name}</h1>
                <Image src={`https://img.pokemondb.net/sprites/home/normal/${pokemon.name}.png`} width="200" height="200" alt={pokemon.name}/>
                <div>
                    <p>#{pokemon.id}</p>
                </div>
                <div>
                    <h3>Tipo: </h3>
                    <div className={styles.types_container}>
                        {pokemon.types.map((item: {
                            type: {
                                name: string
                            }
                        }, index: number) => (
                            <span key={index} className={`${styles.type} ${styles['type_' + item.type.name]}`}>{item.type.name}</span>
                        ))}
                    </div>
                </div>
                <div className={styles.data_container}>
                    <div className={styles.data_height}>
                        <h4>Altura: </h4>
                        <p>{pokemon.height * 10} cm</p>
                    </div>
                    <div className={styles.data_weight}>
                        <h4>Peso: </h4>
                        <p>{pokemon.weight / 10} kg</p>
                    </div>
                </div>
            </div>
        </>
    )
}