<template>
  <div id="CodeBlock5">
    <div class="codebox">
      <pre>
        <code>
          &lt;div&gt;
            &lt;ul&gt;
              &lt;li v-for="(fruit, key) in fruits" :key="key"&gt;{{ fruit }}&lt;/li&gt;
            &lt;/ul&gt;
            &lt;b-button @click="addWatermelon" style="margin-bottom: 20px;"&gt;Add Watermelon&lt;/b-button&gt;
            &lt;b-button @click="removeWatermelon" style="margin-bottom: 20px;"&gt;Remove Watermelon&lt;/b-button&gt;
          &lt;/div&gt;

          &lt;script&gt;
          export default {
            name: 'Lesson4',
            data () {
              return {
                fruits: ['Apple', 'Oranges', 'Bananas', 'Grapes']
              }
            },
            methods: {
              addWatermelon: function () {
                this.fruits.push('Watermelon')
              },
              removeWatermelon: function () {
                var that = this
                this.fruits.filter(function (fruit, index) {
                  console.log(fruit)
                  if (fruit === 'Watermelon') {
                    that.fruits.splice(index, 1)
                  }
                })
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
  data () {
    return {
      fruit: '{{ fruit }}'
    }
  }
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
