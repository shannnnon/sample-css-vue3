<template>
  <button @click='handleClick'>Click <span v-show='show' class='circle' :style='{ "top": show ? `${top}px` : "auto", "left": show ? `${left}px` : "auto" }'></span></button>
</template>

<script setup>
// 按钮点击效果：通过添加span， span的出现与消失实现
import { ref } from '@vue/runtime-core'
const show = ref(false)
const top = ref(0)
const left = ref(0)
const handleClick = (e) => {
  show.value = true
  const x = e.clientX
  const y = e.clientY
  const buttonLeft = e.target.offsetLeft
  const buttonTop = e.target.offsetTop

  top.value = y - buttonTop
  left.value = x - buttonLeft

  setTimeout(() => {
    show.value = false
  }, 300)
}
</script>

<style>
body {
  /* height: 100%;
  width: 100%;
  position: fixed; */
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

button {
  position: relative;
  width: 100px;
  height: 50px;
  background-color: burlywood;
  border: burlywood 1px solid;
}

/* button:focus {
  outline: none;
} */

button .circle {
  position: absolute;
  background-color: #fff;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
  animation: scale .5s ease-out;
}

@keyframes scale {
  to {
    transform: translate(-50%, -50%) scale(3);
    opacity: 0;
  }
}
</style>
