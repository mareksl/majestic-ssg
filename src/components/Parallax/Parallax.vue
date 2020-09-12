<template>
  <div class="parallax">
    <g-image
      v-if="image"
      class="parallax__image"
      :src="require(`!!assets-loader!@images/${image}`)"
      alt=""
    ></g-image>
  </div>
</template>

<script>
export default {
  name: "Parallax",
  props: {
    image: { type: String, required: true }
  }
};
</script>

<style lang="scss" scoped>
@import "src/styles/variables/colors";

.parallax {
  position: relative;
  height: 50vh;
  width: 100%;
  overflow: hidden;

  &:before {
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: "";
    background-image: linear-gradient(
      30deg,
      rgba($color-accent, 0.8),
      rgba($color-accent-light, 0.8)
    );
    box-shadow: inset 0 12px 8px -8px rgba($color-primary-dark, 0.2),
      inset 0 -12px 8px -8px rgba($color-primary-dark, 0.2);
  }

  &__image {
    width: 100%;
  }
}
</style>
