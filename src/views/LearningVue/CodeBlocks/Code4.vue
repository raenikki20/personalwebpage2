<template>
  <div id="CodeBlock4">
    <div class="codebox">
      <pre>
        <code>
          &lt;div&gt;
            &lt;p v-if="show"&gt;Click the button to hide me&lt;/p&gt;
            &lt;p v-else&gt;Im the v-else&lt;/p&gt;
            &lt;b-button @click="show = !show"&gt;Hide&lt;/b-button&gt;
          &lt;/div&gt;

          &lt;script&gt;
          export default {
            name: 'Lesson3',
            data () {
              return {
                show: true
              }
            }
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
