console.log("hola mundo");
import regeneratorRuntime from "regenerator-runtime";

async function getData() {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/1/`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

getData();
