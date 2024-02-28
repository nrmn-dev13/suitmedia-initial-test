<script setup>
import FirstImage from '../../assets/banner-2.svg'
import SecondImage from '../../assets/banner-3.svg'
const props = defineProps(['imageLeft'])

</script>
<template>
  <section class="section container mx-auto">
    <div class="banner" :class="{ 'banner-right': !imageLeft }">
      <div v-if="imageLeft" class="banner-content">
        <figure class="image-wrapper">
          <img :src="FirstImage" alt="" class="img">
        </figure>
        <div class="content">
          <h4>One More Friend</h4>
          <h5>Thousand More Fun</h5>
          <p>
            Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We
            have 200+ different pets that can meet your needs!
          </p>
          <div class="wrapper">
            <div class="button button--outline button--hasIcon">View Intro</div>
            <div class="button">Explore Now</div>
          </div>
        </div>
      </div>
      <div v-else class="banner-content">
        <div class="content">
          <h4>One More Friend</h4>
          <h5>Thousand More Fun</h5>
          <p>
            Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We
            have 200+ different pets that can meet your needs!
          </p>
          <div class="wrapper">
            <div class="button button--outline button--hasIcon">View Intro</div>
            <div class="button">Explore Now</div>
          </div>
        </div>
        <figure class="image-wrapper">
          <img :src="SecondImage" alt="" class="img">
        </figure>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.banner {
  background-color: #003459;
  position: relative;
  overflow: hidden;
  border-radius: 20px;

  &.banner-right {
    background-color: #ffb775;

    &::before {
      content: "";
      display: flex;
      width: 782px;
      height: 635px;
      z-index: 0;
      position: absolute;
      background-color: #FCEED5;
      border-radius: 99px;
      transform: rotate(-134.77deg);
      left: -16%;
      top: -55%;
    }

    &::after {
      background-color: #fec792;
      transform: rotate(46.25deg);
      right: -146px;
      left: auto;
      top: 44%;
    }
  }

  &:after {
    content: "";
    display: flex;
    width: 787px;
    height: 787px;
    z-index: 0;
    position: absolute;
    background-color: #002A48;
    border-radius: 99px;
    transform: rotate(28.25deg);
    left: -180px;
    top: 46%;
  }

  &:before {
    content: "";
    display: flex;
    width: 787px;
    height: 787px;
    z-index: 0;
    position: absolute;
    background-color: #FCEED5;
    border-radius: 99px;
    transform: rotate(-62.23deg);
    top: -100%;
    right: -13%;
  }

  .banner-content {
    display: flex;
    justify-content: space-between;

    .image-wrapper {
      width: 50%;
      position: relative;
      z-index: 1;

      img {
        height: 100%;
      }
    }

    .content {
      width: 42%;
      position: relative;
      z-index: 1;
      padding: 64px;

      h4 {
        color: #003459;
        font-size: 52px;
        font-weight: 800;
        line-height: 68px;
        letter-spacing: 0em;
        text-align: right;

      }

      h5 {
        color: #003459;
        font-size: 36px;
        font-weight: 700;
        line-height: 54px;
        letter-spacing: 0em;
        text-align: right;

      }

      p {
        //styleName: Body/12px Medium;
        color: #242B33;
        font-size: 12px;
        font-weight: 500;
        line-height: 18px;
        letter-spacing: 0em;
        text-align: right;

      }

      .wrapper {
        display: flex;
        display: flex;
        justify-content: flex-end;
        gap: 20px;
      }
    }
  }
}
</style>