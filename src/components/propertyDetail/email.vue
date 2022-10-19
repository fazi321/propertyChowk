<template>
  <section class="email-container">
    <div class="email-card">
      <h3 v-if="data && data.price">PKR {{ converter(data.price) }}</h3>
      <a  href="" class="btn btn-blue call-link">CALL</a>
      <form class="form">
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="number" name="hhone" placeholder="Phone Number" />
        <textarea rows="4" cols="50" placeholder="Message"></textarea>
      </form>
      <button class="btn btn-blue">SEND EMAIL</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "SendEmail",
  props: ["data"],
  methods: {
    converter: (amount) => {
      if (!amount) return "";
      var val = Math.abs(amount);
      if (val >= 1000000000) {
        val = (val / 1000000000) + " Arab";
      }
      if (val >= 10000000) {
        val = (val / 10000000) + " Crore";
      }
      if (val >= 100000) {
        val = (val / 100000) + " Lakh";
      }
      return val;
    },
  },
};
</script>

<style scoped>
.call-link{
  width: unset!important;
  text-decoration: none;
  display: flex;
    text-align: center;
    justify-content: center;
}
.email-container .email-card {
  padding: 15px 20px;
  box-shadow: 0px 0px 10px #00000012;
  border-radius: 5px;
}
.email-container .email-card h3 {
  padding: 10px;
  color: #000000;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
}
.form {
  padding: 15px 0;
}
.form input {
  padding: 15px;
  border: none;
  outline: none;
  box-shadow: 0px 0px 10px #00000012;
  color: #606060;
  font-size: 12px;
  border-radius: 5px;
  width: 90%;
  margin: 10px 0;
}
.form textarea {
  padding: 15px;
  border: none;
  outline: none;
  box-shadow: 0px 0px 10px #00000012;
  color: #606060;
  font-size: 14px;
  border-radius: 5px;
  width: 90%;
  margin: 10px 0;
}
</style>