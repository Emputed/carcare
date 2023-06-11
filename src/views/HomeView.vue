<template>
  <div class="home">
    <NavBar></NavBar>
    <img alt="Vue logo" src="../assets/logo.svg">

    <div class="container text-center">
      <div class="row align-items-center">
        <div class="col">
          
        </div>
        <div class="col">
          One of three columns
        </div>
      </div>
    </div>

    <button type="button" to="/Form" class="btn btn-danger"><router-link to="/Form">Formulario</router-link></button>
    
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
