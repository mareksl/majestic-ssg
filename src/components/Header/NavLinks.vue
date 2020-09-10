<template>
  <ul class="nav-links" :class="{'nav-links--open':navOpen}">
    <li class="nav-links__item" v-for="navLink in navLinks" :key="navLink.title">
      <a class="nav-links__link" :href="navLink.href">{{ navLink.title }}</a>
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
          title: this.$i18n.t('header.nav.aboutUs')
        },
        {
          href: "#galeria",
          title: this.$i18n.t('header.nav.gallery')
        },
        {
          href: "#koncerty",
          title: this.$i18n.t('header.nav.concerts')
        },
        {
          href: "#muzyka",
          title: this.$i18n.t('header.nav.musicAndVideo')
        },
        {
          href: "#kontakt",
          title: this.$i18n.t('header.nav.contact')
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/variables/colors";
@import "../../styles/variables/dimensions";

.nav-links {
  display: flex;
  overflow: hidden;
  max-height: 0;
  transition: .4s;
  opacity: 0;
  flex-flow: column;
  justify-content: space-between;

  &--open {
    max-height: 100vh;
    opacity: 1;
  }

  &__item {
    display: block;
    text-align: center;
    white-space: nowrap;
    border-top: 1px solid $color-primary-dark;
  }

  &__link {
    padding: .5rem;
    display: block;
    text-decoration: none;
    color: $color-primary-dark;

    &:focus,
    &:hover {
      text-decoration: underline;
      color: $color-primary;
    }
  }
}

@media screen and (min-width: $breakpoint-sm) {
  .nav-links {
    max-height: initial;
    opacity: 1;
    flex-flow: row nowrap;

    &__item {
      border-top: 0;
      border-right: 1px solid $color-primary-dark;

      &:last-child {
        border-right: 0;
      }
    }

    &__link {
      padding: 0 1rem;
    }
  }
}
</style>