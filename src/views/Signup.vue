<template>
  <div id="SignUp">
    <div class="side-bar">
      <span class="sign-up-content">
        <span class="signup-label">
          Sign Up
        </span>
        <span class="signup-text">
          Get started in just a few clicks. We hate forms too, so here’s a fun and interactive alternative.
        </span>
       <img class="drawing" src="@/assets/106.png" alt=""/>
      </span>
      <span class="login-option">
        <span class="login-label">
          Have an account?
        </span>
        <router-link class="login-button" to="/login">
          Log In
        </router-link>
      </span>
    </div>
    <div class="logo-wrapper">
      <img class="logo"  src="@/assets/logo.png" alt=""/>
    </div>
    <div class="type-form">

      <transition appear name="fade">
        <span class="greetings">
        Hi there!
        </span>
      </transition>

      <transition appear name="slide-fade-longer">
        <div class="signup-name">
          <div class="name-prompt"> Your full name is </div>
          <signup-name-input class="typeform-name-input" v-bind:nameData="name"/>
        </div>
      </transition>

      <transition name="slide-fade">
        <div v-if="name.isValid" class="signup-email">
          <div class="email-prompt"> and you would like to use the email </div>
          <sign-up-email-input class="typeform-email-input" v-bind:emailData="email" />
        </div>
      </transition>

      <transition name="slide-fade">
        <div v-if="email.isValid" class="signup-password">
          <div class="password-prompt"> Create a password with at least one number, one uppercase and lowercase letter, and at least 8 characters </div>
          <sign-up-password-input class="typeform-password-input" v-bind:passwordData="password"/>
        </div>
      </transition>

      <transition name="slide-fade">
        <div v-if="name.isValid && email.isValid && password.isValid" class="create-account">
          <div class="done-text"> Too easy! You're all set.</div>
        </div>
      </transition>

      <transition name="slide-fade">
        <router-link v-if="name.isValid && email.isValid && password.isValid" class="create-account-button" to="/home">
          <span class="create-account-label"> Create Account
            <font-awesome-icon class='arrow-icon' :icon="['fas', 'long-arrow-alt-right']" />
          </span>
        </router-link>
      </transition>

    </div>
  </div>
</template>

<script>

import SignupNameInput from "@/components/SignUpName";
import SignUpEmailInput from "@/components/SignUpEmail";
import SignUpPasswordInput from "@/components/SignUpPassword";

export default {
  name: "Signup",
  components: {
    SignupNameInput,
    SignUpEmailInput,
    SignUpPasswordInput
  },
  data() {
    return {
      name: {nameInput: 'Name?', edit: false, isValid: false},
      email: {emailInput: 'Email?', edit: false, isValid: false},
      password: {passwordInput: '', edit: false, isValid: false},
    }
  }
}

</script>

<style scoped lang="scss">

#SignUp{
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  min-width: 1235px;

  .side-bar{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-image: linear-gradient(to bottom left, #5839fa, #5e57e5, #299bc1);
    width: 25%;
    min-width: 200px;
    margin: 20px;
    padding: 45px;
    border-radius: 20px;

    .sign-up-content {
      display: flex;
      flex-direction: column;
      margin-top: 15vh;
      line-height: 1.9;

      .signup-label{
        font-family: 'Montserrat', sans-serif;
        font-weight: 670;
        font-size: 2.7vw;
        color: white;
        line-height: 2.5;
      }

      .signup-text{
        width: 100%;
        font-family: "Bw Modelica Regular", serif;
        font-size: 1.2vw;
        color: white;
      }
      .drawing{
        position: absolute;
        width: auto;
        height: 350px;
        right: 10px;
        bottom: 20px;
      }
    }

    .login-option{
      bottom: 50px;
      display: flex;
      flex-direction: column;
      border-radius: 20px;
      background-color: transparent;
      border: 1.5px solid #779bff;
      padding: 0 30px;
      height: 100px;
      justify-content: center;
      line-height: 1.7;

      .login-label{
        font-family: "Bw Modelica Regular", serif;
        color: white;
        font-size: 15px;
      }
      .login-button{
        font-family: "Bw Modelica Bold", serif;
        font-size: 15px;
        color: white;
        text-decoration: none;
      }
    }
  }

  .logo-wrapper{
    display: flex;
    flex-direction: column;
    width: 6%;
    padding-top: 30px;
    padding-left: 10px;

    .logo{
      width: 70px;
      height: 70px;
    }
  }

  .type-form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70%;
    max-width: 650px;
    min-width: 580px;
    margin: 20px;
    padding: 1vh 11vw 0 7%;
    line-height: 1.6;
    font-family: "Poppins", serif;
    font-weight: 580;
    font-size: 30px;
    color: #6b6b6b;

    .signup-name {
      display: flex;
      flex-direction: row;
      .name-prompt{
        margin-right: 7px;
      }
    }

    .greetings {
      font-family: "Bw Modelica Bold", serif;
      color: #5651ec;
      margin-bottom: 3vh;
    }

    .signup-email, .signup-password, .create-account{
      display: inline-block;
      position: relative;
      flex-direction: column;
      margin-bottom: 3vh;
    }

    .create-account-button{
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-image: linear-gradient(to right, #456eee, #856aff);
      width: 160px;
      height: 55px;
      border-radius: 14px;
      text-decoration: none;

      &:hover {
        opacity: 0.8;
        transition: all 0.3s;
      }

      .create-account-label{
        position: center;
        margin: auto;
        color: white;
        font-size: 14px;
      }
      .arrow-icon{
        margin-left: 5px;
      }
    }
  }

  /* fade transition */
  .fade-enter-active, .fade-leave-active {
    transition: opacity .7s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  /* slide fade longer transition */
  /* Enter and leave animations can use different */
  /* durations and timing functions.              */
  .slide-fade-longer-enter-active {
    transition: all 1.5s ease-out;
  }
  .slide-fade-longer-leave-active {
    transition: all 1.5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-longer-enter, .slide-fade-longer-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateY(150px);
    opacity: 0;
  }

  /* slide fade transition */
  /* Enter and leave animations can use different */
  /* durations and timing functions.              */
  .slide-fade-enter-active {
    transition: all 1s ease-out;
  }
  .slide-fade-leave-active {
    transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateY(150px);
    opacity: 0;
  }
}

</style>