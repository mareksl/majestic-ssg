<template>
  <section id="koncerty" class="concerts">
    <h2 class="concerts__heading">{{ $t("header.nav.concerts") }}</h2>
    <ConcertList :concerts="concerts.upcoming" title="Nadchodzące" />
    <ConcertList :concerts="concerts.past" title="Za nami" />
  </section>
</template>

<script>
import ConcertList from "@/components/sections/Concerts/ConcertList/ConcertList";

export default {
  name: "Concerts",
  components: { ConcertList },
  data() {
    return {
      concerts: {
        upcoming: [
          {
            id: 1,
            url: "https://www.google.com",
            date: new Date("2017-02-23"),
            city: "Gdańsk",
            location: "Mono Kitchen",
          },
          {
            id: 2,
            url: "https://www.google.com",
            date: new Date("2017-02-25"),
            city: "Warszawa",
            location: "ABC",
          },
        ],
        past: [
          {
            id: 1,
            url: "https://www.google.com",
            date: new Date("2017-02-23"),
            city: "Gdańsk",
            location: "Mono Kitchen",
          },
          {
            id: 2,
            url: "https://www.google.com",
            date: new Date("2017-02-23"),
            city: "Warszawa",
            location: "ABC",
          },
          {
            id: 3,
            url: "https://www.google.com",
            date: new Date("2017-02-23"),
            city: "Gdańsk",
            location: "Mono Kitchen",
          },
          {
            id: 4,
            url: "https://www.google.com",
            date: new Date("2017-02-23"),
            city: "Warszawa",
            location: "ABC",
          },
          {
            id: 5,
            url: "https://www.google.com",
            date: new Date("2017-02-23"),
            city: "Gdańsk",
            location: "Mono Kitchen",
          },
          {
            id: 6,
            url: "https://www.google.com",
            date: new Date("2017-02-23"),
            city: "Warszawa",
            location: "ABC",
          },
          {
            id: 7,
            url: "https://www.google.com",
            date: new Date("2017-02-23"),
            city: "Gdańsk",
            location: "Mono Kitchen",
          },
          {
            id: 8,
            url: "https://www.google.com",
            date: new Date("2017-02-23"),
            city: "Warszawa",
            location: "ABC",
          },
          {
            id: 9,
            url: "https://www.google.com",
            date: new Date("2017-02-23"),
            city: "Gdańsk",
            location: "Mono Kitchen",
          },
          {
            id: 10,
            url: "https://www.google.com",
            date: new Date("2017-02-23"),
            city: "Warszawa",
            location: "ABC",
          },
          {
            id: 11,
            url: "https://www.google.com",
            date: new Date("2017-02-23"),
            city: "Gdańsk",
            location: "Mono Kitchen",
          },
          {
            id: 12,
            url: "https://www.google.com",
            date: new Date("2017-02-23"),
            city: "Warszawa",
            location: "ABC",
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "src/styles/mixins/mixins";

.concerts {
  padding: 2rem 2rem 1.5rem;

  &__heading {
    @include heading-section;
  }
}
</style>
