<template>
  <div class="home">
    <section class="comparisonSection">
      <div class="comparisonImage beforeImage">
        <img src="@/assets/about/aboutimg1.jpg" alt="before">
      </div>
      <div class="comparisonImage afterImage">
        <img src="@/assets/about/aboutimg2.jpg" alt="after">        
      </div>
    </section>
  </div>
</template>

<script>
//import { gsap } from 'gsap'
export default {
  name: 'Home',
  methods: {
    // gsap.utils.toArray(".comparisonSection").forEach(section => {
    //   let tl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: section,
    //       start: "center center"
    //       end: () => "+=" + section.offsetWidth,
    //       scrub: true,
    //       pin: true,
    //       anticipatePin: 1
    //     },
    //   })
    // })
  }
}
</script>

<style scoped>

body {
  height: 300vh;
  background-color: #111;
  color: white;
  overflow-x: hidden;
}

h1, h2 {
  font-weight: 400;
  max-width: none;
}

.comparisonSection {
  position: relative;
  padding-bottom: 56.25%; /* to maintain aspect ratio (responsive!) */
}
.comparisonImage {
  width: 100%;
  height: 100%;
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
.comparisonImage img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}

</style>
