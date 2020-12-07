<template>
  <div id="SignupNameInputText">
    <label v-if="name.edit">
      <input
          class="input-editing"
          v-model="name.nameInput"
          v-on:blur="name.edit=false; onChangeText(name.nameInput); $emit('update')"
          v-on:keyup.enter="$event.target.blur()"
          v-focus
      >
    </label>
    <div v-else class="input-container">
      <div :class="applyInputStyle(name.nameInput)">
        <label @click="onEditText"> {{name.nameInput}} </label>
      </div>
      <font-awesome-icon v-if="name.isValid" class="check-icon" :icon="['fas', 'check-circle']" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SignupNameInputText",
  props: ['nameData'],
  data() {
    return {
      name: this.nameData,
    }
  },
  methods: {
    onEditText: function() {
      this.name.nameInput = '';
      this.name.edit = true;
    },
    onChangeText: function(input) {
      //check if name input is valid
      if (input === '') {
        this.name.nameInput = 'Name?';
        this.name.edit = false;
        this.name.isValid = false;
      } else {
        this.name.nameInput = input.charAt(0).toUpperCase() + input.slice(1);
        this.name.isValid = true;
      }
    },
    applyInputStyle: function(input) {
      //change style if i
      return [(input.length>0 && input !== 'Name?') ? 'input-has-value-style' : 'input-no-value-style']
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

#SignupNameInputText{

  .input-editing{
    font-family: "Bw Modelica Bold", serif;
    color: darkgrey;
    font-size: 30px;
    width: 280px;
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