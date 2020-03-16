<template>
  <div class="green circle" v-bind:class="{ active: state == 'green' }"></div>
</template>

<script>
export default {
  props: ['state'],
  name: 'Green',
};
</script>

<style lang="scss">
  .green {
    background-color: green;

    opacity: 0.6;
  }
</style>
