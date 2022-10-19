<template>
  <div class="container">
    <div class="meet-agent">
      <h1>MEET THE AGENT</h1>
      <div class="meet-video" v-if="$route.params.agent == 'babarkalyar'">
        <iframe
          width="853"
          height="480"
          src="https://www.youtube.com/embed/s3CZnlVma-c"
          title="Mcdonald Y-block Phase7 DHA Lahore Fresh Prices & Developments updates & Drone View. Biggest Park"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div
        class="meet-video"
        v-else-if="$route.params.agent == 'malikasifjahangir'"
      >
        <iframe
          width="853"
          height="480"
          src="https://www.youtube.com/embed/rPpom610zKU"
          title="What Estate Master Pakistan Can Do For You | About Estate Masters Pakistan"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div
        class="meet-video"
        v-else-if="$route.params.agent == 'miantalatahmad'"
      >
        <!-- <video src="https://www.facebook.com/TalatEstateOfficial/videos/411193664422869"></video> -->
        <iframe
          src="https://www.facebook.com/TalatEstateOfficial/videos/411193664422869"
          style="border: 0px #ffffff none"
          name="myiFrame"
          scrolling="no"
          frameborder="1"
          marginheight="0px"
          marginwidth="0px"
          height="400px"
          width="600px"
          allowfullscreen
        ></iframe>
      </div>
      <div class="meet-video" v-else>
        <iframe
          src="https://www.youtube.com/embed/XHOmBV4js_E?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=http%3A%2F%2Fui.propertychowk.com&widgetid=1"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MeetAgent",
};
</script>

<style>
.meet-agent h1 {
  font-size: 24px;
  font-weight: 600;
  padding: 15px 0;
  text-align: center;
}
.meet-video {
  height: 500px;
  margin-top: 20px;
}
.meet-video iframe {
  max-width: 100%;
  width: 100%;
  height: 100%;
}
</style>
