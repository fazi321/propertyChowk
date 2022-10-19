<template>
  <div class="contact-form">
    <form class="form">
      <div>
        <label for>Name</label>
        <input type="text" placeholder="Name" />
      </div>
      <div>
        <label for>Email Address</label>
        <input type="email" placeholder="Email Address" />
      </div>
      <div>
        <label for>Phone Number</label>
        <input type="number" placeholder="Phone Number" />
      </div>
      <div>
        <label for>Message</label>
        <textarea rows="4" cols="50" placeholder="Type here"></textarea>
      </div>
      <div class="get-button">
        <input type="submit" value="Submit" />
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.contact-form {
  display: flex;
  justify-content: center;
  margin: 50px 0;
}
.form {
  padding: 15px;
  border: 1px solid #eee;
  width: 40%;
  background: #eee;
}
.form div {
  margin-top: 8px;
  width: 100%;
}
.form label {
  font-size: 14px;
  color: #333;
  font-weight: 500;
  margin-top: 15px;
}
.form input {
  padding: 15px;
  border: 2px solid #ccc;
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
.get-button {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.get-button input {
  background: #2fb842;
  color: #fff;
  font-size: 14px;
  width: 30%;
  white-space: nowrap;
  padding: 8px;
  border: none;
  cursor: pointer;
}
@media (max-width: 479px) and (min-width: 320px) {
  .form{
    width: 100%;
  }
}
</style>