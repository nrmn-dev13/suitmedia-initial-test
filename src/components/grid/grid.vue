<script setup>
import Card from '../card/card.vue';
const props = defineProps(['items', 'hasGift', 'isBlog', 'isSingle'])

</script>
<template>
  <section class="section container mx-auto">
    <slot>

    </slot>
    
    <div class="section__grid">
      <div class="grid" 
      :class="{
        'grid-cols-7 gap-4' : isSingle,
        'grid-cols-4 gap-4' : !isSingle && !isBlog,
        'grid-cols-3 gap-4' : isBlog,
        }"
      >
        <Card :lists="props.items" :hasGift="hasGift" :isBlog="isBlog" :isSingle="isSingle"/>
      </div>
    </div>
  </section>
</template>