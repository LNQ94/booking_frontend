<template>
  <nav>
    <div class="nav-container">
      <img src="/src/assets/images/lilotus_logo.png" alt="LiLotus Logo" />
      <h1 class="nav-title">LiLotus Thai Massage</h1>

      <button class="burger" @click="toggleMenu" aria-label="Menü öffnen/schließen">
        <span :class="{ open: isOpen }"></span>
        <span :class="{ open: isOpen }"></span>
        <span :class="{ open: isOpen }"></span>
      </button>

      <transition name="slide">
        <div v-if="isOpen" class="nav-links-mobile">
          <button class="close-btn" @click="closeMenu" aria-label="Menü schließen">
            ✕
          </button>

          <ul>
            <li><router-link to="/" @click="closeMenu" exact-active-class="active-link">Start</router-link></li>
            <li><router-link to="/about" @click="closeMenu" exact-active-class="active-link">Über uns</router-link></li>
            <li><router-link to="/pricing" @click="closeMenu" exact-active-class="active-link">Unsere Angebote</router-link></li>
            <li><router-link to="/booking" @click="closeMenu" exact-active-class="active-link">Buchen</router-link></li>
            <li><router-link to="/contact" @click="closeMenu" exact-active-class="active-link">Kontakt</router-link></li>
            <li><router-link to="/login" @click="closeMenu" exact-active-class="active-link">Login</router-link></li>
          </ul>
        </div>
      </transition>

      <ul class="nav-links">
        <li><router-link to="/" exact-active-class="active-link">Start</router-link></li>
        <li><router-link to="/about" exact-active-class="active-link">Über uns</router-link></li>
        <li><router-link to="/pricing" exact-active-class="active-link">Angebote</router-link></li>
        <li><router-link to="/booking" exact-active-class="active-link">Buchen</router-link></li>
        <li><router-link to="/contact" exact-active-class="active-link">Kontakt</router-link></li>
        <li><router-link to="/login" exact-active-class="active-link">Login</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
const toggleMenu = () => (isOpen.value = !isOpen.value)
const closeMenu = () => (isOpen.value = false)
</script>

<style scoped>
nav {
  background-color: var(--accent1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-container img {
  height: 4rem;
}

.nav-title {
  font-family: 'Megrim', system-ui;
  font-size: 1.2rem;
  color: var(--text-dark);
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin-right: 3rem;
}

.nav-links a {
  text-decoration: none;
  color: var(--text-dark);
  transition: color 0.2s ease;
}

.nav-links a:hover {
  color: var(--accent3);
}

/* ===== Desktop Links ===== */
.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 0 1.5rem 0 0;
}

.nav-links a {
  text-decoration: none;
  color: var(--text-dark);
  font-weight: 500;
  transition: color 0.2s ease;
}

.nav-links a:hover {
  color: var(--accent3);
}

.active-link {
  color: var(--accent3);
  font-weight: bold;
  border-bottom: 2px solid var(--accent3);
  padding-bottom: 0.1rem;
}

.burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 2001;
}

.burger span {
  width: 1.6rem;
  height: 0.125rem;
  background-color: var(--text-dark);
  transition: all 0.3s ease;
}

.burger span.open:nth-child(1) {
  transform: translateY(0.5rem) rotate(45deg);
}

.burger span.open:nth-child(2) {
  opacity: 0;
}

.burger span.open:nth-child(3) {
  transform: translateY(-0.5rem) rotate(-45deg);
}

@media (max-width: 900px) {
  .burger {
    display: flex;
  }

  .nav-links {
    display: none;
  }

  .nav-links-mobile {
    position: fixed;
    top: 0;
    right: 0;
    width: 75%;
    height: 100vh;
    background-color: var(--text-dark);
    backdrop-filter: blur(12px);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 5rem 2rem;
    gap: 1.5rem;
    box-shadow: -4px 0 12px rgba(0, 0, 0, 0.2);
    line-height: 3rem;
  }

  .nav-links-mobile li {
    list-style: none;
  }

  .nav-links-mobile a {
    color: var(--accent1);
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 500;
    transition: color 0.2s ease;
  }

  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1.5rem;
    font-size: 2rem;
    color: var(--accent1);
    background: none;
    border: none;
    cursor: pointer;
  }

  /* Slide-in Animation */
  .slide-enter-active,
  .slide-leave-active {
    transition: all 0.4s ease;
  }

  .slide-enter-from {
    transform: translateX(100%);
    opacity: 0;
  }

  .slide-enter-to {
    transform: translateX(0);
    opacity: 1;
  }

  .slide-leave-from {
    transform: translateX(0);
    opacity: 1;
  }

  .slide-leave-to {
    transform: translateX(100%);
    opacity: 0;
  }
}
</style>
