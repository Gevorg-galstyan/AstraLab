<template>
  <section>
    <h1>Sign In</h1>

    <div class="sign_wrap">
      <div>
        <span class="top_label">Email</span>

        <v-text-field
            solo
            class="sign_input"
            label="example@acme.com"
            type="email"
            :rules="[rules.required, rules.email]"
            v-model="email"
        />
      </div>

      <div>
        <span class="top_label">Password</span>

        <v-text-field
            solo
            class="sign_input"
            label="password"
            :append-icon="passwordIcon"
            :type="filedType"
            :rules="[rules.required]"
            v-model="password"
            @click:append="showPassword = !showPassword"
        ></v-text-field>
      </div>

      <div class="action_btn_wrap">
        <v-btn
            block
            rounded
            color="primary action_btn"
            :disabled="hasNoFilledField"
            :loading="loader"
            @click="signIn"
        >
          Sign In
        </v-btn>
      </div>

    </div>

    <p class="change_sign-page">
      Don’t have an account yet? <br>
      <router-link class="change_page" to="/sign-up">Sign Up</router-link>
    </p>

    <v-alert
        v-if="errorText"
        dismissible
        class="error"
        type="error"
        @click.native="errorText =  ''"
    > {{ errorText }} </v-alert>
  </section>
</template>

<script>
import {rules} from "@/services/validation.service";
import {StorageService} from "@/services/storage.service";

export default {
  name: "SignIn",
  data: () => ({
    rules: rules(),
    showPassword: false,
    loader: false,
    errorText: '',
    password: '',
    email: ''
  }),
  computed: {
    filedType() {
      return this.showPassword ? 'text' : 'password';
    },
    passwordIcon() {
      return this.showPassword ? 'mdi-eye' : 'mdi-eye-off'
    },
    hasNoFilledField() {
      return !([this.email, this.password,].every(Boolean) &&
          typeof this.rules.email(this.email) !== 'string')
    },
  },
  beforeMount() {
    StorageService.delete('login')
  },
  methods: {
    async signIn() {
      this.loader = true;

      try {
        const auth = await StorageService.get('auth');

        if (!auth || auth.email !== this.email || auth.password !== this.password) {
          this.errorText = 'Wrong email or password';
        }
        else {
          await StorageService.set('login', auth)

          await this.$router.push('/welcome')
        }
      } catch (err) {
          console.error(err);
      } finally {
        this.loader = false;
      }
    },
  }
}
</script>

<style scoped>
section {
  position: relative;
  height: 100%;
}
.action_btn {
  font-weight: 500;
}

.error {
  position: absolute;
  width: 100%;
  bottom: 0;
  background-color: #FF6683;
  border-radius: 50px;
  text-align: center;
}
</style>
