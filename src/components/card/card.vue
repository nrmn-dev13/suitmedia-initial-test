<script setup>
const props = defineProps(['pets'])

console.log(props.pets)

</script>
<template>
  <div class="card" v-for="pet in props.pets" :key="pet.id">
    <figure class="img-wrapper">
      <img class="img" :src="pet.img" alt="">
    </figure>
    <div class="card__info">
      <div class="card__title">{{ pet.name }}</div>
      <div class="card__wrapper">
        <span class="card__sub-info">Genre: {{ pet.genre }}</span>
        <span class="card__sub-info">Age: {{ pet.age }} Month</span>
      </div>
      <div class="card__price">{{ pet.price }} VND</div>
    </div>
  </div>
</template>