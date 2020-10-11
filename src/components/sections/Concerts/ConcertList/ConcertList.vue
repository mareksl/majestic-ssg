<template>
  <div class="concert-list">
    <h3 class="concert-list__heading">{{ title }}</h3>
    <transition-group name="list" tag="ul">
      <ConcertListItem
        v-for="concert in visibleConcerts"
        :concert="concert"
        :key="concert.id"
      />
    </transition-group>
    <button
      @click="showMore"
      v-if="showMoreVisible"
      class="concert-list__show-more"
    >
      {{ $t("concerts.showMore") }}
    </button>
  </div>
</template>

<script>
import ConcertListItem from "@/components/sections/Concerts/ConcertList/ConcertListItem";

export default {
  name: "ConcertList",
  components: { ConcertListItem },
  props: {
    title: String,
    concerts: Array,
  },
  data() {
    return {
      visibleConcertsLimit: 10,
      visiblePages: 1,
    };
  },
  computed: {
    visibleConcerts() {
      return this.concerts.slice(
        0,
        this.visibleConcertsLimit * this.visiblePages,
      );
    },
    showMoreVisible() {
      return (
        this.concerts.length > this.visibleConcertsLimit &&
        this.visibleConcertsLimit * this.visiblePages < this.concerts.length
      );
    },
  },
  methods: {
    showMore() {
      this.visiblePages++;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "src/styles/variables/colors";
@import "src/styles/variables/shadows";

.concert-list {
  margin-bottom: 2rem;

  &__heading {
    font-size: 1.5em;
    font-weight: 400;
    text-align: center;
  }

  &__show-more {
    color: $color-accent-dark;
    font-size: 1.2rem;
    font-family: Lato, sans-serif;
    font-weight: 400;
    width: 100%;
    background: $color-primary-light;
    padding: 0.5rem;
    transition: 0.4s;
    border: 0;
    border-bottom: 1px solid $color-border;
    font-variant: small-caps;
    cursor: pointer;

    &:focus,
    &:hover {
      transform: scale(1.01) translateY(0.2rem);
      box-shadow: $box-shadow;
    }
  }
}

.list-enter-active {
  transition: opacity 0.4s, transform 0.4s;
}

.list-enter {
  opacity: 0;
  transform: translateY(-100%);
}
</style>