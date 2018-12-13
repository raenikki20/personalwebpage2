<template>
  <div id="CodeBlock5">
    <div class="codebox">
      <pre>
        <code>
          &lt;div&gt;
            &lt;ul&gt;
              &lt;li v-for="(person, key) in people" :key="key"&gt;{{ key }}: {{ person.name }}, {{ person.age }}&lt;/li&gt;
            &lt;/ul&gt;
          &lt;/div&gt;

          &lt;script&gt;
          export default {
            name: 'Lesson4',
            data () {
              return {
                people: [
                  { name: 'Nikki', age: 24 },
                  { name: 'Kyle', age: 22 }
                ]
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
      key: '{{ key }}',
      person: {
        name: '{{ person.name }}',
        age: '{{ person.age }}'
      }
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
