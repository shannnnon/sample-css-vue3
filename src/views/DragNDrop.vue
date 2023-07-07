<template>
  <div v-for='n in 6' :key='n' class='empty'
    :class="{ hovered: fillItem == n && isOver, fillEmpty: fillItem == n && showFillEmpty }"
    @dragenter='dragEnter' @dragleave='dragLeave' @dragover='dragOver' @drop='dragDrop'>
    <div v-show='fillItem == n' :class="{ fill: fillItem == n, hold: fillItem == n && isHold }" draggable='true' @dragstart='dragStart' @dragend='dragEnd'></div>
    <label>{{ n }}</label>
  </div>
</template>

<script setup>
import { ref } from '@vue/runtime-core'
const fillItem = ref(1)
const isHold = ref(false)
const isOver = ref(false)
const showFillEmpty = ref(false)

const dragStart = () => {
  console.log('start')
  isHold.value = true
}

const dragEnter = (e) => {
  console.log('enter')
  e.preventDefault()
}

const dragOver = (e) => {
  console.log('over', e)
  e.preventDefault()
  fillItem.value = e.target.__vnode.key
  isOver.value = true
}

const dragLeave = () => {
  console.log('leave')
}

const dragDrop = (e) => {
  console.log('drop', e)
  console.log(e.target.__vnode.key)
  fillItem.value = e.target.__vnode.key
  showFillEmpty.value = true
}

const dragEnd = (e) => {
  console.log('end')
}

</script>

<style>
* {
  box-sizing: border-box;
}

body {
  background-color: steelblue;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

.empty {
  display: inline-flex;
  height: 150px;
  width: 150px;
  margin: 10px;
  border: solid 3px black;
  background: white;

}

.emptySpecial {
  display: inline-flex;
  height: 200px;
  width: 200px;
  margin: 10px;
  border: solid 3px black;
  background: white;
}

.fill {
  background-image: url('https://source.unsplash.com/random/150x150');
  height: 100px;
  width: 100px;
  cursor: pointer;
}

.fillEmpty {
  height: 105px;
  width: 105px;
}

.hold {
  border: solid 5px #ccc;
}

.hovered {
  background-color: #333;
  border-color: white;
  border-style: dashed;
}

@media (max-width: 800px) {
  body {
    flex-direction: column;
  }
}
</style>
