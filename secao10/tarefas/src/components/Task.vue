<template>
  <div class="task" :class="stateClass">
    <span @click="$emit('taskDeleted', task)" class="close">x</span>
    <p>{{ task.name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    task: { type: Object, required: true },
  },
  computed: {
    stateClass() {
      return {
        pending: this.task.pending,
        done: !this.task.pending,
      };
    },
  },
};
</script>

<style>
    .task {
        box-sizing: border-box;
        width: 250px;
        height: 100px;
        padding: 10px;
        border-radius: 8px;
        font-size: 2rem;
        font-weight: 300;
        cursor: pointer;
        user-select: none;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        position: relative;
    }

    .pending {
        border-left: 12px solid #B73229;
        background-color: #F44336;
    }

     .done {
        color: #ddd;
        border-left: 12px solid #0A8F08;
        background-color: #4CAF50;
        text-decoration: line-through;
    }

    .pending .close {
      background-color: #B73229;
    }

    .done .close {
      background-color: #0a8f08;
    }

    .close {
      position: absolute;
      right: 10px;
      top: 10px;
      font-size: 0.9rem;
      font-weight: 600;
      width: 20px;
      height: 20px;
      border-radius: 10px;
      display: flex;
      justify-content: center;
    }
</style>