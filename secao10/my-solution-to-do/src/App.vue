<template>
  <div>
    <h1 class="title-h1-app">A simple Vue.js To-Do</h1>
    <AppLoadBar  :percentage="percentage"/>
    <AppAddToDo 
    :tasks="tasks"
    @addTask="tasks.push($event)"
    />
    <div class="container-tasks">
      <AppToDo :tasks="tasks" @changePercentage="percentage = $event"/>
    </div>
  </div>
</template>

<script>
import AppLoadBar from '@/components/LoadBar'
import AppAddToDo from '@/components/AddToDo'
import AppToDo from '@/components/ToDo'
export default {
  components: {
    AppLoadBar,
    AppAddToDo,
    AppToDo
  },
  data() {
    return {
      tasks: [],
      percentage: 0
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap");
.title-h1-app {
  display: block;
  font-size: 3rem;
  color: rgb(255, 255, 255);
  text-shadow: 0px 0px 10px #3d3d3d83;
  text-align: center;
  margin: 0;
  position: relative;
  top: 30px;
  font-family: 'Yusei Magic', sans-serif;
}

</style>