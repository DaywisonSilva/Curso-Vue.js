<template>
  <div class="loader">
    <div class="load-inside" :style="'width:'+percentage+'%;'">
      <p class="percentage">{{ percentage }}%</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['percentage'],
};
</script>

<style scoped>
.loader {
  width: 80%;
  margin-left: 10%;
  margin-top: 60px;
  height: 40px;
  border-radius: 8px;
  display: block;
  background-color: rgba(172, 255, 47, 0.198);
  box-shadow: 4px 4px 0px 4px #3d3d3d;
  overflow: hidden;
}

.load-inside {
  width: 0%;
  box-sizing: border-box;
  height: 100%;
  border-radius: 8px;
  background-color: greenyellow;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(23, 41, 25);
  transition: all 2s cubic-bezier(0.58, -0.59, 0.52, 1.54); 
}

.percentage {
  position: absolute;
  display: block;
  width: 50px;
  text-align: center;
  background-color: white;
  box-shadow: 0px 0px 20px #777777c0;
  padding: 4px;
  border-radius: 8px;
  left: calc(50% - 25px);
  overflow: hidden;
  text-overflow: '..%';
}
</style>