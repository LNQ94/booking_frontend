<template>
  <div>
    <Navbar />
    <main>
      <router-view />
    </main>
    <footer>
      <div class="lilotus-footer">
        <img src="/src/assets/images/lilotus_logo.png" alt="LiLotus Logo" />
        <p>LiLotus Thai Massage</p>
      </div>
      <div class="footer-contact">
        <p>Musterstraße 12, 12345 Berlin</p>
        <p><a href="tel:+4915123456789">+49 151 23456789</a></p>
        <p><a href="mailto:info@lilotus.de">info@lilotus.de</a></p>
      </div>
    </footer>
  </div>
</template>

<style scoped></style>

<script setup>
import Navbar from './components/Navbar.vue'
</script>
