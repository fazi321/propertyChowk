<template>
  <div>
    <div class="check-group">
      <input
        type="checkbox"
        :id="`'${name}'`"
        v-model="activeCategories"
        v-on:change="filterMedia()"
        :checked="active"
      />
      <label :for="`'${name}'`">{{ name }}</label>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "type", "active"],
  data() {
    return {
      activeCategories: this.active,
    };
  },
  methods: {
    filterMedia() {
      this.$emit("selected", {
        isAdd: this.activeCategories,
        status: this.name,
        type: this.type,
      });
    },
  },
};
</script>

<style scoped>
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