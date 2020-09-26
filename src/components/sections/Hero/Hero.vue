<template>
  <section id="start" class="hero">
    <div class="hero__content">
      <Logo />
      <SocialLinks />
    </div>
  </section>
</template>

<script>
import Logo from "@/components/sections/Hero/Logo";
import SocialLinks from "@/components/sections/Hero/SocialLinks";

export default {
  name: "Hero",
  components: { SocialLinks, Logo }
};
</script>

<style lang="scss" scoped>
@import "src/styles/mixins/mixins";

.hero {
  position: relative;
  display: flex;
  flex-flow: column;
  min-height: calc(100vh - 4rem);
  align-items: center;
  justify-content: center;

  &__content {
    max-width: 400px;
    margin: 0 2rem;

    @include media-sm {
      max-width: unset;
      min-width: 400px;
      width: 33%;
    }
  }
}
</style>
