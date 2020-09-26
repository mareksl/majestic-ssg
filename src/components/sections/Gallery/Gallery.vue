<template>
  <section class="gallery" id="galeria">
    <h2 class="gallery__heading">{{ $t("header.nav.gallery") }}</h2>
    <ImageGallery />
  </section>
</template>

<script>
import ImageGallery from "@/components/sections/Gallery/ImageGallery";

export default {
  name: "Gallery",
  components: { ImageGallery }
};
</script>

<style lang="scss" scoped>
@import "src/styles/mixins/mixins";

.gallery {
  padding: 2rem 2rem 1.5rem;

  &__heading {
    @include heading-section;
  }
}
</style>
