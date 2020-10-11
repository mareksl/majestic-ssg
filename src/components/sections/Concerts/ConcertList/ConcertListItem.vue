<template>
  <li class="concert-list-item">
    <time datetime="2016-02-23" class="concert-list-item__date">
      <span class="concert-list-item__day">{{ this.date }}</span>
      <span class="concert-list-item__year">{{ this.year }}</span>
    </time>
    <span class="concert-list-item__city">{{ concert.city }}</span>
    <span class="concert-list-item__location">
      <a class="concert-list-item__link" :href="concert.url">{{
        concert.location
      }}</a>
    </span>
  </li>
</template>

<script>
export default {
  name: "ConcertListItem",
  props: {
    concert: Object,
  },
  computed: {
    year() {
      return this.concert.date.getFullYear();
    },
    date() {
      const day = `${this.concert.date.getDate()}`.padStart(2, "0");
      const month = `${this.concert.date.getMonth() + 1}`.padStart(2, "0");
      return `${day}.${month}`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "src/styles/variables/shadows";
@import "src/styles/variables/colors";
@import "src/styles/mixins/mixins";

.concert-list-item {
  display: flex;
  padding: 0.5rem;
  transition: box-shadow 0.4s;
  border-bottom: 1px solid $color-border;
  font-variant: small-caps;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: center;

  @include media-sm {
    flex-flow: row wrap;
  }

  &:focus,
  &:hover {
    box-shadow: $box-shadow;
  }

  &__date {
    display: flex;
    flex: 0 0 10%;
    flex-flow: row;
    @include media-sm {
      flex-flow: column;
    }
  }

  &__day {
    margin-right: 1rem;
  }

  &__city {
    font-size: 1.2rem;
    flex: 0 0 20%;
    @include media-sm {
      margin-right: 1rem;
    }
  }

  &__location {
    text-align: center;
    font-size: 1.2rem;
    font-weight: 400;
    flex: 1 0 auto;
    @include media-sm {
      font-weight: normal;
      text-align: right;
    }
  }

  &__link {
    @include text-link;
  }
}
</style>
