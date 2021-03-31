<template>
    <div class="escolha"
        @click="$emit('input', !value)"
        :class="{ligado: value, desligado: !value}">
        <div v-if="value" class="botao"></div>
        <div v-else class="botao"></div>
    </div>
</template>

<script>
export default {
  props: { 
    value: {
      type: Boolean,
      required: true
    }
  },
}
</script>

<style scoped>
.escolha {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 15px;
  width: 40px;
  border-radius: 20px;
  border: 1px solid #aaa;
}

.botao {
  position: absolute;
  margin: 0px 5px;
  height: 25px;
  width: 25px;
  border-radius: 14px;
  background: #fff;
  box-shadow: 0px 0px 5px #000b;
  transition: all .2s linear;
}

.desligado {
  background-color: #aaa;
}

.ligado {
  background-color: #7495c2;

}

.desligado .botao {
  transform: translateX(-10px);

}

.ligado .botao {
  background-color: #255ca9;
  transform: translateX(15px);

}
</style>
