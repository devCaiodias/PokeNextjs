import { NextResponse } from "next/server"

export async function GET() {
    const maxPokemons = 1025
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${maxPokemons}`)
    const data = await res.json()
    
    data.results.forEach((item: { id: number; }, index: number) => {
        item.id = index + 1
    });

    // return NextResponse.json({props: {
    //     pokemons: data.results
    // }})

    return NextResponse.json({ data : data.results })



}