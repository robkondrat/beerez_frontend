<template>
  <div id="app">

    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="/"><img src="/logo.png" class="logo"></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav  class="b-nav-item">
            <b-nav-item href="/about">About</b-nav-item>
            <b-nav-item href="/">Beers</b-nav-item>
            <b-nav-item href="/breweries">Breweries</b-nav-item>

          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <b-nav-item class="b-nav-item" href="/carted_beers">Cart</b-nav-item>


            <b-nav-item-dropdown right>
              <template v-slot:button-content>
                <em class="b-nav-item">Account</em>
              </template>
              <b-dropdown-item href="/signup">Signup</b-dropdown-item>
              <b-dropdown-item href="/login">Login</b-dropdown-item>
              <b-dropdown-item href="/logout">Logout</b-dropdown-item>
              <b-dropdown-item href="/orders">Order History</b-dropdown-item>

            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <div class="container pt-5">
      <router-view/>
    </div>

    <footer>
      <p>BeerEZ - Created by <a href="http://robkondrat.github.io" target="_blank">Rob Kondratowicz</a></p>
    </footer>
  </div>
  
</template>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

$image-path: '~@/../mdb/mdbvue/img';
@import '~@/../mdb/mdbvue/scss/mdb-free.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.index-img {
  display: block;
  height: 300px;
  width: auto;
  object-fit: contain;
}

body {
  font-family: "Hoefler Text", "Baskerville Old Face",Garamond,"Times New Roman", serif;
}

.b-nav-item {
  font-size: 20px;
}

.navbar {
  background-color: #660066;
}

a.navbar-brand.text-my-green {
  color: #0A0;
}
.column {
  float: left;
  width: 50%;
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
  }
}
.brewery-website {
  color: skyblue;
}
.brewery-website:visited {
  color: orange;
}
.brewery-website:hover {
  color: white;
}
.brewery-website:active {
  color: orange;
}
.logo {
  width: 35%;
  float: left;
}
#left-nav-items {
  float: left;
}
footer {
  float: right;
}
</style>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      user: {
        id: "",
        email: ""
      },
      titleFilter: "",
      beers: []
    };
  }
}
</script>
