<template>
  <form name="signup-form" class="signin-form" @submit.prevent="signup">
    <div class="form-row">
      <label for="name">Name<span class="required-symbol">⁎</span></label>
      <input type="text" id="name" v-model="input.name" required />
    </div>

    <div class="form-row">
      <label for="email">E-Mail<span class="required-symbol">⁎</span></label>
      <input type="email" id="email" v-model="input.email" required />
    </div>

    <div class="form-row">
      <label for="phone">Telefonnummer</label>
      <input type="phone" id="phone" v-model="input.phone" />
    </div>

    <div class="form-row password-row">
      <label for="password">Passwort<span class="required-symbol">⁎</span></label>
      <span class="info-icon" tabindex="0">
        ℹ
        <span class="tooltip">
          Passwort muss enthalten:
          <br />• mindestens 12 Zeichen <br />• Groß- & Kleinbuchstaben <br />• mindestens 1 Zahl
          <br />• mindestens 1 Sonderzeichen (!, ?, $, %, etc.)
        </span>
      </span>
      <input type="password" id="password" v-model="input.password" required />
    </div>

    <div class="form-row">
      <label for="passwordConfirm"
        >Passwort wiederholen<span class="required-symbol">⁎</span></label
      >
      <input type="password" id="passwordConfirm" v-model="input.passwordConfirm" required />
    </div>

    <p class="required-info">
      <span class="required-symbol">*</span> Pflichtfeld (bitte ausfüllen)
    </p>

    <p v-if="error" class="error">{{ error }}</p>

    <button class="btn" type="submit">Registrieren</button>
  </form>
</template>

<script setup>
import { reactive, ref } from 'vue'

const input = reactive({
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
})

const error = ref('')

function validatePassword(pw) {
  const minLength = 12
  const hasNumber = /\d/.test(pw)
  const hasUpper = /[A-Z]/.test(pw)
  const hasLower = /[a-z]/.test(pw)
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(pw)

  if (pw.length < minLength) return 'Passwort muss mindestens 12 Zeichen haben.'
  if (!hasNumber) return 'Passwort muss mindestens eine Zahl enthalten.'
  if (!hasUpper) return 'Passwort muss mindestens einen Großbuchstaben enthalten.'
  if (!hasLower) return 'Passwort muss mindestens einen Kleinbuchstaben enthalten.'
  if (!hasSpecial) return 'Passwort muss mindestens ein Sonderzeichen enthalten.'

  return ''
}

function signup() {
  error.value = ''

  if (input.password !== input.passwordConfirm) {
    error.value = 'Passwörter stimmen nicht überein.'
    return
  }

  const pwError = validatePassword(input.password)
  if (pwError) {
    error.value = pwError
    return
  }

  console.log('Registrierung erfolgreich', input)
  alert('Registrierung erfolgreich!')
}
</script>

<style scoped>
.error {
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

.required-info {
  font-size: 0.8rem;
}

.required-symbol {
  vertical-align: super;
  font-size: 0.8rem;
}

.password-row {
  position: relative;
}

.info-icon {
  position: absolute;
  left: 4rem;
  top: 20%;
  transform: translateY(-50%);
  font-size: 1rem;
  color: var(--text-light);
  background-color: var(--accent4);
  border-radius: 50%;
  width: 1.2rem;
  height: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  z-index: 10;
}

.tooltip {
  position: absolute;
  top: 1.5rem;
  left: 20%;
  background: var(--text-dark);
  color: var(--text-light);
  padding: 0.6rem 1rem;
  border-radius: 0.4rem;
  width: 17rem;
  font-size: 0.8rem;
  line-height: 1.2rem;
  text-align: left;
  visibility: hidden;
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
  z-index: 10;
}

.info-icon:hover .tooltip,
.info-icon:focus .tooltip {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
</style>
