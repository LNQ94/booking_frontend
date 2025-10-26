<template>
  <nav>
    <div class="nav-container">
      <img src="/src/assets/images/lilotus_logo.png" alt="LiLotus Logo" />
      <h1 class="nav-title">LiLotus Thai Massage</h1>
      <ul class="nav-links">
        <li><router-link to="/" exact-active-class="active-link">Start</router-link></li>
        <li><router-link to="/about" exact-active-class="active-link">Über uns</router-link></li>
        <li><router-link to="/pricing" exact-active-class="active-link">Unsere Angebote</router-link></li>
        <li><router-link to="/booking" exact-active-class="active-link">Buchen</router-link></li>
        <li><router-link to="/contact" exact-active-class="active-link">Kontakt</router-link></li>
        <li><router-link to="/login" exact-active-class="active-link">Login</router-link></li>
      </ul>
    </div>
  </nav>
</template>
