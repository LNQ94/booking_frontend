<template>
  <section class="section-info">
    <h2>Buchung</h2>
    <p>
      Rufen Sie uns an oder buchen Sie Ihre Thai-Massage ganz einfach online!<br />Wählen Sie Ihre
      gewünschte Massage, die Dauer und den Termin.
    </p>
  </section>

  <section v-if="!auth.user">
    <component :is="showLogin ? LoginForm : SignupForm" />

    <p style="margin-top: 1rem; text-align: center">
      <span v-if="showLogin">
        Noch kein Konto? Dann
        <a class="signin-link" @click.prevent="toggleForm">hier registrieren</a>.
      </span>
      <span v-else>
        Schon ein Konto? Dann
        <a class="signin-link" @click.prevent="toggleForm">hier einloggen</a>.
      </span>
    </p>
  </section>

  <section v-else>
    <h3>Massage buchen</h3>
    <form>
      <div>
        <label for="massage-type">Massageart:</label>
        <select id="massage-type" name="massage-type">
          <option value="traditional">Traditionelle Thai-Massage</option>
          <option value="oil">Öl-Massage</option>
          <option value="foot">Fußreflexzonenmassage</option>
        </select>
      </div>

      <div>
        <label for="duration">Dauer:</label>
        <select id="duration" name="duration">
          <option value="30">30 Minuten</option>
          <option value="45">45 Minuten</option>
          <option value="60">60 Minuten</option>
          <option value="90">90 Minuten</option>
        </select>
      </div>

      <div>
        <label for="appointment-date">Datum:</label>
        <input type="date" id="appointment-date" name="appointment-date" required />
      </div>

      <div>
        <label for="appointment-time">Uhrzeit:</label>
        <input type="time" id="appointment-time" name="appointment-time" required />
      </div>

      <div>
        <label for="customer-name">Name:</label>
        <input type="text" id="customer-name" name="customer-name" />
      </div>

      <div>
        <label for="customer-email">E-Mail:</label>
        <input type="text" id="customer-email" name="customer-email" required />
      </div>

      <div>
        <label for="customer-phone">Telefonnummer:</label>
        <input type="text" id="customer-phone" name="customer-phone" />
      </div>

      <button class="btn" type="submit">Massage buchen</button>
    </form>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import auth from '@/stores/auth'
import LoginForm from '@/components/LoginForm.vue'
import SignupForm from '@/components/SignupForm.vue'

const showLogin = ref(true)
function toggleForm() {
  showLogin.value = !showLogin.value
}
</script>

<style>
.signin-link {
  color: var(--accent2);
  text-decoration: underline;
}

.signin-link:hover {
  cursor: pointer;
}
</style>
