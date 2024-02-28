<script setup>
import Logo from '../../assets/logo.svg'
</script>
<template>
  <nav>
    <ul class="main-nav">
      <li class="nav nav__logo">
        <a href="" class="link">
          <img class="img" :src="Logo" alt="">
        </a>
      </li>
      <li class="nav nav__item">
        <a href="" class="link">
          Home
        </a>
      </li>
      <li class="nav nav__item">
        <a href="" class="link">
          Category
        </a>
      </li>
      <li class="nav nav__item">
        <a href="" class="link">
          About
        </a>
      </li>
      <li class="nav nav__item">
        <a href="" class="link">
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
}

ul.main-nav {
  display: flex;
  gap: 48px;
  margin-right: 36px;
}

ul.secondary-nav {
  display: flex;
  gap: 14px;
}
</style>