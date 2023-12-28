<template>
  <section class="vocabulary">
    <div class="vocabulary__head">
      <h2 class="vocabulary__title">Unit 1</h2>
    </div>

    <ul class="vocabulary__list">
      <li
        v-for="dictionary in dictionaries"
        :key="dictionary.id"
        class="vocabulary__item"
      >
        <div>
          <p class="vocabulary__text">
            <img src="@/assets/img/united-kingdom.png" alt="flag" />
            {{ dictionary.text_en }} <span>({{ dictionary.key }})</span>
          </p>
          <p class="vocabulary__text">
            <img src="@/assets/img/uzbekistan.png" alt="flag" />
            {{ dictionary.text_uz }}
          </p>
        </div>
        <p class="vocabulary__description">
          {{ dictionary.description }}
        </p>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const route = useRoute();
const store = useStore();

let dictionaries = store.state[route.params.book][route.params.unit];
</script>

<style lang="scss" scoped>
.vocabulary {
  &__head {
    background-color: rgb(108, 137, 255);
    padding: 20px;
    border-bottom: 1px solid #fff;
    margin-bottom: 20px;
  }
  &__title {
    text-align: center;
    color: #fff;
  }
  &__list {
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
  }
  &__item {
    width: 100%;
    background-color: #80808033;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 15px;
  }
  &__text {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 10px;
    color: #1f2f70;

    img {
      width: 25px;
      margin-right: 10px;
    }
    span {
      color: orange;
      font-style: italic;
      margin-left: 5px;
    }
  }
  &__description {
    font-size: 16px;
    font-style: italic;
    color: #363636;
  }
}
</style>
