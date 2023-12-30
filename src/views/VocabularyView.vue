<template>
  <section class="vocabulary">
    <div class="vocabulary__head">
      <h2 class="vocabulary__title">Unit {{ unit }}</h2>
    </div>

    <ul class="vocabulary__list">
      <li
        v-for="dictionary in dictionaries"
        :key="dictionary.id"
        class="vocabulary__item"
      >
        <div>
          <div class="vocabulary__box">
            <p class="vocabulary__text">
              <img src="@/assets/img/united-kingdom.png" alt="flag" />
              {{ dictionary.text_en }} <span>({{ dictionary.key }})</span>
            </p>
            <button
              class="vocabulary__volume"
              @click="speechText(dictionary.text_en, dictionary.description)"
            >
              <i class="bx bx-volume-full"></i>
            </button>
          </div>
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
import TTS from "text-to-speech-offline";
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const route = useRoute();
const store = useStore();

let dictionaries = store.state[route.params.book][route.params.unit];

const unit = computed(() => {
  let unitIndex = Object.keys(store.state[route.params.book]).findIndex(
    (index) => index === route.params.unit
  );
  return unitIndex + 1;
});

function speechText(eng, desc) {
  TTS(eng, "en-GB", 1, 0.9);
  setTimeout(() => {
    TTS(desc, "en-GB", 1, 0.9);
  }, 2000);
}
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
    padding: 0 20px;
  }
  &__item {
    display: block;
    width: 100%;
    background-color: #80808033;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 15px;
  }
  &__box {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__volume {
    border: none;
    background: transparent;
    outline: none;
    font-size: 20px;
    color: #1f2f70;
    cursor: pointer;
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
