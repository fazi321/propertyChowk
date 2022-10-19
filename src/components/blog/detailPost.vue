<template>
  <div>
    <div class="blog-post" >
      <h1>{{ data.title }}</h1>
      <div class="post-card">
        <div class="posted">
          <div>
            <img src="../../assets/images/profileimage.png" />
          </div>
          <p>Gulmina Adil</p>
          <span>POSTED ON JULY 19, 2022</span>
        </div>
        <div class="post-image">
          <img v-lazy="require(`../../assets/images/${data.img}`)" />
          <!-- <img :src="require(`../../assets/images/${data.img}`)" /> -->
        </div>
        <div class="post-des">
          <div>
            <div v-html="data.description"></div>
          </div>
        </div>
        <div class="post-bottom">
          <!-- <div class="continue-btn">
            <div>
              <router-link to="/blog/post/1">CONTINUE READING...</router-link>
            </div>
          </div> -->
          <div class="view-container">
            <div>
              <img src="../../assets/images/profileimage.png" />
              <p>1</p>
            </div>
            <div>
              <img src="../../assets/images/profileimage.png" />
              <p>144 Views</p>
            </div>
            <div>
              <img src="../../assets/images/profileimage.png" />
              <p>0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "blogPost",
  props:['data']
};
</script>

<style>
.blog-post {
  margin-bottom: 20px;
}
.blog-post h1 {
  font-size: 32px;
  color: #333;
  font-weight: 600;
  line-height: 1.1;
  text-transform: capitalize;
}
.blog-post .posted {
  display: flex;
  align-items: center;
  padding: 15px 0;
}
.blog-post .posted div {
  width: 25px;
  height: 25px;
  border: 1px solid #eee;
  background: #eee;
  border-radius: 50%;
  padding: 2px;
}
.blog-post .posted div img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.blog-post .posted p {
  color: #000;
  font-size: 16px;
  font-weight: 600;
  margin: 0 10px;
}
.blog-post .posted span {
  color: #808080;
  font-size: 16px;
}
.post-image img {
  width: 100%;
}
.text-area h3 {
  display: none;
}
.post-des div h3 {
  padding: 10px 0;
  font-size: 22px;
  color: #333;
  font-weight: 500;
  text-transform: capitalize;
}
.post-des div {
  font-size: 16px;
  color: #333;
  letter-spacing: 0.5;
  line-height: 1.3;
  padding: 15px 0;
}

.post-bottom .continue-btn div a {
  text-decoration: none;
  font-size: 16px;
  color: #333;
  font-weight: 600;
  letter-spacing: 0.5;
  line-height: 1.3;
  padding: 5px 0;
  cursor: pointer;
  text-decoration: none;
}
.post-bottom {
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
}
.post-bottom .view-container {
  display: flex;
}
.post-bottom .view-container div {
  margin: 0 7px;
  display: flex;
  align-items: center;
}
.post-bottom .view-container div img {
  width: 12px;
}
.post-bottom .view-container div p {
  font-size: 12px;
  color: #000;
  margin-left: 5px;
  font-weight: 600;
}
.post-bottom .view-container div:first-child p {
  color: #808080 !important;
  font-weight: normal !important;
}
</style>