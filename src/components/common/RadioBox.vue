<template>
  <div class="primary-radio">
    <label class="input-feild">
      {{ name }}
      <input
        type="radio"
        :id="`'${name}+${inputfor}'`"
        v-on:change="filterMedia()"
        :name="`'${inputfor}'`"
      />
      <span class="checkmark"></span>
    </label>
  </div>
</template>

<script>
export default {
  props: ["name", "inputfor", "value"],
  data() {
    return {
      activeCategories: false,
    };
  },
  methods: {
    filterMedia() {
      var selected = {
        name: this.name,
        value: this.value
      };
      this.$emit("selected", selected);
    },
  },
};
</script>

<style scoped>
/* Customize the label (the input-feild) */
.primary-radio {
  background: #e8e8e8;
  padding: 10px 28px;
  position: relative;
  min-height: 20px;
  display: flex;
  align-items: center;
}
.input-feild {
  display: block;
  position: relative;
  top: 1px;
  padding-left: 35px;
  cursor: pointer;
  color: #000;
  font-size: 14px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.input-feild input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  position: relative;
  top: -1px;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: -4px;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #eee;
  content: "";
  -webkit-appearance: none;
  background-color: white;
  box-shadow: 0 1px 2px rgb(0 0 0 / 5%),
    inset 0px -15px 10px -12px rgb(0 0 0 / 5%);
}
/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
/* Show the checkmark when checked */
.input-feild input:checked ~ .checkmark:after {
  display: block;
}
/* Style the checkmark/indicator */
.input-feild .checkmark:after {
  position: absolute;
  top: 1px;
  left: 6px;
  width: 6px;
  height: 14px;
  border: solid #0079bf;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
.check-group {
  display: block;
  width: fit-content;
  background: #e8e8e8;
  padding: 10px 28px;
}

.check-group input {
  padding: 0;
  height: initial;
  width: initial;
  margin-bottom: 0;
  display: none;
  cursor: pointer;
}

.check-group label {
  position: relative;
  cursor: pointer;
  color: #000;
  font-size: 14px;
  top: 2px;
  user-select: none;
}

.check-group label:before {
  content: "";
  -webkit-appearance: none;
  background-color: white;
  box-shadow: 0 1px 2px rgb(0 0 0 / 5%),
    inset 0px -15px 10px -12px rgb(0 0 0 / 5%);
  padding: 10px;
  display: inline-block;
  position: relative;
  vertical-align: middle;
  cursor: pointer;
  margin-right: 14px;
  top: -2px;
}

.check-group input:checked + label:after {
  content: "";
  display: block;
  position: absolute;
  top: -2px;
  left: 6px;
  width: 6px;
  height: 14px;
  border: solid #0079bf;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
</style>