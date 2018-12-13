<template>
  <div id="CodeBlock3">
    <div class="codebox">
      <pre>
        <code>
          &lt;div&gt;
            &lt;p :style="styleObject"&gt;This color is set from an object using the style attribute&lt;/p&gt;
          &lt;/div&gt;

          &lt;script&gt;
          export default {
            name: 'Lesson2',
            data () {
              return {
                styleObject: {
                  color: 'purple'
                }
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
