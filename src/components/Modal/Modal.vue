<template>
  <transition name="modal">
    <div class="modal__mask">
      <div class="modal__container" v-click-outside="closeModal">
        <div class="modal__header">
          <slot name="header"></slot>
          <ButtonClose focused @click="closeModal" />
        </div>
        <div class="modal__body">
          <slot name="body"></slot>
        </div>
        <div>
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import ButtonClose from "@/components/Modal/ButtonClose";

export default {
  name: "Modal",
  components: {
    ButtonClose
  },
  props: {
    open: Boolean
  },
  methods: {
    closeModal() {
      this.$emit("modalClosed");
    }
  },
  created() {
    const onEscape = e => {
      if (this.open && e.keyCode === 27) {
        this.closeModal();
      }
    };
    document.addEventListener("keydown", onEscape);
    this.$once("hook:destroyed", () => {
      document.removeEventListener("keydown", onEscape);
    });
  }
};
</script>

<style lang="scss" scoped>
@import "src/styles/variables/colors";
@import "src/styles/variables/shadows";
@import "src/styles/variables/dimensions";

.modal {
  &__mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.3s ease;
  }

  &__container {
    display: flex;
    flex: 0 1 auto;
    flex-flow: column;
    justify-content: space-between;
    max-width: 90vw;
    max-height: 90vh;
    padding: 1rem;
    background-color: $color-primary-light;
    box-shadow: $image-shadow;
    transition: all 0.3s ease;
    overflow: hidden;
    border-radius: $border-radius-sm;
  }

  &__header {
    display: flex;
    flex: 0 0 2rem;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  &__body {
    flex: 0 1 auto;
    overflow: hidden;
    display: flex;
  }

  &-enter {
    opacity: 0;
  }

  &-leave-active {
    opacity: 0;
  }

  &-enter &-container,
  &-leave-active &-container {
    transform: scale(1.1);
  }
}
</style>
