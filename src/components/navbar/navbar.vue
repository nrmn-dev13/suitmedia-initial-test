<script setup>
import Logo from '../../assets/logo.svg'
</script>
<template>
  <nav>
    <fa :icon="['far', 'user']"/>

    <ul class="main-nav">
      <li class="nav nav__logo">
        <a href="" class="link text-blue">
          <img class="img" :src="Logo" alt="">
        </a>
      </li>
      <li class="nav nav__item">
        <a href="" class="link text-blue">
          Home
        </a>
      </li>
      <li class="nav nav__item">
        <a href="" class="link text-blue">
          Category
        </a>
      </li>
      <li class="nav nav__item">
        <a href="" class="link text-blue">
          About
        </a>
      </li>
      <li class="nav nav__item">
        <a href="" class="link text-blue">
          Contact
        </a>
      </li>
    </ul>
    <ul class="secondary-nav">
      <li>
        <div class="input--wrapper">
          <input type="text">
        </div>
      </li>
      <li>
        <button>Join Community</button>
      </li>
      <li>
        <select name="cars" id="cars">
          <option value="volvo">VND</option>
          <option value="usd">USD</option>
          <option value="idr">IDR</option>
        </select>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
nav {
  display: flex;
  padding: 30px 0;
  justify-content: space-between;
  align-items: center;
}

.link {
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
}

.main-nav {
  display: flex;
  gap: 48px;
  margin-right: 36px;
  align-items: center;
}

.secondary-nav {
  display: flex;
  gap: 14px;
}
</style>