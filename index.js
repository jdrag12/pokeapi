import regeneratorRuntime from "regenerator-runtime";

async function getData() {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
    const response = await fetch(url);
    const data = await response.json();
    const pokemon = data.results.map((data, index) => ({
      name: data.name,
      id: index + 1,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index +
        1}.png`
    }));
    displayPokemon(pokemon);
    const input = document.getElementById("form1");
    input.addEventListener("keyup", () => {
      var filter = input.value.toUpperCase();
      var pokedex = document.getElementById("pokedex");
      var li = pokedex.getElementsByTagName("li");
      for (var i = 0; i < li.length; i++) {
        var h2 = li[i].getElementsByTagName("h2")[0];
        if (h2) {
          var txtValue = h2.textContent || h2.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
          } else {
            li[i].style.display = "none";
          }
        }
      }
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

const displayPokemon = pokemon => {
  const pokemonHTMLString = pokemon
    .map(
      pokeman =>
        `<li class="p-3 ">
    <div class="card  pokemon">
        <img class="card-image" src="${pokeman.image}"/>
        <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
        </a>
    </div></li>
        `
    )
    .join("");
  pokedex.innerHTML = pokemonHTMLString;
};

getData();

var pokemon = document.getElementsByClassName("pokemon");
