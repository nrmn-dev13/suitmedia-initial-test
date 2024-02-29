<script setup>
const props = defineProps(['lists', 'hasGift', 'isBlog', 'isSingle'])
import giftLogo from '../../assets/gift.svg'

</script>
<template>
  <div class="card" :class="{ 'isSingle': isSingle, }" v-for="list in props.lists" :key="list.id">
    <div class="card--single" v-if="isSingle">
      <figure class="img-wrapper">
        <img class="img" :src="list.img" alt="">
      </figure>
    </div>
    <div v-else class="card--multiContent" :class="{
      'isBlog': isBlog,
    }">
      <figure class="img-wrapper">
        <img class="img" :src="list.img" alt="">
      </figure>
      <div class="card__blog" v-if="isBlog">
        <span class="badge">{{ list.category }}</span>
        <p class="card__blog--title">{{ list.title }}</p>
        <p class="card__blog--description">{{ list.description }}</p>
      </div>
      <div v-else class="card__info">
        <div class="card__title">{{ list.name }}</div>
        <div class="card__wrapper">
          <!-- <span class="card__sub-info">{{ list.genre ? `Genre: ${list.genre}` : `Product: ${list.product}` }}</span> -->
          <p class="card__sub-info">
            {{ list.genre ? `Genre: ` : `Product: ` }}
            <span>
              {{ list.genre ? list.genre : list.product }}
            </span>
          </p>
          <p class="card__sub-info" :class="{
            'hasChild': list.size,
          }">
            {{ list.age ? `Age: ` : list.size ? `Size: ` : null }}
            <span>
              {{ list.age ? list.age : list.size ? list.size : null }}
            </span>
          </p>
        </div>
        <div class="card__price">{{ list.price }} VND</div>
        <div v-if="hasGift" class="card__gift">
          <figure class="image-wrapper">
            <img :src="giftLogo" alt="" class="img">
          </figure>
          <span class="gift--text">{{ list.gift }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  padding: 8px;
  border-radius: 12px;
  box-shadow: 0px 4px 28px -2px rgba(0, 0, 0, 0.08);

  &.isSingle {
    box-shadow: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card--single {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card--multiContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &.isBlog {
      .img-wrapper {
        width: 100%;
        height: 260px;
      }

      .card__blog {
        .badge {
          padding: 2px 10px;
          border-radius: 28px;
          background-color: #00A7E7;
          color: white;
          font-size: 10px;
          font-weight: 700;
          line-height: 16px;
          letter-spacing: 0em;
          text-align: left;
          margin-bottom: 10px;
          display: inline-block;
        }

        .card__blog--title {
          color: #00171F;
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;
          letter-spacing: 0em;
          text-align: left;
          margin-bottom: 6px;
        }

        .card__blog--description {
          color: #242B33;
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          letter-spacing: 0em;
          text-align: left;

        }
      }
    }

    .img-wrapper {
      width: 100%;
      height: 264px;
      border-radius: 10px;
      overflow: hidden;
      margin-bottom: 16px;

      .img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .card__info {
      width: 100%;

      .card__wrapper {
        display: flex;
        align-items: center;

        .card__sub-info.hasChild {
          margin-left: 20px;

          &::after {
            content: "";
            width: 3px;
            height: 3px;
            background-color: #667479;
            display: flex;
            border-radius: 50%;
            position: absolute;
            left: -10px;
            top: 45%;
            transform: translateX(-50%);
          }
        }
      }

      .card__title {
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
        color: black;
        margin-bottom: 4px;
      }

      .card__price {
        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: left;
        color: black;
      }

      .card__sub-info {
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: left;
        color: #667479;
        position: relative;
        margin-bottom: 4px;

        span {
          font-weight: 700;
        }
      }

      .card__gift {
        margin-top: 10px;
        background-color: #FCEED5;
        border-radius: 8px;
        display: flex;
        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: left;
        color: #002A48;
        padding: 8px 10px;
        align-items: center;
        justify-content: flex-start;
        .gift--text {
          position: relative;
          margin-left: 22px;
          &::after {
            content: "";
            width: 3px;
            height: 3px;
            background-color: #667479;
            display: flex;
            border-radius: 50%;
            position: absolute;
            left: -10px;
            top: 45%;
            transform: translateX(-50%);
          }
        }
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .card--multiContent {
      .img-wrapper {
        height: 164px;
      }

      .card__info {
        .card__title {
          font-size: 14px;
          font-weight: 700;
          line-height: 20px;
        }

        .card__sub-info {
          font-size: 12px;
          font-weight: 500;
          line-height: 18px;
        }

        .card__price {
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;
        }
      }
    }
  }
}
</style>