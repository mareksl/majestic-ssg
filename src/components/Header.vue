<template>
  <header>
    <nav class="nav">
      <h1>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </h1>
      <NavLinks/>
    </nav>
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import NavLinks from '@/components/NavLinks';

export default {
  name: "Header",
  components: {NavLinks}
}
</script>

<style lang="scss" scoped>
.nav__link {
  margin-left: 20px;
}
</style>