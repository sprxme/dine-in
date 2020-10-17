<template>
  <div class="about">
    
    <div class="container-container">
      <b-carousel class="container-carousel" id="carousel"  v-model="slide" :interval="4000" controls indicators @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
        <b-carousel-slide class="container-image">
          <template v-slot:img>
            <img
              class="img-fluid w-100 carousel-image"
              src="@/assets/about/openinghours.jpeg"
              alt="image slot"
            >
          </template>
        </b-carousel-slide>
        <b-carousel-slide class="container-image">
          <template v-slot:img>
            <img
              class="img-fluid w-100 carousel-image"
              src="@/assets/about/queue.jpeg"
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
    </div>

    <!--
    <div>
      <img class="about__logo" src="@/assets/about/logo2rev.png" />
    </div>

    <div class="about__title">
      <p>Supreme's premier dimsum restaurant Boasting an inimitably cozy dining experience. </p>
    </div>
    -->

    <div class="about__garis">
      <div class="about__baris">
        <label class="about__boldtitle">ABOUT US</label>
      </div>

      <div class="about__desc">
        <p class="about__par">
          A restaurant and bar inside, 
          FULL MOON's Kitchen is a sophisticated dining destination
          conveniently located in Jakarta's hip Thamrin and SCBD area. 
          Our cellar is home to the largest wine,vodka and whiskey selection in the country,
          while the kitchen focuses on an extensive comprising Asian favorites. 
        </p>
      </div>
    </div> 

    <section class="container-paralax banner">
      <div class="banner__inner">
        <div class="banner__images">
          <img class="banner__image" src="@/assets/about/bar2.jpg"/>
        </div>
      </div>
      <div class="banner__content">
        <div class="banner__caption"> 
          <span class="caption">WHERE ARE WE?</span>
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
  data: function() {
    return {
      slide: 0,
      sliding: null
    }
  },
  mounted: function() {
    this.startAnimation();
  },
  methods: {
    startAnimation: function() {
      gsap.from(".about__logo", {duration: 2, opacity: 0, ease:"power2.in"}) 
      gsap.from(".about__logo", {duration: 2, y: -70, ease:"power2.out"})

      gsap.from(".about__title", {duration: 1.5, opacity: 0, ease:"power2.in"})
      gsap.from(".about__title", {duration: 2, y: -70, ease:"power2.out"})

      gsap.from(".about__garis", {duration: 1.5, opacity: 0, ease:"power2.in"})
      gsap.from(".about__garis", {duration: 2, y: -70, ease:"power2.out"})

      gsap.registerPlugin(ScrollTrigger); //missing

      gsap.to(".banner", {
        scrollTrigger: {
          trigger: ".banner",
          scrub: true,
          // markers: true,
          //pin: true,
          start: "50% 80%",
          end: "bottom -100%",
          toggleClass: "active",
          ease: "power2"
        }
      });
      gsap.to(".banner__image", {
        scrollTrigger: {
          trigger: ".container-container",
          scrub: 0.5,
          // markers:true,
          start: "top bottom",
          end: "bottom -300%",
          ease: "power2"
        },
        y: "-30%"
      });
    },

    onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
  }
}
</script>

<style lang="scss" scoped>

.container-paralax {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 400px;
  // height: 100vh;
  // height: -webkit-fill-available;
  color: white;
  text-align: center;
  overflow: hidden;
  position: relative;
}

.banner__inner {
  min-width: 300px;
  display: flex;
  position: relative;
  width: 100vw;
  height: 200%;
  // max-height: 100vh;
  overflow: hidden;

  &::before {
    content: "";
    display: block;
    // padding-bottom: calc(100% / (16 / 9));
  }
}

.banner__image {
  // position: absolute;
  // top: 0;
  // left: 0;
  width: 100vw;
  height: 100%;
  object-fit: cover;
  filter: brightness(95%);
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

.caption {
  font-size: 32px;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 10px;
  font-weight: 600;
  max-width: 80vw;
  // margin-bottom: .5rem;
}

.banner__caption {
  --padding: 1.5vmin;
  --duration: 400ms;
  --delay: calc(var(--duration) / 2);
  --ease: cubic-bezier(0.25, 1, 0.5, 1);

  position: absolute;
  display: inline-block;
  overflow: hidden;
  // min-width: 300px;
  // margin-top: calc(var(--padding) * -1);
  top: 50%;
  transform: translateY(-50%);
  padding: var(--padding);

  &::after {
    content: "";
    position: absolute;
    top: calc(100% - var(--padding));
    left: 0;
    background-color: white;
    width: 100%;
    height: 3px;
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
  background-color: #111;
  color: white;
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
    max-width: 500px;
    margin-top: 1vw;
    margin-left: auto;
    text-align: center;
    margin-right: auto;
    padding-bottom:3em;
    line-height: 2;
  }

  &__column{
    display: grid;
    margin: 0.5em 0 1em 0;
    padding: 4em 5em;
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
    //border-top: 1px solid $light-grey;
    max-width: 550px;
    margin: 0rem 2rem 10rem;
    margin-left: auto;
    margin-right: auto;
  }

  &__baris{
    display: flex;
    white-space: nowrap;
    justify-content: center;
  }

  &__boldtitle{
    margin-top:4em;
    font-size: 30px;
    flex-direction: column;
    align-items: center;
    font-family: 'Montserrat', sans-serif ;
    margin-bottom: 1em;
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
    line-height: 3.5;
    text-align:center;
    display: flex;
    flex-direction: column;
    align-items: center;
    //margin:0rem 0rem 1rem 2rem;
    font-family: 'Montserrat', sans-serif ;
  }

}

.carousel-image{
  background-size: contain;
  object-fit: cover;
  transform: translateY(-100px);
}

.container-image {
  max-height: 550px;
  height: 100%;
}

.countainer-carousel{
  height: 100px;
}

@media screen and (max-width: 1000px){
    .about{
        &__column { 
            grid-template-columns: repeat(1,1fr);
        }

        &__right{
          border-left: 0px;
          //height: 50em;
        }
    }
}
</style>