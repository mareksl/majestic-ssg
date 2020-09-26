<template>
  <button
    @click="toggleNav"
    class="nav-toggle"
    :class="{ 'nav-toggle--open': navOpen }"
    aria-label="Navigation"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
      <path
        class="menu-trigger-icon"
        d="M0 14h128v16H0zm0 42h128v16H0zm0 42h128v16H0z"
      />
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
      this.$emit("navToggled");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "src/styles/variables/colors";
@import "src/styles/mixins/mixins";

.nav-toggle {
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;
  width: 4rem;
  height: 4rem;
  transition: 0.4s;
  border: 0;
  background: none;

  @include media-sm {
    display: none;
  }

  &:focus,
  &:hover,
  &--open {
    fill: $color-accent;
  }

  &--open {
    transform: rotate(90deg);
  }
}
</style>
