<template>
  <div class="container rules">
    <h2>Instrukcja</h2>
    <br>
    <h4>Opis i cel</h4>
    <p>
      Wcielasz się w przywódcę partii politycznej, która bierze udział w aktualnych wyborach do rządu.
      Twoim celem jest rozpoznanie aktualnych upodobań społeczeństwa i przekonanie go aby to właśnie na Twoją partię oddało swój głos.
    </p>
    <h4>Przygotowanie</h4>
    <p>
      Jeśli nie masz kart to przejdź do podstrony "Karty" i wydrukuj je sobie.
      Kiedy talia jest już gotowa potasuj ją i rozdaj każdemu z graczy po 10 kart. Resztę kart ustaw plecami do góry.
      Przygotuj też miejsce na kartu już użyte. Jeśli karty się skończą przetasuj wszystkie użyte i ustaw je jako aktualną talię.
      Przed rozpoczęciem gry ustalcie ile rund (minimum 20) będzie trwała wasza walka o władzę!
      <br>Teraz w podstronie "Zagraj" zdefiniujcie po kolei swoje partie i kliknijcie zagraj.
    </p>
    <h4>Przebieg rozgrywki</h4>
    <p>
        Gracze zagrywają karty z ręki w kolejności partii podanej przez aplikację, jednocześnie dobierając karty z talii tak, żeby zawsze mieć ich w ręce 10. 
        Kod zagranej karty jest wprowadzany do aplikacji w celu przeliczenia aktualnych sondażu wyborczego.
        Kiedy minie ustalna ilość rund wygrywa gracz, na którego partię będzie głosować największa część społeczeństwa.
    </p>
  </div>
</template>

<script>
export default {
  name: "GameRules"
};
</script>

<style lang="scss" scoped>
@import "./../style/colors.scss";
.rules {
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid $black-200;
}
</style>

