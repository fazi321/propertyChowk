<template>
  <div class="container">
    <div class="Get-touch-container">
      <h1>GET IN TOUCH</h1>
      <div class="get-content">
        <div class="left">
          <form class="form">
            <div>
              <label for>Name</label>
              <input type="text" placeholder="Name" />
            </div>
            <div>
              <label for>Phone Number</label>
              <input type="number" placeholder="Phone Number" />
            </div>
            <div>
              <label for>Additional Info</label>
              <textarea rows="4" cols="50" placeholder="Message"></textarea>
            </div>
            <div class="get-button">
              <input type="submit" value="Get in Touch" />
              <a
                class="call"
                href="tel:(+92) 0322-0000083"
                v-if="$route.params.agent == 'babarkalyar'"
                >Call</a
              >
              <a
                class="call"
                href="tel:(+92) 0300119904"
                v-if="$route.params.agent == 'muhammadasif'"
                >Call</a
              >
              <a
                class="call"
                href="tel:(+92) 0321-94517006"
                v-if="$route.params.agent == 'malikasifjahangir'"
                >Call</a
              >
              <a
                class="call"
                href="tel:(+92) 92321-8443555"
                v-if="$route.params.agent == 'miantalatahmad'"
                >Call</a
              >
              <a
                class="call"
                href="tel:(+92) 92321-6217760"
                v-if="$route.params.agent == 'haiderayubbaig'"
                >Call</a
              >
              <a
                class="call"
                href="tel:(+92) 9203214400019"
                v-if="$route.params.agent == 'wasimsiyal'"
                >Call</a
              >
              <a
                class="call"
                href="tel:(+92) 0322-4054465"
                v-if="$route.params.agent == 'mohsinmalik'"
                >Call</a
              >
              <a
                class="call"
                href="tel:(+92) 0324-4051355"
                v-if="$route.params.agent == 'mAmirMalik'"
                >Call</a
              >
              <a
                class="call"
                href="tel:(+92) 0321-4949470"
                v-if="$route.params.agent == 'abdulrazzaq'"
                >Call</a
              >
              <a class="whatsapp" href="https://wa.me/" target="_blank"
                >WhatsApp</a
              >
            </div>
          </form>
        </div>
        <div class="right">
          <h1 @click="clicked">Map</h1>
          <div class="map" style="width: 100%">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.972706792637!2d74.43688161462961!3d31.46993695678052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905de4732f0bd%3A0xa55d99a91eb027c4!2sDefence%20Housing%20Authority%20(DHA)%20HeadOffice%20-%20Lahore!5e0!3m2!1sen!2s!4v1664229647887!5m2!1sen!2s"
              width="600"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              v-if="$route.path == '/babarkalyar'"
            ></iframe>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54446.51628772751!2d74.42097560827015!3d31.471736990876312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190920e59fccd3%3A0x56cae6ee2c7a479b!2sDHA%20Phase%206%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1664404406408!5m2!1sen!2s"
              width="600"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              v-else-if="$route.path == '/malikasifjahangir'"
            ></iframe>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.6877204127263!2d74.39435581462908!3d31.45026295774845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391906252ee75a4f%3A0xf6dac5d8b6c20665!2sBankers%20Avenue%20Co-operative%20Housing%20Society!5e0!3m2!1sen!2s!4v1665062833727!5m2!1sen!2s"
              width="600"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              v-else-if="$route.path == '/haiderayubbaig'"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <iframe
              v-else-if="$route.path == '/miantalatahmad'"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.98857696154!2d74.44485572695311!3d31.4695004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391908dedadcef21%3A0x47c4e9791a15110a!2sTALAT%20ESTATE%C2%AE!5e0!3m2!1sen!2s!4v1664848029663!5m2!1sen!2s"
              width="600"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <iframe
              v-else-if="$route.path == '/wasimsiyal'"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.365199879614!2d74.40250551462933!3d31.459138657311804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391906201e1c53f3%3A0xc690d81473c36d7a!2sStreet%206%2C%20Sector%20H%20Phase%205%20D.H.A%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1665844314992!5m2!1sen!2s"
              width="600"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <iframe
              v-else-if="$route.path == '/mohsinmalik'"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.2096889977333!2d74.42258365452288!3d31.463417482251124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190954fbb439a1%3A0xb3f75c9ab575d83a!2sAl-Rahman%20Centre!5e0!3m2!1sen!2s!4v1666270500021!5m2!1sen!2s"
              width="600"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <iframe
              v-else-if="$route.path == '/mAmirMalik'"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13611.674324965197!2d74.36686017204654!3d31.471425802170636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391906715b3361cf%3A0x1ba7b86dda181a5d!2sSector%20Y%20DHA%20Phase%203%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1666982499217!5m2!1sen!2s"
              width="600"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <iframe
              v-else-if="$route.path == '/abdulrazzaq'"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.8817985625374!2d74.37445961462973!3d31.47243755665738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190673ff6be145%3A0xca334d617f28e43d!2sPhase%206%2C%2031%20Commercial%20Area%2C%20Sector%20Y%20DHA%20Phase%203%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1669144017642!5m2!1sen!2s"
              width="600"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <iframe
              v-else
              id="theiframe"
              width="100%"
              height="400"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=350&amp;hl=en&amp;q=Islamabad+(Property%20chownk)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/farm-gps/">gps for tractors</a>
            </iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GetInTouch",
  methods: {
    clicked() {
      var iframe = parent.document.getElementById("theiframe");
      var innerDoc = iframe.contentDocument || iframe.contentWindow.document;

      var currentFrame = innerDoc.location.href;
      console.log(currentFrame);
    },
  },
};
</script>

<style scoped>
.map iframe {
  width: 100% !important;
}
.Get-touch-container {
  padding: 40px 0;
}
.Get-touch-container h1 {
  font-size: 24px;
  font-weight: 600;
  padding: 15px 0;
  text-align: center;
}
.get-content {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  flex-wrap: wrap;
}
.get-content .right {
  width: 55%;
}
.get-content .left {
  width: 40%;
}
.form {
  padding: 15px;
  border: 1px solid #eee;
}
.form div {
  margin-top: 8px;
  width: 100%;
}
.form label {
  font-size: 16px;
  color: #333;
  font-weight: 500;
  padding: 0 15px;
  margin-top: 15px;
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
.right .map {
  border: 1px solid #eee;
  padding: 10px;
}
.get-button {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.whatsapp {
  background: #2fb842;
  color: #fff;
}
.call {
  background-color: #f8f8f8;
  color: #394b57;
  border: 1px solid #f8f8f8;
}
.get-button input {
  background-color: #1783b4;
  color: #fff;
  font-size: 14px;
  width: 30%;
  white-space: nowrap;
}
.get-button a {
  font-size: 14px;
  border: none;
  outline: none;
  white-space: nowrap;
  padding: 16px 30px;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
}
@media (max-width: 479px) and (min-width: 320px) {
  .get-content .right {
    width: 100%;
    padding: 10px;
  }
  .get-content .left {
    width: 100%;
  }
  .right .map {
    padding: 0;
  }
}
</style>
