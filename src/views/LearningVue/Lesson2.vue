<template>
  <div id="Lesson2">
    <b-container fluid>
      <b-row align-h="center" align-v="center">
        <b-col cols="12" class="title">
          <h2>Assigning Style/Classes to Components</h2>
        </b-col>
        <b-col cols="12" class="description">
          <p>
            Below I have 3 objects. Each object as been assigned its styling from 3 different methods
          </p>
        </b-col>
        <b-container fluid>
          <b-row align-h="center" align-v="center" class="columns">
            <b-col cols="4">
              <h4>First - conditional</h4>
              <p :class="{ red: !isActive }">Watch this text change color when you click the button</p>
              <b-button @click="isActive = !isActive">Change Color</b-button>
              <b-col cols="12" class="codeBox-wrapper">
                <div class="codeBox">
                  <code>
                    import Lesson1 from '@/views/LearningVue/Lesson1'

                    export default {
                      name: 'LearningVue'
                      components: {
                        'Lesson1': Lesson1
                      },
                    }
                  </code>
                </div>
              </b-col>
            </b-col>
            <b-col cols="4">
              <h4>Second - Array with Expression</h4>
              <p :class="[isActive2 ? blue : green]">Watch this text change color when you click the button</p>
              <b-button @click="isActive2 = !isActive2">Change Color</b-button>
              <b-col cols="12" class="codeBox-wrapper">
                <div class="codeBox">
                  <code>
                    import Lesson1 from '@/views/LearningVue/Lesson1'

                    export default {
                      name: 'LearningVue'
                      components: {
                        'Lesson1': Lesson1
                      },
                    }
                  </code>
                </div>
              </b-col>
            </b-col>
            <b-col cols="4">
              <h4>Third - Inline Styles (object)</h4>
              <p :style="styleObject">This color is set from an object using the style attribute</p>
              <b-col cols="12" class="codeBox-wrapper">
                <div class="codeBox">
                  <code>
                    import Lesson1 from '@/views/LearningVue/Lesson1'

                    export default {
                      name: 'LearningVue'
                      components: {
                        'Lesson1': Lesson1
                      },
                    }
                  </code>
                </div>
              </b-col>
            </b-col>
          </b-row>
        </b-container>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Lesson2',
  data () {
    return {
      isActive: true,
      isActive2: true,
      blue: 'blue',
      green: 'green',
      styleObject: {
        color: 'purple'
      }
    }
  }
}
</script>

<style lang="less" scoped>
#Lesson2 {
  padding: 0 20px;
}
.title, {
  color: #8B8B8B;
  text-align: center;
  padding: 20px 0px 10px 0px;
}
.description {
  color: #8B8B8B;
  text-align: center;
  padding: 10px 0px 10px 0px;
}
.columns {
  text-align: center;
  color: #8B8B8B;
}
.codeBox-wrapper {
   padding: 20px 0px;
   text-align: left;
  .codeBox {
    background-color: lightgrey;
  }
  code {
    margin-left: -125px;
    font-size: 14px;
    display: block;
    white-space: pre;
    color: #8B8B8B;
    font-weight: bold;
  }
}
.red {
  color: red;
}
.blue {
  color: blue;
}
.green {
  color: green;
}
</style>
