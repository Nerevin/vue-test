<template>
  <div class="timer">{{ time }}</div>
</template>

<script>
export default {
  props: ['time'],
  name: 'Timer',
};
</script>

<style lang="scss">
  .timer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 20px;
    margin-left: 15px;

    border: 1px solid black;
    border-radius: 5px;
  }
</style>
