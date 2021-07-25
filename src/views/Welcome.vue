<template>
  <section class="welcome">
    <h1>Hello,{{ fullName }}!</h1>

    <v-row>
      <img src="../assets/img/welcome-cover.svg" width="100%" alt="cover">
    </v-row>
  </section>
</template>

<script>
import {StorageService} from "@/services/storage.service";

export default {
  name: "Welcome",
  data: () => ({
    fullName: ''
  }),
  async beforeMount() {
    const authData = await StorageService.get('login');

    if (authData) {
      this.fullName = authData.name
    } else {
      await this.$router.push('/sign-in')
    }
  }
}
</script>

<style scoped>
.welcome {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 100%;
}
</style>
