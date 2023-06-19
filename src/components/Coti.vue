<template>
  <div class="container">
    <p>{{ year }}</p>
    <table class="table">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Cobertura Básica</th>
          <th scope="col">Cobertura Amplia</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Robo Total</th>
          <td> <img src="../assets/tache.png" height="15%" width="15%"> </td>
          <td> <img src="../assets/Light_green_check.png" height="10%" width="10%"> </td>    
        </tr>
        <tr>
          <th scope="row">Responsabilidad civil por daños a 3ros</th>
          <td><img src="../assets/Light_green_check.png" height="10%" width="10%"></td>
          <td><img src="../assets/Light_green_check.png" height="10%" width="10%"></td>          
        </tr>
        <tr>
          <th scope="row">Daños materiales</th>
          <td><img src="../assets/tache.png" height="15%" width="15%"></td>
          <td colspan="2"><img src="../assets/Light_green_check.png" height="10%" width="10%"></td>
        </tr>
        <tr>
          <th scope="row">Servicio de Asistencia</th>
          <td><img src="../assets/Light_green_check.png" height="10%" width="10%"></td>
          <td colspan="2"><img src="../assets/Light_green_check.png" height="10%" width="10%"></td>
        </tr>
        <tr>
          <th scope="row">Defensa legal</th>
          <td><img src="../assets/Light_green_check.png" height="10%" width="10%"></td>
          <td colspan="2"><img src="../assets/Light_green_check.png" height="10%" width="10%"></td>
        </tr>
        <tr>
          <th scope="row">Gastos médicos</th>
          <td><img src="../assets/Light_green_check.png" height="10%" width="10%"></td>
          <td colspan="2"><img src="../assets/Light_green_check.png" height="10%" width="10%"></td>
        </tr>
        <tr>
          <th scope="row">Costo</th>
          <td> {{ this.costoEstadar }} </td>
          <td colspan="2"> </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Coti",
  data(){
    return{
      costoEstadar: 1,
      costoPremium: 1,
      precioDef: 15000,
      multiplo : 1
    };
  },
  computed: {
    ...mapGetters({
      year: "getYear",
    }),
  },

  mounted(){
    if(this.year === "2023" || "2022" || "2021"){
      this.multiplo = this.precioDef * 0.5
      this.costoPremium = this.precioDef + this.multiplo
      this.costoEstadar = this.precioDef + (this.precioDef * .2)
    }
  },
};
</script>
