<script setup>
import Header from '../header/header.vue';
import LogoOne from '../../assets/banner-1.svg'

</script>
<template>
  <section class="section section__hero">
    <div class="top-square"></div>
    <div class="bottom-square"></div>
    <Header />
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
        <div class="mini--box"></div>
        <div class="box--yellow"></div>
        <div class="box--blue"></div>
      </figure>
    </div>
  </section>
</template>
<style scoped lang="scss">
.section__hero {
  background-color: #FCEED5;
  padding: 0 130px 0;
  position: relative;
  overflow: hidden;

  .top-square {
    position: absolute;
    width: 635px;
    height: 635px;
    background-color: #F7DBA7;
    border-radius: 99px;
    z-index: 0;
    transform: rotate(25.23deg);
    top: -105%;
    left: -16%;
  }

  .bottom-square {
    position: absolute;
    width: 635px;
    height: 635px;
    background-color: #F7DBA7;
    opacity: 40%;
    border-radius: 99px;
    z-index: 0;
    transform: rotate(56.47deg);
    bottom: -105%;
    left: 0%;
  }
}

.main--hero {
  display: flex;

  .wrapper {
    display: flex;
    gap: 20px;
  }

  .content {
    width: 50%;
    margin-top: 30px;

    h1 {
      color: #003459;
      font-size: 60px;
      font-weight: 800;
      line-height: 68px;
      letter-spacing: 0em;
      text-align: left;
      position: relative;
      z-index: 0;

      &::before {
        content: '';
        width: 63px;
        height: 63px;
        display: flex;
        background-color: #F7DBA7;
        z-index: -1;
        position: absolute;
        transform: rotate(25.23deg);
        border-radius: 20px;
        top: 5px;
        left: -5px;
      }
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

    .icon-wrapper {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      display: flex;
      border: 1px solid #003459;
      justify-content: center;
      align-items: center;

      .fa-play {
        font-size: 10px;
      }
    }
  }

  .image-wrapper {
    position: relative;
    z-index: 0;

    .box--yellow {
      position: absolute;
      width: 635px;
      height: 635px;
      background-color: #F7DBA7;
      z-index: -1;
      top: 35%;
      border-radius: 99px;
      transform: rotate(25.23deg);
      left: 13%;
    }

    .box--blue {
      position: absolute;
      width: 635px;
      height: 635px;
      background-color: #003459;
      z-index: -2;
      top: 41%;
      border-radius: 99px;
      transform: rotate(14deg);
      left: 9%;
    }

    .mini--box {
      position: absolute;
      width: 27px;
      height: 27px;
      background-color: #F7DBA7;
      z-index: -1;
      top: 15%;
      border-radius: 9px;
      transform: rotate(-22deg);
      left: 22%;

      &::before {
        content: "";
        display: block;
        width: 15px;
        height: 15px;
        background-color: #F7DBA7;
        position: absolute;
        top: -18px;
        border-radius: 6px;
        transform: rotate(45deg);
        left: 42px;
      }

      &::after {
        transform: rotate(-19deg);
        content: "";
        display: block;
        width: 21px;
        height: 21px;
        background-color: #002A48;
        position: absolute;
        top: 5px;
        left: -5px;
        border-radius: 6px;
      }
    }
  }
}
</style>