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
  all() {
  return  this.allOfMyPokemon;

  }
  get(name) {
    return this.allOfMyPokemon.find((element) => {
      return element.name == name
    })
  }

  spawn(pokemonName) {
    let div = document.createElement('div')
    div.className = 'col s4'
    let currentPoke = this.get(pokemonName);
    let h1 = document.createElement('h4');
    h1.innerText = currentPoke.name
    div.appendChild(h1);
    let hp = document.createElement('h5')
    hp.innerText = "HP " + currentPoke.hp.base_stat
    div.appendChild(hp);

    let attack = document.createElement('h5')
    attack.innerText = "Attack " + currentPoke.attack.base_stat
    div.appendChild(attack);

    let defense = document.createElement('h5')
    defense.innerText = "Defense " + currentPoke.attack.base_stat
    div.appendChild(defense);


    let jimmy = document.createElement('img')
    jimmy.src = currentPoke.photo;
    div.appendChild(jimmy)

    //append jimmy and hp and name to the div
    //append div to the id zoo


    document.getElementById("zoo").appendChild(div)

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

let homer = new Trainer()
// lets make a function to get pokemon data:


// This my axios call
axios.get("https://pokeapi-nycda.firebaseio.com/pokemon/210.json").then((response) => {
  let data = response.data
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
axios.get("https://pokeapi-nycda.firebaseio.com/pokemon/499.json").then((response) => {
  let data = response.data
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
  homer.spawn('pignite')

})
axios.get("https://pokeapi-nycda.firebaseio.com/pokemon/207.json").then((response) => {
  let data = response.data
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
  homer.spawn('gligar')

})

new blalallalalala
