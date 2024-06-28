<template>
  <!-- Add the class to get the desired style -->
  <div class="prop" :class="proper.type.name">
    {{ proper.type.name }}
  </div>
</template>

<script>
export default {
  name: 'PropertiesPokemon',
  props: {
    proper: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.prop {
  margin-top: 10px;
  width: 80px;
  height: 30px;
  border: 2px solid #2f2e2e;
  border-radius: 10%;
  padding: 5px;
  font-family: 'Arial';
  text-align: center;
  font-size: medium;
  font-weight: bold;
}

/* Set the text color based on the name */
.normal {
  background-color: beige;
  color: black;
}

.fire {
  background-color: orange;
  color: white;
}

.grass {
  background-color: green;
  color: white;
}

.water {
  background-color: blue;
  color: white;
}

.ice {
  background-color: lightblue;
  color: black;
}

.electric {
  background-color: gold;
  color: black;
}

.fighting {
  background-color: darkred;
  color: white;
}

.flying {
  background-color: skyblue;
  color: black;
}

.bug {
  background-color: yellowgreen;
  color: white;
}

.ghost {
  background-color: purple;
  color: white;
}

.rock {
  background-color: sienna;
  color: white;
}

.ground {
  background-color: burlywood;
  color: black;
}

.steel {
  background-color: silver;
  color: black;
}

.dark {
  background-color: darkgray;
  color: white;
}

.psychic {
  background-color: palevioletred;
  color: white;
}

.fairy {
  background-color: pink;
  color: black;
}

.dragon {
  background-color: teal;
  color: white;
}

.poison {
  background-color: darkviolet;
  color: white;
}
</style>