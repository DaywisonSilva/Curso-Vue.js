<template>
  <div class="citacao">
    <slot name="fonte"></slot>
    <slot></slot>
    <slot name="autor"></slot>
  </div>
</template>

<script>
export default {
  created() {
    console.log("created");
  },
  destroyed() {
    console.log("destroyed");
  },
  activated() {
    console.log("activated");
  },
  deactivated() {
    console.log("deactivated");
  },
  // props: {
  //     citacao: {
  //         type: String,
  //         required: true
  //     }
  // }
};
</script>

<style scoped>
.citacao {
  border: 1px solid #ddd;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 25px;
  max-width: 450px;
}
</style>
