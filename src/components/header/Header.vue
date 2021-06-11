<template>
  <div class="header" :class="{ 'adaptive-menu': isActive }">
    <div class="header__logo">
      <span class="header__initials">KV</span>
      <div class="header__humburger" @click="isActive = !isActive">KV</div>
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
    return {
      isActive: false,
    };
  },
  computed: {
    // Список ссылок
    navLinks: {
      get() {
        return this.$store.getters.NAVLINKS;
      },
    },
  }
};
</script>

<style lang="scss" scoped>
@use '../../assets/styles/theme-colors.scss';

$speed: 0.5s;

%flex-between-bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.header {
  @extend %flex-between-bottom;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 10%;
  border-bottom: 1px solid var(--border-color);
  transition: background-color $speed ease-in-out;

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
    height: 50px;
    transition: height $speed ease-in-out;
    width: 80%;

    &__link {
      cursor: default;
      text-decoration: none;
      transition: color .3s ease-in-out, font-size .3s ease-in-out;
    }

    &__link:not(.router-link-active) {
      cursor: pointer;

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
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 3;
    background-color: var(--bacground-color);

    .header__humburger {
      background-color: var(--secondary-text-color);
    }

    .header-nav {
      height: 150px;

      &__link {
        opacity: 1;
      }
    }
  }

  .header {
    justify-content: unset;
    align-items: center;

    &__initials {
      display: none;
    }

    &__humburger {
      display: block;
      padding: 0 5px;
      border: 1px solid var(--secondary-text-color);
      border-radius: 15%/50%;
      font-size: 1.8rem;
      cursor: pointer;

      &:hover {
        background-color: var(--secondary-text-color);
      }
    }

    &-nav {
      flex-direction: column;
      align-items: flex-start;
      margin-left: 20px;
      padding: 10px 0;
      overflow: hidden;

      &__link {
        opacity: 0;
      }
    }
  }
}

</style>