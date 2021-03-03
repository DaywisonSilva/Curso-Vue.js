<template>
  <div id="app">
    <h1>Tarefas</h1>
    <new-task @taskAdded="addTask" />
    <task-grid :tasks="tasks"></task-grid>
  </div>
</template>

<script>
import TaskGrid from "@/components/TaskGrid";
import NewTask from "@/components/NewTask";

export default {
  components: {
    TaskGrid,
    NewTask,
  },
  data() {
    return {
      tasks: [
        {
          name: "Lavar Louça",
          pending: false,
        },
        {
          name: "Comprar blusa",
          pending: true,
        },
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
  },
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
