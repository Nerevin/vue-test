<template>
  <div class="yellow circle" v-bind:class="{ active: state == 'yellow',
   blink: time <= 3 && state === 'yellow' }"></div>
</template>

<script>
export default {
  props: ['state', 'time'],
  name: 'Yellow',
};
</script>

<style lang="scss">
  .yellow {
    background-color: yellow;

    opacity: 0.6;
  }
</style>
