<template>
  <div class="home">

    <NavBar></NavBar>

    <!-- home 1 -->
    <div class="container-fluid text-center min-vh-80 w-100">

      <!-- Titulo -->
      <div class="container text-center mw-80 mh-10">
        <h2 class="mt-4">
          ¿QUIÉNES SOMOS?
        </h2>
      </div>

      <div class="container text-center rounded bg-light h-40 mw-4 p-4">
        Somos una empresa de seguros dirigida a los habitantes de la Alcaldía Venustiano Carranza que cuenten con un
        automóvil. Nos enorgullece ofrecer servicios de seguros de alta calidad y soluciones personalizadas para
        satisfacer las necesidades de nuestros clientes en esta área. Nos distinguimos por varios aspectos clave que nos
        hacen destacar en el mercado:
      </div>


      <div class="container text-center">
        <div class="row align-items-center">
          <div class="col">
            <ul>
              <li>Amplia gama de coberturas: Ofrecemos una amplia variedad de opciones de seguro de autos para adaptarnos
                a
                las necesidades individuales de nuestros clientes.</li>
              <li>Atención al cliente personalizada: Valoramos la relación con nuestros clientes y nos esforzamos por
                brindar un servicio excepcional.</li>
              <li>Soluciones asequibles: Reconocemos la importancia de ofrecer opciones de seguro accesibles sin
                comprometer
                la calidad de la cobertura.</li>
              <li>Compromiso con la satisfacción del cliente: Nuestra prioridad es garantizar la satisfacción de nuestros
                clientes.</li>
            </ul>
          </div>
          <div class="col"><img src="../assets/img1.png" class="img-fluid" alt="carcare"></div>
        </div>
      </div>
    </div>

    <!-- Home2 -->
    <div class="container-fluid text-center vh-90 w-100">
      <!-- Titulo -->
      <div class="container text-center mw-80 h-10">
        <h2 class="mt-4">
          ¿POR QUÉ ELEGIRNOS?
        </h2>
      </div>

      <div class="container text-center">
        <div class="row align-items-center">
          <div class="col">
            Como el mejor cotizador de seguros, nuestra empresa se destaca por una serie de razones convincentes que hacen
            que los clientes nos elijan sin dudarlo. Aquí hay algunas razones:
          </div>
          <div class="col">
            <img src="../assets/img2.png" class="img-fluid" alt="carcare">
          </div>
        </div>
      </div>

      <div class="container d-flex flex-row h-45 justify-content-between">
        <div class="container w-45 bg-light h-95">
          <img src="../assets/img3.png" class="img-fluid" alt="carcare">
        </div>
        <div class="container w-45 bg-light h-95">
          <ul>
            <li>Proceso sencillo y rápido: Entendemos que nuestros clientes valoran su tiempo, por lo que hemos diseñado
              una plataforma intuitiva y fácil de usar.</li>
            <li>Precios competitivos: Nos enorgullece ofrecer tarifas competitivas en el mercado de seguros.</li>
            <li>Transparencia y confiabilidad: Valoramos la transparencia en nuestra empresa. Nuestro cotizador de seguros
              muestra claramente los detalles y términos de cada póliza, evitando sorpresas desagradables en el futuro.
            </li>
            <li>Personalización y flexibilidad: Reconocemos que cada cliente tiene necesidades y requisitos únicos cuando
              se trata de seguros.</li>
          </ul>
        </div>
      </div>
    </div>
    <button class="btn btn-info">
      <RouterLink to="/Form">Cotiza ahora</RouterLink>
    </button>
  </div>


</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'HomeView',
  components: {
    NavBar
  }
}
</script>
