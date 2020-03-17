<template>
  <div id="app" class="app">
    <main class="body">
      <Red v-bind:state="state" v-bind:time="time"/>
      <Yellow v-bind:state="state" v-bind:time="time"/>
      <Green v-bind:state="state" v-bind:time="time"/>
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
    switchLight() {
      switch (this.state) {
        case ('red'):
          this.time = 3;
          this.prevState = 'red';
          this.state = 'yellow';
          this.$router.push({
            path: this.state,
          });
          break;

        case ('yellow'):
          this.time = (this.prevState === 'red' || this.prevState === '') ? 15 : 10;
          this.state = (this.prevState === 'red' || this.prevState === '') ? 'green' : 'red';
          this.prevState = 'yellow';
          this.$router.push({
            path: this.state,
          });
          break;

        case ('green'):
          this.time = 3;
          this.state = 'yellow';
          this.prevState = 'green';
          this.$router.push({
            path: this.state,
          });
          break;

        default:
          this.state = 'red';
          this.$router.push({
            path: this.state,
          });
          break;
      }
    },
    timer() {
      if (this.state === 'red') {
        this.time = 10;
      } else if (this.state === 'yellow') {
        this.time = 3;
      } else this.time = 15;
      this.interval = setInterval(() => {
        this.time -= 1;
        if (this.time === 0) {
          this.switchLight();
        }
      }, 1000);
    },
  },
  mounted() {
    this.timer();
  },
  destroyed() {
    clearTimeout(this.interval);
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

  @keyframes blinking {
    from {opacity: 1;}
    to {background-color: transparent;}
  }

  .blink {
    animation-name: blinking;
    animation-duration: 1s;
    animation-iteration-count: 3;
  }
</style>
