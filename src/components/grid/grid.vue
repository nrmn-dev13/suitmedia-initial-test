<script setup>
import Card from '../card/card.vue';
const props = defineProps(['items', 'hasGift', 'isBlog', 'isSingle'])

</script>
<template>
  <section class="section">
    <slot>

    </slot>
    
    <div class="section__grid">
      <Card :lists="props.items" :hasGift="hasGift" :isBlog="isBlog" :isSingle="isSingle"/>
    </div>
  </section>
</template>