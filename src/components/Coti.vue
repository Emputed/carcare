<template>
  <div>
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
          <td>Mark</td>
          <td>  </td>    
        </tr>
        <tr>
          <th scope="row">Responsabilidad civil por daños a 3ros</th>
          <td>Jacob</td>
          <td>Thornton</td>          
        </tr>
        <tr>
          <th scope="row">Daños materiales</th>
          <td>Jacob</td>
          <td colspan="2">Larry the Bird</td>
        </tr>
        <tr>
          <th scope="row">Servicio de Asistencia</th>
          <td>Jacob</td>
          <td colspan="2">Larry the Bird</td>
        </tr>
        <tr>
          <th scope="row">Defensa legal</th>
          <td>Jacob</td>
          <td colspan="2">Larry the Bird</td>
        </tr>
        <tr>
          <th scope="row">Gastos médicos</th>
          <td>Jacob</td>
          <td colspan="2">Larry the Bird</td>
        </tr>
        <tr>
          <th scope="row">Costo</th>
          <td>Jacob</td>
          <td colspan="2">hola</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Coti",
  computed: {
    ...mapGetters({
      year: "getYear",
    }),
  },
  methods: {},
};
</script>
