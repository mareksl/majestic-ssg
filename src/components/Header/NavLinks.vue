<template>
  <ul class="nav-links" :class="{ 'nav-links--open': navOpen }">
    <li
        class="nav-links__item"
        v-for="navLink in navLinks"
        :key="navLink.title"
    >
      <a
          class="nav-links__link"
          :href="navLink.href"
          @click="linkClicked(navLink.href)"
      >{{ navLink.title }}</a
      >
    </li>
  </ul>
</template>

<script>
export default {
  name: "NavLinks",
  props: {
    navOpen: Boolean
  },
  data() {
    return {
      navLinks: [
        {
          href: "#onas",
          title: this.$i18n.t("header.nav.aboutUs")
        },
        {
          href: "#galeria",
          title: this.$i18n.t("header.nav.gallery")
        },
        {
          href: "#koncerty",
          title: this.$i18n.t("header.nav.concerts")
        },
        {
          href: "#muzyka",
          title: this.$i18n.t("header.nav.musicAndVideo")
        },
        {
          href: "#kontakt",
          title: this.$i18n.t("header.nav.contact")
        }
      ]
    };
  },
  methods: {
    linkClicked(href) {
      this.$emit("linkClicked");
      this.$scrollTo(href);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/variables/colors";
@import "../../styles/mixins/mixins";

.nav-links {
  display: flex;
  overflow: hidden;
  max-height: 0;
  transition: 0.4s;
  opacity: 0;
  flex-flow: column;
  justify-content: space-between;

  @include media-sm {
    max-height: initial;
    opacity: 1;
    flex-flow: row nowrap;
  }

  &--open {
    max-height: 100vh;
    opacity: 1;
  }

  &__item {
    display: block;
    text-align: center;
    white-space: nowrap;
    border-top: 1px solid $color-primary-dark;

    @include media-sm {
      border-top: 0;
      border-right: 1px solid $color-primary-dark;

      &:last-child {
        border-right: 0;
      }
    }
  }

  &__link {
    padding: 0.5rem;

    @include text-link;
    display: block;
    color: $color-primary-dark;

    @include media-sm {
      padding: 0 1rem;
    }
  }
}
</style>
