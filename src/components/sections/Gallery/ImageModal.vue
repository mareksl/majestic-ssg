<template>
  <Modal v-if="open" :open="open" @modalClosed="modalClosed">
    <template v-slot:header
      >HEADER
    </template>
    <template v-slot:body>
      <g-image
        class="image-modal__image"
        :src="image.url"
        :alt="$t('gallery.defaultAlt')"
      ></g-image>
    </template>
  </Modal>
</template>

<script>
import Modal from "@/components/Modal/Modal";

export default {
  name: "ImageModal",
  components: { Modal },
  props: {
    open: Boolean,
    image: Object
  },
  methods: {
    modalClosed() {
      this.$emit("modalClosed");
    }
  }
};
</script>

<style lang="scss" scoped>
.image-modal {
  &__image {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
}
</style>
