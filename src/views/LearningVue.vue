<template>
  <div id="LearningVue">
    <b-container fluid>
      <b-row align-h="center" align-v="center">
        <b-col cols="12">
          <div class="blog">
            <Lesson1></Lesson1>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Lesson1 from '@/views/LearningVue/Lesson1'
export default {
  name: 'LearningVue',
  data () {
    return {}
  },
  components: {
    'Lesson1': Lesson1
  },
  methods: {},
  computed: {}
}
</script>

<style lang="less">
  #LearningVue {}
  .blog {
    background: #EBEBEB;
    margin-top: 30px;
    box-shadow: 2px 2px #3F518F;
  }
</style>
