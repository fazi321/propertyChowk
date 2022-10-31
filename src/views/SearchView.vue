<template>
  <default-layout>
    <!-- <div id="root">
      <div>
        <input type="file" name="images[]" @change="imagesAdd" multiple />
      </div>
      <div v-for="(img, key) in image" :key="key">
        <img class="img-pre" :src="img" />
        <button v-show="image" @click="removeImage(key)">Remover</button>
      </div>
    </div>-->
    <section class="container">
      <div class="add-banner">
        <img src="../assets/images/970x90.png" alt />
      </div>
      <BlueHead :title="'Filters'" />
      <section class="filter-search">
        <section>
          <div class="toggle-buttons">
            <button
              :class="[
                'btn',
                { active: category == 'buy' || $route.query.purpose == '0' || !$route.query.purpose },
              ]"
              @click="typeSelect('buy')"
            >
              Buy
            </button>
            <button
              :class="[
                'btn',
                { active: category == 'rent' || $route.query.purpose == '1' },
              ]"
              @click="typeSelect('rent')"
            >
              Rent
            </button>
          </div>
        </section>
        <!-- toggle button  end -->
        <TypeAndSubtype
          title="Property type"
          :types="typeData"
          @selected="propertyTypeSelected"
          propertyType="property"
          :metaQuery="$route.query.property_type"
        />
        <TypeAndSubtype
          v-if="subTypecat >= 0"
          title="Property Sub type"
          :types="
            subTypeData[subTypecat] && subTypeData[subTypecat].propertySubType
          "
          @selected="propertyTypeSelected"
          propertyType="subtype"
          :metaQuery="$route.query.sub_type"
        />
        <!-- area detail -->
        <div class="main-inputs">
          <div class="range-section">
            <!-- input block -->
            <div class="check-buttons">
              <div class="title">
                <h1>Price Range</h1>
              </div>
              <div>
                <div>
                  <input
                    type="number"
                    placeholder="0"
                    v-model="filter.price"
                    @change="priceSelect($event)"
                  />
                </div>
                <div class="mid-to">to</div>
                <div>
                  <input
                    type="number"
                    placeholder="any"
                    v-model="filter.priceto"
                    @change="priceTo($event)"
                  />
                </div>
              </div>
            </div>
            <!-- input block -->
            <!-- input block -->
            <div class="check-buttons">
              <div class="title">
                <h1>Property Size</h1>
              </div>
              <div>
                <div>
                  <input
                    type="number"
                    v-model="filter.area"
                    @change="onChange($event)"
                  />
                </div>
                <div>
                  <select class="area" v-model="filter.area_type">
                    <option selected>Marla</option>
                    <option>Kanal</option>
                    <option>Acre</option>
                    <option>Yard</option>
                    <option>Sq.ft</option>
                  </select>
                </div>
              </div>
            </div>
            <!-- input block -->
          </div>
          <!-- area detail -->
          <!-- area detail -->
          <section class="area-detail">
            <!-- block of code -->
            <div class="city-block">
              <div class="title">
                <h1>City</h1>
              </div>
              <div class="area-input" id="input">
                <div>
                  <input
                    type="text"
                    v-model="filter.city"
                    @focus="openDropdown"
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
                  <div class="city-list" v-if="!filter.city">
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
                        :key="index"
                        v-show="!other.isPop"
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
          <section class="address-block">
            <section class="block-code">
              <!-- input block -->
              <div class="check-buttons" id="society-input">
                <div class="title">
                  <h1>Society</h1>
                </div>
                <div>
                  <div>
                    <input
                      type="text"
                      v-model="filter.society"
                      @click="openDropdownSociety"
                      :readonly="!filter.city"
                    />
                  </div>
                </div>
              </div>
              <div class="area-input">
                <div class="dropdown" v-if="dropdownSociety">
                  <!-- <div class="city-search">
                    <input
                      type="text"
                      v-model="searchSociety"
                      placeholder="Search Society"
                    />
                  </div> -->
                  <div
                    class="city-list search-list"
                    v-if="!this.filter.society"
                  >
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
            </section>
            <!-- input block -->
            <div class="check-buttons">
              <div class="title">
                <h1>Phase</h1>
              </div>
              <div>
                <div>
                  <input type="text" v-model="filter.phase" />
                </div>
              </div>
            </div>
            <!-- input block -->
            <!-- input block -->
            <div class="check-buttons">
              <div class="title">
                <h1>Block</h1>
              </div>
              <div>
                <div>
                  <input type="text" v-model="filter.block" />
                </div>
              </div>
            </div>
            <!-- input block -->
            <!-- input block -->
            <div class="check-buttons">
              <div class="title">
                <h1>Sector</h1>
              </div>
              <div>
                <div>
                  <input type="text" v-model="filter.sector" />
                </div>
              </div>
            </div>
            <!-- input block -->
            <!-- input block -->
            <div class="check-buttons">
              <div class="title">
                <h1>Road</h1>
              </div>
              <div>
                <div>
                  <input type="text" v-model="filter.road" />
                </div>
              </div>
            </div>
            <!-- input block -->
            <!-- input block -->
            <div class="check-buttons">
              <div class="title">
                <h1>Street</h1>
              </div>
              <div>
                <div>
                  <input type="text" v-model="filter.street" />
                </div>
              </div>
            </div>
            <!-- input block -->
          </section>
        </div>
        <!-- area detail -->
        <div class="main-inputs" v-if="filter.property_type != 'Plot'">
          <DetailNumbers
            :title="'Floor'"
            :data="floorData"
            @propertyDetail="propertyDetail"
            :metaData="$route.query.floor"
          />
          <DetailNumbers
            v-if="filter.property_type != 'Commercial'"
            :title="'Bedrooms'"
            :data="bedRooms"
            @propertyDetail="propertyDetail"
            :metaData="$route.query.bedrooms"
          />
          <DetailNumbers
            :title="'Bathrooms'"
            :data="bathRooms"
            @propertyDetail="propertyDetail"
            :metaData="$route.query.bathrooms"
          />
        </div>
        <!-- input block -->
        <div class="check-buttons property-number">
          <div class="title">
            <h1>Property Number</h1>
          </div>
          <div>
            <div>
              <input type="text" @change="onPnumber($event)" />
            </div>
          </div>
        </div>
        <!-- input block for Plots -->
        <div
          class="features-section"
          v-if="
            filter.property_type == 'Plot' ||
            $route.query.property_type == 'Plot'
          "
        >
          <div class="features-head">
            <h6>Add Features</h6>
          </div>
          <div class="features-list">
            <FeatureBox
              :name="'Gas'"
              @selected="statusFeatures"
              :active="isFeatureExist('Gas')"
            />
            <FeatureBox
              :name="'Corner'"
              @selected="statusFeatures"
              :active="isFeatureExist('Corner')"
            />
            <FeatureBox
              :name="'Facing Park'"
              @selected="statusFeatures"
              :active="isFeatureExist('Facing-Park')"
            />
            <FeatureBox
              :name="'Electricity'"
              @selected="statusFeatures"
              :active="isFeatureExist('Electricity')"
            />
            <FeatureBox
              :name="'Near Hospital'"
              @selected="statusFeatures"
              :active="isFeatureExist('Near-Hospital')"
            />
            <FeatureBox
              :name="'Main Road'"
              @selected="statusFeatures"
              :active="isFeatureExist('Main-Road')"
            />
            <FeatureBox
              :name="'Sewerage'"
              @selected="statusFeatures"
              :active="isFeatureExist('Sewerage')"
            />
            <FeatureBox
              :name="'Boundary Wall'"
              @selected="statusFeatures"
              :active="isFeatureExist('Boundary-Wall')"
            />
            <FeatureBox
              :name="'Near Airport'"
              @selected="statusFeatures"
              :active="isFeatureExist('Others')"
            />
            <FeatureBox
              :name="'Near School'"
              @selected="statusFeatures"
              :active="isFeatureExist('Near-School')"
            />
            <FeatureBox
              :name="'Near Park'"
              @selected="statusFeatures"
              :active="isFeatureExist('Near-Park')"
            />
            <FeatureBox
              :name="'Near Masjid'"
              @selected="statusFeatures"
              :active="isFeatureExist('Near-Masjid')"
            />
            <FeatureBox
              :name="'Near Market'"
              @selected="statusFeatures"
              :active="isFeatureExist('Near-Market')"
            />
            <FeatureBox
              :name="'Pair'"
              @selected="statusFeatures"
              :active="isFeatureExist('Pair')"
            />
            <FeatureBox
              :name="'Triple'"
              @selected="statusFeatures"
              :active="isFeatureExist('Triple')"
            />
            <FeatureBox
              :name="'Tetra'"
              @selected="statusFeatures"
              :active="isFeatureExist('Tetra')"
            />
          </div>
        </div>
        <!-- input block for Plots -->
        <div
          class="features-section"
          v-if="
            filter.property_type == 'Home' ||
            $route.query.property_type == 'Home'
          "
        >
          <div class="features-head">
            <h6>Add Features</h6>
          </div>
          <div class="features-list">
            <FeatureBox
              :name="'Gas'"
              @selected="statusFeatures"
              :active="isFeatureExist('Gas')"
            />
            <FeatureBox
              :name="'TV Lounge'"
              @selected="statusFeatures"
              :active="isFeatureExist('TV-Lounge')"
            />
            <FeatureBox
              :name="'Kitchen'"
              @selected="statusFeatures"
              :active="isFeatureExist('Kitchen')"
            />
            <FeatureBox
              :name="'Electricity'"
              @selected="statusFeatures"
              :active="isFeatureExist('Electricity')"
            />
            <FeatureBox
              :name="'Near Market'"
              @selected="statusFeatures"
              :active="isFeatureExist('Near-Market')"
            />
            <FeatureBox
              :name="'Loundry Room'"
              @selected="statusFeatures"
              :active="isFeatureExist('Loundry-Room')"
            />
            <FeatureBox
              :name="'Corner'"
              @selected="statusFeatures"
              :active="isFeatureExist('Corner')"
            />
            <FeatureBox
              :name="'Store Room'"
              @selected="statusFeatures"
              :active="isFeatureExist('Store-Room')"
            />
            <FeatureBox
              :name="'Pool'"
              @selected="statusFeatures"
              :active="isFeatureExist('Pool')"
            />
            <FeatureBox
              :name="'Near Masjid'"
              @selected="statusFeatures"
              :active="isFeatureExist('Near-Masjid')"
            />
            <FeatureBox
              :name="'Dining Room'"
              @selected="statusFeatures"
              :active="isFeatureExist('Dining-Room')"
            />
            <FeatureBox
              :name="'Balcony'"
              @selected="statusFeatures"
              :active="isFeatureExist('Balcony')"
            />
            <FeatureBox
              :name="'Lawn'"
              @selected="statusFeatures"
              :active="isFeatureExist('Lawn')"
            />
            <FeatureBox
              :name="'Drawing Room'"
              @selected="statusFeatures"
              :active="isFeatureExist('Drawing-Room')"
            />
            <FeatureBox
              :name="'Near Park'"
              @selected="statusFeatures"
              :active="isFeatureExist('Near Park')"
            />
            <FeatureBox
              :name="'Near School'"
              @selected="statusFeatures"
              :active="isFeatureExist('Near-School')"
            />
            <FeatureBox
              :name="'Boundry Wall'"
              @selected="statusFeatures"
              :active="isFeatureExist('Boundry-Wall')"
            />
            <FeatureBox
              :name="'Study Room'"
              @selected="statusFeatures"
              :active="isFeatureExist('Study-Room')"
            />
            <FeatureBox
              :name="'Facing Park'"
              @selected="statusFeatures"
              :active="isFeatureExist('Facing-Park')"
            />
            <FeatureBox
              :name="'Main Road'"
              @selected="statusFeatures"
              :active="isFeatureExist('Main-Road')"
            />
            <FeatureBox
              :name="'Sewerage'"
              @selected="statusFeatures"
              :active="isFeatureExist('Sewerage')"
            />
            <FeatureBox
              :name="'Furnished'"
              @selected="statusFeatures"
              :active="isFeatureExist('Furnished')"
            />
            <!-- <FeatureBox
              :name="'Boundry Wall'"
              @selected="statusFeatures"
              :active="isFeatureExist('Boundry-Wall')"
            /> -->
            <FeatureBox
              :name="'Un-Furnished'"
              @selected="statusFeatures"
              :active="isFeatureExist('Un-Furnished')"
            />
            <FeatureBox
              :name="'Semi Furnished'"
              @selected="statusFeatures"
              :active="isFeatureExist('Semi-Furnished')"
            />
            <FeatureBox
              :name="'Prayer Room'"
              @selected="statusFeatures"
              :active="isFeatureExist('Prayer-Room')"
            />
            <FeatureBox
              :name="'Near Airport'"
              @selected="statusFeatures"
              :active="isFeatureExist('Near-Airport')"
            />
            <FeatureBox
              :name="'Near Hospital'"
              @selected="statusFeatures"
              :active="isFeatureExist('Near-Hospital')"
            />
            <FeatureBox
              :name="'Servant Quarter'"
              @selected="statusFeatures"
              :active="isFeatureExist('Servant-Quarter')"
            />
          </div>
        </div>
        <!-- input block for Commercial -->
        <div
          class="features-section"
          v-if="
            filter.property_type == 'Commercial' ||
            $route.query.property_type == 'Commercial'
          "
        >
          <div class="features-head">
            <h6>Add Features</h6>
          </div>
          <div class="features-list">
            <FeatureBox
              :name="'Gas'"
              @selected="statusFeatures"
              :active="isFeatureExist('Gas')"
            />
            <FeatureBox
              :name="'Electricity backup'"
              @selected="statusFeatures"
              :active="isFeatureExist('Electricity-backup')"
            />
            <FeatureBox
              :name="'Lift'"
              @selected="statusFeatures"
              :active="isFeatureExist('Lift')"
            />
            <FeatureBox
              :name="'Electricity'"
              @selected="statusFeatures"
              :active="isFeatureExist('Electricity')"
            />
            <FeatureBox
              :name="'Near Hospital'"
              @selected="statusFeatures"
              :active="isFeatureExist('Near-Hospital')"
            />
            <FeatureBox
              :name="'Furnished'"
              @selected="statusFeatures"
              :active="isFeatureExist('Furnished')"
            />
            <FeatureBox
              :name="'Lobby'"
              @selected="statusFeatures"
              :active="isFeatureExist('Lobby')"
            />
            <FeatureBox
              :name="'Un-Furnished'"
              @selected="statusFeatures"
              :active="isFeatureExist('Un-Furnished')"
            />
            <FeatureBox
              :name="'Semi Furnished'"
              @selected="statusFeatures"
              :active="isFeatureExist('Semi-Furnished')"
            />
            <FeatureBox
              :name="'Near Masjid'"
              @selected="statusFeatures"
              :active="isFeatureExist('Near-Masjid')"
            />
            <FeatureBox
              :name="'Conference Room'"
              @selected="statusFeatures"
              :active="isFeatureExist('Conference-Room')"
            />
            <FeatureBox
              :name="'Atm Machine'"
              @selected="statusFeatures"
              :active="isFeatureExist('Atm-Machine')"
            />
            <FeatureBox
              :name="'Security Staff'"
              @selected="statusFeatures"
              :active="isFeatureExist('Security-Staff')"
            />
            <FeatureBox
              :name="'Near School'"
              @selected="statusFeatures"
              :active="isFeatureExist('Near-School')"
            />
            <FeatureBox
              :name="'Parking Space'"
              @selected="statusFeatures"
              :active="isFeatureExist('Parking-Space')"
            />
            <FeatureBox
              :name="'CCTV Security'"
              @selected="statusFeatures"
              :active="isFeatureExist('CCTV-Security')"
            />
            <FeatureBox
              :name="'Kitchen'"
              @selected="statusFeatures"
              :active="isFeatureExist('Kitchen')"
            />
          </div>
        </div>
        <!-- input block for Plots -->
        <div class="features-section" v-if="filter.property_type == 'Home'">
          <div class="features-head">
            <h6>Add Features</h6>
          </div>
          <div class="features-list">
            <FeatureBox
              :name="'Gas'"
              @selected="statusFeatures"
              :active="isFeatureExist('Gas')"
            />
            <FeatureBox
              :name="'TV Lounge'"
              @selected="statusFeatures"
              :active="isFeatureExist('TV-Lounge')"
            />
            <FeatureBox
              :name="'Kitchen'"
              @selected="statusFeatures"
              :active="isFeatureExist('Kitchen')"
            />
            <FeatureBox
              :name="'Electricity'"
              @selected="statusFeatures"
              :active="isFeatureExist('Electricity')"
            />
            <FeatureBox
              :name="'Near Market'"
              @selected="statusFeatures"
              :active="isFeatureExist('Near-Market')"
            />
            <FeatureBox
              :name="'Loundry Room'"
              @selected="statusFeatures"
              :active="isFeatureExist('Loundry-Room')"
            />
            <FeatureBox
              :name="'Corner'"
              @selected="statusFeatures"
              :active="isFeatureExist('Corner')"
            />
            <FeatureBox
              :name="'Store Room'"
              @selected="statusFeatures"
              :active="isFeatureExist('Store-Room')"
            />
            <FeatureBox
              :name="'Pool'"
              @selected="statusFeatures"
              :active="isFeatureExist('Pool')"
            />
            <FeatureBox
              :name="'Near Masjid'"
              @selected="statusFeatures"
              :active="isFeatureExist('Near-Masjid')"
            />
            <FeatureBox
              :name="'Dining Room'"
              @selected="statusFeatures"
              :active="isFeatureExist('Dining-Room')"
            />
            <FeatureBox
              :name="'Balcony'"
              @selected="statusFeatures"
              :active="isFeatureExist('Balcony')"
            />
            <FeatureBox
              :name="'Lawn'"
              @selected="statusFeatures"
              :active="isFeatureExist('Lawn')"
            />
            <FeatureBox
              :name="'Drawing Room'"
              @selected="statusFeatures"
              :active="isFeatureExist('Drawing-Room')"
            />
            <FeatureBox
              :name="'Near Park'"
              @selected="statusFeatures"
              :active="isFeatureExist('Near Park')"
            />
            <FeatureBox
              :name="'Near School'"
              @selected="statusFeatures"
              :active="isFeatureExist('Near-School')"
            />
            <FeatureBox
              :name="'Boundry Wall'"
              @selected="statusFeatures"
              :active="isFeatureExist('Boundry-Wall')"
            />
            <FeatureBox
              :name="'Study Room'"
              @selected="statusFeatures"
              :active="isFeatureExist('Study-Room')"
            />
            <FeatureBox
              :name="'Facing Park'"
              @selected="statusFeatures"
              :active="isFeatureExist('Facing-Park')"
            />
            <FeatureBox
              :name="'Main Road'"
              @selected="statusFeatures"
              :active="isFeatureExist('Main-Road')"
            />
            <FeatureBox
              :name="'Sewerage'"
              @selected="statusFeatures"
              :active="isFeatureExist('Sewerage')"
            />
            <FeatureBox
              :name="'Furnished'"
              @selected="statusFeatures"
              :active="isFeatureExist('Furnished')"
            />
            <!-- <FeatureBox
              :name="'Boundry Wall'"
              @selected="statusFeatures"
              :active="isFeatureExist('Boundry-Wall')"
            /> -->
            <FeatureBox
              :name="'Un-Furnished'"
              @selected="statusFeatures"
              :active="isFeatureExist('Un-Furnished')"
            />
            <FeatureBox
              :name="'Semi Furnished'"
              @selected="statusFeatures"
              :active="isFeatureExist('Semi-Furnished')"
            />
            <FeatureBox
              :name="'Prayer Room'"
              @selected="statusFeatures"
              :active="isFeatureExist('Prayer-Room')"
            />
            <FeatureBox
              :name="'Near Airport'"
              @selected="statusFeatures"
              :active="isFeatureExist('Near-Airport')"
            />
            <FeatureBox
              :name="'Near Hospital'"
              @selected="statusFeatures"
              :active="isFeatureExist('Near-Hospital')"
            />
            <FeatureBox
              :name="'Servant Quarter'"
              @selected="statusFeatures"
              :active="isFeatureExist('Servant-Quarter')"
            />
          </div>
        </div>
        <!-- input block for Commercial -->
        <div
          class="features-section"
          v-if="
            filter.property_type == 'Farm House' ||
            $route.query.property_type == 'Farm House'
          "
        >
          <div class="features-head">
            <h6>Add Features</h6>
          </div>
          <div class="features-list">
            <FeatureBox
              :name="'Gas'"
              @selected="statusFeatures"
              :active="isFeatureExist('Gas')"
            />
            <FeatureBox
              :name="'TV Lounge'"
              @selected="statusFeatures"
              :active="isFeatureExist('TV-Lounge')"
            />
            <FeatureBox
              :name="'Kitchen'"
              @selected="statusFeatures"
              :active="isFeatureExist('Kitchen')"
            />
            <FeatureBox
              :name="'Electricity'"
              @selected="statusFeatures"
              :active="isFeatureExist('Electricity')"
            />
            <FeatureBox
              :name="'Near Market'"
              @selected="statusFeatures"
              :active="isFeatureExist('Near-Market')"
            />
            <FeatureBox
              :name="'Laundry Room'"
              @selected="statusFeatures"
              :active="isFeatureExist('Laundry-Room')"
            />
            <FeatureBox
              :name="'Corner'"
              @selected="statusFeatures"
              :active="isFeatureExist('Corner')"
            />
            <FeatureBox
              :name="'Store Room'"
              @selected="statusFeatures"
              :active="isFeatureExist('Store-Room')"
            />
            <FeatureBox
              :name="'Pool'"
              @selected="statusFeatures"
              :active="isFeatureExist('Pool')"
            />
            <FeatureBox
              :name="'Near Masjid'"
              @selected="statusFeatures"
              :active="isFeatureExist('Near-Masjid')"
            />
            <FeatureBox
              :name="'Dining Room'"
              @selected="statusFeatures"
              :active="isFeatureExist('Dining-Room')"
            />
            <FeatureBox
              :name="'Balcony'"
              @selected="statusFeatures"
              :active="isFeatureExist('Balcony')"
            />
            <FeatureBox
              :name="'Lawn'"
              @selected="statusFeatures"
              :active="isFeatureExist('Lawn')"
            />
            <FeatureBox
              :name="'Drawing Room'"
              @selected="statusFeatures"
              :active="isFeatureExist('Drawing-Room')"
            />
            <FeatureBox
              :name="'Near Park'"
              @selected="statusFeatures"
              :active="isFeatureExist('Near-Park')"
            />
            <FeatureBox
              :name="'Near School'"
              @selected="statusFeatures"
              :active="isFeatureExist('Near School')"
            />
          </div>
        </div>
        <!-- input block -->
        <div class="features-section">
          <div class="features-head">
            <h6>Property Status</h6>
          </div>
          <div class="features-list">
            <FeatureBox
              :name="'Direct to Owner'"
              @selected="status"
              :active="isExist('Direct-to-Owner')"
            />
            <FeatureBox
              :name="'Bayana'"
              @selected="status"
              :active="isExist('Bayana')"
            />
            <FeatureBox
              :name="'Ndc Applied'"
              @selected="status"
              :active="isExist('Ndc-Applied')"
            />
            <FeatureBox
              :name="'Possession'"
              @selected="status"
              :active="isExist('Possession')"
            />
            <FeatureBox
              :name="'Non-Possession'"
              @selected="status"
              :active="isExist('Non-Possession')"
            />
            <FeatureBox
              :name="'Army Update'"
              @selected="status"
              :active="isExist('Army-Update')"
            />
            <FeatureBox
              :name="'All Paid'"
              @selected="status"
              :active="isExist('All-Paid')"
            />
            <FeatureBox
              :name="'File'"
              @selected="status"
              :active="isExist('File')"
            />
            <FeatureBox
              :name="'Others'"
              @selected="status"
              :active="isExist('Others')"
            />
          </div>
        </div>
        <section class="btn-section">
          <button class="btn" @click="searchQuery">Search</button>
        </section>
      </section>
      <div v-if="filteredItems.length">
        <div class="ads-counter">
          <h1>
            Properties For
            {{
              category == "rent" || $route.query.purpose == "1"
                ? "Rent"
                : category == "buy" || $route.query.purpose == "0" || !$route.query.purpose 
                ? "Buy"
                : "Buy/Rent"
            }}
          </h1>
          <h1>
            <span>Records :</span> {{ filteredAmount }} - Page {{ page }} of
            {{ totalPages }}
          </h1>
        </div>
        <div class="search-list" ref="goDiv">
          <PropertyList :filteredItems="filteredItems" />
        </div>
        <paginate
          v-if="totalPages && filteredItems.length"
          :page-count="totalPages"
          v-model="pageSelected"
          ref="paginate"
          :page-range="3"
          :margin-pages="2"
          :click-handler="clickCallback"
          :prev-text="'Prev'"
          :next-text="'Next'"
          :container-class="'pagination'"
          :page-class="'page-item'"
        ></paginate>
      </div>
      <div
        class="card-skeleton"
        v-else-if="!filteredItems.length && !properties.length"
      >
        <div class="pro-skeleton">
          <CardSkeleton v-for="(skeleton, index) in skeleton" :key="index" />
        </div>
        <!-- <div class="ads-skeleton">
          <img src="../assets/images/250x250.png" alt />
        </div> -->
      </div>
      <div class="not-found" v-else>
        <h6>SEARCH NOT FOUND</h6>
      </div>
    </section>
  </default-layout>
</template>
<script>
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
import FeatureBox from "@/components/common/FeatureBox.vue";
import TypeAndSubtype from "@/components/common/TypeAndSubtype.vue";
import BlueHead from "@/components/common/BlueHeader.vue";
import DetailNumbers from "@/components/common/DetailNumbers.vue";
import PropertyList from "@/components/PropertyList.vue";
import Paginate from "vuejs-paginate-next";
import CardSkeleton from "@/components/common/cardSkeleton.vue";
export default {
  name: "SearchView",
  components: {
    Paginate,
    DefaultLayout,
    FeatureBox,
    TypeAndSubtype,
    BlueHead,
    DetailNumbers,
    PropertyList,
    CardSkeleton,
  },
  data() {
    return {
      pageSelected: 1,
      ActivePagination: true,
      skeleton: 12,
      // pagination
      totalPages: 0,
      page: 1,
      // pagination
      filteredAmount: 0,
      filteredItems: [],
      images: {},
      image: [],
      category: "",
      dropdownCities: false,
      dropdownSociety: false,
      subTypecat: 0,
      society: {},
      // cities
      search: "",
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
        // {
        //   name: "Peshawar",
        //   isPop: false,
        //   society: [],
        // },
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
      typeData: [
        { type: "Plot", icon: "bath.png" },
        { type: "Home", icon: "bed.png" },
        { type: "Commercial", icon: "bath.png" },
        { type: "Farm House", icon: "bath.png" },
      ],
      subTypeData: [
        {
          propertySubType: [
            { type: "Residential", icon: "bath.png" },
            { type: "Commercial", icon: "bed.png" },
            { type: "Agricultural", icon: "bed.png" },
            { type: "Industrial", icon: "bath.png" },
            { type: "File", icon: "bath.png" },
            { type: "Plot Form", icon: "bed.png" },
          ],
        },
        {
          propertySubType: [
            { type: "House", icon: "bath.png" },
            { type: "Flat", icon: "bed.png" },
            { type: "Room", icon: "bed.png" },
            { type: "Penthouse", icon: "bath.png" },
          ],
        },
        {
          propertySubType: [
            { type: "Office", icon: "bath.png" },
            { type: "Shop", icon: "bed.png" },
            { type: "Warehouse", icon: "bed.png" },
            { type: "Factory", icon: "bath.png" },
            { type: "Building", icon: "bath.png" },
          ],
        },
        {
          propertySubType: [{ type: "Farm House", icon: "bath.png" }],
        },
      ],
      floorData: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15+",
      ],
      bedRooms: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      bathRooms: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      filter: {},
      statusArray: [],
      featureArray: [],
    };
  },
  computed: {
    searchCities() {
      var search = this.cities;
      return search.filter((city) =>
        city.name.toLowerCase().startsWith(this.filter.city.toLowerCase())
      );
    },
    searchSocietyFilter() {
      var search = this.society.society;
      return search.filter((city) =>
        city.toLowerCase().startsWith(this.filter.society.toLowerCase())
      );
    },
    properties() {
      return this.$store.state.properties;
    },
  },
  created() {
    this.filter = this.$route.query;
    this.selectedInputs();
    this.featuredInputs();
  },
  mounted() {
    var { purpose } = this.$route.query;
    if (purpose) {
      this.category == "rent";
    }else{
      this.category == "buy";
    }
    // if (this.filteredItems.length) {
    //   this.scrollToElement();
    // }
    const clickAway = () => {
      this.dropdownCities = false;
    };
    const clickAwaySociety = () => {
      this.dropdownSociety = false;
    };
    var el = document.getElementById("input");
    var ele = document.getElementById("society-input");
    document.addEventListener("click", function (event) {
      var isClickInsideElement = el.contains(event.target);
      var society = ele.contains(event.target);
      if (!isClickInsideElement) {
        clickAway();
      }
      if (!society) {
        clickAwaySociety();
      }
    });
  },
  methods: {
    statusFeatures(s) {
      if (!s.isAdd) {
        this.featureArray = this.featureArray.filter((val) => {
          return val != s.status.replace(/\s/g, "-");
        });
      } else {
        this.featureArray.push(s.status.replace(/\s/g, "-"));
      }
      this.filter.feature = this.featureArray.toString();
    },
    status(s) {
      if (!s.isAdd) {
        this.statusArray = this.statusArray.filter((val) => {
          return val != s.status.replace(/\s/g, "-");
        });
      } else {
        this.statusArray.push(s.status.replace(/\s/g, "-"));
      }
      this.filter.status = this.statusArray.toString();
    },
    isFeatureExist(val) {
      var active = this.featureArray.includes(val);
      return active;
    },
    isExist(val) {
      var active = this.statusArray.includes(val);
      return active;
    },
    priceSelect(e) {
      this.filter.price = e.target.value;
    },
    priceTo(e) {
      this.filter.priceto = e.target.value;
    },
    onPnumber(e) {
      this.filter.property_number = e.target.value;
    },
    onChange(e) {
      this.filter.area = e.target.value;
    },
    clickCallback(pageNum) {
      this.constructURL(pageNum);
    },
    searchQuery() {
      if (this.$refs.paginate) {
        this.$refs.paginate.handlePageSelected(1);
      }
      this.constructURL();
    },
    constructURL(page) {
      var url = "";
      var fl = "";
      delete this.$route.query.page;
      if (!page) {
        fl = this.filter;
      } else {
        fl = this.$route.query;
      }
      Object.keys(fl).forEach((e) => {
        if (fl[e] && fl[e] !== "undefined" && fl[e].length > 0)
          url += `${e}=${fl[e]}&`;
      });
      this.$router.push(`/search?${url}page=${page ? page : "1"}`);
      this.scrollToElement();
    },
    propertyDetail(detail) {
      var { type, value } = detail;
      if (type == "Floor") {
        return (this.filter.floor = value);
      } else if (type == "Bedrooms") {
        return (this.filter.bedrooms = value);
      } else if (type == "Bathrooms") {
        return (this.filter.bathrooms = value);
      }
    },
    propertyTypeSelected(v) {
      if (v.propertyType == "property") {
        this.subTypecat = v.id;
        if (v.value) {
          // this.$router.push(`/search?property_type=${v.value}&page=1`);
          this.filter.property_type = v.value;
          delete this.filter.sub_type;
        }
      } else {
        this.filter.sub_type = v.value;
      }
    },
    openDropdownSociety() {
      if (!this.filter.city && !this.$route.query.city) {
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
    selectedSociety(society) {
      this.filter.society = society;
      this.dropdownSociety = false;
    },
    scrollToElement() {
      const el = this.$refs.goDiv;
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
    openDropdown() {
      this.dropdownCities = true;
    },
    selectedCity(city) {
      this.society = city;
      this.filter.city = city.name;
      this.dropdownCities = false;
      this.filter.society = "";
    },
    typeSelect(type) {
      if (type == "rent") {
        this.filter.purpose = "1";
      } else {
        this.filter.purpose = "0";
        // if (this.filter.purpose) {
        //  this.filter.purpose = "1";
        // }
      }
      this.category = type;
    },
    filterProperty() {
      var query = this.$route.query;
      this.pageSelected = parseInt(query.page);
      var v = { ...query };
      var {
        page,
        price,
        priceto,
        status,
        area,
        area_type,
        purpose,
        phase,
        sub_type,
        block,
        sector,
        road,
        street,
        feature,
      } = query;
      if (page) {
        this.page = page;
      }
      delete v.price;
      delete v.priceto;
      delete v.status;
      delete v.feature;
      delete v.area;
      delete v.area_type;
      delete v.page;
      delete query.page;
      if (v.sub_type == "Residential/commercial") {
        delete v.sub_type;
      }
      // sorting array
      var superHot = this.$store.state.properties.filter(function (item) {
        return item.featured && item.feature_type == 0;
      });
      var Hot = this.$store.state.properties.filter(function (item) {
        return item.feature_type == "1";
      });
      var genaric = this.$store.state.properties.filter(function (item) {
        return !item.featured || item.feature_type == undefined;
      });
      var sortedArray = [...superHot, ...Hot, ...genaric];
      // sorting array
      var filtered = sortedArray.filter(function (item) {
        var x = item;
        for (var key in v) {
          if (
            x[key] === undefined ||
            (x[key] &&
              x[key].toString().toLowerCase().trim() !=
                v[key].toString().toLowerCase().trim())
          )
            return false;
        }
        return true;
      });
      var mTok = area / 20;
      var kTom = area * 20;
      var kToa = area / 8;
      var aTom = area * 160;
      var aTok = area * 8;
      var aToy = area * 4840;
      // area
      if (area) {
        filtered = filtered.filter((item) => {
          if (area_type == "Marla" || !area_type) {
            return (
              (item.area == area && item.area_type == "Marla") ||
              (item.area == mTok && item.area_type == "Kanal")
            );
          }
          if (area_type == "Kanal") {
            return (
              (item.area == kTom && item.area_type == "Marla") ||
              (item.area == area && item.area_type == "Kanal") ||
              (item.area == kToa && item.area_type == "Acre")
            );
          }
          if (area_type == "Acre") {
            return (
              (item.area == aTom && item.area_type == "Marla") ||
              (item.area == aTok && item.area_type == "Kanal") ||
              (item.area == area && item.area_type == "Acre") ||
              (item.area == aToy && item.area_type == "Yard")
            );
          }
          if (
            area_type != "Kanal" &&
            area_type != "Marla" &&
            area_type != "Acre"
          ) {
            return item.area == area && item.area_type == area_type;
          }
        });
      }
      // for price range
      if (price && !priceto) {
        filtered = filtered.filter((item) => {
          return item.price >= parseInt(price);
        });
      }
      if (!price && priceto) {
        filtered = filtered.filter((item) => {
          return item.price <= parseInt(priceto);
        });
      }
      if (price && priceto) {
        filtered = filtered.filter((item) => {
          return (
            item.price >= parseInt(price) && item.price <= parseInt(priceto)
          );
        });
      }
      // for price range
      // if (v.property_type == "Residential/commercial") {
      //   filtered = filtered.filter((item) => {
      //     return (
      //       item.property_type == "Residential" ||
      //       item.property_type == "Commercial"
      //     );
      //   });
      // }
      // sub type
      if (sub_type) {
        filtered = filtered.filter((item) => {
          if (sub_type == "Residential/commercial") {
            return (
              item.sub_type.toLowerCase() == "commercial" ||
              item.sub_type.toLowerCase() == "residential"
            );
          } else {
            return item.sub_type == sub_type;
          }
        });
      }
      function findCommonElement(array1, array2) {
        for (let i = 0; i < array1.length; i++) {
          for (let j = 0; j < array2.length; j++) {
            var ele = !array2[j].includes("-")
              ? array2[j].replace(/-/g, " ")
              : array2[j];
            if (array1[i] === ele) {
              return true;
            }
          }
        }
        return false;
      }
      if (status) {
        filtered = filtered.filter((item) => {
          var statusQ = status.split(",");
          if (!item.status) return;
          return findCommonElement(item.status, statusQ);
        });
      }
      if (feature) {
        filtered = filtered.filter((item) => {
          var statusQ = feature.split(",");
          if (!item.property_features) return;
          return findCommonElement(item.property_features, statusQ);
        });
      }
      // phase
      if (phase) {
        filtered = filtered.filter((item) => {
          return item.phase.trim() == phase.trim();
        });
      }
      // block
      if (block) {
        filtered = filtered.filter((item) => {
          return item.block.toLowerCase().trim() == block.toLowerCase().trim();
        });
      }
      // sector
      if (sector) {
        filtered = filtered.filter((item) => {
          return (
            item.sector.toLowerCase().trim() == sector.toLowerCase().trim()
          );
        });
      }
      // road
      if (road) {
        filtered = filtered.filter((item) => {
          return item.road.toLowerCase().trim() == road.toLowerCase().trim();
        });
      }
      //  street
      if (street) {
        filtered = filtered.filter((item) => {
          return (
            item.street.toLowerCase().trim() == street.toLowerCase().trim()
          );
        });
      }
      // rent or buy
      // if (purpose) {
        filtered = filtered.filter((item) => {
          if (purpose == 1) {
            if (item.purpose == "1") return true;
          } else {
            if (item.purpose == "0") return true;
          }
        });
      // }
      // pagination
      this.filteredAmount = filtered.length;
      this.totalPages = Math.ceil(filtered.length / 12);
      // pagination
      var copyFrom = (this.page - 1) * 12;
      var copyTo = this.page * 12;
      this.filteredItems = filtered.slice(copyFrom, copyTo);
    },
    selectedInputs() {
      this.filter = this.$route.query;
      if (this.filter.status) {
        var arrayStatus = this.filter.status.split(",");
        var remDash = arrayStatus.map((e) => {
          var ele = e.replace(/-/g, "-");
          return ele;
        });
        this.statusArray = remDash;
      } else {
        this.statusArray = [];
      }
    },
    featuredInputs() {
      this.filter = this.$route.query;
      if (this.filter.feature) {
        var arrayStatus = this.filter.feature.split(",");
        var remDash = arrayStatus.map((e) => {
          var ele = e.replace(/-/g, "-");
          return ele;
        });
        this.featureArray = remDash;
      } else {
        this.featureArray = [];
      }
    },
  },
  watch: {
    "filter.city": {
      handler(newValue) {
        if (newValue) {
          var search = this.cities;
          var results = search.filter(
            (city) => city.name.toLowerCase() == newValue.toLowerCase()
          );
          this.society = results[0];
          this.filter.society = "";
        }
      },
      // deep: true,
    },
    properties: {
      handler: function () {
        this.filterProperty();
      },
      // immediate: true,
    },
    "$route.query": {
      handler() {
        if (this.properties.length) {
          this.filterProperty();
          this.selectedInputs();
        }
      },
      immediate: true,
    },
  },
};
</script>
<style scoped>
.ads-counter {
  padding: 15px 22px 15px 0px;
  display: flex;
  justify-content: space-between;
}
.ads-counter span {
  color: #e30000;
}
.ads-counter h1 {
  font-size: 14px;
  font-weight: normal;
  color: #808080;
}
.not-found {
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eeee;
  margin-bottom: 30px;
}
.not-found h6 {
  font-size: 18px;
  letter-spacing: 2px;
  color: #808080;
}
.card-skeleton {
  display: flex;
  height: 100%;
}
.pro-skeleton {
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
}
.ads-skeleton {
  width: 25%;
  margin-top: 25px;
}
.ads-skeleton img {
  width: 100%;
}
.add-banner {
  margin: 5px 0 15px 0;
}
.add-banner img {
  width: 100%;
  height: 100%;
  border: 1px solid #808080;
}
.toggle-buttons {
  margin-top: 30px;
  width: max-content;
  box-shadow: 2px 4px 7px 0px #40404057;
  border-radius: 40px;
  overflow: hidden;
}
.toggle-buttons .btn {
  border-radius: 40px;
  background: #fff;
  color: #000;
  font-weight: bold;
  font-size: 14px;
  transition: 0.8s;
}
.toggle-buttons .btn.active {
  background: #07abd3;
  color: #fff;
}
.main-inputs {
  margin: 30px 0;
}
/* features-section start */
.features-section .features-head h6 {
  color: #000;
  font-size: 16px;
}
.features-section .features-head {
  padding: 14px 0 18px 0;
}
.features-list {
  display: flex;
  /* justify-content: space-between; */
  flex-wrap: wrap;
}
.features-list > div {
  margin-right: 18px;
  margin-bottom: 18px;
}
.check-buttons > div {
  display: flex;
  align-items: center;
}
.check-buttons input {
  outline: none;
  font-size: 14px;
  min-width: 140px;
  box-shadow: 0px 0px 10px #00000012;
  padding: 10px 5px;
  border: 1px solid gray;
  border-radius: 6px;
}
.property-number input {
  min-width: 383px;
}
.check-buttons .mid-to {
  margin: 0 10px;
}
.check-buttons .title {
  padding: 14px 0 18px 0;
}
.check-buttons .title h1,
.area-detail .title h1 {
  color: #000;
  font-size: 16px;
}
.range-section {
  display: flex;
  flex-wrap: wrap;
}
.range-section > div:nth-child(2) {
  margin-left: 60px;
}
.city-block .title {
  padding: 14px 0 18px 0;
}
.check-buttons .area {
  font-size: 14px;
  min-width: 140px;
  border: none;
  box-shadow: 0px 0px 10px #00000012;
  padding: 10px 5px;
  outline: none;
  margin-left: 10px;
  border: 1px solid gray;
  border-radius: 6px;
}
.area-input {
  position: relative;
  width: 36%;
}
#input-society {
  width: 100% !important;
}
#input-society .dropdown {
  width: 72% !important;
}
.area-input .dropdown {
  position: absolute;
  background: #fff;
  padding: 0px;
  z-index: 2;
  width: 99%;
  border: 1px solid #eee;
}
.area-input input {
  outline: none;
  font-size: 14px;
  min-width: 383px;
  box-shadow: 0px 0px 10px #00000012;
  padding: 10px 5px;
  border: 1px solid gray;
  border-radius: 6px;
}
.area-detail {
  margin-top: 20px;
}
.address-block {
  display: flex;
  flex-wrap: wrap;
}
.address-block .check-buttons {
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
  font-size: 12px;
  border: 1px solid #333;
  box-shadow: 0px 0px 10px #00000012;
  padding: 10px 5px;
  border-radius: 20px;
  color: #3333;
  background: #eee;
  min-width: 97% !important;
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
.search-list ul li {
  padding: 10px 0 !important;
  cursor: pointer;
}
.search-list ul li:first-child {
  font-weight: normal !important;
  padding: 10px;
}
.city-list ul li {
  font-size: 14px;
  color: #000;
  padding: 10px;
}
.features-section {
  margin: 30px 0;
}
.btn-section {
  display: flex;
  justify-content: center;
  margin: 16px 0 50px 0;
}
.btn-section .btn {
  padding: 16px 0px;
  color: #fff;
  border-radius: 40px;
  background-image: linear-gradient(90deg, #0cb2da, #0cb2da);
  font-size: 14px;
  min-width: 331px;
}
.block-code {
  position: relative;
}
.block-code .area-input {
  width: 71%;
}
@media (max-width: 479px) and (min-width: 320px) {
  .ads-skeleton {
    display: none;
  }
  .pro-skeleton {
    width: 100%;
    padding: 0 10px;
  }
  .add-banner {
    margin: 10px !important;
  }

  .filter-search {
    padding: 0 15px;
  }
  .range-section > div:nth-child(2) {
    margin-left: 0 !important;
  }
  .address-block .check-buttons {
    width: 100%;
    margin-right: 10px;
  }
  .check-buttons > div {
    width: 100%;
  }
  .check-buttons > div > div {
    width: 100%;
  }
  .address-block .check-buttons input {
    min-width: 100%;
    width: 100%;
  }
  .check-buttons input {
    width: 50%;
  }
  .property-number input {
    min-width: 98%;
  }
  .area-input {
    width: 100%;
  }
  .area-detail {
    width: 95%;
  }
  .dropdown-menu {
    min-width: 98%;
  }
  .area-input input {
    width: 100%;
    min-width: 100%;
  }
}
</style>
