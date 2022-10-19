<template>
  <div class="primary-type">
    <div class="title">
      <h1>{{ title }}</h1>
    </div>
    <div class="type-list">
      <div class="type">
        <div
          class="type-main"
          v-for="(item, index) in types"
          :key="index"
          @click="clickedOn(item.type, index)"
        >
          <div
            :class="[
              'img',
              {
                active: !selected
                  ? metaQuery == item.type
                  : selected == item.type,
              },
            ]"
          >
            <img :src="require(`../../assets/images/${item.icon}`)" alt="" />
          </div>
          <div>
            <h6>{{ item.type }}</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "types", "propertyType", "metaQuery"],
  data() {
    return {
      selected: "",
    };
  },
  methods: {
    clickedOn(val, index) {
      this.selected = val;
      var selectVal = {
        id: index,
        value: val,
        propertyType: this.propertyType,
      };
      this.$emit("selected", selectVal);
    },
  },
  created() {
    if (this.propertyType == "property") {
      var index = this.types.findIndex((e) => {
        return e.type == this.metaQuery;
      });
      this.clickedOn("", this.metaQuery ? index : 0);
    }
  },
};
</script>

<style scoped>
.type {
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 20px 0px;
}
.type .type-main {
  margin-right: 18px;
}
.type .type-main .img {
  width: 50px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e8e8e8;
  border-radius: 10px;
  border: 1px solid transparent;
}
.type .type-main img {
  width: 50%;
}
.type .type-main .img.active {
  border: 1px solid #4092cf;
}
.type .type-main h6 {
  text-align: center;
  text-align: center;
  margin-top: 8px;
  font-size: 12px;
}
.primary-type {
  margin-top: 20px;
}
.primary-type h1 {
  color: #000;
  font-size: 16px;
}
.title {
  padding: 14px 0 18px 0;
}
@media (max-width: 479px) and (min-width: 320px) {
  .type .type-main{
    margin: 10px 15px 10px 0px;
  }
}
</style>