<template>
<div class="new-task">
  <input type="text" v-model="name" @keydown.enter="add" class="form-element" placeholder="Nova Tarefa">
  <button @click="add" class="form-element">+</button>
</div>
</template>

<script>
export default {
    data() {
        return {
            name: ''
        }
    },
    methods: {
        add() {
            this.$emit('taskAdded', { name: this.name })
            this.name = ''
        }
    }
}
</script>

<style>
    .new-task {
        margin: 35px;
        width: 100%;
        max-width: 500px;
    }

    .form-element {
        outline: none;
        font-size: 2rem;
        border: 1px solid white;
        padding: 5px 10px 8px;
        box-sizing: border-box;
        color: white;
    }

    input.form-element {
        width: calc(100% - 50px);
        background: #fff2;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }

    button.form-element {
        width: 50px;
        border-left: none;
        background-color: #2196F3;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        cursor: pointer;
    }


</style>