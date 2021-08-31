<template>
<div class="hello">
    <h1>{{ msg }}</h1>
    <DashboardIcon/>
</div>
</template>

<script>
import DashboardIcon from '../assets/icons/DashboardIcon.vue'
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    components: {
        DashboardIcon
    }
}
</script>
<style lang="scss">
h1{
  color: $red;
}
</style>
