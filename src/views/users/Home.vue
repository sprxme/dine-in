<template>
  <div class="home">
    <div class="background"/>
    <div class="home__title-container">
      <h1 class="home__title">FULL MOON</h1>
    </div>
    <div class="home__comparison-container">
      <section class="home__comparisonSection">
        <div class="home__comparisonImage beforeImage">
          <img src="@/assets/about/bar.jpg" alt="before">
        </div>
        <div class="home__comparisonImage afterImage">
          <img src="@/assets/about/conversation.jpg" alt="after">        
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
      gsap.from(".home__title-container", {duration: 1.5, opacity: 0, ease:"power2.in"})
      gsap.from(".home__title-container", {duration: 2, y: -70, ease:"power2.out"})

      gsap.registerPlugin(ScrollTrigger); //missing
      gsap.utils.toArray(".home__comparisonSection").forEach(section => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top',
            end: () => "+=" + section.offsetHeight,
            // markers: true,
            scrub: true,
            pin: true,
            anticipatePin: 1
          },
          defaults: {ease: "none"}
        });
        tl.fromTo(section.querySelector(".afterImage"), {xPercent: 100, x: 0}, {xPercent: 0})
          .fromTo(section.querySelector(".afterImage img"), {xPercent: -100, x: 0}, {xPercent: 0}, 0);
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
    height: 260vh;
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
