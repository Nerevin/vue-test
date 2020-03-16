<template>
  <div class="red circle" v-bind:class="{ active: state }"></div>
</template>

<script>
export default {
  props: ['state'],
  name: 'Red',
};
</script>

<style lang="scss">
  .red {
    background-color: red;

    opacity: 0.6;
  }
</style>
