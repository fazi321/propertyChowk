<template>
  <div class="agent-container">
    <!-- <h1>Agent details</h1> -->
    <div class="agent-details">
      
      <ul class="details-list">
        <li>
          <div>Agent Name</div>
          <div>Malik Ali</div>
        </li>

        <li>
          <div>Agent Phone Number</div>
          <div>0312-3456789</div>
        </li>

        <li>
          <div>Estate Name</div>
          <div>Broad Land Estate</div>
        </li>
        <li>
          <div>City</div>
          <div>Lahore</div>
        </li>
        <li>
          <div>Area</div>
          <div>10 Marla</div>
        </li>
        <li>
          <div>Property Type</div>
          <div>Residential</div>
        </li>
        <li>
          <div>Office Timing</div>
          <div>9AM to 7PM</div>
        </li>
        <li>
          <div>Full Address</div>
          <div>Block D, Phase 5, Sector D, DHA, Lahore</div>
        </li>
      </ul>
      <div class="meet-video">
        <iframe
          src="https://www.youtube.com/embed/XHOmBV4js_E?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=http%3A%2F%2Fui.propertychowk.com&widgetid=1"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AgentIntro"
};
</script>

<style scoped>
/* agent details  */
.agent-container h1 {
  font-size: 24px;
  font-weight: 600;
  color: #333;
  padding: 15px 0;
  text-align: center;
  text-transform: uppercase;
}
.agent-details {
  display: flex;
  justify-content: space-between;
  padding: 50px 0;
}

.agent-details .details-list {
  list-style: none;
  padding: 0 0 20px 0;
  width: 50%;
}

.agent-details .details-list li {
  color: #606060;
  font-size: 18px;
  text-align: left;
  padding: 6px 0;
  line-height: 1.5;
  display: flex;
  white-space: nowrap;
}

.agent-details .details-list li div:nth-child(1) {
  min-width: 240px;
  font-weight: 400;
}

.agent-details .details-list li div:nth-child(2) {
  color: #000 !important;
  font-weight: 400;
}

.meet-video {
  width: 45%;
  height: 300px;
  margin-top: 20px;
}
.meet-video iframe {
  max-width: 100%;
  width: 100%;
  height: 100%;
}
/* ageent details  */
@media (max-width: 479px) and (min-width: 320px) {
  .agent-details {
    flex-wrap: wrap-reverse;
    padding: 30px 10px;
  }
  .agent-details .details-list li div:nth-child(2) {
    white-space: pre-wrap;
  }
  .agent-image {
    margin: 10px 0;
  }
  .agent-details .details-list {
    width: 100%;
  }
 
  .agent-details .details-list li div:nth-child(1) {
    min-width: 150px;
  }
  .meet-video {
  width: 100%;
 }
}
</style>