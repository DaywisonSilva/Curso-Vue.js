 <template>
  <div class="container-search" :class="{ 'container-search-focus': isFocus }">
    <input
      type="text"
      placeholder="add a new task"
      class="input-add"
      @focus="isFocus = true"
      @blur="isFocus = false"
      v-model="task"
      @keyup.enter="addNewTask()"
    />
    <button class="add-task" title="add a new task" @click="addNewTask()">+</button>
  </div>
</template>
<script>
export default {
  props: ["tasks"],
  data() {
    return {
      isFocus: false,
      task: "",
      cont: 0,
    };
  },
  methods: {
    addNewTask() {
      if(this.task !== null && this.task.length !== 0) {
        this.$emit("addTask", { task: this.task, id: this.cont, isDone: false });
        this.cont++;
        this.task = ''
      }
    },
  },
};
</script>
 
<style scoped>
.container-search {
  width: 70%;
  margin: 30px auto;
  display: flex;
  transition: all 0.2s linear;
}

.input-add {
  display: block;
  width: 100%;
  border: none;
  padding: 8px;
  border-radius: 8px 0 0 8px;
  outline: none;
  color: #3d3d3d;
}

.add-task {
  width: 40px;
  cursor: pointer;
  background-color: greenyellow;
  font-size: 1.4rem;
  font-weight: bold;
  color: #3d3d3d;
  transition: all 0.2s linear;
}

.add-task:focus {
  box-shadow: 0 0 0 4px rgba(172, 255, 47, 0.466);
}

.container-search-focus {
  box-shadow: 0 0 0 4px rgba(172, 255, 47, 0.466);
  border-radius: 8px 0 0 8px;
}
</style>