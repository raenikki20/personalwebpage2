<template>
  <div id="app">
    <b-container fluid>
      <b-row>
        <b-col cols="12" class="px-0">
          <Header></Header>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" class="px-0">
          <Left></Left>
          <Main></Main>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from '@/components/Header/Header'
import Left from '@/components/LeftPanel/LeftPanel'
import Main from '@/components/MainPanel/MainPanel'
export default {
  name: 'App',
  components: {
    'Header': Header,
    'Left': Left,
    'Main': Main
  }
}
</script>

<style>
#app {
  font-family: 'OpenSans';
  color: #D6D6D6;
}
.h-100 {
  height: 100%;
}
.w-100 {
  width: 100%;
}
h1 {
  font-size: 36px;
}
h1, h2, h3, h4, p {
  margin-bottom: 0px;
  height: 100%;
}
</style>
