<template>
  <div id="main">
    <side-text :text="'ГЛАВНАЯ СТРАНИЦА'" :rotate="180" />

    <div class="content">
      <panel :isBackgroundActive="false">
        <!-- Header для панели -->
        <template v-slot:panelMain>
          <div class="content__container">
            <div class="text">
              <span>Привет!</span>
              <div>
                Меня зовут <span class="text__name">Константинов Вадим</span>
              </div>
              <div>
                <router-link class="router-link" to="/" exact-path>
                  Здесь
                </router-link>
                <span>вы можете найти всю необходимую обо мне информацию</span>
              </div>
              <div class="text__chat">
                <span>Буду рад ответить на все вопросы</span>
                <router-link :to="contactsLink.url" exact-path>
                  <box-icon
                    class="text__contact-icon"
                    name="chat"
                    animation="tada"
                    color="white"
                  ></box-icon>
                </router-link>
              </div>
            </div>
          </div>
        </template>
      </panel>
    </div>
  </div>
</template>

<script>
const sideText = () => import("../Side-text.vue");
const panel = () => import("../Panel.vue");

export default {
  name: "Main",
  components: {
    sideText,
    panel,
  },
  computed: {
    // Ссылка на модуль "Контакты"
    contactsLink: {
      get() {
        return this.$store.getters.NAVLINKS.contacts;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

#main {
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
}

.content {
  position: relative;
  width: 95%;
  height: 85%;
  margin-left: 5%;
  padding-right: 7%;
  background-color: var(--panel__main-block);

  &__container {
    @include flex-center;
    width: 100%;
    height: 100%;
    text-align: center;
  }

  .text {
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    font-family: 'Old Standard TT', serif;

    &__chat {
      @include flex-center;
    }

    &__contact-icon {
      cursor: pointer;
      margin-left: 5px;
    }
  }

  .router-link {
    color: inherit;
    text-decoration: none;
    font-style: italic;
  }
}

.panel-header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;

  & * {
    line-height: 1.5;
  }

  &__full-name * {
    font-size: 1.3rem;
  }
  &__contacts * {
    text-align: right;
    font-size: 1.1rem;
  }

  .icon-call {
    width: 23px;
    height: 23px;
    vertical-align: middle;
    margin-right: 5px;
  }
}

@media (max-width: 768px) {
  #main {
    flex-direction: column;
  }

  .content {
    background-color: unset;
    padding: 0;
    margin: 0;
    z-index: 2;

    .text {
      font-size: 1rem;
    }
  }
}
</style>