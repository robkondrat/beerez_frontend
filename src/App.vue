<template>
  <div id="app">

    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="/">BeerEZ</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="/">Home</b-nav-item>
            <b-nav-item href="/beers/">Beers</b-nav-item>
            <b-nav-item href="/breweries/">Breweries</b-nav-item>

          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>

            <b-nav-item href="/carted_beers/">Cart</b-nav-item>


            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>Account</em>
              </template>
              <!-- <ul v-if="userEmail" class="navbar-nav ml-auto mr-4">
                <li class="nav-item text-light">Welcome, {{ userEmail }}</li>
              </ul> -->
              <b-dropdown-item href="/signup/">Signup</b-dropdown-item>
              <b-dropdown-item href="/login/">Login</b-dropdown-item>
              <b-dropdown-item href="/logout/">Logout</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <div class="container pt-5">
      <router-view/>
    </div>

    
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
  color: #2c3e50;
  /* background-image: url('/Users/robkondratowicz/Desktop/Actualize/beerez_frontend/public/dark_wood.png'); */
  background-color: darkolivegreen;

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

img {
  width: 150px;
  max-height: 300px;
}

body {
  font-family: "Hoefler Text", "Baskerville Old Face",Garamond,"Times New Roman", serif;
}

.navbar {
  background-color: #660066;
}

a.navbar-brand.text-my-green {
  color: #0A0;
}



</style>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      userEmail: "",
      titleFilter: "",
      beers: []
    };
  },
  created: function() {
    var email = localStorage.getItem("userEmail");
    if (email) {
      this.userEmail = email;
    }
    axios
      .get("/api/beers")
      .then(response => {
        this.recipes = response.data;
      });
  }
}
</script>
