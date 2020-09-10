<template>
  <header class="header">
    <nav class="header__nav">
      <Logo/>
      <NavToggle :navOpen="navOpen" @navToggled="toggleNav"/>
      <NavLinks :navOpen="navOpen"/>
    </nav>
  </header>
</template>

<script>
import NavLinks from '@/components/Header/NavLinks';
import NavToggle from "@/components/Header/NavToggle";
import Logo from "@/components/Header/Logo";

export default {
  name: "Header",
  components: {NavToggle, Logo, NavLinks},
  data() {
    return {
      navOpen: false
    }
  },
  methods: {
    toggleNav() {
      this.navOpen = !this.navOpen;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/variables/dimensions";
@import "src/styles/variables/colors";

.header {
  z-index: 2;
  transition: .4s ease;
  background-color: $color-primary-light;

  &__nav {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 4rem;
    font-size: 1.2em;
    flex-flow: column wrap;
    justify-content: space-between;
    align-items: center;
  }
}

@media screen and (min-width: $breakpoint-sm) {
  .header {
    &__nav {
      flex-flow: row;
    }
  }
}
</style>