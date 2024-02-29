<script setup>
import Logo from '../../assets/logo.svg'
</script>
<template>
  <footer class="footer">
    <section class="section section__footer container mx-auto">
      <div class="subscribe-box">
        <h4 class="title">Register now so you don't miss our programs</h4>
        <div class="subscribe-wrapper">
          <input class="input" type="text" placeholder="Enter your Email">
          <button class="button">Subscribe Now</button>
        </div>
      </div>
      <nav class="footer-nav">
        <ul class="primary-nav">
          <li>
            <a href="" class="link text-blue">Home</a>
          </li>
          <li>
            <a href="" class="link text-blue">Category</a>
          </li>
          <li>
            <a href="" class="link text-blue">About</a>
          </li>
          <li>
            <a href="" class="link text-blue">Contact</a>
          </li>
        </ul>
        <ul class="social-nav">
          <li>
            <a href="" class="link social--link">
              <font-awesome-icon :icon="['fab', 'facebook']" />
            </a>
          </li>
          <li>
            <a href="" class="link social--link">
              <font-awesome-icon :icon="['fab', 'twitter']" />
            </a>
          </li>
          <li>
            <a href="" class="link social--link">
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </a>
          </li>
          <li>
            <a href="" class="link social--link">
              <font-awesome-icon :icon="['fab', 'youtube']" />
            </a>
          </li>
        </ul>
      </nav>
      <ul class="footer--bottom">
        <li>
          <a href="" class="link">
            <img :src="Logo" alt="" class="img">
          </a>
        </li>
        <li>
          <a href="" class="link copyright--link">© 2022 Monito. All rights reserved.</a>
        </li>
        <li>
          <a href="" class="link copyright--link">Terms of Service</a>
          <a href="" class="link copyright--link">Privacy Policy</a>
        </li>
      </ul>
    </section>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background-color: #FCEED5;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  overflow: hidden;

  .footer-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 40px;
    margin-bottom: 40px;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      border-bottom: 1px solid #CCD1D2;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }

  .primary-nav {
    gap: 60px;
    display: flex;
  }

  .social-nav {
    gap: 40px;
    display: flex;
    .social--link {
      color: #003459;
    }
  }

  ul.footer--bottom {
    display: flex;
    justify-content: space-between;
    padding-bottom: 40px;
    position: relative;

    li {
      &:first-child {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -100%);
      }
    }
    .copyright--link {
      color: #667479;
    }
  }

  .section__footer {
    background-color: #FCEED5;
  }

  .subscribe-box {
    background-color: #003459;
    border-radius: 16px;
    padding: 32px;
    display: flex;
    gap: 20px;
    align-items: center;
    margin: 60px 0 40px;

    .title {
      font-size: 24px;
      font-weight: 700;
      line-height: 36px;
      letter-spacing: 0em;
      text-align: left;
      width: 30%;
    }

    .subscribe-wrapper {
      width: 70%;
      background-color: white;
      display: flex;
      padding: 12px;
      box-sizing: border-box;
      border-radius: 14px;
      gap: 12px;

      .input {
        background-color: white;
        border: 1px solid #99A2A5;
        border-radius: 8px;
        flex: 1 1 auto;
        padding: 14px 28px;
        color: #99A2A5;
      }
    }
  }
}</style>