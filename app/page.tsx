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
    axios.get<{ data: PostProps[] }>('http://localhost:3000/api')
      .then(response => {
        setPosts(response.data.data);
      })
      .catch(error => {
        console.error(error);
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