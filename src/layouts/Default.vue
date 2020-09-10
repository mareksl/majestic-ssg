<template>
  <div>
    <Header/>
    <main>
      <slot/>
    </main>
  </div>
</template>

<style lang="scss">


</style>
<script>
import Header from "../components/Header/Header";

export default {
  components: {
    Header
  }
}
</script>