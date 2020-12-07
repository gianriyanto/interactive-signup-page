<template>
  <div id="app">
    <!-- Knows which component to render based on url automatically
       under the hood (router/index.js)-->
    <navbar/>
    <router-view/>
  </div>
</template>

<script>

import Navbar from "@/nav/navbar";
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f6f6f6;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  min-width: 100vw;

  .content-wrapper{

  }
}

html, body {
  margin: 0 !important;
  padding: 0 !important;
}

@font-face {
  font-family: "Bw Modelica Bold";
  src: local("Bw Modelica Bold"),
  url(./fonts/BwModelica/BwModelica-Bold.otf) format("truetype");
}
@font-face {
  font-family: "Bw Modelica Regular";
  src: local("Bw Modelica Regular"),
  url(./fonts/BwModelica/BwModelica-Regular.otf) format("truetype");
}
@font-face {
  font-family: "Bw Modelica Light";
  src: local("Bw Modelica Light"),
  url(./fonts/BwModelica/BwModelica-Light.otf) format("truetype");
}
@font-face {
  font-family: "Bw Modelica Hairline";
  src: local("Bw Modelica Hairline"),
  url(./fonts/BwModelica/BwModelica-Hairline.otf) format("truetype");
}

</style>
