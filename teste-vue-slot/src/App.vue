<template>
  <div>
    <div class="background-image"></div>
    <div class="menu" :class="{'expanded-menu': expanded}">
      <div class="hamburger-menu expanded-hamburger" @click="toogleExpanded()"></div>
      <nav>
        <!-- <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul> -->
      </nav>
    </div>
    <div class="container-layout" :class="{'w-auto-layout': expanded}">
      <div class="container-card">
        <div class="card-options">
          <ul>
            <li @click="textIndex = 0">Text One</li>
            <li @click="textIndex = 1">Text Two</li>
            <li @click="textIndex = 2">Text Three</li>
            <li @click="textIndex = 3">Text Four</li>
            <li @click="textIndex = 4">Text Five</li>
            <li @click="textIndex = 5">Text Six</li>
            <li @click="textIndex = 6">Text Seven</li>
          </ul>
        </div>
        <app-card-text>
          {{dataText[textIndex].title}}
          {{dataText[textIndex].text}}
        </app-card-text>
      </div>
    </div>
  </div>
</template>

<script>
import CardText from './components/CardText'

export default {
  data() {
    return {
      expanded: false,
      textIndex: 0,
      dataText: [
        {
          title: 'Text One',
          text: 'Aute est esse do eu voluptate id nostrud. Fugiat amet laboris sunt irure laboris consequat aliqua magna ullamco sint nisi ea nostrud velit. Qui id esse nulla sit veniam culpa. Culpa laborum voluptate laborum occaecat velit ad.'
        },
        {
          title: 'Text Two',
          text: 'Aliqua ut sit nulla anim Lorem in cupidatat. Proident proident ad dolore aliqua qui nostrud nulla nisi cupidatat esse cupidatat eiusmod. Officia culpa aute fugiat consequat nisi veniam in do ex laborum officia laboris ad. Fugiat quis ea do sunt nisi fugiat. Ad ullamco tempor nisi labore deserunt cupidatat cupidatat minim reprehenderit cupidatat. Aliquip magna sunt magna ut sint dolor nulla.'
        },
        {
          title: 'Text Three',
          text: 'Cillum occaecat consectetur tempor minim eu ut exercitation. Laboris et est aliqua sunt. Magna nulla nisi eu proident eu. Occaecat et dolore ea qui laboris. Sit esse laboris tempor in eu cillum ullamco. Laborum aliquip laborum ad cupidatat irure ipsum ullamco nulla tempor ullamco est fugiat. Ad dolore culpa sunt culpa id pariatur incididunt ipsum.'
        },
        {
          title: 'Text Four',
          text: 'Enim laboris minim dolor occaecat dolore cillum cupidatat. In sit pariatur occaecat do. Est tempor ut deserunt est adipisicing tempor qui proident ex dolore excepteur nisi ipsum ea. Reprehenderit ut ut dolore laborum incididunt non veniam occaecat. Elit ea et adipisicing dolore eiusmod aute eu magna sunt laboris nulla sit ad officia. Ipsum aliquip consectetur officia dolor voluptate incididunt occaecat minim ullamco.'
        },
        {
          title: 'Text five',
          text: 'Et magna incididunt voluptate incididunt incididunt amet consequat incididunt quis. Eiusmod do fugiat incididunt id mollit. Non sint id aliqua cupidatat occaecat. Sint excepteur pariatur aute occaecat anim aliqua velit anim aute reprehenderit. Lorem tempor elit est cillum quis velit qui non. Voluptate fugiat sit ullamco ut sunt enim non excepteur amet nulla exercitation ut.'
        },
        {
          title: 'Text Six',
          text: 'Deserunt commodo non consectetur duis voluptate sit eiusmod. Eu in enim mollit ut tempor proident occaecat magna culpa mollit. Id proident culpa labore adipisicing in ut aliqua id. Exercitation ullamco Lorem occaecat fugiat irure aliqua aute eu. Consectetur dolor ipsum esse aliqua dolore ad magna ipsum aliquip ex veniam non ad non. Commodo ipsum laboris enim duis. Dolor fugiat eiusmod excepteur laboris aliqua consectetur nostrud ea quis elit nulla esse aliquip.'
        },
        {
          title: 'Text Seven',
          text: 'Voluptate nisi in aliqua duis consequat in. Consectetur enim adipisicing ex nisi Lorem reprehenderit. Minim non in culpa culpa elit exercitation amet dolore aute voluptate incididunt proident est. Occaecat laborum amet velit proident pariatur et. Occaecat esse sint commodo voluptate. Proident irure enim non voluptate ut culpa ut magna sit non. Pariatur duis ullamco cillum dolore cillum.'
        }
      ]
    }
  },
  components: {
    'app-card-text': CardText
  },
  methods: {
    toogleExpanded() {
      this.expanded ? this.expanded = false : this.expanded = true
    }
  }
}
</script>

<style>

</style>