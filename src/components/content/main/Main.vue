<template>
  <div id="main">
    <side-text :text="'ГЛАВНАЯ СТРАНИЦА'" :rotate="180" />

    <div class="content">
      <panel :isBackgroundActive="false">
        <!-- Header для панели -->
        <template v-slot:panelHeader>
          <div class="panel-header-container">
            <!-- Левая часть -->
            <div class="panel-header-container__full-name">
              <div>Konstantinov</div>
              <div>Vadim</div>
              <div>Valerievich</div>
            </div>
            <!-- Правая часть -->
            <div class="panel-header-container__contacts">
              <div>Konstavadim@gmail.com</div>
              <div>
                <img
                  class="icon-call"
                  :src="require('@/assets/images/call.png')"
                  alt="Call"
                />+7 996 332 70 71
              </div>
            </div>
          </div>
        </template>

        <!-- Main для панели -->
        <template v-slot:panelMain>
          <div class="panel-main-container">
            <img :src="require('@/assets/images/space.jpg')" alt="">
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
};
</script>

<style lang="scss" scoped>
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

.panel-main-container {
  height: 100%;

  img {
    height: 100%;
    width: 100%;
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
  }

  .panel-header-container {
    &__full-name * {
      font-size: 1.1rem;
    }
    &__contacts * {
      font-size: 1rem;
    }
  }
}

@media (max-width: 400px) {
  .panel-header-container {
    &__full-name * {
      font-size: 0.9rem;
    }
    &__contacts * {
      font-size: 0.9rem;
    }

    .icon-call {
      width: 18px;
      height: 18px;
      vertical-align: middle;
      margin-right: 5px;
    }
  }
}
</style>