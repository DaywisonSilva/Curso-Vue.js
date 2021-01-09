<template>
  <div>
    <div class="buttons">
      <button class="vermelho" @click="componente = 'Vemelho'">Carregar componente vermelho</button>
      <button class="verde" @click="componente = 'Verde'">Carregar componente verde</button>
      <button class="azul" @click="componente = 'Azul'">Carregar componente azul</button>
    </div>
    <component :is="componente">
      <span slot="conteudo">Conteúdo do Componente <strong>{{ componente }}</strong></span>
    </component>
  </div>
</template>
<script>
import AppVermelho from '@/components/Vermelho';
import AppVerde from '@/components/Verde';
import AppAzul from '@/components/Azul';
export default {
  components: {
    AppVermelho,
    AppVerde,
    AppAzul
  },
  data() {
    return {
      componente: 'Vermelho'
    }
  }
};
</script>

<style>
  body {
    background-color: aliceblue;
  }

  .buttons {
    display: flex;
    margin: auto;
    width: 100%;
    max-width: 800px;
  }

  button {
    width: 100%;
    max-width: 400px;
    display: block;
    margin: 0 5px;
    padding: 8px;
    border: none;
    cursor: pointer;
    border-radius: 6px;
    box-sizing: border-box;
    transition: all .2s linear;
  }

  button:focus {
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.082);
    /* outline: 4px solid #3d3d3d6b; */
  }

  .vermelho:focus {
    box-shadow: 0px 0px 0px 4px rgba(253, 107, 107, 0.616), 2px 2px 15px rgba(0, 0, 0, 0.082);
  }

  .verde:focus {
    box-shadow: 0px 0px 0px 4px rgba(110, 250, 110, 0.609), 2px 2px 15px rgba(0, 0, 0, 0.082);
  }

  .azul:focus {
    box-shadow: 0px 0px 0px 4px rgba(98, 98, 251, 0.637), 2px 2px 15px rgba(0, 0, 0, 0.082); 
  }

  .vermelho {
    background-color: rgb(224, 48, 48);
    color: white;
  }

  .verde {
    background-color: rgb(81, 224, 81);
    color: white;
  }

  .azul {
    background-color: rgb(62, 62, 228);
    color: white;
  }
</style>