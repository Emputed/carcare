<template>
    <span>{{ marca }}</span>

    <select v-model="marca" class="form-select form-select-sm" aria-label=".form-select-sm example">
        <option selected >Elige la marca</option>
        <option v-for="auto in autos" >{{ auto.text }}</option>
    </select>

    <select v-model="ano" class="form-select form-select-sm" aria-label=".form-select-sm example">
        <option selected >Elige el Year</option>
        <option v-for="year in years" >{{ year.text }}</option>
    </select>
</template>
    
<script>
import axios from 'axios'

export default {
    name: 'Form',
    data() {
        return {
            autos: [],
            marca: '',
            years: []
        }
    },
    methods: {
        async getCarro() {
            const carro = await axios.get('http://core-axa-dev.eba-vu2huqdp.us-east-1.elasticbeanstalk.com/v1/axa-car/brands')
            this.autos = carro.data
            console.log(this.autos)
        },
        async getYear(){
            const res = await axios.get(`http://core-axa-dev.eba-vu2huqdp.us-east-1.elasticbeanstalk.com/v1/axa-car/years?brand=${this.marca}`)
            this.year = res.data
            console.log(this.year)
        }
    },

}

</script>