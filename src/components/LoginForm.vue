<template>
  <form name="login-form" class="signin-form">
    <div class="form-row">
      <label for="email">E-Mail:</label>
      <input type="email" id="email" v-model="input.email" required />
    </div>
    <div class="form-row">
      <label for="password">Passwort:</label>
      <input type="password" id="password" v-model="input.password" required />
    </div>
    <button class="btn" type="submit" @click.prevent="login">Login</button>
  </form>
</template>

<script>
import { SET_AUTHENTICATION, SET_EMAIL } from '../stores/storeconstants'
export default {
  name: 'LoginView',
  data() {
    return {
      input: {
        email: '',
        password: '',
      },
      output: '',
    }
  },
  methods: {
    login() {
      if (this.input.username != '' || this.input.password != '') {
        this.output = 'Authentication complete'
        this.$store.commit(`auth/${SET_AUTHENTICATION}`, true)
        this.$store.commit(`auth/${SET_EMAIL}`, this.input.email)
        this.output = 'Authentication complete.'
      } else {
        this.$store.commit(`auth/${SET_AUTHENTICATION}`, false)
        this.output = 'Username and password can not be empty'
      }
    },
  },
}
</script>
