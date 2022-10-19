<template>
  <div class="agent-container">
    <div class="agent-details">
      <ul class="details-list">
        <li>
          <div>Agent Name</div>
          <div>{{ agentData.name }}</div>
        </li>

        <li>
          <div>Agent Phone Number</div>
          <div>{{ agentData.phone_number }}</div>
        </li>

        <li>
          <div>Estate Name</div>
          <div>{{ agentData.estate_name }}</div>
        </li>
        <li>
          <div>Optional Phone Number</div>
          <div>{{ opNumber.optional_number }}</div>
        </li>
      </ul>
      <div class="agent-image" v-if="agentData.image">
        <img :src="agentData.image" />
      </div>
       <div class="agent-image" v-else>
        <img src="../../assets/images/avatar.svg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AgentDetails",
  props: ["agentData", "opNumber"],
};
</script>

<style scoped>
.agent-container {
  padding: 10px 0 10px 20px;
}
.agent-details {
  display: flex;
  justify-content: space-between;
}
.agent-details .details-list {
  list-style: none;
  padding: 0 0 20px 0;
}
.agent-details .details-list li {
  color: #606060;
  font-size: 14px;
  text-align: left;
  padding: 10px 0;
  line-height: 1.5;
  display: flex;
  white-space: nowrap;
}
.agent-details .details-list li div:nth-child(1) {
  min-width: 200px;
}
.agent-details .details-list li div:nth-child(2) {
  color: #000 !important;
}
.agent-image {
  border-radius: 5px;
  width: 120px;
  height: 120px;
  box-shadow: 0px 0px 10px #0000001a;
  margin-top: 8px;
}
.agent-image img {
  width: 100%;
}
@media (max-width: 479px) and (min-width: 320px) {
  .agent-details {
    flex-wrap: wrap-reverse;
  }
  .agent-image {
    margin: 10px 0;
  }
}
</style>