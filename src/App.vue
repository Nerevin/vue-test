<template>
  <div id="app" class="app">
    <main class="body">
      <Red />
      <Yellow class="active"/>
      <Green />
    </main>
  </div>
</template>

<script>
import Red from '@/components/Red.vue';
import Yellow from '@/components/Yellow.vue';
import Green from '@/components/Green.vue';

export default {
  name: 'App',
  components: {
    Red,
    Yellow,
    Green,
  },
};
</script>

<style lang="scss">
  .app {
    display: flex;
    justify-content: center;
  }
  .body {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 300px;
    height: 600px;

    border: 2px solid black;

    background-color: gray;
  }
  .circle {
    width: 150px;
    height: 150px;

    border: 1px solid black;
    border-radius: 50%;
  }

  .active {
    opacity: 1;
  }
</style>
