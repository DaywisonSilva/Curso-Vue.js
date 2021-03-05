<template>
  <div id="app">
    <h1>Tarefas</h1>
    <tasks-progress :progress="progress"/>
    <new-task @taskAdded="addTask" />
    <task-grid :tasks="tasks" @taskDeleted="deleteTask" @taskStateChanged="toggleTaskState"></task-grid>
  </div>
</template>

<script>
import TaskGrid from "@/components/TaskGrid";
import NewTask from "@/components/NewTask";
import TasksProgress from "@/components/TasksProgress";

export default {
  components: {
    TaskGrid,
    NewTask,
    TasksProgress
  },
  watch: {
    tasks() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }
  },
  computed: {
    progress() {
      const total = this.tasks.length;
      const done = this.tasks.filter(t => !t.pending).length

      return Math.round(done / total * 100) || 0;
    }
  },
  data() {
    return {
      tasks: [
      ],
    };
  },
  methods: {
    addTask(task) {
      const sameName = (t) => t.name === task.name;
      const reallyNew = this.tasks.filter(sameName).length == 0;
      reallyNew &&
        this.tasks.push({
          name: task.name,
          pending: task.pending || true,
        });
    },
    deleteTask(i) {
      this.tasks.splice(i, 1)
    },
    toggleTaskState(i) {
      this.tasks[i].pending = !this.tasks[i].pending
    }
  },
  created() {
    const json = localStorage.getItem('tasks');
    this.tasks = JSON.parse(json) || []
  }
};
</script>

<style>
body {
  font-family: "Lato", sans-serif;
  background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
  color: #fff;
}

#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#app h1 {
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 3rem;
}
</style>
