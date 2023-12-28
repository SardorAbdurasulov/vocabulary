<template>
  <section class="game">
    <div class="game__data">
      <router-link :to="{ name: 'Books', params: { type: 'test' } }" class="game__link">
        <img
          src="@/assets/img/testing-svgrepo-com.svg"
          width="25"
          height="25"
          alt="testing"
        />

        <p>Test</p>
      </router-link>

      <router-link
        :to="{ name: 'Books', params: { type: 'writing' } }"
        class="game__link"
      >
        <img
          src="@/assets/img/writing-hand-skin-1-svgrepo-com.svg"
          width="25"
          height="25"
          alt="writing"
        />
        <p>Writing</p>
      </router-link>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.game {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;

  &__data {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 150px;
  }
  &__link {
    max-width: 300px;
    width: 100%;
    padding: 20px;
    text-align: center;
    border: 2px solid rgb(237, 239, 248);
    border-radius: 5px;
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }

    img {
      width: 80px;
      padding: 10px;
      background-color: rgb(108, 137, 255);
      border-radius: 20px;
    }
    p {
      color: rgb(31, 47, 112);
      font-weight: 700;
      font-size: 20px;
    }
  }
}
</style>
