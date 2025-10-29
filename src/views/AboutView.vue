<template>
  <section class="section-info">
    <h2>Über uns</h2>
    <p>
      Unser erfahrenes Team verbindet traditionelle thailändische Massagetechniken mit moderner
      Wohlfühlatmosphäre, um Körper, Geist und Seele in Einklang zu bringen. Lassen Sie den Alltag
      hinter sich, spüren Sie neue Leichtigkeit und finden Sie bei uns die Balance, die Ihnen Kraft
      für das Wesentliche gibt.
    </p>
  </section>

  <section class="about-team">
    <h2>Unser Team</h2>
    <div class="team-member">
      <img src="/src/assets/images/placeholder.jpg" alt="member 1" />
      <div class="member-desc">
        <h3>Member 1</h3>
        <h4>Zertifizierte Thai-Massage-Therapeutin und Ausbilderin</h4>
        <p>
          Member 1 hat über 10 Jahre Erfahrung in traditioneller Thai-Massage. Ihre Zertifizierung
          "Zertifikat" erhielt Sie 20.. in ... für ... und seit 20... ist sie Ausbilderin. Sie sorgt
          mit ihrer ruhigen Art und fachkundigen Handgriffen für Ihr ganzheitliches Wohlbefinden.
        </p>
      </div>
    </div>
    <div class="team-member">
      <img src="/src/assets/images/placeholder.jpg" alt="member 2" />
      <div class="member-desc">
        <h3>Member 2</h3>
        <h4>Thai-Massage-Spezialistin</h4>
        <p>
          Member 2 ist auf Aromatherapie und Fußreflexzonenmassage spezialisiert. Ihr Ziel ist es,
          Körper und Geist in Einklang zu bringen.
        </p>
      </div>
    </div>
    <div class="team-member">
      <img src="/src/assets/images/placeholder.jpg" alt="member 3" />
      <div class="member-desc">
        <h3>Member 3</h3>
        <h4>Thai-Massage-Spezialistin</h4>
        <p>
          Member 3 bringt Ruhe und Energie in jede Behandlung. Sie passt jede Massage individuell an
          Ihre Bedürfnisse an.
        </p>
      </div>
    </div>
    <div class="team-member">
      <img src="/src/assets/images/placeholder.jpg" alt="Max Musterman" />
      <div class="member-desc">
        <h3>Max Musterman</h3>
        <h4>Ihr Ansprechpartner</h4>
        <p>
          Haben Sie Fragen oder möchten einen Termin vereinbaren? Max kümmert sich herzlich um Ihr
          Anliegen.
        </p>
        <p>
          <a href="tel:+4915123456789">+49 151 23456789</a><br />
          <a href="mailto:info@lilotus.de">info@lilotus.de</a>
        </p>
        <p><br />Oder buchen Sie direkt Ihren Termin</p>
        <router-link to="/booking" class="btn">Jetzt Termin buchen</router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.team-member {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
  margin-top: 3rem;
}

.team-member img {
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  object-fit: cover;
}

.member-desc {
  max-width: 500px;
}
</style>
