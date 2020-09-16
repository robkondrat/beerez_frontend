<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">BeerEZ</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="dropdown-item" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="dropdown-item" to="/about/">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="dropdown-item" to="/beers/">Beers</router-link>
          </li>
          <li class="nav-item">
            <router-link class="dropdown-item" to="/breweries/">Breweries</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link class="dropdown-item" to="/breweries/">Breweries</router-link>
              <div class="dropdown-divider"></div>
              <router-link class="dropdown-item" to="/beers/">Beers</router-link>
            </div>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <router-view/>
  </div>
  
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* background-image: url('/Users/robkondratowicz/Desktop/Actualize/beerez_frontend/public/dark_wood.png'); */
  background-color: grey;

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
  color: green;
}

</style>
