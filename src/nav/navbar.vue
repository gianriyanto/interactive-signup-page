<template>
  <div id="nav">
    <router-link class="home" to="/"> Home </router-link>
    <router-link class="signup" to="/signup"> Sign Up </router-link>
    <router-link class="login" to="/login"> Log In </router-link>
  </div>
</template>

<script>
export default {
  name: "navbar"
}
</script>

<style scoped lang="scss">

#nav{
  display: flex;
  flex-direction: row;
  position: absolute;
  right: 20px;
  width: 18vw;
  height: 10vh;
  justify-content: space-evenly;

  .home, .signup, .login {
    font-family: "Poppins", serif;
    color: black;
    text-decoration: none;
    font-size: 1.1vw;
    margin: auto;

    &:hover {
      font-weight: 600;
    }
  }
}

</style>