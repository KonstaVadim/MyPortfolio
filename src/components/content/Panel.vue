<template>
  <div class="panel" :class="panelClasses">
    <div class="panel__small-block"></div>

    <div class="panel__content">
      <!-- Header -->
      <div class="panel__header">
        <slot name="panelHeader"></slot>
      </div>

      <!-- Main -->
      <div class="panel__main">
        <slot name="panelMain"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "backgrounfPanel",
  props: {
    isBackgroundActive: Boolean,
  },
  computed: {
    // Классы панели
    panelClasses() {
      let classes = {};
      if (this.isBackgroundActive) {
        this.$set(classes, "panel-background", true);
      }
      return classes;
    },
  },
};
</script>

<style lang="scss" scoped>
.panel {
  display: flex;
  width: 100%;
  height: 100%;

  &__small-block {
    width: 5%;
    min-width: 15px;
    max-width: 50px;
    height: 100%;
    background-color: var(--panel__small-block);
  }

  &__content {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  &__main {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: hidden;
  }
}

.panel-background {
  background-color: var(--panel__main-block);
}

@media (max-width: 768px) {
  .panel {
    margin: auto;
    background-color: var(--panel__main-block);
  }
}
</style>