<template>
  <div class="range">
    <label>{{ category }}</label>
    <div :class="['range-box', { active: $route.fullPath == '/search' }]">
      <div class="range-area">
        <input
          type="number"
          placeholder="0"
          @change="onChange($event, 'from')"
        />
        <div class="area-unit">
          <select @change="onChange($event, 'unitFrom')">
            <option selected>Marla</option>
            <option>Kanal</option>
          </select>
        </div>
      </div>
      <span>to</span>
      <div class="range-area">
        <input type="number" placeholder="0" @change="onChange($event, 'to')" />
        <div class="area-unit">
          <select @change="onChange($event, 'unitTo')">
            <option selected>Marla</option>
            <option>Kanal</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["category"],
  data() {
    return {
      area: {},
    };
  },
  methods: {
    onChange(event, v) {
      var currentValue = event.target.value;
      if (v == "unitFrom") {
        this.area.unitFrom = currentValue;
      } else if (v == "unitTo") {
        this.area.unitTo = currentValue;
      }
      if (v == "to") {
        this.area.to = currentValue;
      } else if (v == "from") {
        this.area.from = currentValue;
      }
      var obj = {};
      obj.from = this.area.from + "+" + this.area.unitFrom;
      obj.to = this.area.to + "+" + this.area.unitTo;
      // console.log(obj);
    },
  },
};
</script>

<style scoped>
.range {
  padding: 12px 16px;
  background: #fff;
  width: 35%;
}
.range-box {
  display: flex;
  padding: 10px 0;
}
.range-box.active {
  padding-bottom: 2px;
}
.range-box span {
  color: #707070;
  margin: 0 24px;
}
.range-box input {
  border: none;
  color: #707070;
  width: 78%;
  font-size: 16px;
}
.range-box input:focus {
  outline: none;
}
.range-area {
  display: flex;
}
.range-area select {
  outline: none;
  border: none;
  width: 35px;
  font-size: 10px;
  color: #707070;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: #fff!important;
}
.area-unit {
  position: relative;
  top: 2px;
}
.area-unit:after {
  content: ">";
  font: 9px "Consolas", monospace;
  color: #707070;
  transform: rotate(90deg);
  right: 0px;
  top: 26%;
  position: absolute;
  pointer-events: none;
}
</style>