// Let there be URL to API

const baseURL = 'https://pokeapi.co/api/pokemon';
// const pokeInput = document.querySelector('.pokemon-input');
// let pokemonImage = document.querySelector('.pokemon-image')
class Trainer {
  constructor() {

    this.allOfMyPokemon = [];
  }

      // defines method add to Pokemon class
  // it accepts a Person object and adds it to the end
  // of the "allOfMyPokemon" array
  add(pokemon) {
    this.allOfMyPokemon.push(pokemon)
  }

  get(name) {
    return this.allOfMyPokemon.find( (element) => {
      return element.name == name
    })
  }

  spawn(pokemonName){
    let currentPoke = this.get(pokemonName);
    let h1 = document.createElement('h1');
    h1.innerText = currentPoke.name
    document.getElementById("zoo").appendChild(h1);
    let jimmy = document.createElement('img')
    jimmy.src = currentPoke.photo;
    document.getElementById("zoo").appendChild(jimmy)
    // pokemonImage.src = response.data.sprites.front_default;
  }
}

//
class Pokemon {
  constructor(name, hp, attack, defense, abilities, photo) {
    this.name = name
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.abilities = abilities;
    this.photo = photo
  }
}

let homer = new Trainer ()
// lets make a function to get pokemon data:


// This my axios call
axios.get("https://pokeapi-nycda.firebaseio.com/pokemon/210.json").then((response) => {
  let data  = response.data
  console.log(data)
  let pokemon = new Pokemon(
    data.name,
    data.stats[5],
    data.stats[4],
    data.stats[5],
    data.abilities[0].name,
    data.sprites.front_shiny,
  )
  console.log(pokemon)
  homer.add(pokemon)
  homer.spawn('granbull')

})
