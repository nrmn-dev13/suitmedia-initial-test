<script setup>
import Card from '../card/card.vue';
const props = defineProps(['items'])

// console.log(props.items)

</script>
<template>
  <section class="section">
    <!-- <p>{{ data }}</p> -->
    <div class="section__header">
      <div class="section__title">
        <div class="title">What's new?</div>
        <span class="subtitle">Take a look at some of our pets</span>
      </div>
      <div class="section__action">
        <button>View More</button>
      </div>
    </div>
    <div class="section__grid">
      <Card :pets="props.items"/>
    </div>
  </section>
</template>
<style scoped lang="scss">
.section__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
</style>