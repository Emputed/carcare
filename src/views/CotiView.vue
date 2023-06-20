<template>
    <NavBar></NavBar>
    <Coti/>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Coti from '@/components/Coti.vue';
export default{
    name: 'CotiView',
    components:{
        Coti,
        NavBar
    }
}
</script>