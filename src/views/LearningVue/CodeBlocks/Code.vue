<template>
  <div id="CodeBlock">
    <div class="codebox">
      <pre>
        <code>
          &lt;div&gt;
            &lt;Lesson1&gt;&lt;/Lesson1&gt;
          &lt;/div&gt;

          &lt;script&gt;
          import Lesson1 from '@/views/LearningVue/Lesson1';
          export default {
            name: 'LearningVue'
            components: {
              'Lesson1': Lesson1
            },
          }
          &lt;/script&gt;
        </code>
      </pre>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.codebox {
      background-color: lightgrey;
      overflow: auto;
      max-height: 250px;
  }
  pre {
    margin: 0;
    display: inline-flex;
    code {
      font-size: 14px;
      color: #8B8B8B;
      font-weight: bold;
      position: relative;
      left: -40px;
      text-align: left;
    }
  }
</style>
