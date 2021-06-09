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

@mixin decorative-line {
    width: 1px;
    background-color: rgba(255, 255, 255, .8);
    position: absolute;
    z-index: -1;
    content: '';
}

#app {
  width: 100%;
  height: 100%;

  &:before {
    @include decorative-line;
    bottom: 0;
    left: 7%;
    height: 13%;
  }

  &:after {
    @include decorative-line;
    top: 0;
    right: 7%;
    height: 90%;
  }
}
</style>