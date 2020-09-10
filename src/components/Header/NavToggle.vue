<template>
  <button @click="toggleNav" class="nav-toggle" :class="{'nav-toggle--open':navOpen}" aria-label="Navigation">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
      <path class="menu-trigger-icon" d="M0 14h128v16H0zm0 42h128v16H0zm0 42h128v16H0z"/>
    </svg>
  </button>
</template>

<script>
export default {
  name: "NavToggle",
  props: {
    navOpen: Boolean
  },
  methods: {
    toggleNav() {
      this.$emit('navToggled')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/variables/colors";
@import "src/styles/variables/dimensions";

.nav-toggle {
  position: absolute;
  top: 1.5rem;
  right: 0;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  transition: .4s;
  border: 0;
  background: none;

  &:focus,
  &:hover,
  &--open {
    fill: $color-accent;
  }

  &--open {
    transform: rotate(90deg);
  }
}

@media screen and (min-width: 660px) {
  .nav-toggle {
    display: none;
  }
}
</style>