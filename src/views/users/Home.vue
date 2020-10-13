<template>
  <div class="home">
    <div class="blank" />
    <div class="wrapper">
      <div class="img1" />
      <h2 class="title1">Lorem ipsum<br><span>Dolor sit amet.</span></h2>
      <div class="img2" />
      <h2 class="title2">Lorem ipsum<br>Dolor sit amet.</h2>
    </div>
    <div class="blank" />

  </div>
</template>

<script>
import { gsap, TweenMax } from 'gsap'
export default {
  name: 'Home',
  mounted: function() {
    this.startAnimations()
  },
  methods: {
    startAnimations: function() {
      var tl = gsap.timeline({onUpdate:updatePercentage})
      
      tl.to(".img2", 1, {width: "100%", height: "100%"}, 0)
      tl.to(".title1", 0.5, {opacity: 1}, 1)
      var tween1 = TweenMax.to(".img2", 1, {width: "100%", height: "100%"}, 0)
      const scene = this.$scrollmagic.scene({
        triggerElement: '.wrapper',
        triggerHook: 0,
        duration: "300%"
      })
      .setPin(".wrapper")
      //.setTween(".img2", 1, {width: "100%", height: "100%"}, 0)
      .setTween(tween1)
      this.$scrollmagic.addScene(scene)

      function updatePercentage() {
        tl.progress()
      }
    }
  }
}
</script>

<style scoped>

html {
  box-sizing: border-box;
  font-size: 100%;
}

*, *::before, *::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

body {
  width: 100%;
  -webkit-font-smoothing: antialiased;
  font-family: 'Open Sans', sans-serif;
  overflow-x: hidden;
  color: black;
  font-size: 16px;
}

.blank {
  width: 100%;
  height: 100vh;
}

.wrapper {
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
}

.img1 {
  background-image: url('logo.png');
  width: 60%;
  height: 60%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.title1 {
  position: absolute;
  top: 50%;
  left: 20%;
  font-size: 32px;
  transform: translate(-50%, -50%);
  opacity: 0;
}

.title1 span {
  font-size: 24px;
  font-weight: 400;
  display: block;
}

.img2 {
  z-index: 100;
  background-image: url('logo.png');
  width: 100%;
  height: 0;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
}

.title2 {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 60px;
  transform: translate(-50%, -50%);
  transform-origin: center center;
  text-align: center;
  line-height: 60px;
}

</style>
