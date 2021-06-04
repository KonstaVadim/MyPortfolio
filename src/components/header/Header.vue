<template>
  <div class="header">
    <div class="header__logo">
      <span>KV</span>
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
};
</script>

<style lang="scss" scoped>
%flex-between-bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.header {
  @extend %flex-between-bottom;
  height: 50px;
  padding: 0 10%;
  border-bottom: 1px solid #fff;

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
</style>