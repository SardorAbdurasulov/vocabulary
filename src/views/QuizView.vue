<template>
  <section class="quiz">
    <div class="quiz__head">
      <h2 class="quiz__title">Unit 1</h2>
    </div>
    <div class="quiz__data">
      <h3>Your Score: <span>20</span></h3>
      <h3>Record: <span>20</span></h3>
    </div>
    <div class="container">
      <div class="quiz__card">
        <p class="quiz__question">Question: <span>1/20</span></p>
        <p class="quiz__question-text">angry</p>
      </div>

      <ul class="quiz__list">
        <li class="quiz__item"><span>A)</span> test</li>
        <li class="quiz__item"><span>B)</span> test</li>
        <li class="quiz__item"><span>C)</span> test</li>
        <li class="quiz__item"><span>D)</span> test</li>
      </ul>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.quiz {
  position: relative;
  &__head {
    background-color: rgb(108, 137, 255);
    padding: 20px;
    border-bottom: 1px solid #fff;
  }
  &__title {
    text-align: center;
    color: #fff;
  }
  &__data {
    display: flex;
    justify-content: center;
    background-color: rgb(108, 137, 255);
    padding: 20px 0 70px 0;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;

    h3 {
      color: #fff;
      margin-right: 50px;

      &:last-child {
        margin-right: 0;
      }
    }
    span {
      color: orange;
    }
  }
  &__card {
    position: absolute;
    top: 28%;
    left: 50%;
    transform: translateX(-50%);
    max-width: 250px;
    width: 100%;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    text-align: center;
  }
  &__question {
    color: rgb(108, 137, 255);
    margin-bottom: 20px;

    span {
      color: orange;
      margin-left: 10px;
    }
  }
  &__question-text {
    font-weight: 700;
    font-size: 18px;
  }
  &__list {
    margin-top: 100px;
  }
  &__item {
    border: 2px solid rgb(237, 239, 248);
    margin-bottom: 10px;
    padding: 15px;
    border-radius: 10px;
    cursor: pointer;

    &:last-child {
      margin-bottom: 0;
    }

    span {
      color: orange;
      margin-right: 10px;
    }
  }
}
</style>
