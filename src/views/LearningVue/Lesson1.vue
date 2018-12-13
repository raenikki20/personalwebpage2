<template>
  <div id="Lesson1">
    <b-container fluid>
      <b-row align-h="center" align-v="center">
        <b-col cols="12" class="title">
          <h2>Understanding Components</h2>
        </b-col>
        <b-col cols="12" class="description">
          <p>
            These components are created in seperate files and injected into this Lesson Box.
            I imported the file using the import method, then using the 'components' property
            I was able to call the components inside this box
          </p>
        </b-col>
        <b-col cols="6" class="codeBox-wrapper">
          <CodeBlock></CodeBlock>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import CodeBlock from '@/views/LearningVue/CodeBlocks/Code'
export default {
  name: 'Lesson1',
  components: {
    'CodeBlock': CodeBlock
  }
}
</script>

<style lang="less" scoped>
#Lesson1 {
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
.codeBox-wrapper {
   padding: 20px 0px;
}
</style>
