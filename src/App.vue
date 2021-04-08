<template>
  <div id="app">
    <div id="nav">
      <router-link to="/test1">{{test}}</router-link> |
      <router-link to="/test2">{{test2}}</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'app',
  computed: {
    test() {
      return this.$store.getters.TEST;
    },
    test2() {
      console.log(this.$store);
      console.log(this.$store.state.testStore.TEST2);
      return this.$store.getters['testStore/TEST2'];
    },
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
