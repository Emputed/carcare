<template>
    <Form></Form>
</template>

<script>
import axios from 'axios'
import Form from '@/components/Form.vue';
    export default{
        name: 'FormView',
        components:{
            Form
        },
        data(){
            return{
                autos:[]
            }
        },
        
    }
</script>