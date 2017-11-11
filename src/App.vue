<template>
  <div class="container" id="app">
  <div class="">
    <ul>  <img src="./assets/logo.png">
    <li><router-link to="/home">Home</router-link></li>
    <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/news">News</router-link></li>
    <li><router-link to="/hellovuex">Vuex</router-link></li>
    <li><router-link to="/translator">translator</router-link></li>
    <li><router-link to="/users">Users</router-link></li>
      <li><router-link to="/firstroute/Peter">FirstRoute</router-link></li>
      <li><router-link to="/firstroute/Peter/child">FirstRouteChild</router-link></li>
    </ul>

  </div>

  <br/><br/><hr/>
    <router-view></router-view>
    <br/><br/><hr/>

    <div class="footer">
      <p>&copy <a href="http://nobeldesign.se" target="_blank">nobeldesign.se</a> | <a href="http://www.nobeldesign.se/?page_id=38" target="_blank">Imprint</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
