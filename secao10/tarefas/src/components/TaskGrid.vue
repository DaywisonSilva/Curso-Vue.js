<template>
  <div class="task-grid">
    <template v-if="tasks.length">
        <task v-for="(task, i) in tasks" :key="task.name" 
        @taskDeleted="$emit('taskDeleted', i)"
        @taskStateChanged="$emit('taskStateChanged', i)"
        :task="task"></task>
    </template>
    <p v-else>Sua vida está em dia!</p>
  </div>
</template>

<script>
import Task from "./Task";
export default {
  components: {
    Task,
  },
  props: {
    tasks: { type: Array, required: true },
  },
};
</script>

<style>
  .task-grid {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .task-grid .task {
    margin: 10px;
  }

  .no-task {
    color: #aaa;
    font-size: 1.7rem;
  }
</style>