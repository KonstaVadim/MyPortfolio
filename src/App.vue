<template>
  <div id="app" class="primary-text-color">
    <header>
      <Header />
    </header>

    <main>
      <transition name="component-fade" mode="out-in">
        <router-view />
      </transition>
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

// TODO сделать кнопку с рандомными пожеланиями/предсказаниями по API
export default {
  name: "app",
  data() {
    return {
      themeMode: true,
    };
  },
  components: {
    Header,
    Footer,
  },
  computed: {},
  methods: {
    /* Смена темы */
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
  background-color: var(--border-color);
  position: absolute;
  z-index: 1;
  content: "";
}

#app {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 320px;
  height: 100%;
  padding-top: 51px;

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

  main {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: hidden;
  }
}

.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter,
.component-fade-leave-to {
  opacity: 0;
}
</style>