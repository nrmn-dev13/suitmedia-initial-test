<script setup>
import Logo from '../../assets/logo.svg'
</script>
<template>
  <nav>
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
          <font-awesome-icon class="search--icon" :icon="['fas', 'magnifying-glass']" />
          <input class="input--search" type="text" placeholder="Search something here!">
        </div>
      </li>
      <li>
        <button class="button button--nav">Join Community</button>
      </li>
      <li>
        <select class="select--nav" name="currency" id="currency">
          <option value="vnd">VND</option>
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

.button--nav {
  height: 44px;
  width: 203px;
}

.input--wrapper {
  position: relative;
  width: 280px;
  border-radius: 46px;
  overflow: hidden;
  height: 44px;
  padding: 12px 16px;
  .input--search {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    z-index: 0;
    padding: 0 16px 0 42px;
    color: black;
  }
  .search--icon {
    position: relative;
    z-index: 1;
    color: #65747a;
  }
}

// .input--wrapper input {
//   position: absolute;
// }

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
  align-items: center;
  .select--nav {
    color: black;
    background-color: transparent;
  }
}
</style>