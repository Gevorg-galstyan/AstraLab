<template>
  <section>
    <h1>Sign Up</h1>

    <div class="sign_wrap">
      <div>
        <span class="top_label">Full name</span>

        <v-text-field
            solo
            class="sign_input"
            label="ex. Jhon Doe"
            type="text"
            :rules="[rules.required, rules.name]"
            v-model="auth.name"
        />
      </div>

      <div>
        <span class="top_label">Email</span>

        <v-text-field
            solo
            class="sign_input"
            label="example@acme.com"
            type="email"
            :rules="[rules.required, rules.email]"
            v-model="auth.email"
        />
      </div>

      <div>
        <span class="top_label">Password</span>

        <v-text-field
            solo
            class="sign_input"
            :append-icon="passwordIcon"
            :type="passwordFiledType"
            :rules="[rules.required, rules.password]"
            v-model="auth.password"
            @click:append="showPassword = !showPassword"
        ></v-text-field>
      </div>

      <div>
        <span class="top_label">Repeat password</span>

        <v-text-field
            solo
            class="sign_input"
            :append-icon="passwordRepeatIcon"
            :type="repeatPasswordFiledType"
            :rules="passwordRepeatRule"
            v-model="auth.passwordRepeat"
            @click:append="showPasswordRepeat = !showPasswordRepeat"
        ></v-text-field>
      </div>

      <div class="action_btn_wrap">
        <v-btn
            block
            rounded
            :loading="loader"
            color="primary action_btn"
            :disabled="hasNoValidField"
            @click="signUp"
        >
          Sign Up
        </v-btn>
      </div>

    </div>

    <p class="change_sign-page">
      Already have an account? <br>
      <router-link class="change_page" to="/sign-in">Sign In</router-link>
    </p>
  </section>
</template>

<script>
import {rules} from "@/services/validation.service";
import {StorageService} from "@/services/storage.service";

export default {
  name: "SignUp",
  data: () => ({
    rules: rules(),
    showPassword: false,
    showPasswordRepeat: false,
    loader: false,
    auth : {
      name: '',
      email: '',
      password: '',
      passwordRepeat: '',
    },
  }),
  computed: {
    passwordFiledType() {
      return this.showPassword ? 'text' : 'password';
    },
    repeatPasswordFiledType() {
      return this.showPasswordRepeat ? 'text' : 'password';
    },
    passwordIcon() {
      return this.showPassword ? 'mdi-eye' : 'mdi-eye-off'
    },
    passwordRepeatIcon() {
      return this.showPasswordRepeat ? 'mdi-eye' : 'mdi-eye-off'
    },
    passwordRepeatRule() {
      return [this.rules.required, () => this.auth.passwordRepeat === this.auth.password || 'Passwords mismatch']
    },
    hasNoValidField() {
      return !([this.auth.name, this.auth.email, this.auth.password, this.auth.passwordRepeat].every(Boolean) &&
          this.auth.passwordRepeat === this.auth.password &&
          typeof this.rules.password(this.password) !== 'string' &&
          typeof this.rules.email(this.email) !== 'string' &&
          typeof this.rules.name(this.name) !== 'string')
    },
  },
  methods: {
    async signUp() {
      this.loading = true;

      try {
        const auth = await StorageService.get('auth');

        if (!auth || this.auth.email.toLowerCase() !== auth?.email) {
          await StorageService.set('auth', this.auth);

          await this.$router.push('/sign-in')
        } else {
          console.log('this user already exist')
        }

      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    }
  },
}
</script>

<style scoped>
.action_btn_wrap {
  margin-top: 15px;
}
</style>
