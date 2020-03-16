<template>
  <div id="app" class="app">
    <main class="body">
      <Red v-bind:state="state"/>
      <Yellow v-bind:state="state"/>
      <Green v-bind:state="state"/>
    </main>
    <Timer v-bind:time="time"/>
  </div>
</template>

<script>
import Red from '@/components/Red.vue';
import Yellow from '@/components/Yellow.vue';
import Green from '@/components/Green.vue';
import Timer from '@/components/Timer.vue';

export default {
  name: 'App',
  components: {
    Red,
    Yellow,
    Green,
    Timer,
  },
  data() {
    return {
      prevState: '',
      state: this.$route.params.color,
      time: 0,
    };
  },
  methods: {

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
