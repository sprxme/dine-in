<template>
  <div class="about">
        <div class="container-container">
      <b-carousel
        class="container-carousel"
        id="carousel"
        :interval="4000"
        indicators>
        <b-carousel-slide
          class="carousel-image"
          img-src="@/assets/about/aboutimage.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          class="carousel-image"
          img-src="@/assets/about/aboutimg2.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          class="carousel-image"
          img-src="@/assets/about/aboutimg1.jpg"
        ></b-carousel-slide>
      </b-carousel>
    </div>

    
    <div>
      <img class="about__logo" src="@/assets/about/logo2rev.png" />
    </div>

    <div class="about__title">
      <label>Supreme's premier restaurant</label>
      <label>Boasting an inimitably cozy dining experience. </label>
    </div>

    <div class="about__garis">
      <div class="about__baris">
        <label class="about__boldtitle">About Us</label>
      </div>

      <div class="about__desc">
        <p class="about__par">
          A restaurant and bar inside a wine shop, 
          Supreme's Kitchen is a sophisticated dining destination
          conveniently located in Jakarta's hip Thamrin and SCBD area. 
          Our cellar is home to the largest wine selection in the country,
          while the kitchen focuses on an extensive comprising of European and Asian favorites. 
        </p>
      </div>
    </div> 
  
    <div class="about__column">

      <div class="about__left">
        <label style="font-weight:bold">GRAND INDONESIA</label>
        <label>1ST FLOOR</label>
        <label>JL. M.H THAMRIN NO.1</label>
        <label>JAKARTA 10310</label>
        <br>
        <label style="font-weight:bold">CONTACT US</label>
        <label style="text-decoration:underline">+6221 1063 8926</label>
      </div>

      <div class="about__right">
        <label style="font-weight:bold">PLAZA INDONESIA</label>
        <label>GROUND FLOOR</label>
        <label>JL. M.H THAMRIN NO.28-30</label>
        <label>JAKARTA 10350</label>
        <br>
        <label style="font-weight:bold">CONTACT US</label>
        <label style="text-decoration:underline">+6212 9612 5588</label>
      </div>
    </div>

  </div>
</template> 


<style lang="scss" scoped>
.about {
  padding:0rem 0em ;

  &__logo{
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2em;
    padding-bottom: 1em ;
  }

  &__banner{
    width: 100vw;
    margin: -8rem 0em;
  }

  &__title{
    font-size: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom:3em;
  }

  &__column{
    display: grid;
    margin: 0.5em 0 1em 0;
    padding: 5em 5em;
    grid-template-columns: repeat(2,1fr);
  }

  &__left{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__right{
    display: flex;
    flex-direction: column;
    align-items: center;
    border-left: 1px solid $light-grey;
    //height: 50em;
  }

  &__desc{
    padding-top:2em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__garis{
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-top: 1px solid $light-grey;
    margin:0vw 25vw;
  }

  &__baris{
    display: flex;
    white-space: nowrap;
    justify-content: center;
  }

  &__boldtitle{
    margin-top:2em;
    font-size: 25px;
    font-style: bold;
    flex-direction: column;
    align-items: center;

  }

  &__boldcolumn{
    font-size: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin:2em 15em 0em 15em; 
  }

  &__par{
    font-size: 18px;
    line-height: 2.5;
    text-align:center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin:0vw 10vw 2vw 10vw;
  }

}

.carousel-image{
  background-size: cover;
  position: relative;
  align-self: stretch;
  height:450px;
}

.countainer-carousel{
  display:flex;
  min-height:60vh;
  overflow: hidden;
}

.container-container{
  display:flex;
  width:100vw;
}

</style>