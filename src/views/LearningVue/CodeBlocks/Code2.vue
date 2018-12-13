<template>
  <div id="CodeBlock2">
    <div class="codebox">
      <pre>
        <code>
          &lt;div&gt;
            &lt;p :class="[isActive ? blue : green]"&gt;Watch this text change color when you click the button&lt;/p&gt;
            &lt;b-button @click="isActive = !isActive"&gt;Change Color&lt;/b-button&gt;
          &lt;/div&gt;

          &lt;script&gt;
          export default {
            name: 'Lesson2',
            data () {
              return {
                isActive: true,
                blue: 'blue',
                green: 'green',
              }
            }
          }
          &lt;/script&gt;

          &lt;style&gt;
          .blue {
            color: blue;
          }
          .green {
            color: green;
          }
          &lt;/style&gt;
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
