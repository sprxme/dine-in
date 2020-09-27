<template>
  <div class="about">
    <div>
      <img class ="about__banner" src="@/assets/about/aboutimage.jpg"/>
    </div>
    
    <div>
      <img class="about__logo" src="@/assets/about/logo2rev.png" />
    </div>

    <div class="about__title">
      <label>Supreme's premier restaurant</label>
      <label>Boasting an inimitably cozy dining experience. </label>
    </div>

    <div class="about__column">
        <div class="about__left">
            <label> text1</label>
            <label> text2 blabla</label>
            <label> text3blablabla</label>
        </div>

        <div class="about__right">
            <label> text1</label>
            <label> text2blabla</label>
            <label> text3blablabla</label>
        </div>
    </div>

    <div>
      <img class ="about__banner" src="@/assets/about/aboutimage.jpg"/>
    </div>

    <div class="about__desc">
      <label>A restaurant and bar inside a wine shop, Supreme's Kitchen is a sophisticated dining destination conveniently located in Jakarta's hip Thamrin and SCBD area. Our cellar is home to the largest wine selection in the country while the kitchen focuses on an extensive menu comprising of European and Asian favorites.</label>
      <span>View Menu</span>
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
    margin-top: 5em;
    padding-bottom: 1em ;
  }

  &__banner{
    width: 100vw;
    margin: -5rem 0em;
  }

  &__title{
    font-size: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__column{
    display: grid;
    margin: 10em 0 10em 0;
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
    font-size: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

}
</style>