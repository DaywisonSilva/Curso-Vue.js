<template>
  <div id="app" class="container-fluid">
    <h1>Animações</h1>
    <hr />
    <b-button variant="primary" class="mb-4" @click="exibir = !exibir">Mostrar Mensagem</b-button>
    <!-- <transition name="fade" appear>
      <b-alert variant="info" show v-show="exibir">{{ msg }}</b-alert>
    </transition>-->

    <!-- o appear iniciar a animação assim que o componente é criado -->
    <!-- <transition name="slide" type="animation" appear>
      <b-alert variant="info" show v-show="exibir">{{ msg }}</b-alert>
    </transition>

    <transition enter-active-class="animated shake" leave-active-class="animated shake" appear>
      <b-alert variant="info" show v-show="exibir">{{ msg }}</b-alert>
    </transition>
    <hr />-->
    <b-select v-model="tipoAnimacao">
      <option value="fade">Fade</option>
      <option value="slide">Slide</option>
    </b-select>

    <!-- para o vue poder saber que o elemento está sendo renderizado novamente é necessário aplicar o key para a animação ser visível -->
    <!-- o atributo mode com o valor out-in define que primeiro um elemento terá que sair para o outro aparecer com a animação -->
    <transition :name="tipoAnimacao" appear mode="out-in">
      <b-alert variant="info" show v-if="exibir" key="info">{{ msg }}</b-alert>
      <b-alert variant="danger" show v-else key="danger">{{ msg }}</b-alert>
    </transition>
    <hr />
    <button @click="exibir2 = !exibir2">Alternar</button>
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
    >
      <!-- @enter-cancelled="enterCancelled" -->
      <!-- @leave-cancelled="leaveCancelled" -->
      <div class="caixa" v-if="exibir2"></div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Uma mensagem de informação para o usuário",
      exibir: true,
      exibir2: true,
      tipoAnimacao: "fade",
      larguraBase: 0
    };
  },
  methods: {
    animar(el, done, negativo) {
      let rodada = 1;
      const temporizador = setInterval(() => {
        const novaLargura = this.larguraBase + (negativo? -rodada * 10 : rodada * 10);
        el.style.width = `${novaLargura}px`;
        rodada++;
        if (rodada > 30) {
          clearInterval(temporizador);
          done();
        }
      }, 20);
    },
    beforeEnter(el) {
      this.larguraBase = 0;
      el.style.width = `${this.larguraBase}px`;
    },
    enter(el, done) {
      this.animar(el, done, false)
    },
    afterEnter(el) {
      this.larguraBase = 300;
      el.style.width = `${this.larguraBase}px`;
    },
    // enterCancelled() {
    //   console.log("enterCancelled");
    // },
    beforeLeave(el) {
      this.larguraBase = 300;
      el.style.width = `${this.larguraBase}px`;
    },
    leave(el, done) {
      this.animar(el, done, true)
    },
    afterLeave(el) {
      this.larguraBase = 0;
      el.style.width = `${this.larguraBase}px`;
    },
    // leaveCancelled() {
    //   console.log("leaveCancelled");
    // }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 1.5rem;
}

.caixa {
  height: 100px;
  width: 300px;
  margin: 30px auto;
  background-color: rgb(51, 104, 156);
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: scale(0);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s linear;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateY(600px) scale(0);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s linear;
}
</style>
