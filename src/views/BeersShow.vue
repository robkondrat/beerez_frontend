<template>
  <div class="beer-show">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h1>{{ beer.name }}</h1>
          <p>${{ beer.price }}</p>
          <p>{{ beer.category }}</p>
          <img :src="beer.image_url" :alt="beer.name" width=300>
          <p>{{ beer.description }}</p>
          <p>ABV: {{ beer.abv }}%</p>
          <p>
            Brewery: 
            <router-link :to="'/breweries/' + beer.brewery.id">{{ beer.brewery.name }}</router-link>
            <router-link :to="'/breweries/' + beer.brewery.id">
              <img :src="beer.brewery.image_url" :alt="beer.brewery.name">
            </router-link>

          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  var axios = require("axios");

  export default {
    data() {
      return {
        beer: {
          id: "",
          name: "",
          price: "",
          tax: "",
          is_discounted: "",
          categories: [],
          total: "",
          category: "",
          image_url: "",
          description: "",
          abv: "",
          in_stock: "",
          brewery: {
            id: "",
            name: "",
            image_url: ""
          }
        }
      };
    },
    created() {
      axios.get("/api/beers/" + this.$route.params.id)
        .then(response => {
          console.log(response.data);
          this.beer = response.data;
        })
    }
  }
</script>