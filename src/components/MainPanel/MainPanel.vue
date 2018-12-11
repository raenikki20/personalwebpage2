<template>
  <div id="MainPanel">
    <b-container fluid class="h-100">
      <b-row class="h-100">
        <b-col class="h-100">
          <router-view></router-view>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'MainPanel',
  data () {
    return {}
  },
  methods: {},
  computed: {}
}
</script>

<style lang="less" scoped>
  #MainPanel {
    padding: 50px 0px 0px 250px;
    height: 100vh;
  }
</style>
