<script setup>
import Header from '../header/header.vue';
import LogoOne from '../../assets/banner-1.svg'

</script>
<template>
  <section class="section section__hero">
    <Header />
    <!-- <p>
      test
    </p> -->
    <div class="main--hero">
      <div class="content">
        <h1>One More Friend</h1>
        <h2>Thousand More Fun!</h2>
        <p>
          Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We
          have 200+ different pets that can meet your needs!
        </p>
        <div class="wrapper">
          <button class="button button--outline button--hasIcon">View Intro <span class="icon-wrapper"><font-awesome-icon
                :icon="['fas', 'play']" /></span></button>
          <button class="button">Explore Now</button>
        </div>
      </div>
      <figure class="image-wrapper">
        <img :src="LogoOne" alt="">
      </figure>
    </div>
  </section>
</template>
<style scoped lang="scss">
.section__hero {
  background-color: #FCEED5;
  padding: 0 130px 0;
}

.main--hero {
  display: flex;

  .wrapper {
    display: flex;
    gap: 20px;
  }

  .content {
    width: 50%;

    h1 {
      color: #003459;
      font-size: 60px;
      font-weight: 800;
      line-height: 68px;
      letter-spacing: 0em;
      text-align: left;
    }

    h2 {
      color: #003459;
      font-size: 46px;
      font-weight: 700;
      line-height: 60px;
      letter-spacing: 0em;
      text-align: left;
      margin-bottom: 20px;
    }

    p {
      color: #242B33;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: left;
      margin-bottom: 34px;
    }
  }
}
</style>