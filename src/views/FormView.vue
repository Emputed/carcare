<template>
    <div>
        <NavBar></NavBar>
        <div class="container text-center">
            <div class="row align-items-center">
                <div class="col">
                    <img src="../assets/car2.jpg" class="img-fluid" alt="...">
                </div>
                <div class="col">
                    <Form></Form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Form from '@/components/Form.vue';
import NavBar from '@/components/NavBar.vue';

export default {
    name: 'FormView',
    components: {
        Form,
        NavBar
    },

}
</script>