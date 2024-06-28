<template>
  <div class="details">
    <p>{{ details }}</p> <!-- Display the value of the 'details' prop -->
  </div>
</template>

<script>
export default {
  name: 'Details-Card', // Component name
  props: {
    details: {
      type: String, // The 'details' prop should be of type String
      required: true, // The 'details' prop is required
      default: '', // Provide a default value for the 'details' prop
    },
  },
}   
</script>

<style scoped>
.details {
  margin-top: 10px;
  width: 200px;
  height: 150px;
  border: 2px solid #2f2e2e;
  border-radius: 4%;
  background-color: #ffffff;
  overflow-y: auto;
  padding: 10px;
  font-family: 'Arial';
  font-size: medium;
  font-weight: bold;
}
</style>