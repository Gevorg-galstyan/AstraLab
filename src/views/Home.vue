<template>
  <section class="home">
    <h1>Ready for a great User experience?</h1>

    <p>Bring your media to the next level!</p>

    <div class="home_action">
      <v-btn
          rounded
          class="home_action__sign-up action_btn"
          @click="$router.push('/sign-up')"
      >
        Sign Up
      </v-btn>

      <v-btn
          fab
          color="primary"
          class="home_action__sign-in"
          @click="$router.push('/sign-in')"
      >
        <img src="../assets/img/arrow.svg" alt="arrow left">
      </v-btn>
    </div>

    <v-row>
      <img src="../assets/img/home-cover.svg" alt="cover">
    </v-row>
  </section>
</template>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 100%;
}

.home_action {
  margin-top: 27px;
  margin-bottom: 33px;
  text-align: center;
}

.home_action__sign-in {
  width: 48px;
  height: 48px;
}

.home_action__sign-up {
  width: 120px;
  margin-right: 16px;
  background-color: #fff !important;
  color: #000;
}

.home_cover {
  align-self: flex-end;
  width: 100%;
  bottom: 0;
  margin-left: -30px;
}

.home_cover img {
  width: 100%;
}
</style>
