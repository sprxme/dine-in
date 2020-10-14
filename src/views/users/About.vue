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




    <section class="container banner">
      <div class="banner__inner">
        <div class="banner__images">
          <img class="banner__image" src="@/assets/about/bar2.jpg"/>
        </div>
        <div class="banner__content">
          <div class="banner__caption">
            <span>Where are We?</span>
          </div>
        </div>
      </div>
    </section>




  
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

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default {
  name: 'Home',
  mounted: function() {
    this.startAnimation();
  },
  methods: {
    startAnimation: function() {
      gsap.registerPlugin(ScrollTrigger); //missing

      gsap.to(".banner", {
        scrollTrigger: {
          trigger: ".banner",
          scrub: true,
          pin: true,
          start: "center center",
          end: "bottom -100%",
          toggleClass: "active",
          ease: "power2"
        }
      });
      gsap.to(".banner__image", {
        scrollTrigger: {
          trigger: ".banner",
          scrub: 0.5,
          start: "top bottom",
          end: "bottom -300%",
          ease: "power2"
        },
        y: "-30%"
      });
    }
  }
}
</script>

<style lang="scss" scoped>

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  height: -webkit-fill-available;
  color: white;
  text-align: center;
}

.banner__inner {
  display: flex;
  position: relative;
  width: 100vw;
  max-height: 100vh;
  overflow: hidden;

  &::before {
    content: "";
    display: block;
    padding-bottom: calc(100% / (16 / 9));
  }
}

.banner__image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 160%;
  object-fit: cover;
}

.banner__content {
  display: none;
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.banner__caption {
  --padding: 1.5vmin;
  --duration: 400ms;
  --delay: calc(var(--duration) / 2);
  --ease: cubic-bezier(0.25, 1, 0.5, 1);

  position: relative;
  display: inline-block;
  font-size: 10vmin;
  overflow: hidden;
  margin-top: calc(var(--padding) * -1);
  padding: var(--padding);

  &::after {
    content: "";
    position: absolute;
    top: calc(100% - var(--padding));
    left: 0;
    background-color: white;
    width: 100%;
    height: 1.5vmin;
    transform: scaleX(0);
    transition: transform var(--duration) var(--delay) var(--ease);
  }

  span {
    display: block;
    transform: translateY(110%);
    transition: transform var(--duration) var(--ease);
  }

  .active & {
    &::after {
      transform: scaleX(1);
      transition-delay: 0s;
    }
    span {
      transform: translateY(0);
      transition-delay: var(--delay);
    }
  }
}



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