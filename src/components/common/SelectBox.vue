<template>
  <div class="drop-down" @click="society">
    <div>
      <label>{{ category }}</label>
      <select
        :class="{ active: $route.fullPath == '/search' }"
        @change="onChange($event)"
        v-if="!selectors"
      >
        <option
          v-for="(opt, index) in dataInput"
          :key="index"
          :selected="index == 0"
        >
          {{ opt.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: ["category", "selected", "dataInput", "selectors"],
  methods: {
    onChange(event) {
      var value = {};
      value.category = this.category;
      value.name = event.target.value;
      this.$emit("selected", value);
    },
    society() {
      if (this.category == "Society") {
        if (this.selectors) {
          alert("please select city before society");
        }
      }
    },
  },
};
</script>
<style scoped>
.drop-down {
  padding: 12px 16px;
  background: #fff;
  width: 12%;
  position: relative;
}
.drop-down select {
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  padding: 10px 0;
  color: #707070;
  position: relative;
  font-size: 16px;
  left: -3px;
   background: #fff!important;
}
.drop-down .active {
  padding-bottom: 2px;
}
</style>