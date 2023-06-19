<template>
    <div class="container text-center">
        <div class="row align-items-center">
            <div class="col">
                One of three columns
            </div>
            <div class="col">
                <Form></Form>
            </div>
        </div>
    </div>
</template>

<script>

import Form from '@/components/Form.vue';
export default {
    name: 'FormView',
    components: {
        Form
    },
    data() {
        return {

        }
    },

}
</script>