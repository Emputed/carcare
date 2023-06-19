<template>
    <div>
        <span>{{ marca }}</span>
        <span>{{ modelo }}</span>
        <span>{{ ano }}</span>

        <select @click="getCarro" v-model="marca" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            <option selected>Elige la marca</option>
            <option v-for="auto in autos">{{ auto.text }}</option>
        </select>

        <!-- Si la data MARCA es diferente de NULL -->
        <select v-if="marca == ''" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            <option selected>Elige el Year</option>
        </select>
        <!-- ELSE -->
        <select v-else @click="getYear" v-model="ano" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            <option selected>Elige el Year</option>
            <option v-for="year in years">{{ year.text }}</option>
        </select>

        <!-- Si la data MARCA y ANO es diferente de NULL -->
        <select v-if="marca == '' || ano == ''" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            <option selected>Elige el modelo</option>
        </select>
        <!-- ELSE -->
        <select v-else @click="getModel" v-model="modelo" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            <option selected>Elige el modelo</option>
            <option v-for="model in models">{{ model.text }}</option>
        </select>

        <!-- Si la data MARCA, ANO y MODELO es diferente de NULL -->
        <select v-if="marca == '' || ano == '' || modelo == ''" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            <option selected>Elige la variante</option>
        </select>
        <!-- ELSE -->
        <select v-else @click="getVariants" v-model="variante" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            <option selected>Elige la variante</option>
            <option v-for="variant in variants">{{ variant.text }}</option>
        </select>

        <button type="button" class="btn btn-danger"><router-link to="/CotizacionView">Formulario</router-link></button>
    </div>
</template>
    
<script>
import axios from 'axios'

export default {
    name: 'Form',
    data() {
        return {
            autos: [],
            marca: '',
            years: [],
            ano: '',
            models: [],
            modelo: '',
            variants: [],
            variante: ''
        }
    },

    methods: {
        async getCarro() {
            const carro = await axios.get('http://core-axa-dev.eba-vu2huqdp.us-east-1.elasticbeanstalk.com/v1/axa-car/brands')
            this.autos = carro.data

        },
        async getYear() {
            const res = await axios.get(`http://core-axa-dev.eba-vu2huqdp.us-east-1.elasticbeanstalk.com/v1/axa-car/years?brand=${this.marca}`)
            this.years = res.data

        },
        async getModel() {
            const mod = await axios.get(`http://core-axa-dev.eba-vu2huqdp.us-east-1.elasticbeanstalk.com/v1/axa-car/models?brand=${this.marca}&year=${this.ano}`)
            this.models = mod.data

        },
        async getVariants() {
            const vari = await axios.get(`http://core-axa-dev.eba-vu2huqdp.us-east-1.elasticbeanstalk.com/v1/axa-car/variants?brand=${this.marca}&model=${this.modelo}&year=${this.ano}`)
            this.variants = vari.data
            console.log(this.variants)
        }
    },

}

</script>

<style></style>