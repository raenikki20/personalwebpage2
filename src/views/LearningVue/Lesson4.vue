<template>
  <div id="Lesson4">
    <b-container fluid>
      <b-row align-h="center" align-v="center">
        <b-col cols="12" class="title">
          <h2>Using Loops</h2>
        </b-col>
        <b-col cols="12" class="description">
          <p>
            Below im creating lists using 'v-for' with keys. I will also be changing the arrays
          </p>
        </b-col>
        <b-row align-h="center" class="columns">
          <b-col cols="6">
            <h4>Iterated through an array</h4>
            <ul>
              <li v-for="(fruit, key) in fruits" :key="key">{{ fruit }}</li>
            </ul>
            <h4>Add object to above Array</h4>
            <b-button @click="addWatermelon" style="margin-bottom: 20px;">Add Watermelon</b-button>
            <b-button @click="removeWatermelon" style="margin-bottom: 20px;">Remove Watermelon</b-button>
            <b-col cols="12" class="codeBox-wrapper">
              <div class="codeBox">
                <CodeBlock6></CodeBlock6>
              </div>
            </b-col>
          </b-col>
          <b-col cols="6">
            <h4>Iterated through an object</h4>
            <ul>
              <li v-for="(person, key) in people" :key="key">{{ key }}: {{ person.name }}, {{ person.age }}</li>
            </ul>
            <b-col cols="12" class="codeBox-wrapper">
              <div class="codeBox">
                <CodeBlock7></CodeBlock7>
              </div>
            </b-col>
          </b-col>
        </b-row>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import CodeBlock6 from '@/views/LearningVue/CodeBlocks/Code6'
import CodeBlock7 from '@/views/LearningVue/CodeBlocks/Code7'
export default {
  name: 'Lesson4',
  data () {
    return {
      fruits: ['Apple', 'Oranges', 'Bananas', 'Grapes'],
      people: [
        { name: 'Nikki', age: 24 },
        { name: 'Kyle', age: 22 }
      ]
    }
  },
  components: {
    'CodeBlock6': CodeBlock6,
    'CodeBlock7': CodeBlock7
  },
  methods: {
    addWatermelon: function () {
      this.fruits.push('Watermelon')
    },
    removeWatermelon: function () {
      var that = this
      this.fruits.filter(function (fruit, index) {
        if (fruit === 'Watermelon') {
          that.fruits.splice(index, 1)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
#Lesson4 {
  padding: 0 20px;
}
.title, {
  color: #8B8B8B;
  text-align: center;
  padding: 20px 0px 10px 0px;
}
.description {
  color: #8B8B8B;
  text-align: center;
  padding: 10px 0px 10px 0px;
}
h4 {
  padding: 20px 0px;
}
p {
  padding-bottom: 20px;
}
.columns {
  text-align: center;
  color: #8B8B8B;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.codeBox-wrapper {
   padding: 20px 0px;
  .codeBox {
    background-color: lightgrey;
  }
  code {
    font-size: 14px;
    display: block;
    white-space: pre;
    color: #8B8B8B;
    font-weight: bold;
  }
}
</style>
