<template>
  <nav class="navbar">
    <router-link tag="h1" to="/">FBGen</router-link>
    <account-controls />
  </nav>
</template>

<script>
import AccountControls from './AccountControls.vue'

export default {
  name: 'NavBar',
  components: { AccountControls },
}
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;

  height: 3rem;
  background: white;
  border-bottom: 2px solid black;

  h1 {
    font-size: 1.5rem;
    margin-top: 0.6rem;
    margin-left: 0.5rem;
    cursor: pointer;

    &:hover {
      color: $primary;
    }
  }

  .account-controls {
    margin-left: auto;
    margin-right: 0.5rem;
  }
}
</style>
