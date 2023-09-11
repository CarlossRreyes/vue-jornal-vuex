<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Hola mundo</h1>

    <button @click="goToBook" class="btn btn-primary" >Hola</button>
    <button @click="goToBook" class="btn btn-success" >Hola</button>
    
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
    
  },

  methods: {
    goToBook(){
      this.$router.push({ name: 'no-entry' })
    }
  }
}
</script>
