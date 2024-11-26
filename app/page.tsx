// import styles from "./page.module.css";

import axios from "axios";

type PostProps = {
  map(arg0: (pokemon: PostProps) => import("react").JSX.Element): import("react").ReactNode;
  id: number,
  name: string
}

export default async function Home() {

  const { data } = await axios.get<{ data: PostProps }>('http://localhost:3000/api')
  

  return (
    <div>
      <h1>Podedex</h1>
      <ul>
        {data.data?.map((pokemon: PostProps) => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>

    </div>
  );
}
