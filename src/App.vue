<script setup>
//import HelloWorld from './components/HelloWorld.vue'
// import Header from './components/header/header.vue';
import Pets from './constant/pets'
import Products from './constant/products'
import Blogs from './constant/blogs'
import Sellers from './constant/sellers'

import Hero from './components/hero/hero.vue';
import Grid from './components/grid/grid.vue'
import { reactive, } from 'vue'

const petsData = reactive(Pets)
const productsData = reactive(Products)
const blogsData = reactive(Blogs)
const sellersData = reactive(Sellers)
</script>

<template>
  <div>
    <!-- <HelloWorld msg="Vite + Vue" /> -->
    <Hero />
    <Grid :items="petsData" :hasGift="false" :isBlog="false">
      <div class="section__header">
        <div class="section__title">
          <div class="title">What's new?</div>
          <span class="subtitle">Take a look at some of our pets</span>
        </div>
        <div class="section__action">
          <button class="button button--outline button--hasIcon button--sm">View More</button>
        </div>
      </div>
    </Grid>
    <Grid :items="productsData" :hasGift="true" :isBlog="false" />
    <Grid :items="blogsData" :hasGift="false" :isBlog="true" />
    <Grid :items="sellersData" :hasGift="false" :isBlog="false" :isSingle="true" />
  </div>
</template>

<style scoped lang="scss">
.section__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0 0 28px 0;
  .section__title {
    .title {
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: left;
      color: black;
    }

    .subtitle {
      color: #003459;
      font-size: 24px;
      font-weight: 700;
      line-height: 36px;
      letter-spacing: 0em;
      text-align: left;

    }
  }
}
</style>
