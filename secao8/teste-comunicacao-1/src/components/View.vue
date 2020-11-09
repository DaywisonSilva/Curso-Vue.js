<template>
  <div>
      <span>{{value}}</span>
  </div>
</template>

<script>
import barramento from '../barramento'
export default {
    data() {
        return {
            value: null
        }
    },
    created() {
        barramento.showValue(value => {
            this.value = value
        })  
    }
}
</script>

<style>

</style>