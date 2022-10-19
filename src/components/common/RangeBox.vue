<template>
  <div class="range">
    <label>{{ category }}</label>
    <div :class="['range-box', { active: $route.fullPath == '/search' }]">
      <input type="number" placeholder="0" @change="onChange($event, 'from')" />
      <span>to</span>
      <input
        type="number"
        placeholder="0"
        class="input-right"
        @change="onChange($event, 'to')"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["category"],
  data() {
    return {
      price: {
        category: "price",
      },
    };
  },
  methods: {
    onChange(event, v) {
      if (v == "to") {
        this.price.to = event.target.value;
      } else {
        this.price.from = event.target.value;
      }
      this.$emit("selected", this.price);
    },
  },
};
</script>

<style scoped>
.range {
  padding: 12px 16px;
  background: #fff;
  width: 25%;
}
.range-box.active {
  padding-bottom: 2px;
}
.range-box {
  display: flex;
  padding: 10px 0;
}
.range-box span {
  color: #4e4e4e;
}
.range-box input {
  border: none;
  font-size: 16px;
  width: 50%;
  color: #707070;
}
.range-box .input-right {
  text-align: right;
}
.range-box input:focus {
  outline: none;
}
</style>