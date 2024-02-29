<script setup>
import Card from '../card/card.vue';
const props = defineProps(['items', 'hasGift', 'isBlog', 'isSingle', 'sectionName'])

</script>
<template>
  <section class="section section__grid container mx-auto" :class="{'onlyDesktop' : isSingle}">
    <slot>

    </slot>
    <h1>{{ sectionName }}</h1>
    <div class="section__grid">
      <div class="grid gap-4" 
      :class="{
        'col-7' : isSingle,
        'col-4' : !isSingle && !isBlog,
        'col-3' : isBlog,
        }"
      >
        <Card :lists="props.items" :hasGift="hasGift" :isBlog="isBlog" :isSingle="isSingle"/>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section__grid {
  margin-bottom: 60px;
}
</style>