<template>
  <div class="property-tabs">
    <div class="property-head">
      <h6>12000 properties in Islamabad</h6>
    </div>
    <div class="tabs-main">
      <div class="tab-head">
        <ul>
          <li :class="{'active-border': tab == 'Home'}"  @click="activeTab('Home')">
            <p>Home <sub>(6000)</sub></p>
          </li>
          <li :class="{'active-border': tab == 'Falts'}" @click="activeTab('Falts')">
            <p>Flats <sub>(6000)</sub></p>
          </li>
          <li :class="{'active-border': tab == 'Plots'}" @click="activeTab('Plots')">
            <p>Plots <sub>(6000)</sub></p>
          </li>
        </ul>
      </div>
      <div class="tab-content">
        <div>
          <ul>
            <li>I-8 (1,194)</li>
            <li>Shah Allah Ditta (10)</li>
            <li>Soan Garden(133)</li>
            <li>Naval Anchorage (27)</li>
            <li>Madina Town (7)</li>
            <li>National Police Foundation O-9 (59)</li>
            <li>Islamabad Expressway (14)</li>
            <li>Diplomatic Enclave (69)</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>I-8 (1,194)</li>
            <li>Shah Allah Ditta (10)</li>
            <li>Soan Garden(133)</li>
            <li>Naval Anchorage (27)</li>
            <li>Madina Town (7)</li>
            <li>National Police Foundation O-9 (59)</li>
            <li>Islamabad Expressway (14)</li>
            <li>Diplomatic Enclave (69)</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>I-8 (1,194)</li>
            <li>Shah Allah Ditta (10)</li>
            <li>Soan Garden(133)</li>
            <li>Naval Anchorage (27)</li>
            <li>Madina Town (7)</li>
            <li>National Police Foundation O-9 (59)</li>
            <li>Islamabad Expressway (14)</li>
            <li>Diplomatic Enclave (69)</li>
          </ul>
        </div>
      </div>
      <div class="see-all-btn">
        <p>View all locations in Islamabad</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            tab : "Home"
        }
    },
    methods:{
      activeTab(tab){
        this.tab = tab
      }
    }
};
</script>

<style scoped>
.property-tabs .property-head {
  padding: 26px 0;
  margin:8px 0;
}
.property-tabs .property-head h6 {
  color: #000;
  font-size: 16px;
}
.property-tabs .tab-head ul {
  display: flex;
}
.property-tabs .tab-head ul li {
  border-bottom: 2px solid transparent;
  padding: 5px 0;
  margin-right: 50px;
  cursor: pointer;
}
.property-tabs .tab-head ul li.active-border {
  border-bottom: 2px solid gray;
}
.property-tabs .tab-head ul li p {
  font-size: 16px;
}
.property-tabs .tab-head ul li sub {
  font-size: 10px;
}
.tabs-main {
  border: 1px solid #808080;
}
.tab-head {
  padding: 18px 10px 10px 18px;
  border-bottom: 1px solid #808080;
}
.tab-content {
  padding: 18px;
  display: flex;
  justify-content: space-between;
}
.tab-content ul li {
  color: #7a7a7a;
  font-size: 14px;
  margin: 25px 0;
}
.see-all-btn {
  color: #0cb2da;
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
  cursor: pointer;
}
@media (max-width: 479px) and (min-width: 320px){
  .property-tabs{
    padding:10px;
  }
  .tab-content ul li{
    font-size:12px;
  }
  .property-tabs .tab-head ul li p{
    font-size:14px;
  }
  
}
</style>