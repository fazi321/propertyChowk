<template>
  <div class="skeleton-conatiner">
    <div class="card-skeleton">
      <div class="image-skeleton"></div>
      <p></p>
      <p></p>
    </div>
    <!-- <div class="card-skeleton">
      <div class="image-skeleton"></div>
      <p></p>
      <p></p>
    </div>
    <div class="card-skeleton">
      <div class="image-skeleton"></div>
      <p></p>
      <p></p>
    </div> -->
  </div>
</template>

<script>
export default {
data() {
    return {
    
    };
  },
};
</script>

<style>
.cards-skeleton .skeleton-conatiner{
  width: 23%!important;
}
.skeleton-conatiner {
  display: flex;
  justify-content: space-between;
   width: 23%;
}
.property-page .skeleton-conatiner {
   width: 32% !important;
}
.card-skeleton {
  width: 100%;
  height: 390px;
}
.card-skeleton .image-skeleton {
  background: #eee;
  height: 250px;
}
.card-skeleton p {
  height: 30px;
  background: #eee;
  margin-top: 20px;
  width: 90%;
}
.card-skeleton p:last-child {
  width: 60%;
}
@media (max-width: 479px) and (min-width: 320px) {
  .property-page .skeleton-conatiner {
   width: 48% !important;
}
  .skeleton-conatiner{
    width: 47%;
    height: 180px;
     margin: 10px 0;
  }
  .card-skeleton{
    height: 180px;
    margin: 10px 0;
  }
  .card-skeleton .image-skeleton{
    height: 100px;
  }
  .card-skeleton p{
    height: 20px;
  }
  .cards-skeleton{
    justify-content: center!important;
  }
  .cards-skeleton .skeleton-conatiner{
    display: none;
  }
  .cards-skeleton .skeleton-conatiner:first-child{
    width: 70%!important;
    display: block!important;
  }
  
}
</style>