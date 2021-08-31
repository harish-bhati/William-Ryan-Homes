<template>
<aside>  
    <div class="wrh_logo">
      <img src="../assets/images/WilliamRyanHomesLogo.png" alt="" class="wrh_logo__img">
    </div>
    <nav>
    <ul class="nav_list">
      <li class="list_item"><a href="" class="list_item__link">
           <DashboardIcon/> Dashboard </a></li>
      <li class="list_item"><a href="" class="list_item__link active"><i></i> Timeline </a></li>
      <li class="list_item"><a href="" class="list_item__link"><i></i> My message </a></li>
      <li class="list_item"><a href="" class="list_item__link"><i></i> My Photo </a></li>
      <li class="list_item"><a href="" class="list_item__link"><i></i> My Documents </a></li>
      <li class="list_item"><a href="" class="list_item__link"><i></i> Warranty</a></li>
    </ul>
  </nav>
</aside>
</template>
<script>
import DashboardIcon from '../assets/icons/DashboardIcon.vue'
export default {
      props: {
        msg: String
    },
    components: {
        DashboardIcon
    }
}
</script>