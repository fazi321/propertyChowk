<template>
  <section class="searchHeader">
    <div class="container">
      <div class="main-container">
        <div class="main-primary">
          <div class="search-header" v-if="$route.params.agent == 'agent'">
            <h1>Property Chowk</h1>
            <h2 v-if="$route.path == '/' || !title">
              A New Era of
              <br />Pakistan's Real Estate Market
            </h2>
            <h2>{{ title }}</h2>
          </div>
          <section class="search" v-if="$route.path == '/'">
            <!-- <div class="heade-btns">
              <router-link
                to="add-property"
                v-if="$store.state.userInfo.verified"
              >
                <button class="btns">Add Property</button>
              </router-link>
              <router-link to="#">
                <button class="btns active">Top Projects</button>
              </router-link>
              <router-link to="#">
                <button class="btns">Societies</button>
              </router-link>
            </div> -->
            <section class="quick-search">
              <div class="quick-main">
                <div class="heading">
                  <h1>QUICK SEARCH</h1>
                </div>
                <div class="search-container">
                  <div class="btn-container">
                    <router-link to="/search?page=1" class="yellow-btns">
                      <button>Buy</button>
                    </router-link>
                    <router-link to="/search?purpose=1&page=1" class="yellow-btns">
                      <button>Rent</button>
                    </router-link>
                  </div>
                  <div class="inputs">
                    <div class="search-main">
                      <!-- area detail -->
                      <section class="area-detail">
                        <!-- block of code -->
                        <div class="city-block">
                          <div class="area-input" id="input">
                            <div>
                              <input
                                type="text"
                                placeholder="City"
                                v-model="finalData.city"
                                @click="openDropdown"
                              />
                            </div>
                            <div class="dropdown" v-if="dropdownCities">
                              <!-- <div class="city-search">
                                <input
                                  type="text"
                                  v-model="search"
                                  placeholder="Search Location"
                                />
                              </div> -->
                              <div class="city-list" v-if="!finalData.city">
                                <ul>
                                  <li>Popular Cities</li>
                                  <li
                                    v-for="(popular, p) in cities"
                                    @click="selectedCity(popular)"
                                    :key="p"
                                    v-show="popular.isPop"
                                  >
                                    {{ popular.name }}
                                  </li>
                                </ul>
                                <ul>
                                  <li>Other Cities</li>
                                  <li
                                    v-for="(other, index) in cities"
                                    @click="selectedCity(other)"
                                    v-show="!other.isPop"
                                    :key="index"
                                  >
                                    {{ other.name }}
                                  </li>
                                </ul>
                              </div>
                              <div class="city-list search-list" v-else>
                                <ul>
                                  <li
                                    v-for="(search, s) in searchCities"
                                    @click="selectedCity(search)"
                                    :key="s"
                                  >
                                    {{ search.name }}
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- block of code -->
                      </section>
                      <section class="area-detail">
                        <!-- block of code -->
                        <div class="city-block">
                          <div class="area-input" id="input-society">
                            <div>
                              <input
                                type="text"
                                placeholder="Society"
                                v-model="finalData.society"
                                @click="openDropdownSociety"
                                :readonly="!finalData.city"
                              />
                            </div>
                            <!-- <div>
                              <div
                                class="dropdown-menu"
                                @click="openDropdownSociety"
                              >
                                {{ finalData.society }}
                              </div>
                            </div>-->
                            <div class="dropdown" v-if="dropdownSociety">
                              <!-- <div class="city-search">
                                <input
                                  type="text"
                                  v-model="searchSociety"
                                  placeholder="Search Society"
                                />
                              </div> -->
                              <div class="city-list search-list" v-if="!finalData.society">
                                <ul>
                                  <li
                                    v-for="(society, p) in society.society"
                                    @click="selectedSociety(society)"
                                    :key="p"
                                  >
                                    {{ society }}
                                  </li>
                                </ul>
                              </div>
                              <div class="city-list search-list" v-else>
                                <ul>
                                  <li
                                    v-for="(search, s) in searchSocietyFilter"
                                    @click="selectedSociety(search)"
                                    :key="s"
                                  >
                                    {{ search }}
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- block of code -->
                      </section>
                      <!-- input block -->
                    </div>
                    <div class="type-search">
                      <select v-model="finalData.sub_type">
                        <option value disabled>All Types</option>
                        <option value="Residential">Residential</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Residential/commercial">
                          Residential/commercial
                        </option>
                      </select>
                      <div class="search-icon" @click="quickSearch">
                        <svg class="svg-icon" viewBox="0 0 20 20">
                          <path
                            fill="#000"
                            d="M18.109,17.776l-3.082-3.081c-0.059-0.059-0.135-0.077-0.211-0.087c1.373-1.38,2.221-3.28,2.221-5.379c0-4.212-3.414-7.626-7.625-7.626c-4.212,0-7.626,3.414-7.626,7.626s3.414,7.627,7.626,7.627c1.918,0,3.665-0.713,5.004-1.882c0.006,0.085,0.033,0.17,0.098,0.234l3.082,3.081c0.143,0.142,0.371,0.142,0.514,0C18.25,18.148,18.25,17.918,18.109,17.776zM9.412,16.13c-3.811,0-6.9-3.089-6.9-6.9c0-3.81,3.089-6.899,6.9-6.899c3.811,0,6.901,3.09,6.901,6.899C16.312,13.041,13.223,16.13,9.412,16.13z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ["title"],
  data() {
    return {
      search: "",
      dropdownCities: false,
      dropdownSociety: false,
      finalData: {
        sub_type: "",
      },
      society: {},
      searchSociety: "",

      // cities
      cities: [
        {
          name: "Multan",
          isPop: true,
          society: [
            "Abbas Pur",
            "Abbaspura",
            "Abdali Road",
            "Air Force Officers Housing Scheme",
            "Airport Road",
            "Akbar Road",
            "Al Mustafa Colony",
            "Al Mustafa Road",
            "Al Quresh Housing Scheme",
            "Al Raheem Colony",
            "Ali Town",
            "Altaf Town",
            "Ansar Colony",
            "Askari Bypass",
            "Askari Colony",
            "BZU Employers Colony",
            "BZU Road",
            "Baba Safra Road",
            "Babar Road",
            "Badla Town",
            "Bahadurpur",
            "Bahawalpur Road",
            "Bahawalpur Sukha Road",
            "Band Bosan",
            "Basti Allah Bakhsh",
            "Basti Malook",
            "Basti Nau",
            "Bhutta Colony",
            "Bilal Chowk",
            "Bodla Town",
            "Bosan Road",
            "Buch Executive Villas",
            "Bukhari Colony",
            "Canal Bank Road",
            "Canal Cantt View Housing Society",
            "Canal Cantt Villas",
            "Canal Road",
            "Cantt",
            "Cantt Avenue",
            "Chah Boharwala",
            "Chah Daad Wala",
            "Chowk Khuni Burj",
            "Chowk Kumharanwala",
            "Chowk Nagshah",
            "Chungi No 1",
            "Haideria Road",
            "Haiderpura",
            "Haram Gate",
            "Hassanabad Colony",
            "Hazoori Bagh Road",
            "Hussain Agahi Bazar",
            "Ibrahim Town",
            "Income Tax Officers Colony",
            "Industrial Estate",
            "Ismailabad",
            "Jahangirabad",
            "Jail Road",
            "Jalalpur Pirwala",
            "Jalilabad",
            "Jamilabad",
            "Jamilabad Housing Scheme",
            "Jamilabad Road",
            "Jan Mohammad Colony",
            "Jinnah Town",
            "Johar Town",
            "Justic Hamid Colony",
            "Kacheri Road",
            "Katchery Chowk",
            "Khan Colony",
            "Khan Village",
            "Khan Village II",
            "Khanewal Road",
            "Khayaban e Kubra",
            "Liaquatabad",
            "Lodhi Colony",
            "Lodhi Colony Road",
            "Lodhran Road",
            "Lohari Gate Multan",
            "Lutafabad",
            "MA Jinnah Road",
            "MDA Chowk",
            "MDA Co operative Housing Scheme",
            "MDA Road",
            "Madina Town",
            "Manzoorabad",
            "Masoom Shah Road",
            "Mattital Road",
            "Meherban Colony",
            "Metro Plaza",
            "Mid Land Avenue",
            "Model Town",
            "Moza Nigana Durana",
            "Railway Officers Bungalows",
            "Ram Kali",
            "Rasheedabad",
            "Rashid Minhas Road",
            "Raza Abad",
            "Rehmat Town",
            "Royal Residency",
            "Sabzazar Colony",
            "Sabzi Mandi",
            "Sadat Colony",
            "Saddar Bazar",
            "Saddiqia Road",
            "Sadiq Colony",
            "Sadiqabad",
            "Sahara Homes",
            "Sakhi Sultan Colony",
            "Samanabad Colony",
            "Sameeja Abad",
            "Satellite Town",
            "Sayyam City",
            "Sayyam Officers City",
            "Sewara Chowk",
            "Shadab Colony",
            "Shah Khuram Colony",
            "Shah Rukn e Alam Colony",
            "Shah Town",
            "Shahzad Colony",
            "Shalimar Colony",
            "Shamasabad Colony",
            "Sharifpura",
            "Sher Shah Road",
            "Shujabad",
            "Shujabad Road",
            "Sikanderabad",
            "Silver City",
            "Southern Bypass",
            "Sui Gas Road",
            "Suraj Miani",
            "Suraj Miani Road",
            "Tariq Abad(3)",
            "Tariq Road(2)",
            "Tariqabad(1)",
            "Tawakal Town",
            "Tehsil Chowk",
            "Tibba Masoodpur",
            "Timber Market",
            "Tipu Sultan Road",
            "Chungi No 14",
            "Chungi No 22",
            "Chungi No 6",
            "Chungi No 7",
            "Chungi No 8",
            "Chungi No 9",
            "Circuit House Colony",
            "Crystal Homes",
            "DHA Defence",
            "Defence Officer Colony",
            "Delhi Gate Multan",
            "Dera Adda",
            "Double Phatak Chowk",
            "Dunya Pur Road",
            "Eidgah Road",
            "Faiz Town",
            "Farooqpura",
            "Fatima Jinnah Town",
            "Fida Avenue",
            "Fort Avenue",
            "Furrukh Town",
            "Galaxy Town",
            "Garden Citi",
            "Garden Town",
            "Ghanta Ghar Chowk",
            "Ghareeb Abad",
            "Ghouspura",
            "Gol Bagh Chowk",
            "Green Fort Housing Scheme",
            "Green Huts",
            "Green View Colony",
            "Gulberg Colony",
            "Gulgasht Colony",
            "Gulistan Chowk",
            "Gulistan Housing Scheme",
            "Gulraiz Town",
            "Gulshan Market",
            "Gulshan E Farooq Pura",
            "Gulshan e Bashir",
            "Gulshan e Faiz",
            "Gulshan e Iqbal",
            "Gulshan e Madina",
            "Gulshan e Mehar",
            "Gulshan e Rehman",
            "Hafiz Jamal Road",
            "Mujahid Town",
            "Mukhtar Town",
            "Multan Bypass",
            "Multan Public School Road",
            "Mumtazabad",
            "N Gulgasht Boulevard",
            "Nag Shah",
            "Naka Chowk",
            "Naqshband Colony",
            "Nasheman Colony",
            "Naubpur Road",
            "Nawa Shehar",
            "Nawab Pur",
            "Nawabpur Road",
            "Nayab City",
            "Nehar Naubahar Road",
            "New Ghalla Mandi",
            "New Multan",
            "New Shah Shams Colony",
            "New Shalimar Colony",
            "New Town",
            "Niaz Town",
            "Nishtar Chowk",
            "Nishtar Road",
            "North Gulgasht",
            "Northern Bypass",
            "Officers Canal Colony",
            "Officers Colony",
            "Officers Town",
            "Old Shujabad Road",
            "Others",
            "PSIC Employees Housing Scheme",
            "Pak Gate",
            "Pearl City",
            "Peer Colony",
            "Peer Khurshed Colony",
            "Peoples Colony",
            "Piran Ghaib",
            "Piran Ghaib Road",
            "Police Lines 1",
            "Prime Villas",
            "Punjab Small Industries",
            "Purana Shujabad Road",
            "Qadirpur Ran",
            "Qaiserabad",
            "Qasim Bela",
            "Qasimpur Colony",
            "Univesity Road",
            "Usman e Ghani Road",
            "Vehari Chowk",
            "Vehari Road",
            "Walayatabad",
            "Wapda Colony",
            "Wapda Town",
            "Waqas Town",
            "Western Fort Colony",
            "Writer Colony",
            "Zaid Town",
            "Zakariya Town",
            "Others",
          ],
        },
        {
          name: "Bahawalpur",
          isPop: true,
          society: [
            "AVENUE HOUSING SCHEME",
            "Al RAHEEM HOUSING SCHEME",
            "FINE CITY HOUSING SOCIETY",
            "AL NOOR EXECUTIVE VILLAS",
            "AL SYED TOWN",
            "SAFARI GARDEN",
            "ALLAM IQBAL AVENUE",
            "STALLITE TOWN",
            "VALENCIA CITY",
            "DHA BAHAWALPUR",
            "CANAL VIEW HOUSING SCHEME",
            "KHAVAR KHAN 243/D BLOCK V M.T.C",
            "DREAM LAND HOUSING SOCIETY",
            "TASNEEM ANSARIS RESIDENCE",
            "WASAIB AVENUE",
            "DHA BAHAWALPUR",
            "STATE CITY SECTOR C",
            "ALLAMA IQBAL TOWN",
            "AMAN SOCIETY",
            "AL BAGHDAD VILLAS HOUSING SOCIETY",
            "AAREHMAN HOUSING SOCIETY",
            "VALENCIA CITY HOUSING SOCIETY",
            "AL HAIDER CITY",
            "AL NOOR EXECUTIVE VILLAS",
            "BAGHDAD CITY HOUSING SOCIETY",
            "VILLA COMMUNITY. DHA",
            "KHAYABAN E AFZAL",
            "AL KREEM GARDEN HOUSING SCHEME",
            "GULSHAN E SAEED",
            "AL MAKKAH GARDEN HOUSING SCHEME",
            "REHMAN SOCIETY",
            "GULISTAN E AKBAR TOWN",
            "GULBERG AVENUE",
            "GARDEN TOWN",
            "KHYABAN E ALI HOUSING SOCIETY",
            "STAR VILLAS",
            "SHADMAN CITY",
            "SHAHBAZ TOWN",
            "AL MAJEED PARADISE",
            "ALIZAI HOUSE",
            "NAJAM HOUSE",
            "AL NOOR GARDEN",
            "TAIMOOR HOUSE",
            "UMAR HOUSE",
            "CH. A. MAJEED HOUSE",
            "CITY GARDEN HOUSING SCHEME",
            "AL JANNAT HOUSING SCHEME",
            "TEACHER SOCIETY",
            "AL HAIDER VIEW",
            "ALLAMA IQBAL AVENUE",
            "RIAZ UL JANNAH HOUSING SCHEME",
            "STAR CITY HOUSING SCHEME",
            "AL RAHEEM CITY AND PARADISE CITY",
            "IBL BAHAWALPUR",
            "GREEN ORCHARD",
            "YOUSAF GARDEN",
            "JABAN TOWN",
            "HARAM VILLAS",
            "CITY GARDEN",
            "ZAKRIYA TOWN",
            "UNIVERSITY TOWN",
            "BAHAWALPUR LIFE STYLE",
            "STATE GARDEN",
            "MEHMOOD GARDEN",
            "CRITICAL HOMES",
            "JAMIA MASJID CANAL COLONY",
            "DEPARTMENT OFF ANTHOMY",
            "Others",
          ],
        },
        {
          name: "Rawalpindi",
          isPop: true,
          society: [
            "Abdullah City",
            "Abid Majeed Road",
            "Adiala Road",
            "Affandi Colony",
            "Afshan Colony",
            "Ahmad Abad",
            "Air Force Housing Society",
            "Airport Housing Society",
            "Airport Road",
            "Akalgarh",
            "Al Noor Colony",
            "Ali Abad",
            "Ali Town",
            "Allahabad Road",
            "Allama Iqbal Colony",
            "Amarpura",
            "Ameen Town",
            "Amer Pura",
            "Aria Mohalla",
            "Army Officers Colony",
            "Asghar Mall Road",
            "Ashraf Colony",
            "Askari",
            "Aslam Colony",
            "Aslam Shaheed Road",
            "Awan Town",
            "Ayub Colony",
            "Azeem Town",
            "Aziz Bhatti Shaheed Road",
            "Azizabad",
            "Babar Colony",
            "Bagh Sardaran",
            "Bahar Colony",
            "Bahria Town Rawalpindi",
            "Dhok Chaudhrian",
            "Dhok Elahi Baksh",
            "Dhok Gujran",
            "Dhok Kala Khan",
            "Dhok Kashmirian",
            "Dhok Maira Jarahi",
            "Dhok Mangtal",
            "Dhok Mustaqeem Road",
            "Dhok Paracha",
            "Dhok Sayedan Road",
            "Dhoke Banaras Road",
            "Dhoke Dalal Road",
            "Dhoke Gangal",
            "Dhoke Hassu",
            "Dhoke Khabba",
            "Dhoke Munshi Khan",
            "Dhoke Ratta",
            "Dhoke Syedan",
            "Eastridge Housing Scheme",
            "Faisal Colony",
            "Faizabad",
            "Farooq e Azam Road",
            "Fazaia Housing Scheme",
            "Fazal Town",
            "Friends Colony",
            "GT Road",
            "Gangaal",
            "Garja",
            "Gawal Mandi",
            "Ghauri Town",
            "Ghaziabad",
            "Ghous e Azam Road",
            "Ghousia Colony",
            "Girja Road",
            "Gorakhpur",
            "Gulbahar Scheme",
            "Gulistan Colony",
            "Gulistan Fatima Colony",
            "Gulraiz Housing Scheme",
            "Gulshan Abad",
            "Gulshan Dadan",
            "Gulshan e Bahar",
            "Gulshan e Iqbal",
            "Gulshan e Khurshid Road",
            "Gulshan e Saeed",
            "Gulshan e Shamal",
            "Gulshan e Zaheer Colony",
            "Malik Colony",
            "Mandra",
            "Mangral Town",
            "Marir Hassan",
            "Media Town",
            "Millat Colony",
            "Misryal Road",
            "Mohalla Banni",
            "Mohammadi Colony",
            "Mohan Pura",
            "Morgah",
            "Mughal Abad Road",
            "Mumtaz Colony",
            "Munawar Colony",
            "Murree Road",
            "Muslim Town",
            "Naseerabad",
            "National Garden Housing Scheme",
            "Nawaz Colony",
            "New Afzal Town",
            "New Lalazar",
            "Nussah Town",
            "Others",
            "PIA Colony",
            "PWD Colony",
            "Palm City",
            "Peer Meher Ali Shah Town",
            "People Colony(25)",
            "Peshawar Road",
            "Pindora",
            "Pir Wadhai",
            "Police Foundation Housing Scheme",
            "Punjab Govt Servant Housing Foundation",
            "Qasimabad",
            "Quaid e Azam Colony",
            "Rabia Bungalows Road",
            "Race Course",
            "Raheemabad",
            "Rail View Housing Society",
            "Railway Scheme 7",
            "Railway Scheme 9",
            "Raja Bazar",
            "Range Road",
            "Ranial",
            "Rawal Road",
            "Rawat",
            "Rehmanabad",
            "Bakra Mandi",
            "Banaras Colony",
            "Bangash Colony",
            "Bank Road",
            "Bankers Colony",
            "Banni Chowk",
            "Bassali",
            "Bethsaida Colony",
            "Bilal Colony",
            "Bostan Road",
            "Bostan Valley",
            "CBR Town Phase 2",
            "Caltex Road",
            "Cantt(16)",
            "Capital Awami Villas",
            "Capital Housing Society",
            "Capital Smart City",
            "Chah Sultan",
            "Chak Beli Khan",
            "Chakbeli Road",
            "Chaklala",
            "Chaklala Scheme",
            "Chakra",
            "Chakra Road",
            "Chakri",
            "Chakri Road",
            "Chandni Chowk",
            "Chanman Abad",
            "Chaudhary Jan Colony",
            "Chungi No. 22 Road",
            "Chur Chowk",
            "City Villas",
            "Civil Lines",
            "Clifton Township",
            "Cobb Line",
            "College Road",
            "Commercial Market",
            "Committee Chowk",
            "Cricket Stadium Road",
            "DAV College Road",
            "Defence Colony",
            "Defence Road",
            "Dhamyal Road",
            "Dheri Hassanabad",
            "Dhok Babu Irfan",
            "Gulzar e Quaid Housing Society",
            "Haji Chowk",
            "Harley Street",
            "High Court Road",
            "Holy Family Road",
            "Ideal Homes Society",
            "Imam Bara Road",
            "Islamabad Airport",
            "Islamabad Farm Houses",
            "Islamabad Highway",
            "Jamia Masjid Road",
            "Janjua Town",
            "Jarahi",
            "Jhanda Chichi",
            "Jinnah Colony",
            "Judicial Colony",
            "Jumma Market",
            "KRL Road",
            "Kahuta",
            "Kallar Syedan",
            "Kalma Chowk",
            "Kalyal Road",
            "Kalyamabad",
            "Kamala Abad",
            "Kartar Pura",
            "Khadim Hussain Road",
            "Khanna Road",
            "Khayaban e Faisal",
            "Khayaban e Sir Syed",
            "Khayaban e Tanveer",
            "Khurram Colony",
            "Kingdom Valley Islamabad",
            "Kohat Road",
            "Kohsar Town",
            "Kotli Sattian",
            "Kuri Road Area",
            "Kurri Road",
            "Lahore Islamabad Motorway",
            "Lakhu Road",
            "Lalarukh Colony",
            "Lalazar",
            "Lalazar 2",
            "Lalazar Valley",
            "Lalkurti",
            "Liaquat Bagh",
            "Liaquat Colony",
            "Magistrate Colony",
            "Riaz Qureshi Road",
            "Sabzazar",
            "Saddar",
            "Sadiqa Abad",
            "Sadiqabad",
            "Safari View Residencia",
            "Saidpur Road",
            "Samarzar Housing Society",
            "Sangar Town",
            "Sarafa Bazar",
            "Satellite Town",
            "Shadman Town",
            "Shah Khalid Colony",
            "Shaheen Town",
            "Shakrial",
            "Shalley Valley",
            "Shams Abad",
            "Sher Zaman Colony",
            "Shifa Cooperative Housing Society",
            "Sir Syed Chowk",
            "Sir Syed Road",
            "Tali Mori",
            "Tench Bhata",
            "Tench Road",
            "Tipu Road",
            "Top City 1",
            "Transformer Chowk",
            "Tufail Road",
            "Tulsa",
            "Tulsa Road",
            "Wah Link Road",
            "Walait Homes",
            "Walayat Colony",
            "Waris Khan",
            "Wazir Town",
            "Westridge",
            "Yousaf Colony",
            "Zafar ul Haq Road",
            "Zeeshan Colony",
            "Others",
          ],
        },
        {
          name: "Islamabad",
          isPop: true,
          society: [
            "7th Avenue",
            "9th Avenue",
            "D-12",
            "D-14",
            "D-16",
            "D-17",
            "C-17",
            "C-18",
            "C-19",
            "F-10",
            "F-11",
            "F-14",
            "F-15",
            "F-17",
            "F-6",
            "F-7",
            "F-8",
            "G-10",
            "G-11",
            "G-12",
            "G-13",
            "G-14",
            "G-15",
            "G-16",
            "G-17",
            "G-5",
            "G-6",
            "G-7",
            "G-8",
            "G-9",
            "E-10",
            "E-11",
            "E-14",
            "E-16",
            "I-10",
            "I-11",
            "I-12",
            "I-13",
            "I-14",
            "I-16",
            "I-8",
            "I-9",
            "H-12",
            "H-13",
            "H-15",
            "AGHOSH",
            "Abdullah Garden",
            "Agro Farming Scheme",
            "Airline Avenue",
            "Airport Avenue Housing Society",
            "Airport Enclave",
            "Aiza Garden",
            "Al Huda Town",
            "Al Qaim Town",
            "Ali Pur",
            "Alipur Farash",
            "Angoori Road",
            "Arsalan Town",
            "Axis Mall & Apartments",
            "B 17",
            "Bahria Town",
            "Bani Gala",
            "Bhara kahu",
            "Blue Area",
            "Bokra Road",
            "Burma Town",
            "CBR Town",
            "Capital Enclave",
            "Chak Shahzad",
            "Chatha Bakhtawar",
            "Chattar",
            "Chirah",
            "Club Road",
            "Commoners Sky Gardens",
            "Constitution Avenue",
            "Diplomatic Enclave",
            "DHA",
            "IJP Road",
            "Ibn e Sina Road",
            "Iqbal Town",
            "Islamabad Murree Expressway",
            "Islamabad Peshawar Motorway",
            "Islamabad Enclave",
            "Islamabad Expressway",
            "Islamabad Highway",
            "Ittefaq Town",
            "J and K Zone 5",
            "Jagiot Road",
            "Japan Road",
            "Jeddah Town",
            "Jhang Syedan",
            "Jhangi Syedan",
            "Jinnah Avenue",
            "Judicial Town",
            "Kahuta Road",
            "Karakoram Diplomatic Enclave",
            "Kashmir Highway",
            "Kashmir Town",
            "Khanna Pul",
            "Koral Chowk",
            "Koral Town",
            "Korang Road",
            "Korang Town",
            "Kuri",
            "Kuri Road",
            "Lawyers Society",
            "Lehtarar Road",
            "Madina Town",
            "Main Margalla Road",
            "Margalla Town",
            "Margalla Valley C 12",
            "Marwa Town",
            "Meherban Colony",
            "Model Town",
            "Mohra Nur Road",
            "Motorway Chowk",
            "Tarlai",
            "Tarnol",
            "Thalian",
            "Thanda Pani",
            "The Organic Farms Islamabad",
            "The Springs",
            "Top City 1",
            "Tumair",
            "University Town",
            "Victoria Heights",
            "Zaraj Housing Scheme",
            "Zero Point",
            "Zone 5",
            "E 17",
            "E 18",
            "E 7",
            "Eden Life Islamabad",
            "Emaar Canyon Views",
            "Engineering Co operative Housing (ECHS)",
            "FECHS",
            "FOECHS Foreign Office Employees Society",
            "Faisal Town F 18",
            "Fateh Jang Road(11)",
            "Federal Government Employees Housing Foundation",
            "Frash Town",
            "GT Road",
            "Garden Town",
            "Ghauri Town",
            "Golra Mor",
            "Golra Road",
            "Green Avenue",
            "Green Hills Housing Scheme",
            "Gulberg",
            "Gulshan e Khudadad",
            "Multi Residencia & Orchards",
            "Mumtaz City",
            "Murree Road",
            "NIH Colony",
            "National Police Foundation",
            "National Police Foundation O 9",
            "Naval Anchorage",
            "Naval Farms Housing Scheme",
            "Naval Housing Scheme",
            "New Airport Town",
            "New Icon City",
            "New Shakrial",
            "Orchard Scheme",
            "PAEC Employees Cooperative Housing Society",
            "PAF Tarnol",
            "PECHS",
            "PTV Colony",
            "PWD Housing Scheme",
            "PWD Road",
            "Pakistan Town",
            "Park Enclave",
            "Park Road",
            "Park View City",
            "Partal Town",
            "Pindorian",
            "Pir Sohawa",
            "Police Foundation Housing Society",
            "Qutbal Town",
            "Rawal Enclave",
            "Rawal Town",
            "River Garden",
            "Royal Avenue",
            "Royal City",
            "Sangjani",
            "Sarai Kharbuza",
            "Shah Allah Ditta",
            "Shah Dara",
            "Shaheen Town",
            "Shahpur",
            "Shehzad Town",
            "Sihala",
            "Simly Dam Road",
            "Soan Garden",
            "Sohan Valley",
            "Spring Valley",
            "Swan Garden",
            "Taramrri",
            "Others",
          ],
        },
        {
          name: " Gujranwala",
          isPop: true,
          society: [
            "Abadi Haji Ghulam Hassan",
            "Abid Colony",
            "Al Mujeeb Town",
            "Alam Chowk",
            "Alfalah City",
            "Allah Buksh Colony",
            "Allama Iqbal Town",
            "Attawa",
            "Aziza Housing Scheme",
            "Baghbanpura",
            "Bakhtey Wala",
            "Bawinwala",
            "Bhekopur",
            "Bilal Town",
            "Bismillah Colony",
            "Canal View Housing Scheme",
            "Canal View Road",
            "Chak Jagna",
            "Chan Da Qila",
            "Cheragh Nagar",
            "Chicherwali",
            "Citi Housing Society",
            "Civil Lines",
            "College Road",
            "DC Colony",
            "DC Road",
            "DHA",
            "Dhule",
            "Ehtisham Colony",
            "Eminabad More",
            "Eminabad Road",
            "Faiz Alam Town",
            "Farid Town",
            "Fazal Town",
            "Ferozwala Road",
            "G Magnolia Park",
            "GT Road",
            "Garden Town",
            "Gill Road",
            "Gondla Wala Road",
            "Green Town",
            "Gujranwala Bypass",
            "Gulistan Colony",
            "Gulshan Colony",
            "Gulshan Iqbal Park",
            "Gurjakh",
            "Gurjakh Road",
            "Guru Nanak Pura",
            "Hafizabad Road",
            "Hashim Colony",
            "Islam Pura",
            "Jalal Town",
            "Jalil Town",
            "Jinnah Road",
            "Judicial Housing Colony",
            "Kangniwala",
            "Kashmir Road",
            "Katchi Fatto Mand",
            "Khalid Colony",
            "Khiali",
            "Khiali Shahpura",
            "Khokhar Ke",
            "Lohianwala",
            "Madina Colony",
            "Mandiala Warraich",
            "Master City Housing Scheme",
            "Mehar Colony",
            "Moaifiwala",
            "Model Town",
            "Mohalla Mubarik Shab",
            "Mominabad A",
            "Mominabad B",
            "Mufti Colony",
            "Muhafiz Town",
            "Mumtaz Colony",
            "Muslim Road",
            "Muslim Town",
            "Nowshera Road",
            "Nowshera Sansi Road",
            "Pasban Colony",
            "Pasrur Road",
            "Peoples Colony",
            "Popular Nursery Town",
            "Qila Didar Singh",
            "Quaid e Azam Town",
            "Rahwali Cantt",
            "Rana Colony",
            "Rasheed Colony",
            "Ratta Bajwa",
            "Ratta Road",
            "Rehman Colony",
            "Sadiq Colony",
            "Samanabad",
            "Sarfraz Colony",
            "Satellite Town",
            "Shaheen Abad",
            "Shahrukh Colony",
            "Shalimar Town",
            "Sheikhupura Road",
            "Sialkot Bypass",
            "Sialkot Road",
            "Sui Gas Road",
            "Sultan Pura",
            "Usman Colony",
            "Wafi Citi Housing Scheme",
            "Wahdat Colony",
            "Wapda Town",
            "Zahid Colony",
            "Others",
          ],
        },
        {
          name: "Lahore",
          isPop: true,
          society: [
            "Abbot Road",
            "Al Hadi Garden",
            "Al Hamra City",
            "Allama Iqbal Intl Airport",
            "Allama Iqbal Town",
            "Al Noor Park Housing Society",
            "Army Housing Society",
            "Ashrafi Town",
            "Atomic Energy Society PAEC",
            "Avicenna City",
            "AR Cottages",
            "Aabpara Coop Housing Society",
            "Aashiana Road",
            "Abdali Road",
            "Abdalians Cooperative Housing Society",
            "Abdul Sattar Edhi Road",
            "Abdullah Town",
            "Abid Road",
            "Abuzar Housing Scheme",
            "Adan Villas",
            "Aftab Garden",
            "Afzal Park",
            "Agrics Town",
            "Ahbab Colony",
            "Ahbab Housing Society",
            "Ahlu Road",
            "Ahmad Avenue",
            "Ahmad Housing Society",
            "Ahmed Colony",
            "Ahsan Park Housing Scheme",
            "Airline Housing Society",
            "Airport Road",
            "Aitchison Society",
            "Al Faisal Town",
            "Al Fajar Society",
            "Al Hafeez Gardens",
            "Al Hamad Colony",
            "Al Hamra Town",
            "Al Haram Garden",
            "Al Jalil Garden",
            "Al Jannat Housing Scheme",
            "Al Kareem Garden",
            "Al Madina Avenue",
            "Al Noor Town",
            "Al Raheem Town",
            "Al Rahim Homes",
            "Al Rehman Garden",
            "Al Amin Housing Society",
            "Al Falah Cooperative Housing Society",
            "Al Hafeez Garden Road",
            "Al Hafiz Town",
            "Al Hamad Colony (AIT)",
            "Al Hamd Garden",
            "Al Hamd Park",
            "Al Jannat Housing Society Kahna",
            "Al Kareem Premier Housing Scheme",
            "Al Qayyum Garden",
            "Al Raheem Garden",
            "Al Raziq Garden",
            "Al Wahab Garden Phase 1",
            "Alfalah Town",
            "Ali Alam Garden",
            "Ali Town",
            "Ali View Garden",
            "Ali View Park",
            "Alia Town",
            "Allama Iqbal Road",
            "Iqbal Town",
            "Altaf Colony",
            "Aman Town",
            "Ameen Park",
            "Ameer ud Din Park",
            "Amina Park",
            "Anarkali",
            "Angoori Bagh",
            "Angori Scheme 1",
            "Architects Engineers Housing Society",
            "Arya Nagar",
            "Ashiana e Quaid Housing Scheme",
            "Ashraf Garden",
            "Asif Colony",
            "Asif Town",
            "Asim Town",
            "Askari",
            "Atari Saroba",
            "Audit & Accounts Housing Society",
            "Awan Town",
            "Azadi Chowk",
            "Azam Cloth Market",
            "Azam Gardens",
            "Azeem Garden Shahdara",
            "Azizia Town",
            "BOR Board of Revenue Housing Society",
            "BRB Canal Road",
            "Babu Sabu",
            "Badami Bagh",
            "Bagarian",
            "Bagh Gul Begum",
            "Bagh e Iram Housing Society",
            "Bahadurabad",
            "Bhasin",
            "Budduke Manak Road",
            "Baghbanpura",
            "Bahar Colony",
            "Bahar Shah Road",
            "Bahawalpur Road",
            "Bahria Education & Medical City",
            "Bahria Nasheman",
            "Bahria Orchard",
            "Bahria Town",
            "Bakhsh Town",
            "Band Road",
            "Bandian Wala",
            "Bankers Avenue Cooperative Housing Society",
            "Bankers Co operative Housing Society",
            "Bankers Town",
            "Batapur",
            "Beacon House Society",
            "Beadon Road",
            "Bedian Road",
            "Begampura",
            "Begum Kot",
            "Bhagatpura",
            "Bhaini Road",
            "Bhatta Chowk",
            "Bhatti Colony",
            "Bhogiwal",
            "Bhogiwal Road",
            "Bilal Gunj",
            "Birdwood Road",
            "Bismillah Housing Scheme",
            "Blue Town",
            "Brandreth Road",
            "Burj Attari",
            "Canal Bank Housing Scheme",
            "Canal Burg",
            "Canal Fort II",
            "Christian Colony",
            "City Garden",
            "Canal Garden",
            "Canal View",
            "Canalberg Housing Society",
            "Cantt",
            "Cantt View Society",
            "Captain Jamal Road",
            "Cavalry Extension",
            "Cavalry Ground",
            "Central Park Housing Scheme",
            "Chah Miran",
            "Chaman Park",
            "Charrar",
            "Chauburji",
            "Chauburji Chowk",
            "Chauburji Park Road",
            "China Scheme",
            "Chinar Bagh",
            "Chinar Court",
            "Chohan Road",
            "Chungi Amar Sadhu",
            "Circular Road",
            "Civil Defence",
            "Clifton Colony",
            "College Road",
            "Combo Colony",
            "Cooper Road",
            "Cricketer Villas",
            "DHA",
            "DHA City",
            "DHA Rahbar",
            "Chaudhary Colony",
            "Daroghewala",
            "Dars Baray Mian",
            "Data Darbar Road",
            "Davis Road",
            "Defence Fort",
            "Defence Road",
            "Dharampura",
            "Dholanwal",
            "Dilkusha Gardens",
            "Divine Gardens",
            "Divine Homes",
            "Doctors Housing Society",
            "Dogech",
            "Dream Avenue Lahore",
            "Dream Villas",
            "Dubai Town",
            "Dubban Pura",
            "Durand Road",
            "Egerton Road",
            "Evergreen Housing Scheme",
            "EME Society",
            "Eden",
            "Eden Avenue Extension",
            "Eden Park",
            "Eden Villas",
            "Education Town",
            "Elite Town",
            "Empress Road",
            "Excise & Taxation Housing Scheme",
            "Expo Avenue Society",
            "Faisal Town",
            "Faiz Bagh",
            "Fane Road",
            "Farid Court Road",
            "Farooq Colony",
            "Fateh Garh",
            "Ferozepur City",
            "Fateh Villas",
            "Fatehabad",
            "Fazaia Housing Scheme",
            "Ferozepur Road",
            "Ferozewala",
            "Firdous Colony",
            "Formanites Housing Scheme",
            "Fort Villas",
            "GCP Housing Scheme",
            "Government Superior Services",
            "GOR",
            "GT Road",
            "Gaddafi Stadium",
            "Gajju Matah",
            "Govt Officers Cooperative Housing Society",
            "Gul Colony",
            "Garden Town",
            "Garhi Shahu",
            "Garrison Homes",
            "Gawalmandi",
            "Ghalib Market",
            "Ghausia Colony",
            "Ghawind",
            "Ghaziabad",
            "Ghous Garden",
            "Gohawa",
            "Gold Land Garden",
            "Gosha e Ahbab",
            "Govt. Employees Cooperative Housing Society (GECHS)",
            "Govt. Transport Headquarters Cooperative Housing Society",
            "Grand Avenues Housing Scheme",
            "Green Acres Housing Society",
            "Green Cap Housing Society",
            "Green City",
            "Green Fort",
            "Green Park Society",
            "Green Town Sector D2",
            "Gujjar Colony",
            "Gujjarpura",
            "Ghory Shah",
            "Gul e Damin",
            "Gulbahar Colony",
            "Gulbahar Park",
            "Gulberg",
            "Guldasht Town",
            "Gulfishan Colony",
            "Gulfishan Town",
            "Gulnishan Park",
            "Gulshan Colony",
            "Gulshan Farooq Scheme",
            "Gulshan Park",
            "Gulshan E Haider Housing Society",
            "Gulshan E Mustafa Housing Society",
            "Gulshan e Ahbab",
            "Gulshan e Lahore",
            "Gulshan e Rail",
            "Gulshan e Ravi",
            "Gulshan e Shalimar Housing Scheme",
            "Gulshan e Yaseen Housing Society",
            "Gulzar E Ahbab Society",
            "Gurumangat",
            "HBFC Housing Society",
            "Habib Homes",
            "Habibullah Road",
            "Haji Park Housing Scheme",
            "Hajvery Housing Scheme",
            "Hakim Town",
            "Hall Road",
            "Hameedpura",
            "Hamza Town",
            "Hanif Park Harbanspura",
            "Hamdan Life Society",
            "Gulshan e Sardar Housing Scheme",
            "Hayderabad",
            "Hidayatabad",
            "Hanjarwal",
            "Harbanspura",
            "Hassan Town",
            "Heaven Homes",
            "Heir",
            "Highcourt Society",
            "Hudiara",
            "IBL Housing Scheme",
            "IEP Engineers Town",
            "Ichhra",
            "Ibrahim Colony",
            "International City Country Homes",
            "Ideal Homes",
            "Immad Garden Housing Scheme",
            "Infantry Road",
            "Inmol Society",
            "Iqbal Avenue",
            "Iqbal Park",
            "Irrigation Cooperative Housing Society",
            "Irum Garden Housing Society",
            "Islam Nagar",
            "Islamabad Colony",
            "Islamia Park",
            "Islampura",
            "Ismail Town",
            "Ittehad Colony",
            "Ittehad Park",
            "Ittifaq Town",
            "Izmir Town",
            "Jaffar Town",
            "Jaffaria Colony",
            "Jail Road",
            "Jalal Colony",
            "Jallo",
            "Jameel Park",
            "Jamil Town",
            "Jan Muhammad Road",
            "Jaranwala Road",
            "Jati Umra Road",
            "Javed Colony Ghazi Road",
            "Jaranwala Road(10)",
            "Javed Park",
            "Jia Baga Road",
            "Jinnah Colony",
            "Jinnah Park",
            "Johar Town",
            "Jora Pull",
            "Jubilee Town",
            "Judicial Colony",
            "KEMC Housing Society",
            "Kacha Ferozepur Road",
            "Kacha Jail Road",
            "Kacha Road",
            "Kala Khatai Road",
            "Khaira Distributary",
            "Khaira",
            "Kacha Lawrence Road",
            "Kahna",
            "Kahna Kacha",
            "Kakezai Housing Society",
            "Kalma Chowk",
            "Kamahan Road",
            "Karbath",
            "Kardar Park",
            "Karim Park",
            "Kashmir Road",
            "Katar Bund Road",
            "Kausar Colony",
            "Keer Khurd",
            "Khaliq Nagar",
            "Khana Kacha Road",
            "Kharak",
            "Khawaja Ahmed Hassan Road",
            "Khayaban e Amin",
            "Khayaban e Jinnah Road",
            "Khayaban e Quaid",
            "Khayaban e Zohra",
            "Khokhar Town",
            "Kot Araian",
            "Kot Khawaja Saeed",
            "Kot Lakhpat",
            "Kotli Abdur Rahman",
            "Krishan Nagar",
            "LDA Avenue",
            "LDA Road",
            "Labor Colony",
            "Lahore Islamabad Motorway",
            "Lahore Jaranwala Road",
            "Lahore Kasur Road",
            "Lahore Garden Housing Scheme",
            "Lahore Medical Housing Society",
            "Lahore Kasur Road",
            "Lahore Avenue",
            "Lahore Canal Bank Cooperative Housing Society",
            "Lahore Motorway City",
            "Lahore Press Club Housing Scheme",
            "Lahore Railway Station Road",
            "Lahore Villas",
            "Lakhodher",
            "Lakshmi Chowk",
            "Lalazaar Garden",
            "Land Breeze Housing Society",
            "Landa Bazaar",
            "Lawrence Road",
            "Liaquatabad",
            "Lower Mall",
            "Lytton Road",
            "Madar e Millat Road",
            "Malik Irfan Garden",
            "Malipura",
            "Manga Raiwind Road",
            "MET 1",
            "Mid City",
            "Millat Tractors Employees Housing Society",
            "Model Housing Scheme",
            "Mohlanwal",
            "Madina Colony",
            "Madina Homes",
            "Madina Town",
            "Main Canal Bank Road",
            "Makkah Colony",
            "Makki Complex",
            "Malik Park",
            "Mall Road",
            "Manawan",
            "Manga Mandi",
            "Manhala Road",
            "Mansoora Homes",
            "Mansoorah",
            "Manzoor Colony",
            "Marghzar Officers Colony",
            "Mason Road",
            "Mateen Avenue",
            "Maulana Shaukat Ali Road",
            "Mayo Hospital Road",
            "McLeod Road",
            "Medical Town",
            "Mehar Fayaz Colony",
            "Meharpura",
            "Mehmood Booti",
            "Mehmood Colony",
            "Mehrabad",
            "Mian Amiruddin Park",
            "Mian Aziz Garden",
            "Mian Colony",
            "Mian Mir Colony",
            "Military Accounts Housing Society",
            "Millat Road",
            "Misri Shah",
            "Model Colony",
            "Model Town",
            "Mohafiz Town",
            "Mohlanwal Road",
            "Mohlanwal Scheme",
            "Mohni Road",
            "Mominpur",
            "Mominpura Road",
            "Moon Colony",
            "Mozang",
            "Mubarak Town",
            "Mughalpura",
            "Multan Road",
            "Munir Garden",
            "Muqaddas Park",
            "Mushtaq Colony",
            "Muslim Nagar Housing Scheme",
            "Muslim Town",
            "Mustafa Abad",
            "Mustafa Town",
            "NFC 1",
            "Nabi Pura",
            "Nadeem Shaheed Road",
            "Nadeem Town",
            "Nadia Ghee Mill Chowk",
            "Nai Abadi Harbanspura",
            "Nain Sukh",
            "Nasheman e Iqbal",
            "Nasirabad",
            "National Town",
            "Nawab Town",
            "National Bank Cooperative Housing Society",
            "Naval Anchorage",
            "New Bilal Ganj Industrial Scheme",
            "New Kashmir Park Housing Scheme",
            "New Samanabad",
            "NFC 2",
            "Nawaz Sharif Colony",
            "Naz Town",
            "Nazir Garden Society",
            "New Amir Town",
            "New Canal Park",
            "New Chauburji Park",
            "Garden Town",
            "New Khan Colony",
            "New Muslim Town",
            "New Shah Kamal Colony",
            "New Super Town",
            "Nicholson Road",
            "Nisbat Road",
            "Nishat Colony",
            "Nishtar Colony",
            "Nizamabad",
            "Nobel Town (KCHS)",
            "Noor Jahan Road",
            "OPF Housing Scheme",
            "Officer Colony",
            "Olympians Cooperative Housing Society",
            "Omega Homes",
            "Okaf Colony",
            "Outfall Road",
            "P & D Housing Society",
            "PAF Colony",
            "PAF Society",
            "Pajian Manik Road",
            "Pakistan Medical Housing Society",
            "Pandoke",
            "Paradise Homes Super Town",
            "Park Avenue Housing Scheme",
            "Park View City",
            "Punjab Government Servant Housing Foundation",
            "PASSCO Housing Society",
            "PCSIR Housing Scheme",
            "PCSIR Staff Colony",
            "PIA Housing Scheme",
            "PIA Main Boulevard",
            "Pak Arab Housing Society",
            "Pak Park",
            "Pakki Thatti",
            "Palm Villas",
            "Paragon City",
            "Park View Villas",
            "Peco Road",
            "Peer Colony",
            "Pine Avenue",
            "Pine Villas",
            "Pir Naseer",
            "Poonch Road",
            "Prem Nagar",
            "Prime Homes 1",
            "Public Health Society",
            "Punjab Coop Housing Society",
            "Punjab Govt Employees Society",
            "Punjab Govt Servant Society",
            "Punjab Small Industries Colony",
            "Punjab University Employees Society",
            "Qadri Colony",
            "Qartaba Chowk",
            "Qasurpura",
            "Qazi Town",
            "Qilla Gujjar Singh",
            "Quaid e Azam Industrial Estate",
            "Qasim Garden",
            "Queens Road",
            "Rail Town (Canal City)",
            "Rajgarh Road",
            "Rehmanpura",
            "River Edge Housing Scheme",
            "Raiwind Road",
            "Raj Garh",
            "Rajpoot Town",
            "Rana Shaukat Mehmood Road",
            "Rana Town",
            "Rang Mahal",
            "Rasool Park",
            "Ravi Road",
            "Real Cottages",
            "Rehan Garden",
            "Rehman City Phase 4",
            "Rehman City Phase 6",
            "Rehman Gardens",
            "Rehman Villas",
            "Rehmat Colony",
            "Revenue Society",
            "Rewaz Garden",
            "Rifle Range Road",
            "Ring Road",
            "River View Coop Housing Society",
            "Riwaz Garden",
            "Rizwan Garden Scheme",
            "Rohi Nala Road",
            "Royal Garden",
            "Royal Residencia",
            "Rustam Park",
            "Saadi Park",
            "Sabzazar Scheme",
            "Sadaat Town",
            "Sadat Cooperative Housing Society (College Town)",
            "Safari Garden Housing Scheme",
            "Saggian",
            "Sadhoke",
            "Sanda Road",
            "Saraich",
            "Shah Alam Market",
            "Shoukat Town",
            "Sue e Asal Road",
            "Sui Northern Gas Society",
            "Sundar Industrial Estate",
            "Sundar Small Industrial Estate 2",
            "Saggian Wala Bypass Road",
            "Sahafi Colony",
            "Saiden Shah Colony",
            "Saidpur",
            "Sajid Garden",
            "Salamatpura",
            "Salli Town",
            "Samanabad",
            "Samanzar Colony",
            "Sami Town",
            "Samsani Road",
            "Sanda",
            "Sant Nagar",
            "Saqib Town",
            "Saroba Gardens Housing Society",
            "Sarwar Town",
            "Shabbir Town",
            "Shadab Garden",
            "Shadbagh",
            "Shadipura",
            "Shadman",
            "Shadman Enclave",
            "Shah Alam",
            "Shah Faisal Road",
            "Shah Jamal",
            "Shah Kamal Road",
            "Shah Khawar Town",
            "Shahdara",
            "Shaheen Park",
            "Shahpur Kanjra",
            "Shahtaj Colony",
            "Shalimar Housing Scheme",
            "Shalimar Link Road",
            "Shalimar Town",
            "Sham Nagar",
            "Shama Road",
            "Shams Colony",
            "Shanghai Road",
            "Sharaqpur Road",
            "Shaukat Khanum Road",
            "Sheikhupura Road",
            "Sher Ali Road",
            "Sher Shah Road",
            "Shera Kot",
            "Sheraz Town",
            "Shershah Colony Ichra",
            "Shershah Colony Raiwind Road",
            "Sherwani Town Housing Scheme",
            "Shiraz Villas",
            "Shoukat Town",
            "Shuja Road",
            "Siddiqia Colony",
            "Siddiqia Society (College Road)",
            "Singhpura",
            "Sitara Colony",
            "Sodiwal",
            "Sozo Town",
            "State Life Housing Society",
            "Sue e Asal",
            "Sufiabad",
            "Sui Gas Employees Cooperative Housing Society",
            "Sui Gas Housing Society",
            "Sukh Chayn Gardens",
            "Sultan Park",
            "Sultan Pura",
            "Sultan Town",
            "Sundar",
            "Sundar Road",
            "Sunflower Housing Society",
            "Sunfort Gardens",
            "Sunny Park",
            "Super Town",
            "Supreme Villas",
            "Samanabad",
            "Swami Nagar",
            "T & T Aabpara Housing Society",
            "TECH Society",
            "TIP Housing Society",
            "Taj Bagh Scheme",
            "Tajpura",
            "Tariq Colony",
            "Tariq Gardens",
            "Tariq Ismail Road",
            "Temple Road",
            "Tezab Ahata Road",
            "Tarogill",
            "Thethar",
            "Thokar Niaz Baig",
            "Timber Market Scheme",
            "Toheed Park",
            "Township",
            "Tricon Village",
            "Tulspura",
            "UBL Housing Society",
            "UMT Society",
            "Urban Canal City",
            "UET Housing Society",
            "Umer Colony",
            "Upper Mall",
            "Urdu Bazar",
            "Usmania Colony",
            "Valencia Housing Society",
            "Venus Housing Scheme",
            "Vital Homes Housing Scheme",
            "Victoria Park",
            "Wapda Farm Housing Society",
            "Wapda Finance Officers Cooperative Housing Society",
            "Wafaqi Colony",
            "Wagha Town",
            "Wahdat Colony",
            "Wahdat Road",
            "Waheed Brother Colony",
            "Wahga",
            "Walled City",
            "Walton Railway Officers Colony",
            "Walton Road",
            "Wapda Town",
            "Waris Colony",
            "Waris Road",
            "Wassan Pura Scheme No. 2",
            "Wassanpura",
            "West Wood Housing Society",
            "Wyeth Employees Coop Housing",
            "Yasrab Colony",
            "Yazdani Road",
            "Youhanabad",
            "Zaheer Villas",
            "Zaitoon New Lahore City",
            "Zaman Colony",
            "Zaman Park",
            "Zam Zam City",
            "Zubaida Park",
            "Lahore Smart City",
            "Marina Sports City",
            "Al Noor Orchard",
            "SAIBAN",
            "MARINA CITY",
            "ZAITOON CITY",
            "ILLYAS PARK",
            "BARKI ROAD",
            "MANGLA GARRISON",
            "KHUDA BUKSH COLONY (KB COLONY)",
            "LDA CITY",
            "IQBAL GARDEN",
            "SA GARDEN",
            "ITTEHAD TOWN",
            "MARYAM TOWN",
            "EDEN HOMES",
            "IVY FARMS",
            "LAKE CITY",
            "EMERALD CITY",
            "AL KABIR TOWN",
            "KINGS TOWN",
            "NESPAK EMPLOYEES COOPERATIVE HOUSING SOCIETY",
            "SHAHAM TOWN",
            "AWT",
            "SMART TOWN",
            "ROSE TOWN",
            "EDEN RESIDENTIA",
            "EDEN",
            "JAZAC CITY",
            "AL AHMED GARDEN",
            "CANAL FORT",
            "GHOUS GARDEN",
            "AL RAHEEM GARDEN",
            "AL REHMAN GARDEN",
            "NAZIR GARDEN",
            "HAJVERY HOUSING SCHEME",
            "AL GHANI GARDEN",
            "Others",
          ],
        },
        {
          name: "Karachi",
          isPop: true,
          society: [
            "Bahria Town Karachi",
            "DHA",
            "Gulshan e Iqbal Town",
            "Gulistan e Jauhar",
            "North Nazimabad",
            "Scheme 33",
            "Gadap Town",
            "North Karachi",
            "Federal B Area",
            "Malir",
            "Nazimabad",
            "Cantt",
            "Jamshed Town",
            "Clifton'",
            "Korangi",
            "Navy Housing Scheme Karsaz",
            "Shah Faisal Town",
            "Saddar Town",
            "Shahra e Faisal",
            " Naya Nazimabad",
            "Garden West",
            "Bin Qasim Town",
            "University Road",
            "Liaquatabad",
            "Gulberg Town",
            "Civil Lines",
            "New Karachi",
            "Shaheed Millat Road",
            "Bath Island",
            "Orangi Town",
            "Mehmoodabad",
            "Jamshed Road",
            "Abul Hassan Isphani Road",
            "Defence View Society",
            "Rashid Minhas Road",
            "DHA City Karachi",
            "Khalid Bin Walid Road",
            "Tariq Road",
            "Frere Town",
            "Jinnah Avenue",
            "Guru Mandir Chorangi",
            "Saadi Road",
            "Sea View Apartments",
            "Saima Luxury Homes",
            "Gohar Green City",
            "Landhi",
            "Lyari Town",
            "KDA Scheme 1",
            "Delhi Colony",
            "Manzoor Colony",
            "P & T Colony",
            "Gizri",
            "PIB Colony",
            "Baldia Town",
            "Zamzama",
            "Tipu Sultan Road",
            "Malir Link To Super Highway",
            "M.A. Jinnah Road",
            "Gulshan e Usman Housing Society",
            "Amir Khusro",
            "Punjab Colony",
            "Scheme 45",
            "Sindh Industrial Trading Estate (SITE)",
            "Al Hilal Society",
            "Amil Colony",
            "Super Highway",
            "Dastgir Colony",
            "Callachi Cooperative Housing Society",
            "Airport",
            "Cosmopolitan Society",
            "Aisha Manzil",
            "Karachi Motorway",
            "Kashmir Road",
            "Ranchore Line Bazar",
            "Anda Mor Road",
            "Qayyumabad",
            "Al Jadeed Residency",
            "Hill Park",
            "Suparco Road",
            "Muslimabad Society",
            "Shaheed e Millat Expressway",
            "National Highway",
            "Airport Road",
            "Baloch Colony",
            "Nishtar Road (Lawrence Road)",
            "Shadman 2",
            "Shahra e Qaideen",
            "Khudadad Colony",
            "Stadium Road",
            "Azam Town",
            "Old Jamia Millia Road",
            "Falcon Complex Faisal",
            "Khaliq uz Zaman Road",
            "Northern Bypass",
            "Abid Town",
            "Pakistan Chowk",
            "Kemari Town",
            "Naval Colony",
            "Old Ravians Co Operative Housing Society",
            "Golimar",
            "Khuda Ki Basti",
            "Nawaz Sharif Housing Scheme",
            "Rufi Lake Drive Apartments",
            "Police Society",
            "Kashmir Colony",
            "PTV Society",
            "New Lyari Expressway Road",
            "Sir Shah Muhammad Suleman Road",
            "Kamran Chowrangi",
            "Dalmia Cement Factory Road",
            "Nawab Siddique Ali Khan Road",
            "Sakhi Hassan Chowrangi",
            "Manghopir Road",
            "Darul Aman Society",
            "Lyari Expressway",
            "Defence Garden",
            "Shahra e Usman",
            "Numaish Chowrangi",
            "Maskan Chowrangi",
            "Oasis Park Residencia",
            "Rabia City",
            "Metrovil Colony",
            "Bilal Town",
            "Laraib Garden",
            "Lines Area",
            "Liaquat Avenue",
            "Jamaluddin Afghani Road",
            "Gadap Road",
            "Falaknaz Dynasty",
            "Chapal Courtyard",
            "Gulshan e Umair",
            "Shahra e Liaquat",
            " Mauripur Road",
            "I.I. Chundrigar Road",
            "Goth Ibrahim Haidri",
            "Gulshan e Areesha",
            "Shahra e Jahangir",
            " Khayaban e Ittehad Road",
            "Gulshan e Malir",
            "Chapal Uptown",
            "Gizri Road",
            "MT Khan Road",
            "Old Clifton",
            "BMCHS",
            "Britto Road",
            "Teacher Society",
            "Mangopir",
            "Peoples Colony",
            "Bolton Market",
            " APP Employees Co operative Housing Society",
            "Erum Villas",
            "Hazara Colony",
            "Sher Shah Suri Road",
            "Hyderi",
            "Shahrah e Pakistan",
            "PAF Housing Scheme",
            "Rufi Rose Petals",
            "Seven Wonders City",
            "Times Residency",
            "ASF Tower",
            "Others",
            "Cotton Export Cooperative Housing Society",
            "Hub River Road",
            "PIDC",
            "Karachi Hyderabad Motorway",
            "Surti Muslim Co Operative Housing Society",
            "Comissioner Coop Housing Society",
            "Cutchi Memon Cooperative Housing Society",
            "Tahir Villa",
            "Royal Defence Tower",
            "Punjab Chowrangi",
            "Malir Housing Scheme 1",
            "Gulshan e Jami",
            "State Bank of Pakistan Staff Co Operative Housing Society",
            "Allama Iqbal Town",
            "Sharafi Goth",
            "Abdullah Ahmed Road",
            "Gujjar Chowk",
            " Dr Daud Pota Road",
            "Azam Nagar",
            "Lalukhet",
            "circular road",
            "Gulshan e Tauheed",
            "Nafeesabad",
            "ASF Housing Scheme",
            "Commissioner Society",
            "Ashraf Nagar",
            "Noor Muhammad Goth",
            "Gulbai",
            "Gulshan E Faisal",
            "Gulistan e Malir",
            "Rizvia Society",
            "Ablagh e Aama Society",
            "Damba",
            "Siemens Chowrangi",
            "Nooriabad",
            "Jahanabad",
            "Gulshan e Mustafa",
            "Farhan Dream Land",
            "Yousaf Goth",
            "Gulshan e Amin",
            "Abdullah Haroon Road",
            "Dhabeji",
          ],
        },
        {
          name: "Peshawar",
          isPop: true,
          society: [
            "Hayatabad",
            "Warsak Road",
            "Ring Road",
            "Gulbahar",
            "Dalazak Road",
            "Charsadda Road",
            "University Town",
            "Regi Model Town",
            "Swati Gate",
            "Al Haram Model Town",
            "Pajagi Road",
            "Gulberg",
            "Doranpur",
            "Shami Road",
            "Wapda Town",
            "Rahatabad",
            "Nasir Bagh Road",
            "Askari 6",
            "Kohat Road",
            "Canal Road",
            "Cantt",
            "Tajabad",
            "OPF Housing Scheme",
            "Yakatoot",
            "Sher Ali Town",
            "University Road",
            "Sethi Town",
            "Kakshal",
            "Palosi",
            "Manakrao",
            "Phandu Road",
            "Zaryab Colony",
            "GT Road",
            "Old Bara Road",
            "Canal Town",
            "Academy Town",
            "Afghan Colony",
            "Momin Town",
            "New City Homes",
            "Govt. Superior Science College Road",
            "Bashirabad",
            "Pakha Ghulam",
            "Budhai Road",
            "Dilazak Road",
            "Abdara Road",
            "Hussain Abad Colony",
            "Shinwari Town",
            "Wadpagga",
            "AWT Housing Scheme Badabair",
            "Warsak Michini Road",
            "Sardargarhi",
            "Saddar",
            "Kohati Gate",
            "Kaur Complex",
            "Wazir Colony",
            "Alif Abad",
            "Defence Officer Colony",
            "Nothia Jadeed",
            "Tehkal",
            "Board Deans Complex",
            "Yusufabad",
            "Ali Model Town",
            "Walled City",
            "Muslim City",
            "Ijazabad",
            "Faqeerabad Road",
            "Jameel Chowk",
            "Umeedabad",
            "Dabgari Gardens",
            "Danishabad",
            "Bara Road",
            "Madina Colony",
            "Umar Gul Road",
            "Askari 2",
            "Lalazar Colony",
            "Ishrat Cinema Road",
            "Ashrafia Colony",
            "Askari 5",
            "Gunj",
            "Chamkani",
            "Landi Arbab Manakro Road",
            "Garhi Baloch",
            "Rasheed Town",
            "Police Colony",
            "Charkhana Road",
            "Nothia Qadeem",
            "Inner City",
            "Shaheen Town",
            "Ijaz Abad Road",
            "Chughal Pura",
            "Waliabad",
            "Tehsil Park",
            "Professor Colony",
            "Northern Bypass",
            "Arbab Road",
            "Taru Jabba",
            "Ramdas Bazar",
            "Irshadabad",
            "Falcon Complex",
            "Qissa Khawani Bazar",
            "Shaheedabad",
            "Sunehri Masjid Road",
            "Peshawar Garden",
            "Mall Road",
            "Khattak Colony",
            "Sarbilandpura",
            "Wazir Bagh Road",
            "Jahangirpura",
            "Landi Arbab",
            "Khyber Road",
            "Dabgari",
            "NBP (Afshan) Colony",
            "City Circular Road",
            "Bamba Road",
            "Latifabad",
            "Asad Town",
            "Khyber Bazar",
            "Shaikhabad Road",
            "Dora Road",
            "Eid Gah Road",
            "Jahangirabad",
            "Sheikhabad",
            "Sarki Gate",
            "Sathee Town",
            "Agha Mir Jani Road",
            "Civil Quarters",
            "Regi Lalma",
            "Gulshan e Iqbal",
            "DHA",
            "Kambo",
            "Jhagra",
            "Railway Road",
            "Others",
            "Ashraf Road",
            "Hashtnagri",
            "Al Haram Green",
            "Lahori Gate",
            "Faisal Colony Road",
            "Nishterabad",
            "Anam Sanam Chowk",
            "Abdara",
            "Industrial Estate",
            "Sikandar Town",
          ],
        },
        {
          name: "Abbottabad",
          isPop: false,
          society: [],
        },
        {
          name: "Abdul Hakim",
          isPop: false,
          society: [],
        },
        {
          name: "Ahmedpur East",
          isPop: false,
          society: [],
        },
        {
          name: "Alipur",
          isPop: false,
          society: [],
        },
        {
          name: "Arifwala",
          isPop: false,
          society: [],
        },
        {
          name: "Astore",
          isPop: false,
          society: [],
        },
        {
          name: "Attock",
          isPop: false,
          society: [],
        },
        {
          name: "Awaran",
          isPop: false,
          society: [],
        },
        {
          name: "Badin",
          isPop: false,
          society: [],
        },
        {
          name: "Bagh",
          isPop: false,
          society: [],
        },
        {
          name: "Bahawalnagar",
          isPop: false,
          society: [],
        },
        {
          name: "Bahawalpur",
          isPop: false,
          society: [],
        },
        {
          name: "Balakot",
          isPop: false,
          society: [],
        },
        {
          name: "Bannu",
          isPop: false,
          society: [],
        },
        {
          name: "Barnala",
          isPop: false,
          society: [],
        },
        {
          name: "Batkhela",
          isPop: false,
          society: [],
        },
        {
          name: "Bhakkar",
          isPop: false,
          society: [],
        },
        {
          name: "Bhalwal",
          isPop: false,
          society: [],
        },
        {
          name: "Bhimber",
          isPop: false,
          society: [],
        },
        {
          name: "Buner",
          isPop: false,
          society: [],
        },
        {
          name: "Burewala",
          isPop: false,
          society: [],
        },
        {
          name: "Chaghi",
          isPop: false,
          society: [],
        },
        {
          name: "Chakwal",
          isPop: false,
          society: [],
        },
        {
          name: "Charsadda",
          isPop: false,
          society: [],
        },
        {
          name: "Chichawatni",
          isPop: false,
          society: [],
        },

        {
          name: "Chiniot",
          isPop: false,
          society: [],
        },
        {
          name: "Chistian Sharif",
          isPop: false,
          society: [],
        },
        {
          name: "Chitral",
          isPop: false,
          society: [],
        },
        {
          name: "Choa Saidan Shah",
          isPop: false,
          society: [],
        },
        {
          name: "Chunian",
          isPop: false,
          society: [],
        },

        {
          name: "Dadu",
          isPop: false,
          society: [],
        },
        {
          name: "Daharki",
          isPop: false,
          society: [],
        },
        {
          name: "Daska",
          isPop: false,
          society: [],
        },
        {
          name: "Daur",
          isPop: false,
          society: [],
        },
        {
          name: "Depalpur",
          isPop: false,
          society: [],
        },
        {
          name: "Dera Ghazi Khan",
          isPop: false,
          society: [],
        },
        {
          name: "Dera Ismail Khan",
          isPop: false,
          society: [],
        },
        {
          name: "Dijkot",
          isPop: false,
          society: [],
        },
        {
          name: "Dina",
          isPop: false,
          society: [],
        },
        {
          name: "Dobian",
          isPop: false,
          society: [],
        },
        {
          name: "Duniya Pur",
          isPop: false,
          society: [],
        },
        {
          name: "Faislabad",
          isPop: false,
          society: [],
        },
        {
          name: "FATA",
          isPop: false,
          society: [],
        },
        {
          name: "Fateh Jang",
          isPop: false,
          society: [],
        },
        {
          name: "Fort Abbas",
          isPop: false,
          society: [],
        },
        {
          name: "Gaarho",
          isPop: false,
          society: [],
        },
        {
          name: "Gadoon",
          isPop: false,
          society: [],
        },
        {
          name: "Galyat",
          isPop: false,
          society: [],
        },
        {
          name: "Ghakhar",
          isPop: false,
          society: [],
        },
        {
          name: "Gharo",
          isPop: false,
          society: [],
        },
        {
          name: "Ghotki",
          isPop: false,
          society: [],
        },
        {
          name: "Gilgit",
          isPop: false,
          society: [],
        },
        {
          name: "Gojra",
          isPop: false,
          society: [],
        },
        {
          name: "Gujar Khan",
          isPop: false,
          society: [],
        },
        {
          name: "Gujranwala",
          isPop: false,
          society: [],
        },
        {
          name: "Gujrat",
          isPop: false,
          society: [],
        },
        {
          name: "Gwadar",
          isPop: false,
          society: [],
        },
        {
          name: "Hafizabad",
          isPop: false,
          society: [],
        },
        {
          name: "Hala",
          isPop: false,
          society: [],
        },
        {
          name: "Hangu",
          isPop: false,
          society: [],
        },
        {
          name: "Harappa",
          isPop: false,
          society: [],
        },
        {
          name: "Haripur",
          isPop: false,
          society: [],
        },
        {
          name: "Haroonabad",
          isPop: false,
          society: [],
        },
        {
          name: "Hasilpur",
          isPop: false,
          society: [],
        },
        {
          name: "Hassan Abdal",
          isPop: false,
          society: [],
        },
        {
          name: "Haveli Lakha",
          isPop: false,
          society: [],
        },
        {
          name: "Hazro",
          isPop: false,
          society: [],
        },
        {
          name: "Hub Chowki",
          isPop: false,
          society: [],
        },
        {
          name: "Hujra Shah Muqeem",
          isPop: false,
          society: [],
        },
        {
          name: "Hunza",
          isPop: false,
          society: [],
        },
        {
          name: "Hyderabad",
          isPop: false,
          society: [],
        },
        {
          name: "Jacobabad",
          isPop: false,
          society: [],
        },
        {
          name: "Jahanian",
          isPop: false,
          society: [],
        },
        {
          name: "Jalalpur Jattan",
          isPop: false,
          society: [],
        },
        {
          name: "Jampur",
          isPop: false,
          society: [],
        },
        {
          name: "Jamshoro",
          isPop: false,
          society: [],
        },
        {
          name: "Jatoi",
          isPop: false,
          society: [],
        },
        {
          name: "Jauharabad",
          isPop: false,
          society: [],
        },
        {
          name: "Jhang",
          isPop: false,
          society: [],
        },
        {
          name: "Jhelum",
          isPop: false,
          society: [],
        },
        {
          name: "Kaghan",
          isPop: false,
          society: [],
        },
        {
          name: "Kahror Pakka",
          isPop: false,
          society: [],
        },
        {
          name: "Kalat",
          isPop: false,
          society: [],
        },
        {
          name: "Kamalia",
          isPop: false,
          society: [],
        },
        {
          name: "Kamoki",
          isPop: false,
          society: [],
        },
        {
          name: "Kahna Canal View",
          isPop: false,
          society: [],
        },
        {
          name: "Kandiaro",
          isPop: false,
          society: [],
        },
        {
          name: "Karak",
          isPop: false,
          society: [],
        },
        {
          name: "Kasur",
          isPop: false,
          society: [],
        },
        {
          name: "Khairpur",
          isPop: false,
          society: [],
        },
        {
          name: "Khanewal",
          isPop: false,
          society: [],
        },
        {
          name: "Khanpur",
          isPop: false,
          society: [],
        },
        {
          name: "Kharian",
          isPop: false,
          society: [],
        },
        {
          name: "Khipro",
          isPop: false,
          society: [],
        },
        {
          name: "Khushab",
          isPop: false,
          society: [],
        },
        {
          name: "Khuzdar",
          isPop: false,
          society: [],
        },
        {
          name: "Kohat",
          isPop: false,
          society: [],
        },
        {
          name: "Kot Addu",
          isPop: false,
          society: [],
        },
        {
          name: "Kotli",
          isPop: false,
          society: [],
        },
        {
          name: "Kotri",
          isPop: false,
          society: [],
        },
        {
          name: "Lakki Marwat",
          isPop: false,
          society: [],
        },
        {
          name: "Lalamusa",
          isPop: false,
          society: [],
        },
        {
          name: "Larkana",
          isPop: false,
          society: [],
        },
        {
          name: "Lasbela",
          isPop: false,
          society: [],
        },
        {
          name: "Layyah",
          isPop: false,
          society: [],
        },
        {
          name: "Liaqatpur",
          isPop: false,
          society: [],
        },
        {
          name: "Lodhran",
          isPop: false,
          society: [],
        },
        {
          name: "Loralai",
          isPop: false,
          society: [],
        },
        {
          name: "Lower Dir",
          isPop: false,
          society: [],
        },
        {
          name: "Mailsi",
          isPop: false,
          society: [],
        },
        {
          name: "Makran",
          isPop: false,
          society: [],
        },
        {
          name: "Madina Garden",
          isPop: false,
          society: [],
        },
        {
          name: "Malakand",
          isPop: false,
          society: [],
        },
        {
          name: "Mandi Bahauddin",
          isPop: false,
          society: [],
        },
        {
          name: "Mangla",
          isPop: false,
          society: [],
        },
        {
          name: "Mansehra",
          isPop: false,
          society: [],
        },
        {
          name: "Mardan",
          isPop: false,
          society: [],
        },
        {
          name: "Matiari",
          isPop: false,
          society: [],
        },
        {
          name: "Matli",
          isPop: false,
          society: [],
        },
        {
          name: "Mian Channu",
          isPop: false,
          society: [],
        },
        {
          name: "Mianwali",
          isPop: false,
          society: [],
        },
        {
          name: "Mingora",
          isPop: false,
          society: [],
        },
        {
          name: "Mirpur",
          isPop: false,
          society: [],
        },
        {
          name: "Mirpur Khas",
          isPop: false,
          society: [],
        },
        {
          name: "Mirpur Sakro",
          isPop: false,
          society: [],
        },
        {
          name: "Mitha Tiwana",
          isPop: false,
          society: [],
        },
        {
          name: "Moro",
          isPop: false,
          society: [],
        },
        {
          name: "Muridke",
          isPop: false,
          society: [],
        },
        {
          name: "Murree",
          isPop: false,
          society: [],
        },
        {
          name: "Muzaffarabad",
          isPop: false,
          society: [],
        },
        {
          name: "Muzaffargarh",
          isPop: false,
          society: [],
        },
        {
          name: "Nankana Sahib",
          isPop: false,
          society: [],
        },
        {
          name: "Naran",
          isPop: false,
          society: [],
        },
        {
          name: "Narowal",
          isPop: false,
          society: [],
        },
        {
          name: "Nasar Ullah Khan Town",
          isPop: false,
          society: [],
        },
        {
          name: "Nasirabad",
          isPop: false,
          society: [],
        },
        {
          name: "Naushahro Feroze",
          isPop: false,
          society: [],
        },
        {
          name: "Nawabshah",
          isPop: false,
          society: [],
        },
        {
          name: "Neelum",
          isPop: false,
          society: [],
        },
        {
          name: "New Mirpur City",
          isPop: false,
          society: [],
        },
        {
          name: "Nowshera",
          isPop: false,
          society: [],
        },
        {
          name: "Okara",
          isPop: false,
          society: [],
        },
        {
          name: "Others",
          isPop: false,
          society: [],
        },
        {
          name: "Others Azad Kashmir",
          isPop: false,
          society: [],
        },
        {
          name: "Others Balochistan",
          isPop: false,
          society: [],
        },
        {
          name: "Others Gilgit Baltistan",
          isPop: false,
          society: [],
        },
        {
          name: "Others Khyber Pakhtunkhwa",
          isPop: false,
          society: [],
        },
        {
          name: "Others Punjab",
          isPop: false,
          society: [],
        },
        {
          name: "Others Sindh",
          isPop: false,
          society: [],
        },
        {
          name: "Pakpattan",
          isPop: false,
          society: [],
        },
        {
          name: "Peshawar",
          isPop: false,
          society: [],
        },
        {
          name: "Pind Dadan Khan",
          isPop: false,
          society: [],
        },
        {
          name: "Pindi Bhattian",
          isPop: false,
          society: [],
        },
        {
          name: "Pir Mahal",
          isPop: false,
          society: [],
        },
        {
          name: "Qazi Ahmed",
          isPop: false,
          society: [],
        },
        {
          name: "Quetta",
          isPop: false,
          society: [],
        },
        {
          name: "Rahim Yar Khan",
          isPop: false,
          society: [],
        },
        {
          name: "Rajana",
          isPop: false,
          society: [],
        },
        {
          name: "Rajanpur",
          isPop: false,
          society: [],
        },
        {
          name: "Ratwal",
          isPop: false,
          society: [],
        },
        {
          name: "Rawalakot",
          isPop: false,
          society: [],
        },
        {
          name: "Rohri",
          isPop: false,
          society: [],
        },
        {
          name: "Sadiqabad",
          isPop: false,
          society: [],
        },
        {
          name: "Sahiwal",
          isPop: false,
          society: [],
        },
        {
          name: "Sakrand",
          isPop: false,
          society: [],
        },
        {
          name: "Samundri",
          isPop: false,
          society: [],
        },
        {
          name: "Sanghar",
          isPop: false,
          society: [],
        },
        {
          name: "Sangla Hill",
          isPop: false,
          society: [],
        },
        {
          name: "Sarai Alamgir",
          isPop: false,
          society: [],
        },
        {
          name: "Sargodha",
          isPop: false,
          society: [],
        },
        {
          name: "Sehwan",
          isPop: false,
          society: [],
        },
        {
          name: "Shabqadar",
          isPop: false,
          society: [],
        },
        {
          name: "Shahdadpur",
          isPop: false,
          society: [],
        },
        {
          name: "Shahkot",
          isPop: false,
          society: [],
        },
        {
          name: "Shahpur Chakar",
          isPop: false,
          society: [],
        },
        {
          name: "Shakargarh",
          isPop: false,
          society: [],
        },
        {
          name: "Shehr Sultan",
          isPop: false,
          society: [],
        },
        {
          name: "Sheikhupura",
          isPop: false,
          society: [],
        },
        {
          name: "Sher Garh",
          isPop: false,
          society: [],
        },
        {
          name: "Shikarpur",
          isPop: false,
          society: [],
        },
        {
          name: "Shorkot",
          isPop: false,
          society: [],
        },
        {
          name: "Sialkot",
          isPop: false,
          society: [],
        },
        {
          name: "Sibi",
          isPop: false,
          society: [],
        },
        {
          name: "Skardu",
          isPop: false,
          society: [],
        },
        {
          name: "Sudhnoti",
          isPop: false,
          society: [],
        },
        {
          name: "Sujawal",
          isPop: false,
          society: [],
        },
        {
          name: "Sukkur",
          isPop: false,
          society: [],
        },
        {
          name: "Swabi",
          isPop: false,
          society: [],
        },
        {
          name: "Swat",
          isPop: false,
          society: [],
        },
        {
          name: "Talagang",
          isPop: false,
          society: [],
        },
        {
          name: "Tando Adam",
          isPop: false,
          society: [],
        },
        {
          name: "Tando Allahyar",
          isPop: false,
          society: [],
        },
        {
          name: "Tando Bago",
          isPop: false,
          society: [],
        },
        {
          name: "Tando Muhammad Khan",
          isPop: false,
          society: [],
        },
        {
          name: "Taxila",
          isPop: false,
          society: [],
        },
        {
          name: "Tharparkar",
          isPop: false,
          society: [],
        },
        {
          name: "Thatta",
          isPop: false,
          society: [],
        },
        {
          name: "Toba Tek Singh",
          isPop: false,
          society: [],
        },
        {
          name: "Turbat",
          isPop: false,
          society: [],
        },
        {
          name: "Vehari",
          isPop: false,
          society: [],
        },
        {
          name: "Wah",
          isPop: false,
          society: [],
        },
        {
          name: "Wazirabad",
          isPop: false,
          society: [],
        },
        {
          name: "Waziristan",
          isPop: false,
          society: [],
        },
        {
          name: "Yazman",
          isPop: false,
          society: [],
        },
        {
          name: "Zhob",
          isPop: false,
          society: [],
        },
      ],
    };
  },
  computed: {
    searchCities() {
      var search = this.cities;
      return search.filter((city) =>
        city.name.toLowerCase().startsWith(this.finalData.city.toLowerCase())
      );
    },
    searchSocietyFilter() {
      var search = this.society.society;
      return search.filter((city) =>
        city.toLowerCase().startsWith(this.finalData.society.toLowerCase())
      );
    },
  },
  methods: {
    quickSearch() {
      var url = "";
      var fl = this.finalData;
      Object.keys(fl).forEach((e) => {
        if (fl[e] && fl[e] !== "undefined" && fl[e].length > 0)
          url += `${e}=${fl[e]}&`;
      });
      this.$router.push(`/search?${url}page=1`);
    },
    openDropdown() {
      this.dropdownCities = true;
    },
    selectedCity(city) {
      this.society = city;
      this.finalData.city = city.name;
      this.dropdownCities = false;
    },
    selectedSociety(society) {
      this.finalData.society = society;
      this.dropdownSociety = false;
    },
    openDropdownSociety() {
      if (!this.finalData.city) {
        this.$swal({
          icon: "error",
          title: "Please Select City before",
          showConfirmButton: false,
          timer: 3000,
        });
        return;
      }
      if (this.society && this.society.society && this.society.society.length) {
        this.dropdownSociety = true;
      } else {
        this.$swal({
          icon: "error",
          title: "Society Doesn't Exist",
          showConfirmButton: false,
          timer: 3000,
        });
      }
    },
  },
  mounted() {
    const clickAway = () => {
      this.dropdownCities = false;
    };
    const clickAwaySociety = () => {
      this.dropdownSociety = false;
    };
    var el = document.getElementById("input");
    var ele = document.getElementById("input-society");
    document.addEventListener("click", function (event) {
      if (el) {
        var isClickInsideElement = el.contains(event.target);
        if (!isClickInsideElement) {
          clickAway();
        }
      }
      if (ele) {
        var society = ele.contains(event.target);
        if (!society) {
          clickAwaySociety();
        }
      }
    });
  },
  watch: {
    "finalData.city": {
      handler(newValue) {
        if (newValue) {
          var search = this.cities;
          var results = search.filter(
            (city) => city.name.toLowerCase() == newValue.toLowerCase()
          );
          this.society = results[0];
          this.finalData.society = "";
        }
      },
      // deep: true,
    },
  },
};
</script>
<style scoped>
.type-search {
  display: flex;
  align-items: center;
  width: 33%;
}
.search-icon {
  background: #eae95f;
  padding: 8px 15px;
  cursor: pointer;
}
.search-icon svg {
  width: 19px;
  font-weight: bold;
}
a {
  text-decoration: none;
}
.searchHeader {
  width: 100%;
}
.heade-btns {
  display: flex;
  justify-content: space-around;
}
.heade-btns .btns {
  padding: 12px 26px;
  font-size: 16px;
  min-width: 169px;
  border-radius: 3px;
  background-color: #1783b4;
  color: #fff;
  transition: 0.5s;
}
.heade-btns .btns:hover {
  background-color: #282828;
}
.heade-btns .btns.active {
  background-color: #282828;
}
.heade-btns .btns.active:hover {
  background-color: #1783b4;
}
.quick-main {
  width: 90%;
}
.quick-search {
  display: flex;
  justify-content: center;
}
.quick-search .heading {
  margin: 30px 0px 10px 0px;
}
.quick-search h1 {
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1.5px;
  position: relative;
  left: 0px;
  top: 0px;
}
.quick-search .search-container {
  color: #fff;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  background-color: #1783b4;
  padding: 16px;
}
.quick-search .search-container .btn-container{
  display: flex;
}
.quick-search .search-container .inputs {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.quick-search .search-container select {
  width: 100%;
  height: 100%;
  outline: none;
  border: 1px solid gray;
  background: #fff;
  padding: 10px 10px;
  color: #000;
  position: relative;
  font-size: 14px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.main-container {
  padding: 10px 0;
  display: flex;
  justify-content: center;
}
.main-primary {
  width: 90%;
}
.main-container .search-header h1 {
  font-size: 26px;
  font-weight: 400;
}
.main-container .search-header h2 {
  font-size: 56px;
  font-style: italic;
  line-height: 1.2;
  letter-spacing: 2.5px;
}
.main-container .search-header h1,
h2 {
  color: #fff;
}
.main-container .search-header {
  line-height: 1.5;
  margin-top: 40px;
  text-align: center;
  position: relative;
  top: 30px;
}
.main-container .search {
  padding: 18px 24px 28px 24px;
  margin-top: 30px;
}
.yellow-btns {
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 10px;
}
.yellow-btns button {
  background: #eae95f;
  color: #000;
  text-transform: uppercase;
  padding: 8px 20px;
  border-radius: 2px;
  margin: 0px 10px 0px 0px;
  font-weight: bolder;
  width: 100px;
  font-size: 14px;
  font-weight: 800;
}
.search-main {
  display: flex;
  width: 67%;
}
.area-input {
  position: relative;
}
#input-society {
  width: 100% !important;
}
#input-society .dropdown {
  width: 100% !important;
}
.area-input .dropdown {
  position: absolute;
  background: #fff;
  padding: 0px;
  z-index: 2;
  width: 99%;
  border: 1px solid #eee;
}
.area-detail {
  width: 50%;
  margin: 0 2px;
}
.area-input input {
  outline: none;
  font-size: 14px;
  box-shadow: 0px 0px 10px #00000012;
  padding: 10px 6px;
  border: 1px solid gray;
  width: 98%;
}
.address-block {
  display: flex;
  flex-wrap: wrap;
}
.check-buttons {
  margin: 20px 80px 0px 0;
}
.address-block .check-buttons input {
  min-width: 190px;
}
.city-search {
  background: #fff;
  padding: 10px;
}
.city-search input {
  outline: none;
  font-size: 11px;
  border: 1px solid #333;
  box-shadow: 0px 0px 10px #00000012;
  padding: 7px 5px;
  border-radius: 20px;
  color: #333;
  background: #eee;
  width: 93% !important;
}
.area-input input::placeholder {
  color: #000 !important;
}
.city-list {
  overflow: scroll;
  max-height: 400px;
}
.city-list ul {
  padding: 0 10px;
}
.city-list::-webkit-scrollbar {
  display: none;
}

.city-list {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.city-list ul li:first-child {
  font-weight: 600;
  padding: 10px 0;
}
.city-list ul li {
  font-size: 14px;
  color: #000;
  padding: 10px;
  cursor: pointer;
}
.search-list ul li {
  padding: 10px 0 !important;
  cursor: pointer;
}
.search-list ul li:first-child {
  font-weight: normal!important;
  padding: 10px;
}
@media (max-width: 479px) and (min-width: 320px) {
  .type-search {
    width: 40%;
  }
  .main-primary {
    width: 100%;
  }
  .quick-main {
    width: 95%;
  }
  .quick-search .search-container {
    padding: 15px 8px !important;
  }
  .quick-search h1 {
    font-size: 14px;
  }
  .main-container .search-header h2 {
    font-size: 22px;
  }
  .main-container .search-header h1 {
    font-size: 18px;
  }
  .main-container .search-header {
    margin-top: 0 !important;
  }
  .main-container .search {
    padding: 0 !important;
  }
}
</style>
