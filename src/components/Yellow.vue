<template>
  <div class="yellow circle" v-bind:class="{ active: state }"></div>
</template>

<script>
export default {
  props: ['state'],
  name: 'Yellow',
};
</script>

<style lang="scss">
  .yellow {
    background-color: yellow;

    opacity: 0.6;
  }
</style>
