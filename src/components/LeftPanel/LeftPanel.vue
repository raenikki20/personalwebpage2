<template>
  <div id="LeftPanel">
    <b-container fluid>
      <b-row align-h="center" align-v="center">
        <hr>
        <b-col cols="12" class="welcome">
           <h2>Welcome</h2>
        </b-col>
        <hr>
        <router-link v-for="(page, index) in pages" :key="index" :to="page.link" class="nav-link" active-class="active" exact>
          <b-col cols="12" class="cols px-0">
            <i class="fas" :class="page.icon"></i>
            <h4>{{ page.title }}</h4>
          </b-col>
        </router-link>
        <hr>
        <b-col cols="12" class="welcome">
           <h2>Blogs</h2>
        </b-col>
        <hr>
        <router-link to="/learningvue" class="nav-link" active-class="active" exact>
          <b-col cols="12" class="cols px-0">
            <i class="fab fa-vuejs"></i>
            <h4>Learning Vue</h4>
          </b-col>
        </router-link>
        <b-col cols="12" class="footer-text">
           <p>Made with Vue.js, Vue Router, and VueX</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'LeftPanel',
  data () {
    return {
      pages: [
        { id: 0, icon: 'fa-home', title: 'Home', link: '/' },
        { id: 1, icon: 'fa-user', title: 'About Me', link: '/aboutme' },
        { id: 2, icon: 'fa-folder-open', title: 'Projects', link: '/projects' },
        { id: 3, icon: 'fa-envelope', title: 'Contact Me', link: '/contactme' },
        { id: 4, icon: 'fa-file', title: 'Resume', link: '/resume' }
      ]
    }
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
    box-shadow: 00px 0px 10px #888888;
  }
  .cols {
    display: flex;
  }
  .welcome {
    text-align: center;
    color: #8B8B8B;
  }
  hr {
    border-width: 2px;
    border-color: #3F518F;
    width: 100%;
  }
  h2 {
    font-size: 24px;
  }
  h4 {
    font-size: 20px;
  }
  .nav-link {
    width: 100%;
    border-right: 6px solid transparent;
    text-decoration: none;
    color: #8B8B8B;
    padding: 10px 20px;
  }
  .nav-link:hover {
    color: #3F518F;
    border-right: 6px solid #3F518F;
    background: #D6D6D6;
  }
  .active {
    color: #3F518F;
    border-right: 6px solid #3F518F;
    background: #D6D6D6;
  }
  .fas, .fab {
    font-size: 20px;
    width: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 20px;
  }
  .fa-vuejs {
    font-size: 26px;
  }
  .footer-text {
    text-align: center;
    color: #8B8B8B;
    bottom: 20px;
    position: absolute;
  }
</style>
