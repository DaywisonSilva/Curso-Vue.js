<template>
  <div>
    <button @click="plusValue">+</button>
    <button @click="minusValue">-</button>
  </div>
</template>

<script>
import barramento from '../barramento'
export default {
  data() {
    return {
      value: 0
    }
  },
  methods: {
    plusValue() {
      this.value++
      barramento.addValue(this.value) 
    },
    minusValue() {
      this.value > 1 ? this.value-- : this.value = 1
      barramento.addValue(this.value) 
    }
  }
}
</script>

<style>
  button {
    width: 40px;
    height: 40px;
    margin: 10px;
    font-size: 28px;
  }
</style>
