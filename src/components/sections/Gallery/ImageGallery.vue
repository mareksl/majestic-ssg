<template>
  <div class="image-gallery__wrapper">
    <div class="image-gallery__gallery">
      <a
        class="image-gallery__link"
        v-for="(image, index) in images"
        :key="image.id"
        :href="image.url"
        @click="openImageModal($event, image)"
      >
        <g-image
          class="image-gallery__image"
          :src="image.url"
          :alt="image.title || $t('gallery.defaultAlt')"
        ></g-image>
      </a>
    </div>
    <ImageModal
      :image="modalImage"
      :open="imageModalOpen"
      @modalClosed="onImageModalClose"
    />
  </div>
</template>

<script>
import ImageModal from "@/components/sections/Gallery/ImageModal";

export default {
  name: "ImageGallery",
  components: { ImageModal },
  data() {
    return {
      modalImage: null,
      imageModalOpen: false,
      focusedEl: null
    };
  },
  computed: {
    images() {
      const baseUrl = "https://via.placeholder.com";
      return Array(15)
        .fill("")
        .map((value, index) => {
          const width = this.getRandomDimension(800, 1920);
          const height = this.getRandomDimension(600, 1080);

          const title = "Lorem Ipsum";
          return {
            id: index,
            width,
            height,
            title,
            url: `${baseUrl}/${width}x${height}/${this.getRandomColor()}/000`
          };
        });
    }
  },
  methods: {
    getRandomDimension(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    getRandomColor() {
      return (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
    },
    openImageModal(e, image) {
      e.preventDefault();
      this.focusedEl = e.target;
      this.modalImage = image;
      this.imageModalOpen = true;
    },
    onImageModalClose() {
      this.imageModalOpen = false;
      this.modalImage = null;
      this.focusedEl?.focus();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "src/styles/mixins/mixins";
@import "src/styles/variables/shadows";

.image-gallery {
  &__wrapper {
    display: flex;
    justify-content: center;
  }

  &__gallery {
    column-count: 2;
    column-gap: 0.5rem;

    @include media-sm {
      flex: 0 1 90%;
      column-count: 3;
      column-gap: 1rem;
    }

    @include media-m {
      flex: 0 1 66%;
      column-gap: 1.5rem;
    }
  }

  &__link {
    display: inline-flex;
    width: 100%;
    margin-bottom: 0.5rem;
    box-shadow: $image-shadow;
    border-radius: $border-radius-sm;
    overflow: hidden;

    @include media-sm {
      margin-bottom: 1rem;
    }

    @include media-m {
      margin-bottom: 1.5rem;
    }
  }

  &__image {
    width: 100%;
    height: auto;
  }
}
</style>
