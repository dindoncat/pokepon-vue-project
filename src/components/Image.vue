<template>
    <!-- The image element to display the image -->
    <img class="img" :src="show" />
</template>

<script>
export default {
    name: 'Pokemon-Image',
    props: {
        // The source of the image to be displayed
        show: {
            type: String,
            required: true,
            default: '',
        },
    },
};
</script>

<style scoped>
.img {
    /* Styling for the image */
    border: 2px solid #2f2e2e;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    background-color: #ffffff;
    margin-top: 40px;
}
</style>