<template>
  <div class="about">
    <div>
      <img class ="about__imageabout" src="@/assets/about/aboutimage.jpg"/>
    </div>
    
    <div>
      <img class="about__logo" src="@/assets/about/logo2rev.png" />
    </div>

    <div>
      <label class="about__desc">Jakarta’s premier wine bar and shop,</label>
      <label class="about__desc">boasting an inimitably cozy dining and drinking experience. </label>
    </div>

    <div class="about__column">
        <div class="about__left">
            <label class="about__desc"> text1</label>
            <label class="about__desc"> text2 blabla</label>
            <label class="about__desc"> text3blablabla</label>
        </div>

        <div class="about__right">
            <label class="about__desc"> text1</label>
            <label class="about__desc"> text2blabla</label>
            <label class="about__desc"> text3blablabla</label>
        </div>
    </div>

  </div>
</template> 
<style lang="scss" scoped>
.about{
  padding:0rem 0em ;

    &__title{
        font-size: 50px;
        font-weight: 550;
        margin: 35px 0px 50px 7vw;
    }
  
    &__logo{
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-top: 5em;
        padding-bottom:1em ;

    }

    &__imageabout{
      margin: -5rem 0em;
    }

    &__desc{
      font-size:20px;
      display:flex;
      justify-content: center;
      //margin-right:auto;
   }

  &__column{
    display:grid;
    margin-top:4em;
    padding-left:5em;
    padding-right:5em;
    grid-template-columns: repeat(2,1fr);
  }

   &__left{
        display:flex;
        flex-direction: column;
        justify-content: center;
        //border-left: 1px solid $light-grey;
       // padding: 10px 150px 30px 2.5rem;
    }

    &__right{
        display:flex;
        flex-direction: column;
        justify-content: center;
       border-left: 1px solid $light-grey;
       // padding: 10px 150px 30px 2.5rem;
    }


}
</style>