<template>
  <div id="sideText" :style="`transform: rotate(${rotate}deg)`">
    <span class="side-text-1">{{ text }}</span>
    <span class="side-text-2">{{ text }}</span>
    <span class="side-text-3">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: "SideText",
  props: {
    text: String,
    rotate: Number,
  },
};
</script>

<style lang="scss" scoped>
#sideText {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  white-space: nowrap;
  writing-mode: vertical-lr;

  span {
    line-height: 2;

    &:nth-child(1) {
      opacity: 0.9;
    }
    &:nth-child(2) {
      opacity: 0.6;
    }
    &:nth-child(3) {
      opacity: 0.3;
    }
  }
}

@media (max-width: 1280px) {
  .side-text-3 {
    display: none;
  }
}

@media (max-width: 1024px) {
  .side-text-2 {
    display: none;
  }
}
@media (max-width: 768px) {
  #sideText {
    writing-mode: unset;
    transform: unset !important;
    font-size: 1.8rem;
    z-index: 2;
    
    .side-text-1 {
      text-shadow: 0px 0px 4px black;
    }
  }
}
</style>