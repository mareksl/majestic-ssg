<template>
  <div>
    <Header/>
    <main>
      <slot/>
    </main>
  </div>
</template>

<style lang="scss">
body {
  font-family: 'Lato', sans-serif;
}

</style>
<script>
import Header from "../components/Header";

export default {
  components: {Header}
}
</script>