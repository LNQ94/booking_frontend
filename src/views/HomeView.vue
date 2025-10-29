<template>
  <section class="intro">
    <img src="/src/assets/images/placeholder.jpg" alt="Thai Massage" />
    <div class="intro-content">
      <h2>Willkommen bei LiLotus Thai Massage</h2>
      <p>
        Gönnen Sie sich eine Auszeit – traditionelle Thai-Massage für Entspannung und Wohlbefinden
        in ruhiger Atmosphäre.
      </p>
      <router-link to="/booking" class="btn">Jetzt Termin buchen</router-link>
    </div>
  </section>

  <section>
    <h2>Unsere Philosophie</h2>
    <p>
      Unsere erfahrenen Therapeutinnen bringen die jahrhundertealte Kunst der Thai-Massage in
      Einklang mit moderner Entspannung.<br />Spüren Sie neue Energie und Harmonie für Körper und
      Geist.
    </p>
  </section>
</template>

<style scoped>
.intro {
  position: relative;
  height: 35rem;
  overflow: hidden;
}

.intro img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.intro-content {
  position: absolute;
  inset: 0;
  background-color: rgba(163, 159, 148, 0.8);
  color: var(--text-light);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.intro-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.intro-content p {
  font-size: 1.2rem;
}
</style>
