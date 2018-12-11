<template>
  <div id="LearningVue">
    <b-container fluid class="ptb">
      <b-row align-h="center" align-v="center">
        <b-col cols="12">
          <div class="blog">
            <Lesson4></Lesson4>
          </div>
        </b-col>
        <b-col cols="12">
          <div class="blog">
            <Lesson3></Lesson3>
          </div>
        </b-col>
        <b-col cols="12">
          <div class="blog">
            <Lesson2></Lesson2>
          </div>
        </b-col>
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
import Lesson2 from '@/views/LearningVue/Lesson2'
import Lesson3 from '@/views/LearningVue/Lesson3'
import Lesson4 from '@/views/LearningVue/Lesson4'
export default {
  name: 'LearningVue',
  data () {
    return {}
  },
  components: {
    'Lesson1': Lesson1,
    'Lesson2': Lesson2,
    'Lesson3': Lesson3,
    'Lesson4': Lesson4
  },
  methods: {},
  computed: {}
}
</script>

<style lang="less">
  #LearningVue {}
  .ptb {
    padding: 15px 15px;
  }
  .blog {
    background: #EBEBEB;
    margin: 15px 0;
    box-shadow: 2px 2px #3F518F;
  }
</style>
