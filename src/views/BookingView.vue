<template>
  <section class="section-info">
    <h2>Buchung</h2>
    <p>
      Buchen Sie Ihre Thai-Massage ganz einfach online!<br />Wählen Sie Ihre gewünschte Massage, die
      Dauer und den Termin.
    </p>
  </section>

  <section>
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
          <option value="60">60 Minuten</option>
          <option value="90">90 Minuten</option>
        </select>
      </div>

      <div>
        <label for="appointment-date">Datum:</label>
        <input type="date" id="appointment-date" name="appointment-date" />
      </div>

      <div>
        <label for="appointment-time">Uhrzeit:</label>
        <input type="time" id="appointment-time" name="appointment-time" />
      </div>

      <div>
        <label for="customer-name">Name:</label>
        <input type="text" id="customer-name" name="customer-name" />
      </div>

      <div>
        <label for="customer-contact">Kontakt (Telefon/E-Mail):</label>
        <input type="text" id="customer-contact" name="customer-contact" />
      </div>

      <button type="submit">Buchung abschicken</button>
    </form>
  </section>
</template>
