<template>
  <div>
    <app-value></app-value>
    <app-view></app-view>
  </div>
</template>

<script>
import value from './components/Value'
import view from './components/View'
export default {
  components: {
    'app-value': value,
    'app-view': view
  }
}
</script>

<style>

</style>