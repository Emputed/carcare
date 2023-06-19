<template>
  <form @submit="submitForm">
    <div>
        <h2>Seleccione los datos correspondientes</h2>
      <select
        @click="getCarro"
        v-model="marca"
        class="form-select form-select-lg mb-3"
        aria-label=".form-select-lg example"
      >
        <option selected>Eliga la marca</option>
        <option v-for="auto in autos">{{ auto.text }}</option>
      </select>

      <!-- Si la data MARCA es diferente de NULL -->
      <select
        v-if="marca == ''"
        class="form-select form-select-lg mb-3"
        aria-label=".form-select-lg example"
      >
        <option selected>Elige el año</option>
      </select>
      <!-- ELSE -->
      <select
        v-else
        @click="getYear"
        v-model="anio"
        class="form-select form-select-lg mb-3"
        aria-label=".form-select-lg example"
      >
        <option selected>Elige el año</option>
        <option v-for="year in years">{{ year.text }}</option>
      </select>

      <!-- Si la data MARCA y anio es diferente de NULL -->
      <select
        v-if="marca == '' || anio == ''"
        class="form-select form-select-lg mb-3"
        aria-label=".form-select-lg example"
      >
        <option selected>Elige el modelo</option>
      </select>
      <!-- ELSE -->
      <select
        v-else
        @click="getModel"
        v-model="modelo"
        class="form-select form-select-lg mb-3"
        aria-label=".form-select-lg example"
      >
        <option selected>Elige el modelo</option>
        <option v-for="model in models">{{ model.text }}</option>
      </select>

      <!-- Si la data MARCA, anio y MODELO es diferente de NULL -->
      <select
        v-if="marca == '' || anio == '' || modelo == ''"
        class="form-select form-select-lg mb-3"
        aria-label=".form-select-lg example"
      >
        <option selected>Elige la variante</option>
      </select>
      <!-- ELSE -->
      <select
        v-else
        @click="getVariants"
        v-model="variante"
        class="form-select form-select-lg mb-3"
        aria-label=".form-select-lg example"
      >
        <option selected>Elige la variante</option>
        <option v-for="variant in variants">{{ variant.text }}</option>
      </select>

      <button type="submit" class="btn btn-info">Formulario</button>
    </div>
  </form>
</template>

<script>
import axios from "axios";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Form",
  data() {
    return {
      autos: [],
      marca: "",
      years: [],
      anio: "",
      models: [],
      modelo: "",
      variants: [],
      variante: "",
    };
  },
  computed: {
    ...mapGetters({
      year: "getYear",
    }),
  },
  methods: {
    ...mapActions({
      modifyYear: "modifyYear",
    }),
    async getCarro() {
      const carro = await axios.get(
        "http://core-axa-dev.eba-vu2huqdp.us-east-1.elasticbeanstalk.com/v1/axa-car/brands"
      );
      this.autos = carro.data;
    },
    async getYear() {
      const res = await axios.get(
        `http://core-axa-dev.eba-vu2huqdp.us-east-1.elasticbeanstalk.com/v1/axa-car/years?brand=${this.marca}`
      );
      this.years = res.data;
    },
    async getModel() {
      const mod = await axios.get(
        `http://core-axa-dev.eba-vu2huqdp.us-east-1.elasticbeanstalk.com/v1/axa-car/models?brand=${this.marca}&year=${this.anio}`
      );
      this.models = mod.data;
    },
    async getVariants() {
      const vari = await axios.get(
        `http://core-axa-dev.eba-vu2huqdp.us-east-1.elasticbeanstalk.com/v1/axa-car/variants?brand=${this.marca}&model=${this.modelo}&year=${this.anio}`
      );
      this.variants = vari.data;
      console.log(this.variants);
    },
    submitForm() {
      this.modifyYear(this.anio);
      this.$router.push({ name: "Cotizacion" });
    },
  },
};
</script>

<style></style>
