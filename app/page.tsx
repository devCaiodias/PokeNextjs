'use client'
import styles from "./page.module.css";
import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";

import poke from '../public/semfundopoke.png'

import Card from "./components/Card";

type PostProps = {
  id: number,
  name: string
}

export default function Home() { 
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const maxPokemons = 251;
    axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${maxPokemons}`)
      .then(response => {
        console.log("Dados recebidos:", response.data); // Log dos dados recebidos
        response.data.results.forEach((item: { id: number; }, index: number) => {
          item.id = index + 1
      });
        setPosts(response.data.results); // Certifique-se de que a estrutura está correta
      })
      .catch(error => {
        console.error("Erro ao buscar Pokémon:", error); // Log do erro
      });
  }, []);

  return (
    <>
      <div className={styles.titles_container}>
        <h1 className={styles.title}>Poké<span>Dex</span></h1>
        <Image src={poke} alt="Pokedex" width="70" />
      </div>

      <div className={styles.pokemon_container}>
        {posts.map((pokemon: PostProps) => {
            return <Card key={pokemon.id} pokemon={pokemon} />;
        })}
      </div>
    </>
  );
}