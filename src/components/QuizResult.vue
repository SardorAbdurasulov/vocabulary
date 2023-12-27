<template>
  <div class="result">
    <div class="result__container">
      <img class="result__crown" src="@/assets/img/crown.svg" alt="crown" />
      <h2 class="result__title">You have finished the questions!</h2>
      <p class="result__total">
        Total Question: <span>{{ props.total }}</span>
      </p>
      <div class="result__data">
        <div class="result__score correct">
          <img class="result__icon" src="@/assets/img/check.svg" alt="correct" />
          <p class="result__text">
            <span>{{ props.correct }}</span>
            Correct
          </p>
        </div>
        <div class="result__score wrong">
          <img class="result__icon" src="@/assets/img/close.svg" alt="wrong" />
          <p class="result__text">
            <span>{{ props.wrong }}</span>
            Wrong
          </p>
        </div>
      </div>

      <ul v-if="props.wrongs.length > 0" class="result__wrongs">
        <li v-for="(wrong, index) in props.wrongs" :key="index" class="result__item">
          <p class="result__item-text">{{ wrong.text }}</p>
          <p class="correct">{{ wrong.answer }}</p>
          <p class="wrong">{{ wrong.worng }}</p>
          <p>
            {{ wrong.description }}
          </p>
        </li>
      </ul>

      <router-link class="result__link" :to="{ name: 'Game' }">Close</router-link>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  total: Number,
  correct: Number,
  wrong: Number,
  wrongs: Array,
});
</script>

<style lang="scss" scoped>
.result {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

  &__container {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    max-width: 300px;
    width: 100%;
    background-color: #fff;
    margin: auto;
    padding: 20px;
    border-radius: 20px;
  }
  &__crown {
    display: block;
    width: 100px;
    margin: 0 auto;
  }
  &__title {
    text-align: center;
    font-size: 18px;
    margin-bottom: 10px;
  }
  &__total {
    text-align: center;
    font-weight: 600;
    font-size: 15px;
    margin-bottom: 20px;

    span {
      color: orange;
    }
  }
  &__data {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
  }
  &__score {
    display: flex;
    margin-right: 20px;
  }
  &__icon {
    width: 20px;
    margin-right: 10px;
  }
  &__text {
    font-size: 14px;
    font-weight: 500;

    span {
      display: block;
      line-height: 80%;
    }
  }
  &__wrongs {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;
    height: 250px;
    overflow-y: auto;
    padding-right: 5px;

    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
    &::-webkit-scrollbar {
      width: 10px;
      background-color: rgba(0, 0, 0, 0.05);
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.05);
      border-radius: 10px;
      border: 2px solid rgba(0, 0, 0, 0.1);
    }
  }
  &__item {
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 10px;

    p {
      font-size: 14px;
    }
  }
  &__item-text {
    font-size: 14px;
    font-weight: 700;
  }
  &__link {
    display: block;
    width: 100%;
    padding: 10px 0;
    text-align: center;
    background-color: rgb(31, 47, 112);
    color: #fff;
    font-weight: 700;
    font-size: 15px;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 10px;
  }
}
.correct {
  color: greenyellow;
}
.wrong {
  color: red;
}
</style>
