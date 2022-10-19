<template>
  <router-view />
</template>
<script>
import firebase from "./firebase";
import PropertiesDataService from "./services/PropertiesServices";
const db = firebase.firestore();
export default {
  beforeCreate() {
    // fetch api data
    var i = 1;
    const onDataChange = (items) => {
      let _properties = [];
       Object.entries(items.val()).forEach(obj => {
          var [key, value] = obj;
        var data = { id: i++, ...value, docKey: key };
        _properties.push(data);
      });
      _properties.reverse();
      this.$store.dispatch("setProperties", _properties);
      i = 1;
    };
    PropertiesDataService.getAll().on("value", onDataChange);
    // fetch data properties
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.$store.dispatch("setUser", false);
      } else {
        db.collection("users")
          .doc(user.uid)
          .get()
          .then((querySnapshot) => {
            this.$store.dispatch("userDetail", querySnapshot.data());
          });
        this.$store.dispatch("setUser", true);
      }
    });
  },
  methods: {
    // onDataChange(items) {
    //   let _properties = [];
    //   items.forEach((item) => {
    //     _properties.push(item);
    //   });
    //   this.$store.dispatch("setProperties", _properties);
    // },
  },
  watch: {
    $route: {
      handler: function (params) {
        if (params.fullPath == "/add-property" && !this.$store.state.user) {
          this.$router.replace("/");
        }
      },
      immediate: true,
    },
  },
};
</script>
<style>
</style>