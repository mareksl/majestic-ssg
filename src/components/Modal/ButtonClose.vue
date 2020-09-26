<template>
  <button
    ref="button"
    @click="$emit('click')"
    :aria-label="$t('gallery.modalCloseLabel')"
    class="button-close"
  >
    <IconClose class="button-close__icon" />
  </button>
</template>

<script>
import IconClose from "@/assets/icons/times.svg";

export default {
  name: "ButtonClose",
  props: { focused: Boolean },
  components: {
    IconClose
  },
  mounted() {
    if (this.focused) {
      this.$nextTick(() => this.$refs.button.focus());
    }
  }
};
</script>

<style lang="scss" scoped>
.button-close {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  width: 2rem;
  height: 2rem;

  &__icon {
    height: 100%;
    width: 100%;
  }
}
</style>
