//fetch
//
//post

const BASE_URL = 'https://pokeapi.co/api/v2/';

// fetch no async
/*
fetch(BASE_URL + 'pokemon/ditto')
    .then((res) => res.json())
    .then(data => console.log(data));
*/
//fetch asynch

const fetchPokemon = async (pokemon) => {
    try {
        const response =await fetch(BASE_URL+"pokemon/"+pokemon);
        const parsedResponse = await response.json();
        return parsedResponse;

    } catch (err) {
        console.error(err);
    }
}

//obtener pokemon
document.getElementById("get-btn")
    .addEventListener('click', async () => {
        const text = document.getElementById('poke-name').value.toLowerCase();
        const pokemon = await fetchPokemon(text);
        localStorage.setItem('pokemonId', pokemon.id);
        console.log(pokemon.name);
    })

document.addEventListener('DOMContentLoaded', async() =>{
    const storeId = localStorage.getItem('pokemonId');
    const initialId = storeId ? parseInt(storeId):1;
    const pokemon = await fetchPokemon(initialId);
    console.log(pokemon.name);
})


//obtener el anterior
//obtener el siguiente

document.getElementById('previous-btn').addEventListener('click', async ()=>{
    const pokemonId = parseInt(localStorage.getItem('pokemonId'));
    const newIdDown = Math.max(1, pokemonId -1);
    const pokemon = await fetchPokemon(newIdDown);
    localStorage.setItem('newIdDown', pokemon.id);
    console.log(pokemon.name);
})

document.getElementById('next-btn').addEventListener('click', async ()=>{
    const pokemonId = parseInt(localStorage.getItem('pokemonId'));
    const newIdUp = Math.max(1, pokemonId +1);
    const pokemon = await fetchPokemon(newIdUp);
    localStorage.setItem('newIdUp', pokemon.id);
    console.log(pokemon.name);
})

//Post
/*
fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    body: JSON.stringify({
        tittle: 'title1',
        body: 'lorem ipsum dolor sit amet',
        userId :1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
}).then(res => res.json())
        .then(json => console.log(json))*/

//ejercicio
//arreglar el pokemon en localStorage
//manipular el DOM y agregar una tarjeta del pokemon
//el tamaño e info de la tarjeta es a consideracion personal
//la tarjeta debe mantenerse en la pantalla
//la info para la tarjeta puede venir de localStorage - fetch

const CARD_SECTION = document.getElementById('pokeCard');
