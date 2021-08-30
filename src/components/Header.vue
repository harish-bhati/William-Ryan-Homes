<template>
<div class="wr__flex">
    <div class="wr__flex-2">Item 1</div>
    <div class="wr__flex-2">Item 2</div>
</div>
</template>

<script>
export default {
    name: 'Header'
}
</script>
<style lang="scss">
.wr__flex{
    @include flex(flex,center,center);
}
</style>
