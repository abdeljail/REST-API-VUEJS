<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" :to="{name:'books'}">books</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'add_book'}">add book</router-link>
        </li>
      </ul>
      
    </nav>
	
	<router-view></router-view> 
    
  </div>
</template>

<script>
export default {
  name: 'App',
  
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
