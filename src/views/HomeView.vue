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

      <div class="container-fluid text-center rounded bg-light h-40 mw-4 p-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium quae repudiandae maiores minima consectetur
        illo quod dolore possimus quidem, esse quasi nemo ab nam eveniet blanditiis molestias aperiam, repellat culpa.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium quae repudiandae maiores minima consectetur
        illo quod dolore possimus quidem, esse quasi nemo ab nam eveniet blanditiis molestias aperiam, repellat culpa.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium quae repudiandae maiores minima consectetur
        illo quod dolore possimus quidem, esse quasi nemo ab nam eveniet blanditiis molestias aperiam, repellat culpa.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium quae repudiandae maiores minima consectetur
        illo quod dolore possimus quidem, esse quasi nemo ab nam eveniet blanditiis molestias aperiam, repellat culpa.

      </div>


      <div class="container-fluid d-flex flex-row h-50">

        <div class="container w-45 bg-light mh-80">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam laboriosam, neque non repellendus optio
          pariatur tempore unde ab consequatur qui sapiente, asperiores omnis molestias sunt enim rem quam odit magni.
        </div>
        <div class="container w-45 bg-light mh-80">
          <img src="../assets/img1.png" class="img-fluid" alt="carcare">
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

      <div class="container d-flex flex-row h-45 justify-content-between">

        <div class="container w-45 bg-light h-95">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam laboriosam, neque non repellendus optio
          pariatur tempore unde ab consequatur qui sapiente, asperiores omnis molestias sunt enim rem quam odit magni.
        </div>

        <div class="container w-45 bg-light h-95">
          <img src="../assets/img2.png" class="img-fluid" alt="carcare">
        </div>

      </div>

      <div class="container d-flex flex-row h-45 justify-content-between">

        <div class="container w-45 bg-light h-95">
          <img src="../assets/img3.png" class="img-fluid" alt="carcare">
        </div>


        <div class="container w-45 bg-light h-95">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam laboriosam, neque non repellendus optio
          pariatur tempore unde ab consequatur qui sapiente, asperiores omnis molestias sunt enim rem quam odit magni.
        </div>


      </div>
    </div>
    <RouterLink to="/Form">Cotiza ahora</RouterLink>
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
