<template>
  <section class="about" id="onas">
    <h2 class="about__heading">{{ $t("header.nav.aboutUs") }}</h2>
    <div class="about__text">
      <p
        v-for="(paragraph, index) in $t('aboutUs.text')"
        class="about__paragraph"
        :key="index"
      >
        {{ paragraph }}
      </p>
    </div>

    <g-image
      class="about__image"
      src="~/assets/images/img-6.jpg"
      alt="Majestic Band in Concert"
    />
  </section>
</template>

<script>
export default {
  name: "About"
};
</script>

<style lang="scss" scoped>
@import "src/styles/mixins/mixins";
@import "src/styles/variables/shadows";

.about {
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 2rem;

  &__heading {
    @include heading-section;
  }

  &__text {
    max-width: 32rem;
    text-align: center;
  }

  &__paragraph {
    font-size: 1.1rem;
    padding-bottom: 2rem;
  }

  &__image {
    @include img-responsive;
    box-shadow: $image-shadow;
  }
}
</style>
