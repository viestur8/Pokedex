let apiUrl = "https://pokeapi.co/api/v2/pokemon/";
let input = document.querySelector(".pokemon-input");
let pokemonName = document.querySelector(".pokemon-name");
let pokemonImage = document.querySelector(".pokemon-image");
if (pokemonImage && pokemonImage.style) {
  pokemonImage.style.height = '400px';
  pokemonImage.style.width = '600px';
}

function getPokemon() {
  axios.get(apiUrl + input.value)
    .then(function(response) {
      pokemonName.innerHTML = response.data.forms[0].name;
      pokemonImage.src = response.data.sprites.front_default;
    })
    .catch(function(error) {
      pokemonName.innerHTML = "(An error has occurred.)";
      pokemonImage.src = "";
    });
}

let button = document.querySelector(".pokemon-button");
button.addEventListener("click", getPokemon);

// This is addEventListener for menu bar with MAterialize.css

// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.sidenav');
//     var instances = M.Sidenav.init(elems, options);
//   });
//
//   // Or with jQuery

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });
