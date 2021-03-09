<template>
  <div class="container-tasks">
    <div class="container-task" v-for="task in tasks" :key="task.id">
      <i class="fas fa-window-close" @click="del(task.id)"></i>
      <div class="task" @click="done(task)" :class="[{ done: task.isDone }]">
        {{ task.task }}
      </div>
    </div>
  </div>
</template>

<script>
// let contTrue = 0;
export default {
  props: ["tasks"],
  data() {
    return {
      percentage: "",
      contTrue: 0,
    };
  },
  methods: {
    done(task) {
      this.contTrue = 0;
      task.isDone = !task.isDone;
      this.tasks.forEach((el) => {
        if (el.isDone === true) {
          this.contTrue++;
        }
      });
      this.percentage = (this.contTrue * 100) / this.tasks.length;
      console.log(this.percentage);
      this.$emit("changePercentage", this.percentage);
    },
    del(task) {
      this.contTrue = 0;
      this.tasks.forEach((el) => {
        if (el.id === task) {
          this.tasks.splice(this.tasks.indexOf(el), 1);
          this.tasks.forEach((el) => {
            if (el.isDone === true) {
              this.contTrue++;
            }
          });
          this.percentage = (this.contTrue * 100) / this.tasks.length;
          if(isNaN(this.percentage)) {
            this.percentage = 0;
          }
          this.$emit("changePercentage", this.percentage);
        }
      });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap");
.container-tasks {
  width: 90%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  height: auto;
  min-height: 200px;
}

.task {
  width: 200px;
  box-shadow: 0px 0px 30px #4b4b4b9d;
  height: 80px;
  background-color: white;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Yusei Magic", sans-serif;
  color: #3d3d3d;
  margin: 14px;
  cursor: pointer;
}

.fa-window-close {
  color: rgb(218, 37, 37);
  position: relative;
  left: calc(100% - 40px);
  cursor: pointer;
  top: 40px;
  font-size: 2rem;
}

.done {
  transition: all 0.2s linear;
  background-color: yellowgreen;
  text-decoration: line-through;
}
</style>