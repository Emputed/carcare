<template>
    <Form></Form>
</template>

<script>

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