<template>
  <div>
    <app-plus></app-plus>
    <app-view></app-view>
  </div>
</template>

<script>
import plus from './components/Plus'
import view from './components/View'

export default {
  components: {
    'app-plus': plus,
    'app-view': view
  }
}
</script>

<style>

</style>