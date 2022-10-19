<template>
  <default-layout>
       <AddForm/>
  </default-layout>
</template>

<script>
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
import AddForm from "@/components/AddForm.vue";
export default {
  components: {
    DefaultLayout,
    AddForm,
  },
};
</script>

<style scoped>
.add-property{
    padding:25px 0;
}
.add-property h1{
    font-size:18px;
    color:#0CB2DA;
}
</style>