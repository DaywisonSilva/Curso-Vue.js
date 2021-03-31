import Vue from "vue";
import Router from "vue-router";

import Inicio from "./components/Inicio";
import Usuario from "./components/usuario/Usuario";
import UsuarioLista from "./components/usuario/UsuarioLista";
import UsuarioDetalhe from "./components/usuario/UsuarioDetalhe";
import UsuarioEditar from "./components/usuario/UsuarioEditar";
import Menu from "./components/template/Menu"
import MenuAlt from "./components/template/MenuAlt"
// O vue passa a usar o router, e dentro dos arquivos .vue eu posso utilizar a dependência
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      name: 'inicio',
      path: "/",
      // component: Inicio,
      components: {
        default: Inicio,
        menu: Menu, 
      }
    },
    {
      path: "/usuario",
      // component: Usuario,
      components: {
        default: Usuario,
        menu: MenuAlt,
        menuInferior: MenuAlt,
      },
      // passa a propriedade para o componente Usuario que tiver a props "id"
      // props: true,
      children: [
        {
          path: "",
          component: UsuarioLista,
        },
        {
          path: ":id",
          component: UsuarioDetalhe,
          props: true,
        },
        {
          path: ":id/editar",
          component: UsuarioEditar,
          props: true,
          name: 'editarUsuario'
        },
      ],
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
});
