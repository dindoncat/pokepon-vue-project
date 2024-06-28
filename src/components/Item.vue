<template>
  <!-- Button representing an item -->
  <button class="item" @click="changeShowPokemon">{{ name }}</button>
</template>

<script>
export default {
  name: 'Poke-Item',
  props: {
    // The name of the item
    name: {
      type: String,
      required: true,
    },
    // The unique key of the item
    itemKey: {
      type: String,
      required: true,
    }
  },
  methods: {
    // Method called when the button is clicked
    changeShowPokemon() {
      // Call a method in the parent component to change the showPokemon number
      this.$emit('change-show-pokemon', this.itemKey);
    }
  }
}
</script>

<style>
.item {
  /* Styling for the item button */
  width: 80%;
  min-height: 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
  padding: 10px;
  border: 1px solid #000000;
  border-radius: 5px;
  font-family: 'Arial';
  font-size: large;
  background-color: #f0f0f0;
}
</style>
