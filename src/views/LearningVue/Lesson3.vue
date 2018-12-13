<template>
  <div id="Lesson3">
    <b-container fluid>
      <b-row align-h="center" align-v="center">
        <b-col cols="12" class="title">
          <h2>Using Conditionals</h2>
        </b-col>
        <b-col cols="12" class="description">
          <p>
            I will be using the 'v-if' and 'v-else', the also the 'v-show'
          </p>
        </b-col>
        <b-row align-h="center" class="columns">
          <b-col cols="6">
            <h4>v-if and v-else</h4>
            <p v-if="show">Click the button to hide me</p>
            <p v-else>Im the v-else</p>
            <b-button @click="show = !show">{{ show ? 'Hide' : 'Show' }}</b-button>
            <b-col cols="12" class="codeBox-wrapper">
              <div class="codeBox">
                <CodeBlock4></CodeBlock4>
              </div>
            </b-col>
          </b-col>
          <b-col cols="6">
            <h4>v-show</h4>
            <p v-show="show1">You can just make me dissapear</p>
            <b-button @click="show1 = !show1">{{ show1 ? 'Hide' : 'Show' }}</b-button>
            <b-col cols="12" class="codeBox-wrapper">
              <div class="codeBox">
                <CodeBlock5></CodeBlock5>
              </div>
            </b-col>
          </b-col>
          <b-col cols="12">
            <h4>Note</h4>
            <p>'v-show' adds a 'display: none' attribute to the element where as 'v-if' is removed from the DOM</p>
          </b-col>
        </b-row>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import CodeBlock4 from '@/views/LearningVue/CodeBlocks/Code4'
import CodeBlock5 from '@/views/LearningVue/CodeBlocks/Code5'
export default {
  name: 'Lesson3',
  data () {
    return {
      show: true,
      show1: true
    }
  },
  components: {
    'CodeBlock4': CodeBlock4,
    'CodeBlock5': CodeBlock5
  }
}
</script>

<style lang="less" scoped>
#Lesson3 {
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
