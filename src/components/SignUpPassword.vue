<template>
  <div id="SignupPasswordInputText">
    <label>
      <input
          class="input-editing"
          type="password"
          v-model="password.passwordInput"
          v-on:blur="password.edit=false; onChangeText(password.passwordInput); $emit('update')"
          v-on:keyup.enter="$event.target.blur()"
          v-focus>
    </label>
    <div >
      <font-awesome-icon v-if="password.isValid" class="check-icon" :icon="['fas', 'check-circle']" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SignupPasswordInputText",
  props: ['passwordData'],
  data() {
    return {
      password: this.passwordData,
      inputType: { type: "password", isHidden: true }
    }
  },
  methods: {
    onEditText: function() {
      this.password.passwordInput = '';
      this.password.edit = true;
    },
    onChangeText: function(input) {
      //check if password input is valid
      if (input !== '' &&
          input.length > 8 &&
          /\d/.test(input) &&
          input.match(/[a-z]/) &&
          input.match(/[A-Z]/)) {
        //if valid
        this.password.passwordInput = input.charAt(0) + input.slice(1);
        this.password.isValid = true;
      } else {
        // if invalid
        this.password.passwordInput = '';
        this.password.edit = false;
        this.password.isValid = false;
      }
    },
  },
  directives: {
    focus: {
      inserted (el) {
        el.focus()
      }
    }
  }
}
</script>

<style lang="scss" scoped>

#SignupPasswordInputText{
  display: flex;
  flex-direction: row;

  .input-editing{
    font-family: "Bw Modelica Bold", serif;
    color: #5651ec;
    font-size: 30px;
    width: 170px;
    border: transparent;
    outline: transparent;
    background-color: transparent;
    border-bottom: 2px solid lightgrey;
  }
  .input-container{
    display: flex;
    flex-direction: row;
  }
  .check-icon{
    margin: 14px 0 0 10px;
    font-size: 20px;
    color: #2b9d68;
  }
}


</style>