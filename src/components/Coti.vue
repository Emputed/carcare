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
          <td><img src="../assets/tache.png" height="15%" width="15%" /></td>
          <td>
            <img
              src="../assets/Light_green_check.png"
              height="10%"
              width="10%"
            />
          </td>
        </tr>
        <tr>
          <th scope="row">Responsabilidad civil por daños a 3ros</th>
          <td>
            <img
              src="../assets/Light_green_check.png"
              height="10%"
              width="10%"
            />
          </td>
          <td>
            <img
              src="../assets/Light_green_check.png"
              height="10%"
              width="10%"
            />
          </td>
        </tr>
        <tr>
          <th scope="row">Daños materiales</th>
          <td><img src="../assets/tache.png" height="15%" width="15%" /></td>
          <td colspan="2">
            <img
              src="../assets/Light_green_check.png"
              height="10%"
              width="10%"
            />
          </td>
        </tr>
        <tr>
          <th scope="row">Servicio de Asistencia</th>
          <td>
            <img
              src="../assets/Light_green_check.png"
              height="10%"
              width="10%"
            />
          </td>
          <td colspan="2">
            <img
              src="../assets/Light_green_check.png"
              height="10%"
              width="10%"
            />
          </td>
        </tr>
        <tr>
          <th scope="row">Defensa legal</th>
          <td>
            <img
              src="../assets/Light_green_check.png"
              height="10%"
              width="10%"
            />
          </td>
          <td>
            <img
              src="../assets/Light_green_check.png"
              height="10%"
              width="10%"
            />
          </td>
        </tr>
        <tr>
          <th scope="row">Gastos médicos</th>
          <td>
            <img
              src="../assets/Light_green_check.png"
              height="10%"
              width="10%"
            />
          </td>
          <td>
            <img
              src="../assets/Light_green_check.png"
              height="10%"
              width="10%"
            />
          </td>
        </tr>
      </tbody>
    </table>

    <table class="table">
      <tr>
        <th scope="row">Costo</th>
        <td>{{ this.costoEstadar }}</td>
        <td>{{ this.costoPremium }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Coti",
  data() {
    return {
      costoEstadar: 1,
      costoPremium: 1,
      precioDef: 18000,
      multiplo: 1,
    };
  },
  computed: {
    ...mapGetters({
      year: "getYear",
    }),
  },

  mounted() {
    if (this.year === "2023" || this.year === "2022" || this.year === "2021") {
      this.multiplo = this.precioDef * 0.7;
      this.costoPremium = this.precioDef + this.multiplo;
      this.costoEstadar = this.precioDef + this.precioDef * 0.3;
    } else if (
      this.year === "2020" ||
      this.year === "2019" ||
      this.year === "2018" ||
      this.year === "2017"
    ) {
      this.multiplo = this.precioDef * 0.6;
      this.costoPremium = this.precioDef + this.multiplo;
      this.costoEstadar = this.precioDef + this.precioDef * 0.3;
    }
    /*else  if (this.year === "2016" || "2015" || "2014" || "2013" || "2012") {
      this.multiplo = this.precioDef * 0.5
      this.costoPremium = this.precioDef + this.multiplo
      this.costoEstadar = this.precioDef + (this.precioDef * .3)
    }
    else  if (this.year === "2011" || "2010" || "2009" || "2008" || "2007") {
      this.multiplo = this.precioDef * 0.4
      this.costoPremium = this.precioDef + this.multiplo
      this.costoEstadar = this.precioDef + (this.precioDef * .2)
    }
    else  if (this.year === "2006" || "2005" || "2004" || "2003" || "2002" || "2001") {
      this.multiplo = this.precioDef * 0.3
      this.costoPremium = this.precioDef + this.multiplo
      this.costoEstadar = this.precioDef + (this.precioDef * .2)
    }
    else  if (this.year === "2000" || "1999" || "1998" || "1997" || "1996" || "1995" || "1994") {
      this.multiplo = this.precioDef * 0.2
      this.costoPremium = this.precioDef + this.multiplo
      this.costoEstadar = this.precioDef + (this.precioDef * .2)
    }
    else  if (this.year === "1993" || "1992" || "1991" || "1990" || "1989" || "1988" || "1987" || "1986" || "1985") {
      this.multiplo = this.precioDef * 0.2
      this.costoPremium = this.precioDef + this.multiplo
      this.costoEstadar = this.precioDef + (this.precioDef * .1)
    }
    else  if (this.year === "1984" || "1983" || "1982" || "1981" || "1980" || "1979" || "1978" || "1977" || "1976" || "1975") {
      this.multiplo = this.precioDef * 0.2
      this.costoPremium = this.precioDef + this.multiplo
      this.costoEstadar = this.precioDef + (this.precioDef * .1)
    }*/
  },
};
</script>
