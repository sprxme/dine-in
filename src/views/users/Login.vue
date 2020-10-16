<template>
  <div class="container-custom">
      <router-view />
      <b-carousel
        class="carousel-container"
        id="carousel"
        :interval="4000"
        indicators>
        
        <b-carousel-slide class="container-image">
          <template v-slot:img>
            <img
              class="img-fluid w-100 carousel-image"
              src="@/assets/about/bar.jpg"
              alt="image slot"
            >
          </template>
        </b-carousel-slide>

        <b-carousel-slide class="container-image">
          <template v-slot:img>
            <img
              class="img-fluid w-100 carousel-image"
              src="@/assets/about/conversation.jpg"
              alt="image slot"
            >
          </template>
        </b-carousel-slide>

        <b-carousel-slide class="container-image">
          <template v-slot:img>
            <img
              class="img-fluid w-100 carousel-image"
              src="@/assets/about/dining.jpeg"
              alt="image slot"
            >
          </template>
        </b-carousel-slide>
      </b-carousel>
      <img src="@/assets/food/xiaolongbao.jpg" class="image media-screen">
      <span class="screen-dim"></span>
    </div>
</template>

<script>

export default {
  name: 'login',
}
</script>

<style lang="scss" scoped>
.media-screen{
  display:none;
}

.image-carousel{
  background-size: cover;
  height:100vh;
  position: relative;
}

.image{
  height: 100vh;
  overflow: hidden;
  object-fit: cover;
}

.carousel-container{
  display:flex;
  min-height:100vh;
  overflow: hidden;
}

.container-custom{
  display:flex;
  width:100vw;
}

.screen-dim{
  display:none;
}

.carousel-image{
  background-size: contain;
  object-fit: cover;
}

.container-image {
  max-height: 100vh;
  height: 100%;
}

@media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 812px) 
  and (-webkit-min-device-pixel-ratio: 3){

  .media-screen{
    display:flex;
  }

  .carousel-container{
    display:none
  }
}

@media screen and (max-width:1024px){
  .carousel-container{
    display:none
  }

  .media-screen{
    display:flex;
  }

  .image{
    position: absolute;
    width:100vw;
    z-index: -99;
  }

  .image-container{
    position:absolute;
    width: 958px;
    max-width: 958px;
    min-width: 958px; 
    z-index: -98;
  }

  .screen-dim{
    display: flex ;
    position:fixed;
    padding:0;
    margin:0;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background:rgba(0,0,0,0.5);
    z-index: 97;
  }

  .container-custom{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
}
</style>