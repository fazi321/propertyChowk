<template>
  <div class="container">
    <div class="agent-details" v-if="$route.params.agent == 'babarkalyar'">
      <ul class="details-list">
        <li>
          <div>Agent Name</div>
          <div>Babar Kalyar</div>
        </li>

        <li>
          <div>Agent Phone Number</div>
          <div>0322-0000083</div>
        </li>
        <li>
          <div>Agent Email Address</div>
          <div>bkpropertiesorg@gmail.com</div>
        </li>

        <li>
          <div>Estate Name</div>
          <div>BK Property Marketing</div>
        </li>
        <li>
          <div>City</div>
          <div>Lahore</div>
        </li>
        <li>
          <div>Area expertise</div>
          <div>DHA Lahore & Smart City Properties</div>
        </li>
        <li>
          <div>Office Timing</div>
          <div>9AM to 7PM</div>
        </li>
        <li>
          <div>Full Address</div>
          <div>67 Cca1 Phase6 DHA Lahore Lahore, Punjab, Pakistan-54000</div>
        </li>
      </ul>
      <a
        href="https://www.facebook.com/bkpropertiesorg/photos/119052920867923"
        class="agent-image"
      >
        <!-- <img src="../../assets/Profile.png" /> -->
        <img v-lazy="require(`../../assets/Profile.png`)" />
      </a>
    </div>
    <div class="agent-details" v-else-if="$route.params.agent == 'miantalatahmad'">
      <ul class="details-list">
        <li>
          <div>Agent Name</div>
          <div>Mian Talat Ahmad</div>
        </li>

        <li>
          <div>Agent Phone Number</div>
          <div>92321-8443555</div>
        </li>
        <li>
          <div>Agent Email Address</div>
          <div>Admin@talatestate.com</div>
        </li>

        <li>
          <div>Estate Name</div>
          <div>Talat Estate</div>
        </li>
        <li>
          <div>City</div>
          <div>Lahore</div>
        </li>
        <li>
          <div>Area expertise</div>
          <div>DHA 1# Real Estate Agency with the largest inventory of Luxury Properties and best Investment opportunities in the DHA.</div>
        </li>
        <li>
          <div>Office Timing</div>
          <div>10:00 AM - 8:00 PM Mon-Sat</div>
        </li>
        <li>
          <div>Full Address</div>
          <div>15 CCA DHA Phase 6 Lahore, Punjab, Pakistan-54000</div>
        </li>
      </ul>
      <a
        href="https://www.facebook.com/TalatEstateOfficial/"
        class="agent-image"
      >
        <!-- <img src="../../assets/Profile.png" /> -->
        <img v-lazy="require(`../../assets/MianTalatAhmad.jpeg`)" />
      </a>
    </div>
    <div
      class="agent-details"
      v-else-if="$route.params.agent == 'muhammadasif'"
    >
      <ul class="details-list">
        <li>
          <div>Agent Name</div>
          <div>Muhammad Asif</div>
        </li>

        <li>
          <div>Agent Phone Number</div>
          <div>0300119904</div>
        </li>

        <li>
          <div>Estate Name</div>
          <div>Ravian Holding Real Estate</div>
        </li>
        <li>
          <div>City</div>
          <div>Lahore</div>
        </li>
        <li>
          <div>Area expertise</div>
          <div>DHA Lahore & Smart City Properties</div>
        </li>
        <li>
          <div>Office Timing</div>
          <div>9AM to 7PM</div>
        </li>
        <li>
          <div>Full Address</div>
          <div>34MB dha phase 6</div>
        </li>
      </ul>
      <a href="#" class="agent-image">
        <!-- <img src="../../assets/MuhammadAsif.png" /> -->
        <img v-lazy="require(`../../assets/MuhammadAsif.png`)" />
        
      </a>
    </div>
    <div
      class="agent-details"
      v-else-if="$route.params.agent == 'malikasifjahangir'"
    >
      <ul class="details-list">
        <li>
          <div>Agent Name</div>
          <div>Malik Asif Jahangir</div>
        </li>

        <li>
          <div>Agent Phone Number</div>
          <div>0321-94517006</div>
        </li>
        <li>
          <div>Email for properties</div>
          <div>estatemasterr4@gmail.com</div>
        </li>
   
        <li>
          <div>Estate Name</div>
          <div>ESTATE MASTER</div>
        </li>
        <li>
          <div>City</div>
          <div>Lahore</div>
        </li>
        <li>
          <div>Area expertise</div>
          <div>INDUSTRY PIONEERS, DHA, MID CITY HOUSING SCHEME, LAHORE SMART CITY, AND ALNOOR ORCHARDS</div>
        </li>
        <li>
          <div>Office Timing</div>
          <div>10am-6pm</div>
        </li>
        <li>
          <div>Full Address</div>
          <div>34MB  Phase6 DHA Lahore Lahore, Punjab, Pakistan-54000</div>
        </li>
      </ul>
      <a href="#" class="agent-image">
        <!-- <img src="../../assets/MuhammadAsif.png" /> -->
        <img v-lazy="require(`../../assets/malikAsif.jpeg`)" />
      </a>
    </div>
    <div
      class="agent-details"
      v-else-if="$route.params.agent == 'haiderayubbaig'"
    >
      <ul class="details-list">
        <li>
          <div>Agent Name</div>
          <div>Haider Ayub Baig</div>
        </li>

        <li>
          <div>Agent Phone Number</div>
          <div>0321-6217760</div>
        </li>
        <li>
          <div>Email for properties</div>
          <div>ali_ali8285@yahoo.com</div>
        </li>
   
        <li>
          <div>Estate Name</div>
          <div>L.M Real Estate</div>
        </li>
        <li>
          <div>City</div>
          <div>Lahore</div>
        </li>
        <li>
          <div>Area expertise</div>
          <div>DHA Lahore & Haram City</div>
        </li>
        <li>
          <div>Office Timing</div>
          <div>10AM to 8PM</div>
        </li>
        <li>
          <div>Full Address</div>
          <div>20- B Bankers Town Commercial Area Cantt Lahore</div>
        </li>
      </ul>
      <a href="#" class="agent-image">
        <!-- <img src="../../assets/MuhammadAsif.png" /> -->
        <img v-lazy="require(`../../assets/HaiderAyubBaig.png`)" />
      </a>
    </div>
    <div
      class="agent-details"
      v-else-if="$route.params.agent == 'wasimsiyal'"
    >
      <ul class="details-list">
        <li>
          <div>Agent Name</div>
          <div>Wasim Siyal</div>
        </li>

        <li>
          <div>Agent Phone Number</div>
          <div>03214400019</div>
        </li>
        <li>
          <div>Email for properties</div>
          <div>pioneerestate240@gmail.com</div>
        </li>
   
        <li>
          <div>Estate Name</div>
          <div>Pioneer Estate</div>
        </li>
        <li>
          <div>City</div>
          <div>Lahore</div>
        </li>
        <li>
          <div>Area expertise</div>
          <div>DHA all phases Lahore, DHA Bahawalpur </div>
        </li>
        <li>
          <div>Office Timing</div>
          <div>10AM to 8PM</div>
        </li>
        <li>
          <div>Full Address</div>
          <div>MB, DHA Phase 6, Lahore, Pakistan, 54792</div>
        </li>
      </ul>
      <a href="#" class="agent-image">
        <!-- <img src="../../assets/MuhammadAsif.png" /> -->
        <img v-lazy="require(`../../assets/wasimsiyal.png`)" />
      </a>
    </div>
    <div
      class="agent-details"
      v-else-if="$route.params.agent == 'mohsinmalik'"
    >
      <ul class="details-list">
        <li>
          <div>Agent Name</div>
          <div>Mohsin Malik</div>
        </li>
        <li>
          <div>Agent Phone Number</div>
          <div>0322-4054465</div>
        </li>
        <li>
          <div>Email for properties</div>
          <div>Al.nasrrealestate1@gmail.com</div>
        </li>
   
        <li>
          <div>Estate Name</div>
          <div>Al-Nasr Real Estate & Marketing</div>
        </li>
        <li>
          <div>City</div>
          <div>Lahore</div>
        </li>
        <li>
          <div>Area expertise</div>
          <div>DHA, Askari housing scheme, Bahria town & Gawadar land</div>
        </li>
        <li>
          <div>Office Timing</div>
          <div>10AM to 8PM</div>
        </li>
        <li>
          <div>Full Address</div>
          <div>Office # 13-14, 2nd Floor Rehman Center, Gate # 3 Askari 11 Lahore</div>
        </li>
      </ul>
      <a href="#" class="agent-image">
        <!-- <img src="../../assets/MuhammadAsif.png" /> -->
        <img v-lazy="require(`../../assets/MohsinMalik.png`)" />
      </a>
    </div>
    <div
      class="agent-details"
      v-else-if="$route.params.agent == 'mAmirMalik'"
    >
      <ul class="details-list">
        <li>
          <div>Agent Name</div>
          <div>M. Amir Malik</div>
        </li>
        <li>
          <div>Agent Phone Number</div>
          <div>0324-4051355</div>
        </li>
        <li>
          <div>Email for properties</div>
          <div>amirmalik30p3@gmail.com</div>
        </li>
   
        <li>
          <div>Estate Name</div>
          <div>New Realtors Estate</div>
        </li>
        <li>
          <div>City</div>
          <div>Lahore</div>
        </li>
        <li>
          <div>Area expertise</div>
          <div>DHA and Other Top Societies</div>
        </li>
        <li>
          <div>Office Timing</div>
          <div>10AM to 8PM</div>
        </li>
        <li>
          <div>Full Address</div>
          <div>Off # 30, 1st Floor Commericial Area. Y block DHA Lahore</div>
        </li>
      </ul>
      <a href="#" class="agent-image">
        <!-- <img src="../../assets/MuhammadAsif.png" /> -->
        <img v-lazy="require(`../../assets/M. AmirMalik.png`)" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "AgentDetails",
};
</script>

<style scoped>
/* agent details  */

.agent-details {
  display: flex;
  justify-content: space-between;
  padding: 50px 0;
}

.agent-details .details-list {
  list-style: none;
  padding: 0 0 20px 0;
  width: 70%;
}

.agent-details .details-list li {
  color: #606060;
  font-size: 18px;
  text-align: left;
  padding: 6px 0;
  line-height: 1.5;
  display: flex;
  /* white-space: nowrap; */
}

.agent-details .details-list li div:nth-child(1) {
  min-width: 240px;
  font-weight: 400;
  white-space: nowrap;
}

.agent-details .details-list li div:nth-child(2) {
  color: #000 !important;
  font-weight: 400;
  width:63%;
}

.agent-image {
  border-radius: 5px;
  width: 250px;
  height: 250px;
  box-shadow: 0px 0px 10px #0000001a;
}

.agent-image img {
  width: 100%;
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
    min-width: 140px;
  }
  .agent-details .details-list li {
  font-size: 14px;
}
}
</style>
