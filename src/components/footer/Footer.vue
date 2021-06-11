<template>
  <div class="footer">
    <div class="footer__name">
      <span>KONSTANTINOV VADIM</span>
    </div>
    <div class="footer__container">
      <div class="footer__socials">
        <a href="#" v-for="link in socialsLink" :key="link.name">
          <img :src="require(`@/assets/images/${link.url}`)" :alt="link.name" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  computed: {
    socialsLink: {
      get() {
        return this.$store.getters.SOCIALSLINK;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(43, 39, 45, 0.6);
  text-align: center;

  &__name {
    font-size: 2rem;
  }

  &__container {
    width: 100%;
    border-top: 1px solid var(--primary-text-color);
    border-bottom: 1px solid var(--border-color);
  }

  &__socials {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;

    img {
      height: 32px;
      width: 32px;
    }

    a:not(:first-child) {
      margin-left: 15px;
    }
  }
}

@media (max-width: 768px) {
  .footer {
    .name {
      font-size: 1.5rem;
    }
  }
}
</style>