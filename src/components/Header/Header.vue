<template>
  <div id="Header">
    <b-container fluid class="h-100">
      <b-row align-v="center" class="h-100">
        <b-col cols="12">
          <div class="left">
            <h1>NIKKI <span class="bold">RAE</span></h1>
          </div>
          <div class="right">
            <i href="https://www.facebook.com/nikki.rae2" class="fa fa-facebook"></i>
            <i href="https://www.snapchat.com/add/nikki.rae18" class="fa fa-snapchat"></i>
            <i href="https://www.instagram.com/nikki_rae19/?hl=en" class="fa fa-instagram"></i>
            <i href="https://www.linkedin.com/in/nikki-rae-96a42010a/" class="fa fa-linkedin"></i>
            <i href="https://github.com/raenikki20" class="fa fa-github"></i>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {}
  },
  methods: {},
  computed: {}
}
</script>

<style lang="less" scoped>
  #Header {
    background: #3F518F;
    height: 50px;
    width: 100%;
    position: fixed;
    z-index: 1;
  }
  .bold {
    font-weight: 600;
  }
  .left {
    float: left;
  }
  .right {
    float: right;
  }
  .fa {
    font-size: 36px;
    width: 40px;
    text-align: center;
    text-decoration: none;
    color: #D6D6D6;
    margin: 4px;
  }
  .fa:hover::before {
    color: blue;
  }
</style>
