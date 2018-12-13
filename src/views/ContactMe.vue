<template>
  <div id="ContactMe">
    <b-container>
      <b-row align-h="center">
        <b-col cols="12" class="title">
          <hr><h1>Contact Me</h1><hr>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'ContactMe',
  data () {
    return {}
  },
  methods: {},
  computed: {}
}
</script>

<style lang="less">
  #ContactMe {}
  .title {
    text-align: center;
    color: #8B8B8B;
  }
  hr {
    border-width: 2px;
    border-color: #3F518F;
    width: 100%;
  }
</style>
