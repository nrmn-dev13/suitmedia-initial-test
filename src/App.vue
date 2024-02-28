<script setup>
//import HelloWorld from './components/HelloWorld.vue'
// import Header from './components/header/header.vue';
import Pets from './constant/pets'
import Hero from './components/hero/hero.vue';
import Grid from './components/grid/grid.vue'
import {reactive} from 'vue'

const data = reactive(Pets)
</script>

<template>
  <div class="container mx-auto">
    <!-- <HelloWorld msg="Vite + Vue" /> -->
    <Hero />
    <Grid :items="data"/>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
