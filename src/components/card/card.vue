<script setup>
const props = defineProps(['lists', 'hasGift', 'isBlog', 'isSingle'])

</script>
<template>
  <div class="card" v-for="list in props.lists" :key="list.id">
    <div class="card--single" v-if="isSingle">
      <figure class="img-wrapper">
        <img class="img" :src="list.img" alt="">
      </figure>
    </div>
    <div v-else class="card--multi-content">
      <figure class="img-wrapper">
        <img class="img" :src="list.img" alt="">
      </figure>
      <div class="card__blog" v-if="isBlog">
        <span class="badge">{{ list.category }}</span>
        <p class="card__blog--title">{{ list.title }}</p>
        <p class="card__blog--description">{{ list.description }}</p>
      </div>
      <div v-else class="card__info">
        <div class="card__title">{{ list.name }}</div>
        <div class="card__wrapper">
          <span class="card__sub-info">{{ list.genre ? `Genre: ${list.genre}` : `Product: ${list.product}` }}</span>
          <span class="card__sub-info">{{ list.age ? `Age: ${list.age}` : list.size ? `Size: ${list.size}` : null }}</span>
        </div>
        <div class="card__price">{{ list.price }} VND</div>
        <div v-if="hasGift" class="card__gift">Free Toys & Stickers</div>
      </div>
    </div>
  </div>
</template>