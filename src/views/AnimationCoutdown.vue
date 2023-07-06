<template>
  <div class='counter' :class='{ hide: !showCounter }'>
    <div class="nums">
      <span v-for='(item, index) in showArr' :key='item' :class='{ in: num == item }' @animationend='runAnimation($event, index)'>{{ item }}</span>
    </div>
    <h4>倒计时</h4>
  </div>
  <div class="final" :class='{ show: !showCounter }'>
    <h4>Go</h4>
    <button @click='replay'>重新计时</button>
  </div>
</template>

<script setup>
import { ref } from '@vue/runtime-core'
const num = ref(3)
const showArr = [3, 2, 1, 0]
const showCounter = ref(true)

const replay = () => {
  showCounter.value = true
  num.value = 3
}

const runAnimation = (e, index) => {
  if (e.animationName === 'goIn' && index !== showArr.length - 1 && num.value > 0) {
    num.value--
  } else {
    showCounter.value = false
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
}

h4 {
  font-size: 20px;
  margin: 5px;
  text-transform: uppercase;
}

.counter {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.counter.hide {
  transform: translate(-50%, -50%) scale(0);
  animation: hide 0.2s ease-out;
}

@keyframes hide {
  0% {
    transform: translate(-50%, -50%) scale(1);
  }

  100% {
    transform: translate(-50%, -50%) scale(0);
  }
}

.final {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  text-align: center;
}

.final.show {
  transform: translate(-50%, -50%) scale(1);
  animation: show .2s ease-out;
}

@keyframes show {
  0% {
    transform: translate(-50%, -50%) scale(0);
  }

  30% {
    transform: translate(-50%, -50%) scale(1.4);
  }

  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}

.nums {
  color: #3498db;
  font-size: 50px;
  position: relative;
  overflow: hidden;
  width: 250px;
  height: 50px;
}

.nums span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(120deg);
  transform-origin: bottom center;
}

.nums span.in {
  transform: translate(-50%, -50%) rotate(0deg);
  animation: goIn 1s ease-in-out;
}

@keyframes goIn {
  0% {
    transform: translate(-50%, -50%) rotate(120deg);
  }

  30% {
    transform: translate(-50%, -50%) rotate(-20deg);
  }

  50% {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  60% {
    transform: translate(-50%, -50%) rotate(20deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(-120deg);
  }
}
</style>
