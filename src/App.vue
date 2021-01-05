<template>
  <div id="app">
    <nav-bar/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'App',
  components: { NavBar },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&family=Open+Sans:ital,wght@0,300;0,400;0,700;0,800;1,300;1,400&display=swap');

#app {
  main {
    max-height: calc(100vh - 3rem);
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content {
  display: flex;
  justify-content: center;
  flex-direction: column;

  @include md {
    margin: 0 10%;
  }

  @include lg {
    margin: 0 20%;
  }

  @include xl {
    margin: 0 30%;
  }

  &.center {
    text-align: center;
  }

  h1 {
    margin-bottom: 1rem;
  }

  .lead {
    font-weight: lighter;
    font-size: 18px;
  }

  p + p {
    margin-top: 0.5rem;
  }
}
</style>
