<template>
  <div id="Resume">
    <b-container>
      <b-row align-h="center">
        <b-col cols="12" class="title">
          <hr><h1>DIG A LITTLE DEEPER</h1><hr>
          <b-button :href="resumeLink" download>DOWNLOAD RESUME</b-button>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col cols="11" class="grayBox">
          <b-row class="technologies">
            <b-col cols="4" class="rowHeading">Technologies</b-col>
            <b-col>
              <h3>Languages/Frameworks</h3>
              <ul>
                <li v-for="(language, key) in languages" :key="key">{{ language }}</li>
              </ul>
            </b-col>
            <b-col>
              <h3>Applications</h3>
              <ul>
                <li v-for="(application, key) in applications" :key="key">{{ application }}</li>
              </ul>
            </b-col>
          </b-row>
          <b-row class="workExperience">
            <b-col cols="4" class="rowHeading">Work Experience</b-col>
            <b-col>
              <div v-for="(job, key) in work" :key="key">
                <h3>{{ job.title }}</h3>
                <h4><span>{{ job.company }}</span>, {{ job.location }}, {{ job.length }} </h4>
                <p v-for="(description, key) in job.description" :key="key"> - {{ description }}</p>
              </div>
            </b-col>
          </b-row>
          <b-row class="education">
            <b-col cols="4" class="rowHeading">Education</b-col>
            <b-col>
              <div v-for="(school, key) in education" :key="key">
                <h3>{{ school.degree }}</h3>
                <h4>{{ school.school }}, {{ school.location }}, {{ school.length }} </h4>
              </div>
            </b-col>
          </b-row>
          <b-row class="other">
            <b-col cols="4" class="rowHeading">Other</b-col>
            <b-col>
              <h4>Played Division 1 Collegiate Men's Tennis</h4>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Resume',
  data () {
    return {
      resumeLink: '../static/Resume_RaeNikki.pdf',
      languages: ['Javascript', 'Vue.js', 'Enyo.js', 'HTML', 'CSS', 'LESS', 'Bootstrap', 'Bootstrap-Vue', 'Version Control (Git)', 'Swift', 'PHP (Limited)', 'SQL (Limited)', 'Python (Limited)'],
      applications: ['Affinity Designer', 'JetBrains Webstorm', 'Fork', 'GitLab', 'Slack', 'Favro'],
      work: [
        {
          title: 'Software Engineer',
          company: 'PassiveLogic',
          location: 'Holladay, UT',
          length: 'April 2018 - Present',
          description: [
            'I did this',
            'I did that',
            'I helped do this'
          ]
        },
        {
          title: 'Web Developer',
          company: 'BYU Technology & Engineering',
          location: 'Provo, UT',
          length: 'January 2018 - April 2018',
          description: [
            'Evaluated and improved the current Playable Case Study interface, cybermatics.io.',
            'Developed a reliable and robust modular environment for future Playable Case Studies using Laravel 5.5 and Vue.js'
          ]
        },
        {
          title: 'Student Instructor',
          company: 'BYU Student Activities',
          location: 'Provo, UT',
          length: 'September 2015 - April 2018',
          description: [
            'Successfully taught correct Tennis skills, principles, and rules to beginners, intermediate, and advanced level students',
            'Ability to adapt and alter lesson plans based on current analysis of students abilities'
          ]
        }
      ],
      education: [
        {degree: 'Bachelors of Science in Information Technology', school: 'Brigham Young University', location: 'Provo, UT', length: 'Sept 2012 - 2017'},
        {degree: 'A Levels (Mathematics, Information Technology, Product Design', school: 'Bishop Stopford School', location: 'Kettering, England', length: 'Sept 2010 - 2012'}
      ]
    }
  }
}
</script>

<style scoped lang="less">
  #Resume {
    text-align: center;
  }
  .title {
    text-align: center;
    color: #8B8B8B;
  }
  hr {
    border-width: 2px;
    border-color: #3F518F;
    width: 100%;
  }
  .btn {
    padding: 15px;
    margin-top: 10px;
    background-color: gray;
    border: none;
  }
  .btn:hover {
    border: none;
    background-color: #D3D3D3;
  }
  .grayBox {
    text-align: left;
  }
  .rowHeading {
    font-size: 30px;
    color: #8B8B8B;
  }
  h3 {
    padding-top: 10px;
    font-size: 25px;
    color: #8B8B8B;
  }
  h4 {
    color: #8B8B8B;
    font-size: 20px;
  }
  h4 span {
    font-weight: bold;
  }
  li {
    font-size: 18px;
    color: #8B8B8B;
  }
  p {
    font-size: 16px;
    color: #8B8B8B;
    margin-bottom: 5px;
  }
  .technologies {
    padding: 20px 0px;
  }
  .workExperience {
    padding: 20px 0px;
  }
  .education {
    padding: 20px 0px;
  }
  .other {
    margin: 30px 0px;
  }
  .other h4 {
    padding-top: 10px;
  }
</style>
