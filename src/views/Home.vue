<template>
  <div id="Home">
    <b-container fluid class="h-100">
      <b-row align-h="center" align-v="center" class="h-100">
        <b-col cols="12" class="center">
          <div class="headings">
            <h1>Hi, I'm Nikki</h1>
            <h2>I'm a Developer</h2>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {}
  },
  methods: {},
  computed: {}
}
</script>

<style lang="less" scoped>
  #Home {
    height: 100%;
  }
  .center {
    align-items: center;
    justify-content: center;
  }
  .headings {
    text-align: center
  }
  h1 {
    font-size: 120px;
    color: #8B8B8B;
  }
  h2 {
    font-size: 80px;
    color: #8B8B8B;
  }
</style>
