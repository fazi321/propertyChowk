<template>
  <div>
    <layout-home>
      <AgentDetails />
      <div
        class="container content-agent"
        v-if="$route.params.agent == 'babarkalyar'"
      >
        <h1>ABOUT MR. BABAR KALYAR</h1>
        <p>
          Babar Kalyar has been an active member of his DHA real estate
          community for 10 Years now, and is so excited to be turning that
          community focus toward growing marketing trends.
        </p>
        <p>
          With a passion for service in his area, Mr. Kalyar is ready to help
          with your home buying ,selling or investment needs. He carries the
          values of hard work, integrity, and outstanding client service into
          everything he does. Mr. Kalyar has also built a solid foundation of
          clients in this community through his professionalism, attention to
          detail, and commitment to always put his client’s needs first.
          Passionate about the growing trends of Pakistan Real Estate especially
          DHA market has continued to leverage his know-how and experience to
          exceed his client’s expectations.
        </p>
        <p>
          Mr. Kalyar is one of Property Chowk’s Top 50 Property Experts in
          Lahore. He is a self-proclaimed Realtor in DHA, promising the highest
          quality options for buyers, sellers and investors at same time.
        </p>
      </div>
      <div
        class="container content-agent"
        v-if="$route.params.agent == 'muhammadasif'"
      >
        <h1>ABOUT MR. Muhammad Asif</h1>
        <p>
          MR. Muhammad Asif has been an active member of his DHA real estate
          community for 10 Years now, and is so excited to be turning that
          community focus toward growing marketing trends. He carries the values
          of hard work, integrity, and outstanding client service into
          everything he does. Mr. Kalyar has also built a solid foundation of
          clients in this community through his professionalism, attention to
          detail, and commitment to always put his client’s needs first.
          Passionate about the growing trends of Pakistan Real Estate,
          especially the DHA market, has continued to leverage his know-how and
          experience to exceed his client’s expectations
        </p>
        <p>
          Mr. Asif is one of Property Chowk’s Top 50 Property Experts in Lahore.
          He is a self-proclaimed Realtor in DHA, promising the highest quality
          options for buyers, sellers and investors.
        </p>
      </div>
      <div
        class="container content-agent"
        v-if="$route.params.agent == 'malikasifjahangir'"
      >
        <h1>ABOUT Estate Master</h1>
        <p>
          Estate Master is an Authorized dealer of DHA Lahore, DHA Multan, .
          Being Pioneers of pakistan real estate agency they have been one of
          the fastest growing company in Pakistan. they provide professional
          services in sale, and purchase of DHA Lahore, DHA Multan, DHA
          Bahawalpur,DHA Peshawar, DHA Gujranwala, Bahria Town Lahore, State
          Life Phase 1 & 2, Sui Gas Phase 1 & 2 Lahore All kind of property
          Residential ,Commercial plots and Affidavit & Allocation files. they
          have been Authorized, Registered Dealer and Serve Large, Small Clients
          with Same Honesty and Hard Work.
        </p>
        <p>
          Estate Master is the all-round answer to real estate: they are
          consultants, Builder & Contractor( Commercial & Residential) marketers
          and investment advisers. They operate in selected societies all over
          the country, providing lucrative but safe investment opportunities.
          They always provide accurate and unbiased consultation and our
          consultants adhere to the highest standard of business ethics. Mr.
          Asif is one of Property Chowk’s Top 50 Property Experts in Lahore. He
          is a self-proclaimed Realtor in DHA, promising the highest quality
          options for buyers, sellers and investors through his Estate and team.
        </p>
      </div>
      <div
        class="container content-agent"
        v-if="$route.params.agent == 'miantalatahmad'"
      >
        <h1>ABOUT TALAT ESTATE</h1>
        <p>
          With a mission to empower consumers with information to make smart
          decisions, TALAT ESTATE has the largest inventory of luxury properties
          and best investment opportunities in the DHA. In addition, Talat
          Estate operates the largest real estate and Housing Projects in
          Pakistan. They are transforming the way consumers make home-related
          decisions and connect with professionals. CEO, Mr. Mian Talat and his
          team are professionals that specialize in searching, evaluating and
          negotiating the purchase of property on behalf of the buyer. They will
          sell your real estate, insights, tips and how-to Guides on selling
          property and preparing your home or investment property for sale and
          working to maximize your sale price.
        </p>
      </div>
      <div
        class="container content-agent"
        v-if="$route.params.agent == 'haiderayubbaig'"
      >
        <h1>ABOUT L.M REAL ESTATE</h1>
        <p>
          Haider Ayub Baig has been an active participant of Pakistan’s real
          estate community for the last 8 years. He is thrilled to be directing
          the community's attention toward developing marketing trends.
        </p>
        <p>
          Mr. Baig is prepared to assist you with your property buying, selling,
          or investing requirements since he is passionate about serving his
          community. He incorporates the principles of diligence, morality, and
          top-notch client service into all he does. His potential clients
          include big names like Lt. General Athar Ali, Mr. Mujahid Syed and
          others. Mr. Baig has successfully launched projects, societies and
          cities of his own to provide high investment opportunities to his
          clients. One of his projects includes HARAM CITY. Having Prime
          location at airport road Sambrial Sialkot. It has got the attention of
          thousands of clients and investors to invest in it and will be
          delivered within a year/ development is in process. He has continued
          to use his expertise and knowledge to surpass his clients'
          expectations since he is passionate about the expanding trends in
          Pakistani real estate, particularly the DHA market. Mr. Baig is one of
          Property Chowk’s Top 50 Property Experts in Lahore. He calls himself a
          Realtor in DHA and guarantees the best possible possibilities for
          buyers, sellers, and investors all at once.
        </p>
      </div>
      <div
        class="container content-agent"
        v-if="$route.params.agent == 'wasimsiyal'"
      >
        <h1>ABOUT Wasim Siyal</h1>
        <p>
          For the past five years, Wasim Siyal has been a prominent member of
          DHA's real estate industry. He and his team are experienced in DHA
          Lahore and DHA Bahawalpur. He is passionate and well-equipped to help
          you with your needs for purchasing, selling, or investing in real
          estate. He applies the values of diligence, morality, and excellent
          client service to all he does. He is been successfully dealing in
          projects, societies, and cities to provide high investment
          opportunities to his clients. He has continued to use his expertise
          and knowledge to surpass his client's expectations since he is
          passionate about the expanding trends in Pakistan’s real estate,
          particularly the DHA markets.
        </p>
        <p>
          Mr. Siyal is one of Property Chowk’s Top 50 Property Experts in
          Lahore. He is a top Realtor in DHA and guarantees the best possible
          possibilities for buyers, sellers, and investors all at once.
        </p>
      </div>
      <div
        class="container content-agent"
        v-if="$route.params.agent == 'mohsinmalik'"
      >
        <h1>ABOUT Mr. Mohsin Malik</h1>
        <p>
          For the past ten years, Mr. Mohsin Malik, CEO of Al-Nasr Real Estates
          and Marketing, has been an active member of Pakistan's real estate
          community. His Estate specializes in the buying and selling of
          residential and commercial properties in all askari housing schemes,
          defense housing authorities, and lands in Gwadar.
        </p>
        <p>
          Mr. Malik is ready to offer you the highest caliber of services and
          client fulfillment. He is successfully running a well-known real
          estate business with a committed workforce that provides full real
          estate services (including property management and development) and
          has strong investment and management skills.
        </p>
        <p>
          Mr. Malik is one of Property Chowk’s Top 50 Property Experts in
          Lahore. He is one of the top realtors in Pakistan, offering
          knowledgeable and reliable consulting to both domestic and
          international clients.
        </p>
      </div>
      <div
        class="container content-agent"
        v-if="$route.params.agent == 'mAmirMalik'"
      >
        <h1>ABOUT M. Amir Malik</h1>
        <p>
          M. Amir Malik is a highly professional real estate professional who
          has been helping home buyers find and buy a new home or commercial
          space. He has been working and making sure that the property is
          adequately marketed so potential buyers can find them! His expertise
          is in buying and selling houses and commercial plots in DHA Lahore and
          in various well-known societies. His great competence and work ethic
          make him one of a kind. His level of experience in real estate makes
          him one of the best real estate agents in the town. He has been
          working with leading investors from different areas and Army Persons
          to provide them with investment consultancy and highly profitable
          properties.
        </p>
        <p>
          Mr. Amir Malik is one of property chowk’s top 50 agents bringing
          excellence to the table.
        </p>
      </div>
      <!-- social media accounts  -->
      <div
        class="container content-agent"
        v-if="$route.params.agent == 'babarkalyar'"
      >
        <h1>Follow On Social Media</h1>
        <div class="social-accounts">
          <div>
            <a
              href="https://www.facebook.com/bkpropertymarketing/"
              target="_blank"
              class="social-image"
            >
              <img src="../assets/agent/Facebook.png" />
              <h1 class="title">Facebook</h1>
            </a>
          </div>
          <div>
            <a
              href="https://www.youtube.com/channel/UCiZjVSWZ3IySoSCOXEVw1yQ"
              target="_blank"
              class="social-image"
            >
              <img src="../assets/agent/youtube.png" />
              <h1 class="title">Youtube</h1>
            </a>
          </div>
          <div>
            <a
              href="https://www.instagram.com/bkpropertymarketing/"
              target="_blank"
              class="social-image"
            >
              <img src="../assets/agent/Instagram.png" />
              <h1 class="title">Instagram</h1>
            </a>
          </div>
          <!-- <div>
            <a href="https://www.facebook.com/bkpropertymarketing/" target="_blank" class="social-image">
              <img src="../assets/agent/Tiktok.png" />
              <h1 class="title">Tiktok</h1>
            </a>
          </div>
          <div>
            <a href="https://www.youtube.com/channel/UCiZjVSWZ3IySoSCOXEVw1yQ" target="_blank" class="social-image">
              <img src="../assets/agent/Whatsapp.png" />
              <h1 class="title">Whatsapp</h1>
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/bkpropertymarketing/" target="_blank" class="social-image">
              <img src="../assets/agent/Twitter.png" />
              <h1 class="title">Twitter</h1>
            </a>
          </div>-->
        </div>
      </div>
      <div
        class="container content-agent"
        v-else-if="$route.params.agent == 'malikasifjahangir'"
      >
        <h1>Follow On Social Media</h1>
        <div class="social-accounts">
          <div>
            <a
              href="https://estatemaster.pk/"
              target="_blank"
              class="social-image"
            >
              <img class="web" src="../assets/agent/web.png" />
              <h1 class="title">Website</h1>
            </a>
          </div>
          <div>
            <a
              href="https://www.youtube.com/channel/UCE8oyvYAMeOwoNZzQSr4EwQ"
              target="_blank"
              class="social-image"
            >
              <img src="../assets/agent/youtube.png" />
              <h1 class="title">Youtube</h1>
            </a>
          </div>
          <div>
            <a
              href="https://www.instagram.com/estatemastersofficial/"
              target="_blank"
              class="social-image"
            >
              <img src="../assets/agent/Instagram.png" />
              <h1 class="title">Instagram</h1>
            </a>
          </div>
          <!-- <div>
            <a href="https://www.facebook.com/bkpropertymarketing/" target="_blank" class="social-image">
              <img src="../assets/agent/Tiktok.png" />
              <h1 class="title">Tiktok</h1>
            </a>
          </div>
          <div>
            <a href="https://www.youtube.com/channel/UCiZjVSWZ3IySoSCOXEVw1yQ" target="_blank" class="social-image">
              <img src="../assets/agent/Whatsapp.png" />
              <h1 class="title">Whatsapp</h1>
            </a>
          </div>-->
          <div>
            <a
              href="https://twitter.com/EstateMaster2"
              target="_blank"
              class="social-image"
            >
              <img src="../assets/agent/Twitter.png" />
              <h1 class="title">Twitter</h1>
            </a>
          </div>
        </div>
      </div>
      <div
        class="container content-agent"
        v-else-if="$route.params.agent == 'miantalatahmad'"
      >
        <h1>Follow On Social Media</h1>
        <div class="social-accounts">
          <div>
            <a
              href="https://talatestate.com/"
              target="_blank"
              class="social-image"
            >
              <img class="web" src="../assets/agent/web.png" />
              <h1 class="title">Website</h1>
            </a>
          </div>
          <!-- <div>
            <a
              href="https://www.youtube.com/channel/UCE8oyvYAMeOwoNZzQSr4EwQ"
              target="_blank"
              class="social-image"
            >
              <img src="../assets/agent/youtube.png" />
              <h1 class="title">Youtube</h1>
            </a>
          </div>-->
          <div>
            <a
              href="https://www.facebook.com/TalatEstateOfficial/"
              target="_blank"
              class="social-image"
            >
              <img src="../assets/agent/Facebook.png" />
              <h1 class="title">Facebook</h1>
            </a>
          </div>
          <div>
            <a
              href="https://www.instagram.com/estatetalat/"
              target="_blank"
              class="social-image"
            >
              <img src="../assets/agent/Instagram.png" />
              <h1 class="title">Instagram</h1>
            </a>
          </div>
          <!-- <div>
            <a href="https://www.facebook.com/bkpropertymarketing/" target="_blank" class="social-image">
              <img src="../assets/agent/Tiktok.png" />
              <h1 class="title">Tiktok</h1>
            </a>
          </div>-->
          <!-- <div>
            <a href="https://www.youtube.com/channel/UCiZjVSWZ3IySoSCOXEVw1yQ" target="_blank" class="social-image">
              <img src="../assets/agent/Whatsapp.png" />
              <h1 class="title">Whatsapp</h1>
            </a>
          </div>-->
          <!-- <div>
            <a
              href="https://twitter.com/EstateMaster2"
              target="_blank"
              class="social-image"
            >
              <img src="../assets/agent/Twitter.png" />
              <h1 class="title">Twitter</h1>
            </a>
          </div>-->
        </div>
      </div>
      <div
        class="container content-agent"
        v-else-if="$route.params.agent == 'haiderayubbaig'"
      >
        <h1>Follow On Social Media</h1>
        <div class="social-accounts">
          <!-- <div>
            <a
              href="https://talatestate.com/"
              target="_blank"
              class="social-image"
            >
              <img class="web" src="../assets/agent/web.png" />
              <h1 class="title">Website</h1>
            </a>
          </div>-->
          <!-- <div>
            <a
              href="https://www.youtube.com/channel/UCE8oyvYAMeOwoNZzQSr4EwQ"
              target="_blank"
              class="social-image"
            >
              <img src="../assets/agent/youtube.png" />
              <h1 class="title">Youtube</h1>
            </a>
          </div>-->
          <div>
            <a
              href="https://www.facebook.com/LMRealEstates"
              target="_blank"
              class="social-image"
            >
              <img src="../assets/agent/Facebook.png" />
              <h1 class="title">Facebook</h1>
            </a>
          </div>
          <div>
            <a
              href="https://www.instagram.com/lm.realestates/"
              target="_blank"
              class="social-image"
            >
              <img src="../assets/agent/Instagram.png" />
              <h1 class="title">Instagram</h1>
            </a>
          </div>
          <div>
            <a
              href="https://www.facebook.com/haramcityphase2"
              target="_blank"
              class="social-image"
            >
              <img src="../assets/agent/Facebook.png" />
              <h1 class="title">Facebook</h1>
            </a>
          </div>
          <div>
            <a
              href="https://www.instagram.com/haramcityphase2/"
              target="_blank"
              class="social-image"
            >
              <img src="../assets/agent/Instagram.png" />
              <h1 class="title">Instagram</h1>
            </a>
          </div>
          <!-- <div>
            <a href="https://www.facebook.com/bkpropertymarketing/" target="_blank" class="social-image">
              <img src="../assets/agent/Tiktok.png" />
              <h1 class="title">Tiktok</h1>
            </a>
          </div>-->
          <!-- <div>
            <a href="https://www.youtube.com/channel/UCiZjVSWZ3IySoSCOXEVw1yQ" target="_blank" class="social-image">
              <img src="../assets/agent/Whatsapp.png" />
              <h1 class="title">Whatsapp</h1>
            </a>
          </div>-->
          <!-- <div>
            <a
              href="https://twitter.com/EstateMaster2"
              target="_blank"
              class="social-image"
            >
              <img src="../assets/agent/Twitter.png" />
              <h1 class="title">Twitter</h1>
            </a>
          </div>-->
        </div>
      </div>
      <div
        class="container content-agent"
        v-else-if="$route.params.agent == 'wasimsiyal'"
      >
        <h1>Follow On Social Media</h1>
        <div class="social-accounts">
          <!-- <div>
            <a
              href="https://talatestate.com/"
              target="_blank"
              class="social-image"
            >
              <img class="web" src="../assets/agent/web.png" />
              <h1 class="title">Website</h1>
            </a>
          </div>-->
          <!-- <div>
            <a
              href="https://www.youtube.com/channel/UCE8oyvYAMeOwoNZzQSr4EwQ"
              target="_blank"
              class="social-image"
            >
              <img src="../assets/agent/youtube.png" />
              <h1 class="title">Youtube</h1>
            </a>
          </div>-->
          <div>
            <a
              href="https://www.facebook.com/Pioneerestater/"
              target="_blank"
              class="social-image"
            >
              <img src="../assets/agent/Facebook.png" />
              <h1 class="title">Facebook</h1>
            </a>
          </div>
          <div>
            <a
              href="https://www.instagram.com/pioneerestater/"
              target="_blank"
              class="social-image"
            >
              <img src="../assets/agent/Instagram.png" />
              <h1 class="title">Instagram</h1>
            </a>
          </div>
          <div>
            <a
              href="https://www.youtube.com/channel/UCHBJIq6AqcQAn4nM-HoexCA"
              target="_blank"
              class="social-image"
            >
              <img src="../assets/agent/youtube.png" />
              <h1 class="title">Youtube</h1>
            </a>
          </div>
          <!-- <div>
            <a href="https://www.facebook.com/haramcityphase2" target="_blank" class="social-image">
              <img src="../assets/agent/Facebook.png" />
              <h1 class="title">Facebook</h1>
            </a>
          </div>
          <div>
            <a
              href="https://www.instagram.com/haramcityphase2/"
              target="_blank"
              class="social-image"
            >
              <img src="../assets/agent/Instagram.png" />
              <h1 class="title">Instagram</h1>
            </a>
          </div> -->
          <!-- <div>
            <a href="https://www.facebook.com/bkpropertymarketing/" target="_blank" class="social-image">
              <img src="../assets/agent/Tiktok.png" />
              <h1 class="title">Tiktok</h1>
            </a>
          </div>-->
          <!-- <div>
            <a href="https://www.youtube.com/channel/UCiZjVSWZ3IySoSCOXEVw1yQ" target="_blank" class="social-image">
              <img src="../assets/agent/Whatsapp.png" />
              <h1 class="title">Whatsapp</h1>
            </a>
          </div>-->
          <!-- <div>
            <a
              href="https://twitter.com/EstateMaster2"
              target="_blank"
              class="social-image"
            >
              <img src="../assets/agent/Twitter.png" />
              <h1 class="title">Twitter</h1>
            </a>
          </div>-->
        </div>
      </div>
      <div
        class="container content-agent"
        v-else-if="$route.params.agent == 'mohsinmalik'"
      >
        <h1>Follow On Social Media</h1>
        <div class="social-accounts">
          <!-- <div>
            <a
              href="https://talatestate.com/"
              target="_blank"
              class="social-image"
            >
              <img class="web" src="../assets/agent/web.png" />
              <h1 class="title">Website</h1>
            </a>
          </div>-->
          <!-- <div>
            <a
              href="https://www.youtube.com/channel/UCE8oyvYAMeOwoNZzQSr4EwQ"
              target="_blank"
              class="social-image"
            >
              <img src="../assets/agent/youtube.png" />
              <h1 class="title">Youtube</h1>
            </a>
          </div>-->
          <div>
            <a
              href="https://www.facebook.com/PropertyconsultantLHR/"
              target="_blank"
              class="social-image"
            >
              <img src="../assets/agent/Facebook.png" />
              <h1 class="title">Facebook</h1>
            </a>
          </div>
          <div>
            <a
              href="https://www.instagram.com/al_nasr_real_estate/"
              target="_blank"
              class="social-image"
            >
              <img src="../assets/agent/Instagram.png" />
              <h1 class="title">Instagram</h1>
            </a>
          </div>
          <!-- <div>
            <a
              href="https://www.youtube.com/channel/UCHBJIq6AqcQAn4nM-HoexCA"
              target="_blank"
              class="social-image"
            >
              <img src="../assets/agent/youtube.png" />
              <h1 class="title">Youtube</h1>
            </a>
          </div> -->
          <!-- <div>
            <a href="https://www.facebook.com/haramcityphase2" target="_blank" class="social-image">
              <img src="../assets/agent/Facebook.png" />
              <h1 class="title">Facebook</h1>
            </a>
          </div>
          <div>
            <a
              href="https://www.instagram.com/haramcityphase2/"
              target="_blank"
              class="social-image"
            >
              <img src="../assets/agent/Instagram.png" />
              <h1 class="title">Instagram</h1>
            </a>
          </div> -->
          <!-- <div>
            <a href="https://www.facebook.com/bkpropertymarketing/" target="_blank" class="social-image">
              <img src="../assets/agent/Tiktok.png" />
              <h1 class="title">Tiktok</h1>
            </a>
          </div>-->
          <!-- <div>
            <a href="https://www.youtube.com/channel/UCiZjVSWZ3IySoSCOXEVw1yQ" target="_blank" class="social-image">
              <img src="../assets/agent/Whatsapp.png" />
              <h1 class="title">Whatsapp</h1>
            </a>
          </div>-->
          <!-- <div>
            <a
              href="https://twitter.com/EstateMaster2"
              target="_blank"
              class="social-image"
            >
              <img src="../assets/agent/Twitter.png" />
              <h1 class="title">Twitter</h1>
            </a>
          </div>-->
        </div>
      </div>
      <div
        class="container content-agent"
        v-else-if="$route.params.agent == 'mAmirMalik'"
      >
        <h1>Follow On Social Media</h1>
        <div class="social-accounts">
          <!-- <div>
            <a
              href="https://talatestate.com/"
              target="_blank"
              class="social-image"
            >
              <img class="web" src="../assets/agent/web.png" />
              <h1 class="title">Website</h1>
            </a>
          </div>-->
          <!-- <div>
            <a
              href="https://www.youtube.com/channel/UCE8oyvYAMeOwoNZzQSr4EwQ"
              target="_blank"
              class="social-image"
            >
              <img src="../assets/agent/youtube.png" />
              <h1 class="title">Youtube</h1>
            </a>
          </div>-->
          <div>
            <a
              href="https://www.facebook.com/PropertyChowkPK/"
              target="_blank"
              class="social-image"
            >
              <img src="../assets/agent/Facebook.png" />
              <h1 class="title">Facebook</h1>
            </a>
          </div>
          <div>
            <a
              href="https://www.instagram.com/propertychowk/"
              target="_blank"
              class="social-image"
            >
              <img src="../assets/agent/Instagram.png" />
              <h1 class="title">Instagram</h1>
            </a>
          </div>
          <!-- <div>
            <a
              href="https://www.youtube.com/channel/UCHBJIq6AqcQAn4nM-HoexCA"
              target="_blank"
              class="social-image"
            >
              <img src="../assets/agent/youtube.png" />
              <h1 class="title">Youtube</h1>
            </a>
          </div> -->
          <!-- <div>
            <a href="https://www.facebook.com/haramcityphase2" target="_blank" class="social-image">
              <img src="../assets/agent/Facebook.png" />
              <h1 class="title">Facebook</h1>
            </a>
          </div>
          <div>
            <a
              href="https://www.instagram.com/haramcityphase2/"
              target="_blank"
              class="social-image"
            >
              <img src="../assets/agent/Instagram.png" />
              <h1 class="title">Instagram</h1>
            </a>
          </div> -->
          <!-- <div>
            <a href="https://www.facebook.com/bkpropertymarketing/" target="_blank" class="social-image">
              <img src="../assets/agent/Tiktok.png" />
              <h1 class="title">Tiktok</h1>
            </a>
          </div>-->
          <!-- <div>
            <a href="https://www.youtube.com/channel/UCiZjVSWZ3IySoSCOXEVw1yQ" target="_blank" class="social-image">
              <img src="../assets/agent/Whatsapp.png" />
              <h1 class="title">Whatsapp</h1>
            </a>
          </div>-->
          <!-- <div>
            <a
              href="https://twitter.com/EstateMaster2"
              target="_blank"
              class="social-image"
            >
              <img src="../assets/agent/Twitter.png" />
              <h1 class="title">Twitter</h1>
            </a>
          </div>-->
        </div>
      </div>
      <div class="container content-agent" v-else>
        <h1>Follow On Social Media</h1>
        <div class="social-accounts">
          <div>
            <a href="#" target="_blank" class="social-image">
              <img src="../assets/agent/Facebook.png" />
              <h1 class="title">Facebook</h1>
            </a>
          </div>
          <div>
            <a href="#" target="_blank" class="social-image">
              <img src="../assets/agent/youtube.png" />
              <h1 class="title">Youtube</h1>
            </a>
          </div>
          <div>
            <a href="#" target="_blank" class="social-image">
              <img src="../assets/agent/Instagram.png" />
              <h1 class="title">Instagram</h1>
            </a>
          </div>
          <div>
            <a href="#" target="_blank" class="social-image">
              <img src="../assets/agent/Tiktok.png" />
              <h1 class="title">Tiktok</h1>
            </a>
          </div>
          <div>
            <a href="#" target="_blank" class="social-image">
              <img src="../assets/agent/Whatsapp.png" />
              <h1 class="title">Whatsapp</h1>
            </a>
          </div>
          <div>
            <a href="#" target="_blank" class="social-image">
              <img src="../assets/agent/Twitter.png" />
              <h1 class="title">Twitter</h1>
            </a>
          </div>
        </div>
      </div>
      <MeetAgent />
      <Reviews
        v-if="$route.path == '/babarkalyar'"
        :id="'rlFRWr50pKPoU1oSJ5YAmWOV3v93'"
      />
      <Reviews
        v-if="$route.path == '/malikasifjahangir'"
        :id="'KGVZPkdNmOQBCP3fq18eGY4mp2j1'"
      />
      <Reviews
        v-if="$route.path == '/haiderayubbaig'"
        :id="'AubAsN1lZVTmHPH5p9INFj0mvGs2'"
      />
      <Reviews
        v-if="$route.path == '/wasimsiyal'"
        :id="'CbIlMsXNwVQqhChQmO9eyCvVOs33'"
      />
      <Reviews
        v-if="$route.path == '/mohsinmalik'"
        :id="'oAFQOPcyiSQ7kK7f10aiAqlfOzL2'"
      />
      <Reviews
        v-if="$route.path == '/mAmirMalik'"
        :id="'xpRD6SQsrxYGgpMudTFGE0iGEiH3'"
      />
      <Reviews v-if="$route.path == '/miantalatahmad'" :id="'KGVZP'" />
      <!-- <Reviews v-if="$route.path == '/muhammadasif'" :id="'rlFRWr50pKPoU1oSJ5YAmWOV3v93'" /> -->
      <!-- <NewProperty :data="Hot" title="Recent Properties" /> -->
      <NewProperty
        :data="propertiesByAgent"
        title="Featured Properties"
        :count="propertiesByAgent.length"
        :addType="'sup'"
        v-if="$route.path == '/babarkalyar'"
      />
      <NewProperty
        :data="estateMaster"
        title="Featured Properties"
        :count="estateMaster.length"
        :addType="'sup'"
        v-else-if="$route.path == '/malikasifjahangir'"
      />
      <NewProperty
        :data="haiderayubbaig"
        title="Featured Properties"
        :count="haiderayubbaig.length"
        :addType="'sup'"
        v-else-if="$route.path == '/haiderayubbaig'"
      />
      <NewProperty
        :data="wasimsiyal"
        title="Featured Properties"
        :count="wasimsiyal.length"
        :addType="'sup'"
        v-else-if="$route.path == '/wasimsiyal'"
      />
      <NewProperty
        :data="mohsinmalik"
        title="Featured Properties"
        :count="mohsinmalik.length"
        :addType="'sup'"
        v-else-if="$route.path == '/mohsinmalik'"
      />
      <NewProperty
        :data="mAmirMalik"
        title="Featured Properties"
        :count="mAmirMalik.length"
        :addType="'sup'"
        v-else-if="$route.path == '/mAmirMalik'"
      />
      <NewProperty
        :data="superHot"
        title="Featured Properties"
        :count="superHot.length"
        :addType="'sup'"
        v-else
      />
      <GalleryImages />
      <GetInTouch />
    </layout-home>
  </div>
</template>
<script>
import LayoutHome from "@/components/layouts/LayoutHome.vue";
import NewProperty from "@/components/home/newProperty.vue";
import AgentDetails from "@/components/agent/agentDetails.vue";
import MeetAgent from "@/components/agent/meetAgent.vue";
import GetInTouch from "@/components/agent/getInTouch.vue";
import Reviews from "@/components/agent/review.vue";
import GalleryImages from "@/components/agent/gallery.vue";
export default {
  name: "AgentView",
  components: {
    LayoutHome,
    NewProperty,
    AgentDetails,
    MeetAgent,
    GetInTouch,
    Reviews,
    GalleryImages,
  },
  data() {
    return {
      // tutorials: [],
      details: "",
    };
  },
  computed: {
    superHot() {
      var filteredFeatrued = this.$store.state.properties.filter((f) => {
        return f.featured && f.city == this.details && f.feature_type == 0;
      });
      if (!filteredFeatrued.length) {
        filteredFeatrued = this.$store.state.properties.filter((f) => {
          return f.featured && f.feature_type == 0; // && f.city == "Lahore"
        });
      }
      return filteredFeatrued;
    },
    propertiesByAgent() {
      var filteredFeatrued = "";
      if (!filteredFeatrued.length) {
        filteredFeatrued = this.$store.state.properties.filter((f) => {
          return f.seller_id == "rlFRWr50pKPoU1oSJ5YAmWOV3v93"; // && f.city == "Lahore"
        });
      }
      // seller_id rlFRWr50pKPoU1oSJ5YAmWOV3v93
      return filteredFeatrued;
    },
    estateMaster() {
      var filteredFeatrued = "";
      if (!filteredFeatrued.length) {
        filteredFeatrued = this.$store.state.properties.filter((f) => {
          return f.seller_id == "KGVZPkdNmOQBCP3fq18eGY4mp2j1"; // && f.city == "Lahore"
        });
      }
      // seller_id rlFRWr50pKPoU1oSJ5YAmWOV3v93
      return filteredFeatrued;
    },
    haiderayubbaig() {
      var filteredFeatrued = "";
      if (!filteredFeatrued.length) {
        filteredFeatrued = this.$store.state.properties.filter((f) => {
          return f.seller_id == "AubAsN1lZVTmHPH5p9INFj0mvGs2"; // && f.city == "Lahore"
        });
      }
      // seller_id rlFRWr50pKPoU1oSJ5YAmWOV3v93
      return filteredFeatrued;
    },
    wasimsiyal() {
      var filteredFeatrued = "";
      if (!filteredFeatrued.length) {
        filteredFeatrued = this.$store.state.properties.filter((f) => {
          return f.seller_id == "CbIlMsXNwVQqhChQmO9eyCvVOs33"; // && f.city == "Lahore"
        });
      }
      // seller_id rlFRWr50pKPoU1oSJ5YAmWOV3v93
      return filteredFeatrued;
    },
    mohsinmalik() {
      var filteredFeatrued = "";
      if (!filteredFeatrued.length) {
        filteredFeatrued = this.$store.state.properties.filter((f) => {
          return f.seller_id == "oAFQOPcyiSQ7kK7f10aiAqlfOzL2"; // && f.city == "Lahore"
        });
      }
      // seller_id rlFRWr50pKPoU1oSJ5YAmWOV3v93
      return filteredFeatrued;
    },
    mAmirMalik() {
      var filteredFeatrued = "";
      if (!filteredFeatrued.length) {
        filteredFeatrued = this.$store.state.properties.filter((f) => {
          return f.seller_id == "xpRD6SQsrxYGgpMudTFGE0iGEiH3"; // && f.city == "Lahore"
        });
      }
      // seller_id rlFRWr50pKPoU1oSJ5YAmWOV3v93
      return filteredFeatrued;
    },
    // Hot() {
    //   var filteredFeatrued = this.$store.state.properties.filter((f) => {
    //     return f.city == this.details && f.feature_type == 1;
    //   });
    //   if (!filteredFeatrued.length) {
    //     filteredFeatrued = this.$store.state.properties.filter((f) => {
    //       return f.feature_type == 1;
    //     });
    //   }
    //   return filteredFeatrued.slice(0, 20);
    // },
  },
};
</script>
<style scoped>
.web {
  width: 26px !important;
}
.content-agent {
  padding: 0 10px;
}
.content-agent h1 {
  font-size: 24px;
  font-weight: 600;
  padding: 15px 0;
  text-align: center;
  margin-top: 20px;
}

.content-agent p {
  margin-top: 10px;
  line-height: 1.4;
}
.social-accounts {
  display: flex;
  flex-wrap: wrap;
}
.social-accounts h1 {
  text-align: left;
}
.social-accounts a {
  text-decoration: none;
  color: gray;
  margin-right: 20px;
}

.social-image {
  display: flex;
  align-items: center;
}

.social-image h1 {
  margin-top: 0;
  font-size: 16px;
  color: #000;
}

.social-image img {
  width: 30px;
  margin-right: 10px;
  /* height: 60px; */
}
</style>
