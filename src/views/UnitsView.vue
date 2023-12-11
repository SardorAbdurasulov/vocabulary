<template>
  <section class="book">
    <div class="book__head">
      <h2 class="book__title">Units</h2>
    </div>

    <div class="container">
      <ul class="book__units">
        <li v-for="unit in 10" :key="unit" class="book__unit">
          <router-link
            :to="{
              name: 'Quiz',
              params: { type: route.params.type, unit },
            }"
            class="book__link"
          >
            <div class="book__data">
              <img
                class="book__icon"
                src="../assets/img/list-svgrepo-com.svg"
                alt="list"
              />
              <p>Unit {{ unit }}</p>
            </div>

            <img
              class="book__arrow"
              src="../assets/img/right-arrow-svgrepo-com.svg"
              alt="arrow right"
            />
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<style lang="scss" scoped>
.book {
  margin-bottom: 20px;

  &__head {
    background-color: rgb(108, 137, 255);
    padding: 20px;
    margin-bottom: 20px;
  }
  &__title {
    text-align: center;
    color: #fff;
  }
  &__unit {
    background-color: rgb(237, 239, 248);
    border-radius: 10px;
    margin-bottom: 15px;

    &:last-child {
      margin-bottom: 0;
    }
  }
  &__link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
  }
  &__data {
    display: flex;
    align-items: center;
  }
  &__icon {
    max-width: 30px;
    width: 100%;
    margin-right: 20px;
  }
  &__arrow {
    max-width: 25px;
  }
  p {
    color: rgb(31, 47, 112);
    font-weight: 700;
    font-size: 18px;
  }
}
</style>
