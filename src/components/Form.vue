<template>
    <select  class="form-select form-select-sm" aria-label=".form-select-sm example">
        <option selected >Open this select menu</option>
        <option v-for="auto in autos" value="{{ auto.text }}">{{ auto.text }}</option>
    </select>
</template>
    
<script>
import axios from 'axios'

export default {
    name: 'Form',
    data() {
        return {
            autos: []
        }
    },
    methods: {
        async getCarro() {
            const res = await axios.get('http://core-axa-dev.eba-vu2huqdp.us-east-1.elasticbeanstalk.com/v1/axa-car/brands')
            this.autos = res.data
            console.log(this.autos)
        }
    },
    mounted() {
        this.getCarro()
    }
}

</script>