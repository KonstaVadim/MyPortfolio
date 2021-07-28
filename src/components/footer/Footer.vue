<template>
  <div class="footer">
    <div class="footer__socials">
      <a :href="link.url" target="_blank" v-for="link in socialsLink" :key="link.name">
        <box-icon type="logo" :name="link.name" animation="burst-hover" color="white"></box-icon>
      </a>
    </div>
  </div>
</template>

<script>
import 'boxicons';

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
  background-color: rgba(0, 0, 0, 0.25);
  text-align: center;

  &__socials {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 100%;
    border-bottom: 1px solid var(--border-color);


    a:not(:first-child) {
      margin-left: 15px;
    }
  }
}
</style>