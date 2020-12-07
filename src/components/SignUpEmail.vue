<template>
  <div id="SignupEmailInputText">
    <label v-if="email.edit">
      <input
          class="input-editing"
          v-model="email.emailInput"
          v-on:blur="email.edit=false; onChangeText(email.emailInput); $emit('update')"
          v-on:keyup.enter="$event.target.blur()"
          v-focus
      >
    </label>
    <div v-else class="input-container">
      <div :class="applyInputStyle(email.emailInput)">
        <label @click="onEditText"> {{ email.emailInput }} </label>
      </div>
      <font-awesome-icon v-if="email.isValid" class="check-icon" :icon="['fas', 'check-circle']" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SignupEmailInputText",
  props: ['emailData'],
  data() {
    return {
      email: this.emailData,
    }
  },
  methods: {
    onEditText: function() {
      this.email.emailInput = '';
      this.email.edit = true;
    },
    onChangeText: function(input) {
      //check if email input is valid
      if (input === '' || !input.includes('.com') || !input.includes('@')) {
        this.email.emailInput = 'Email?';
        this.email.edit = false;
        this.email.isValid = false;
      } else {
        this.email.emailInput = input.charAt(0).toLowerCase() + input.slice(1);
        this.email.isValid = true;
      }
    },
    applyInputStyle: function(input) {
      return [(input.length>0 && input !== 'Email?') ? 'input-has-value-style' : 'input-no-value-style']
    }
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

#SignupEmailInputText{

  .input-editing{
    font-family: "Bw Modelica Bold", serif;
    color: darkgrey;
    font-size: 30px;
    width: fit-content;
    border: transparent;
    outline: transparent;
    background-color: var(--bone);
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
  .input-has-value-style{
    font-family: "Bw Modelica Bold", serif;
    color: #5651ec;
  }
  .input-no-value-style{
    font-family: "Bw Modelica Bold", serif;
    color: darkgrey;
    width: fit-content;
  }
}


</style>