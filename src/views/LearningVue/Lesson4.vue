<template>
  <div id="Lesson4">
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
          <div class="codeBox">
            <code>
              import Lesson4 from '@/views/LearningVue/Lesson4'

              export default {
                name: 'LearningVue'
                components: {
                  'Lesson4': Lesson4
                },
              }
            </code>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Lesson4'
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
