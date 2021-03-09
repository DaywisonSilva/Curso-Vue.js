import Vue from 'vue'
export default new Vue({
  methods: {
    addTask(task) {
      this.$emit('addtask', task)
    },
    rederNewTask(callback) {
      this.$on('addtask', callback)
    },
  },
})
