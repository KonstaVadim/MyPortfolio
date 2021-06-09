<template>
  <div class="header" ref="header">
    <div class="header__logo">
      <span class="header__initials">KV</span>
      <div class="header__humburger" @click="showMenu()">KV</div>
    </div>
    <div class="header-nav">
      <router-link
        class="header-nav__link secondary-text-color"
        v-for="link in navLinks"
        :to="`/${link.url}`"
        :key="link.name"
        exact-path
      >
        {{ link.name }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  computed: {
    // Список ссылок
    navLinks: {
      get() {
        return this.$store.getters.NAVLINKS;
      },
    },
  },
  methods: {
    showMenu() {
      console.log();
      this.$refs.header.classList.add("adaptive-menu");
    },
  },
};
</script>

<style lang="scss" scoped>
@use '../../assets/styles/theme-colors.scss';

%flex-between-bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.header {
  @extend %flex-between-bottom;
  height: 50px;
  padding: 0 10%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.8);
  text-shadow: 1px 1px 2px rgb(0, 0, 0); // TODO обдумать нужен ли на ссылках

  &__logo {
    font-size: 2rem;
    font-weight: bold;
  }

  &__initials {
    display: block;
  }

  &__humburger {
    display: none;
  }

  &-nav {
    @extend %flex-between-bottom;
    width: 80%;

    &__link {
      text-decoration: none;
    }

    &__link:not(.active-text) {
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        color: var(--primary-text-color);
      }
    }

    .router-link-active {
      font-size: 1.1rem;
      color: var(--primary-text-color);
    }
  }
}

@media (max-width: 1024px) {
  .adaptive-menu {
    background-color: var(--bacground-color);

    .header__humburger {
      background-color: var(--secondary-text-color);;
    }

    .header-nav {
      height: 150px;
      transition: height 1s ease-in-out;

      &__link {
        transition: opacity 1s ease-in-out;
        opacity: 1;
        width: 100%;
      }
    }
  }

  .header {
    height: unset;
    justify-content: unset;
    align-items: center;

    &__initials {
      display: none;
    }

    &__humburger {
      display: block;
      padding: 0 5px;
      margin-bottom: 5px;
      border: 1px solid var(--secondary-text-color);
      border-radius: 15%/50%;
      text-shadow: none;
      font-size: 1.8rem;
      cursor: pointer;

      &:hover {
        background-color: var(--secondary-text-color);
      }
    }

    &-nav {
      margin-left: 20px;
      padding: 10px 0;
      flex-direction: column;
      align-items: unset;
      height: 50px;
      overflow: hidden;

      &__link {
        opacity: 0;
      }
    }
  }
}
</style>