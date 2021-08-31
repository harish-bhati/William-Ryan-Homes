<template>
    <section class="appointment_list card">
    <div class="section_header">
    <h3 class="section_heading">My Appointments</h3>
     <a href="" class="link__text">View All</a>
      </div>
  </section>
</template>
<style lang="scss">
.card_header{
  @include flex(flex,space-between,center);
  margin-bottom: 24px;
    &_heading{
    font-size: 22px;
    line-height: 32px;
    color: $dark-blue;
   }
    &_link__text{
    color: $light-blue
    }
}
</style>
