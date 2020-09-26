<template>
  <header v-click-outside="hideNav" class="header">
    <nav class="header__nav">
      <Logo @linkClicked="hideNav" />
      <NavToggle :navOpen="navOpen" @navToggled="toggleNav" />
      <NavLinks :navOpen="navOpen" @linkClicked="hideNav" />
    </nav>
  </header>
</template>

<script>
import NavLinks from "@/components/Header/NavLinks";
import NavToggle from "@/components/Header/NavToggle";
import Logo from "@/components/Header/Logo";

export default {
  name: "Header",
  components: { NavToggle, Logo, NavLinks },
  data() {
    return {
      navOpen: false
    };
  },
  methods: {
    toggleNav() {
      this.navOpen = !this.navOpen;
    },
    hideNav() {
      if (this.navOpen) {
        this.toggleNav();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "src/styles/mixins/mixins";
@import "src/styles/variables/colors";

.header {
  position: fixed;
  width: 100%;
  top: 0;
  min-height: 4rem;
  padding: 0;
  z-index: 2;
  transition: 0.4s ease;
  background-color: $color-primary-light;

  @include media-sm {
    height: 4rem;
  }

  &__nav {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 4rem;
    font-size: 1.2em;
    flex-flow: column wrap;
    justify-content: space-between;
    align-items: center;
    @include media-sm {
      flex-flow: row;
    }
  }
}
</style>
