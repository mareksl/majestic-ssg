<template>
  <div>
    <Header />
    <main class="main">
      <slot />
    </main>
  </div>
</template>

<script>
import Header from "../components/Header/Header";

export default {
  components: {
    Header
  }
};
</script>

<style lang="scss">
.main {
  margin-top: 4rem;
}
</style>
