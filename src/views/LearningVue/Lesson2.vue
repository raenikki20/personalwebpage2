<template>
  <div id="Lesson2">
    <b-container fluid>
      <b-row align-h="center" align-v="center">
        <b-col cols="12" class="title">
          <h2>Assigning Style/Classes to Components</h2>
        </b-col>
        <b-col cols="12" class="description">
          <p>
            Below I have 3 objects. Each object as been assigned its styling from 3 different methods
          </p>
        </b-col>
        <b-container fluid>
          <b-row align-h="center" class="columns">
            <b-col cols="4">
              <h4>First - conditional</h4>
              <p :class="{ red: !isActive }">Watch this text change color when you click the button</p>
              <b-button @click="isActive = !isActive">Change Color</b-button>
              <b-col cols="12" class="codeBox-wrapper">
                <CodeBlock1></CodeBlock1>
              </b-col>
            </b-col>
            <b-col cols="4">
              <h4>Second - Array with Expression</h4>
              <p :class="[isActive2 ? blue : green]">Watch this text change color when you click the button</p>
              <b-button @click="isActive2 = !isActive2">Change Color</b-button>
              <b-col cols="12" class="codeBox-wrapper">
                <CodeBlock2></CodeBlock2>
              </b-col>
            </b-col>
            <b-col cols="4">
              <h4>Third - Inline Styles (object)</h4>
              <p :style="styleObject">This color is set from an object using the style attribute</p>
              <b-col cols="12" class="codeBox-wrapper">
                <CodeBlock3></CodeBlock3>
              </b-col>
            </b-col>
          </b-row>
        </b-container>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import CodeBlock1 from '@/views/LearningVue/CodeBlocks/Code1'
import CodeBlock2 from '@/views/LearningVue/CodeBlocks/Code2'
import CodeBlock3 from '@/views/LearningVue/CodeBlocks/Code3'
export default {
  name: 'Lesson2',
  data () {
    return {
      isActive: true,
      isActive2: true,
      blue: 'blue',
      green: 'green',
      styleObject: {
        color: 'purple'
      }
    }
  },
  components: {
    'CodeBlock1': CodeBlock1,
    'CodeBlock2': CodeBlock2,
    'CodeBlock3': CodeBlock3
  }
}
</script>

<style lang="less" scoped>
#Lesson2 {
  padding: 0 20px;
}
h4 {
  padding: 20px 0px;
}
p {
  padding-bottom: 20px;
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
.columns {
  text-align: center;
  color: #8B8B8B;
}
.codeBox-wrapper {
   padding: 20px 0px;
   text-align: left;
}
.red {
  color: red;
}
.blue {
  color: blue;
}
.green {
  color: green;
}
</style>
