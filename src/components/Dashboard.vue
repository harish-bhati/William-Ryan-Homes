<template>
<div class="container">
    <SideBar/><Header/>
    <Footer/>
</div>
    

</template>
<script>
import SideBar from '../components/SideBar.vue'
import Header from '../components/Header.vue'
import Footer from './DashboardFooter.vue'


export default {
   
    components: {
        SideBar,
        Header,
        Footer
       

    }
}
</script>
<style lang="scss">

</style>