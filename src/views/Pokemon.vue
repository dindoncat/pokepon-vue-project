<script>
import PokemonImage from '../components/Image.vue'
import DetailsCard from '../components/Details.vue'
import PropertiesPokemon from '../components/Properties.vue'
import Item from '../components/Item.vue'

export default {
  name: 'Pokemon-Card',
  mounted() {
    this.getAllPokemon();
  },
  components: {
    PokemonImage,
    DetailsCard,
    PropertiesPokemon,
    Item
  },
  data() {
    return {
      url: 'https://pokeapi.co/api/v2/pokemon/',
      pokedex: {}, // Object to store the Pokemon data
      showPokemon: 1 // The currently selected Pokemon to display
    }
  },
  methods: {
    // Method to fetch data for a specific Pokemon
    async getPokemon(num) {
      let response = await fetch(`${this.url}${num.toString()}`);
      const pokemon = await response.json();
      let pokemonName = pokemon['name'];
      let pokemonType = pokemon['types'];
      let pokemonImg = pokemon['sprites']['front_default'];
      response = await fetch(pokemon['species']['url']);
      let pokemonDesc = await response.json();
      pokemonDesc = pokemonDesc["flavor_text_entries"][9]["flavor_text"];
      this.pokedex[num] = {
        name: pokemonName,
        type: pokemonType,
        img: pokemonImg,
        desc: pokemonDesc
      };
    },
    // Method to fetch data for all Pokemon in the Pokedex
    async getAllPokemon() {
      for (let i = 1; i <= 151; i++) {
         await this.getPokemon(i);
      }
    }
  },
}
</script>
<template>
  <div class="main-card">
    <div class="board">
      <!-- Display the image of the currently selected Pokemon -->
      <PokemonImage :show="pokedex[showPokemon]?.img" />
      <!-- Display the properties (types) of the currently selected Pokemon -->
      <PropertiesPokemon v-for="(prop, index) in pokedex[showPokemon]?.type" :key="index" :proper="prop" />
      <!-- Display the details (description) of the currently selected Pokemon -->
      <DetailsCard :details="pokedex[showPokemon]?.desc" />
    </div>
    <div class="board">
      <!-- Display the names of all Pokemon in the Pokedex -->
      <Item v-for="(pokemon, index) in pokedex" :key="index" :itemKey="index" :name="pokemon.name"
        @change-show-pokemon="showPokemon = $event" />
    </div>
  </div>
</template>
<style scoped>
.main-card {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 4px solid #ccc;
  border-radius: 5px;
  width: 700px;
  height: 700px;
  margin: 0 auto;
  margin-top: 60px;
  background: url("./pokeball.jpg") no-repeat;
  background-size: cover;
}
.board {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  overflow-y: auto;
}
</style>
