<template>
  <div class="red circle" v-bind:class="{ active: state == 'red',
   blink: time <= 3 && state === 'red' }"></div>
</template>

<script>
export default {
  props: ['state', 'time'],
  name: 'Red',
};
</script>

<style lang="scss">
  .red {
    background-color: red;

    opacity: 0.6;
  }
</style>
