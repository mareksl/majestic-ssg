<template>
  <section class="about" id="onas">
    <h2 class="about__heading">O nas</h2>
    <div class="about__text">
      <p class="about__paragraph">
        Majestic - od ponad 10 lat robią coraz większe zamieszanie na scenie
        muzycznej nie tylko w Polsce (także Anglia, Niemcy, Litwa), a ich
        żywiołem są koncerty - do tej pory wystąpili ponad 400 razy. Zespół
        rodem z Gdańska prezentuje muzykę taneczno-energetyczną (mix ska,
        reggae, rock), a to w połączeniu z wybuchową sekcja dęta, specyficznym
        poczuciem humoru oraz z dobrym kontaktem z publiką szybko zamienia
        wszystkie ciała stałe pod sceną w skaczące, uśmiechnięte i chcące
        uwolnić swoją energię elektrony. Czasami ciężko je później okiełznać...
      </p>
      <p class="about__paragraph">
        Wystąpili w programie Must Be The Music, gdzie dotarli aż do półfinału
        (2 edycja, Polsat 2011), u Kuby Wojewódzkiego (TVN) oraz w programie
        Świat się kręci (TVP1) jako gość muzyczny. Wielokrotnie nagradzani na
        przeglądach i konkursach w całym kraju (m.in. Ostróda Reggae Festiwal,
        KortoFest). W dorobku zespołu znajdują się dwie płyty: "roop rege"
        (2007) oraz "Przyzwoita" (2013), z których pochodzą znane z rozgłośni
        radiowych utwory Wielka Moc, Roop rege, Przyzwoita i Jedziemy ...
      </p>
    </div>

    <g-image
      class="about__image"
      src="~/assets/images/img-6.jpg"
      alt="Majestic Band in Concert"
    />
  </section>
</template>

<script>
export default {
  name: "About"
};
</script>

<style lang="scss" scoped>
@import "src/styles/mixins/mixins";
@import "src/styles/variables/shadows";

.about {
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 2rem;

  &__heading {
    @include heading-section;
  }

  &__text {
    max-width: 32rem;
    text-align: center;
  }

  &__paragraph {
    font-size: 1.1rem;
    padding-bottom: 2rem;
  }

  &__image {
    @include img-responsive;
    box-shadow: $image-shadow;
  }
}
</style>
