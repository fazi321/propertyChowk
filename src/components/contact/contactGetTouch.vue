<template>
  <div class="contact-touch">
    <div class="inner">
      <h2>Get in Touch</h2>
      <h1>(042) 111-777-111</h1>
      <p>Have any question? Get in touch with us. we will give you the help you need</p>
      <div class="social-icon">
        <a href ="https://www.instagram.com/propertychowk">
          <img src="../../assets/images/instagram.png" alt />
        </a>
        <a href="https://www.youtube.com/channel/UCgzxqMJuzeGjMDcozRK_4bQ">
          <img src="../../assets/images/youtube.png" alt />
        </a>
        <a href="https://facebook.com/propertychowkpk">
          <img src="../../assets/images/facebook.png" alt />
        </a>
        <a href="https://wa.me/message/CX7RNKRE6TAPE1">
          <img src="../../assets/images/whatsapp.png" alt />
        </a>
        <a href="">
          <img src="../../assets/images/linkedin.png" alt />
        </a>
        <a href="">
          <img src="../../assets/images/snapchat.png" alt />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.contact-touch {
  background: #608abd;
  min-height: 200px;
  margin-top: 20px;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.contact-touch .inner {
  width: 37%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.contact-touch h2 {
  color: #fff;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  line-height: 1.5;
}
.contact-touch h1 {
  color: #fff;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  line-height: 1.5;
}
.contact-touch p {
  color: #fff;
  font-size: 18px;
  text-align: center;
}
.social-icon {
  background: #f7f7f7;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64% !important;
  margin: 15px 0;
  padding: 5px 0;
}
.social-icon img {
  width: 40px;
  margin: 5px;
}
@media (max-width: 479px) and (min-width: 320px) {
  .contact-touch .inner{
    width: 100%;
  }
  .social-icon{
    width: 100%!important;
  }
}
</style>