<template>
  <div class="home">
    <div class="background"/>
    <div class="home">
      <div class="home__comparison-container">
        <section class="home__comparisonSection">
          <div class="home__title-container">
            <h1 class="home__title">FULL MOON</h1>
          </div>
          <div class="home__comparisonWrapper">
            <div class="home__comparisonImage beforeImage">
              <img src="@/assets/about/bar.jpg" alt="before">
            </div>
            <div class="home__comparisonImage afterImage">
              <img src="@/assets/about/conversation.jpg" alt="after">        
            </div>
          </div>
        </section>
      </div>
    </div>
    <div class='home__horizontal'>
      <section class='home__horizontal__text horizontal-animate'>
        <div class='home__horizontal__wtext text'>
          EAT. LAUGH. ENJOY. REPEAT. EAT. LAUGH. ENJOY. REPEAT.
        </div>
      </section>
      <section v-for="index in 4" :key="index" class='demo-gallery horizontal-animate'>
        <ul class='home__horizontal__wtext'>
          <li class="home__horizontal__list" v-for="index in 4" :key="index"> 
            <img class="home__horizontal__image" src="@/assets/about/shumai.jpg">
          </li>
        </ul>
      </section>
      <section class='home__horizontal__text horizontal-animate'>
        <div class='home__horizontal__wtext text'>
           EAT. LAUGH. ENJOY. REPEAT. EAT. LAUGH. ENJOY. REPEAT. 
        </div>
      </section>
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
      gsap.from(".home__title-container", {duration: 1.5, opacity: 0, ease:"power2.in"})
      gsap.from(".home__title-container", {duration: 2, y: -70, ease:"power2.out"})

      const tl = gsap.timeline({
        scrollTrigger:{
          trigger: ".home__title-container",
          start: 'top -70px',
          end: "90%",
          // markers:true,
          pin: true,
          scrub: true,
        }
      });
      tl.to(".home__title",{scale: 100})
        .from(".home__comparisonWrapper",{opacity: 0},0)
  
      gsap.utils.toArray(".home__comparisonSection").forEach(section => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top',
            end: () => "+=" + (section.offsetHeight + 500),
            // markers: true,
            scrub: true,
            pin: true,
            anticipatePin: 1
          },
          defaults: {ease: "none"}
        });
        tl.fromTo(section.querySelector(".afterImage"), {xPercent: 100, x: 0}, {xPercent: 0}, .3)
          .fromTo(section.querySelector(".afterImage img"), {xPercent: -100, x: 0}, {xPercent: 0}, .3);
      });
          
      gsap.utils.toArray(".horizontal-animate").forEach((section, index) => {
        const w = section.querySelector('.home__horizontal__wtext');
        const [x, xEnd] = (index % 2) ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
        gsap.fromTo(w, {  x  }, {
          x: xEnd,
          scrollTrigger: { 
            trigger: section, 
            scrub: 0.5 
          }
        });
      });
      
    }
  }
}
</script>

<style scoped lang="scss">

.background {
  position: absolute;
  background: #111;
  top: -60px;
  height: 60px;
  width: 100vw;
}

.home {
  background-color: #111;
  color: white;
  overflow-x: hidden;
  scroll-behavior: smooth;

  &__title-container {
    height: 90vh;
    position: relative;
    z-index: 99;
  }

  &__title {
    font-weight: 400;
    font-family: 'Montserrat', sans-serif;
    width: 100vw;
    text-align: center;
    letter-spacing: 25px;
    line-height: 1.5;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0 1rem 0 3rem;
  }

  &__comparison-container {
    height: 300vh;
    overflow: hidden;
  }

  &__comparisonSection {
    position: relative;
    height: 105vh;
    // padding-bottom: 105vh; /*56.25%; /* to maintain aspect ratio (responsive!) */
  }

  &__comparisonImage {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  &__comparisonImage img {
    width: 100%;
    height: 95%;
    position: absolute;
    top: 0;
    object-fit: cover;
  }

  &__horizontal{
    overflow: hidden;

    &__wtext{
      display: flex;
      padding-left: 1rem;
      list-style: none;
    }

    &__text .text{
      font-size: clamp(3rem, 15vw, 6rem);
      line-height: 1;
      font-weight: 900;
      white-space: nowrap;
    }

    &__list{
      flex-shrink: 0;
      width: clamp(500px, 60vw, 800px);
      padding-right: 1rem;
    }

    &__image{
      width: 100%;
      height: auto;
      background: #f0f0f0;
    }
  }
}

.afterImage {
  position: absolute;
  overflow: hidden;
  top: 0;
  transform: translate(100%, 0px);
}

.afterImage img {
  transform: translate(-100%, 0px);
}

</style>
