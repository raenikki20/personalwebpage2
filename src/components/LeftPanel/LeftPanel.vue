<template>
  <div id="LeftPanel">
    <b-container fluid>
      <b-row align-h="center" align-v="center">
        <b-col cols="12" class="image">
          <b-img rounded="0" blank width="750" height="750" blank-color="#777" alt="img" fluid/>
        </b-col>
         <b-col cols="12" class="welcome">
           <h2>Welcome</h2>
        </b-col>
        <b-col cols="12" class="nav">
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'LeftPanel',
  data () {
    return {}
  },
  methods: {},
  computed: {}
}
</script>

<style lang="less" scoped>
  #LeftPanel {
    padding-top: 50px;
    background: #EBEBEB;
    width: 250px;
    height: 100vh;
    position: fixed;
  }
  .image {
    margin: 15px 0;
  }
  .welcome {
    text-align: center;
    color: #8B8B8B;
  }
  .nav {}
  .footer-text {

  }
</style>
