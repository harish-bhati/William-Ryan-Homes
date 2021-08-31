<template>
    <div class="welcome_user_infor">
    <div class="user_welcome_message">
      Welcome back, Jane!
      <p>Here’s what’s happening with your home today</p>
    </div>
    <div class="recent_home_detail">
      <address>
        <p>12149 Fall Creek Court</p>
        <p>Hudson, FL 34669</p>
        <p>Pine Ridge Community</p>
        <p>Saratoga Plan</p>
        <p>1,425 sq ft, Elevation B</p>
        <p>Lot Number: 0001</p>
      </address>
      <div class="recent_home__image">
        <img src="../assets/images/icons/home_image.png" alt="">
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.welcome_user_infor{
 @include width_height_bg(100%, 188px, $light-blue);
 color:$white;
 box-shadow: $shadow;
 border-radius: $container-radius;
 padding-left:48px ;
 grid-column: 1/3;
 .user_welcome_message{
   font-size: 36px;
   line-height: 40px;
   p{
     font-size: 16px;
   }
 }
}
.welcome_user_infor{
@include flex(flex,space-between,center,);
}
.recent_home_detail{
  @include flex(flex,center,center,null,24px);
  text-align: $t-right;
  address{    
line-height: 18px;
font-style:normal;
  }
}
</style>
