<template>
  <div id="app" class="primary-text-color">
    <header>
      <Header/>
    </header>
    <main>
    <router-view/>
    </main>
    <footer></footer>
  </div>
</template>

<script>
import Header from './components/header/Header';

// TODO сделать кнопку с рандомными пожеланиями/предсказаниями по API
export default {
  name: "app",
  data() {
    return {
      themeMode: true,
    };
  },
  components: {
    Header
  },
  computed: {},
  methods: {
    changeTheme() {
      let htmlElement = document.documentElement;
      if (this.themeMode) {
        htmlElement.setAttribute("theme", "dark");
      } else {
        htmlElement.setAttribute("theme", "light");
      }

      this.themeMode = !this.themeMode;
    },
  },
};
</script>

<style lang="scss">
@use "./assets/styles/styles.scss";

* {
  padding: 0;
  margin: 0;
  line-height: 1.3;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  height: 100vh;
  width: 100vw;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #a1a1a1;
}
</style>