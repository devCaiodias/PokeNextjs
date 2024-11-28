import styles from "./page.module.css";
import Image from "next/image";
import axios from "axios";

import poke from '../public/semfundopoke.png'

import Card from "./components/Card";

type PostProps = {
  map(arg0: (pokemon: PostProps) => import("react").JSX.Element): import("react").ReactNode;
  id: number,
  name: string
}



export default async function Home() { 
  
  const { data } = await axios.get<{ data: PostProps }>('http://localhost:3000/api')

  return (
    <>
      <div className={styles.titles_container}>
        <h1 className={styles.title}>Poké<span>Dex</span></h1>
        <Image src={poke} alt="Pokedex" width="70" />
      </div>

      <div className={styles.pokemon_container}>
        {data.data?.map((pokemon: PostProps) => {
            return <Card key={pokemon.id} pokemon={pokemon} />;
        })}
      </div>
    </>
  );
}
