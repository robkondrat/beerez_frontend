<template>
  <div class="brewery-show">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h1>{{ brewery.name }}</h1>
          <p>{{ brewery.address }}</p>
          <p>{{ brewery.phone_number }}</p>
          <p>{{ brewery.website }}</p>
          <img :src="brewery.image_url" :alt="brewery.name" width=300>
          <p>{{ brewery.description }}</p>
          <p>Popular Beers:</p>
          <router-link v-for="beer in brewery.beers" :to="'/beers/' + beer.id">
            {{ beer.name }}
            <img :src="beer.image_url" :alt="beer.name">
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
        brewery: {
          id: "",
          name: "",
          address: "",
          phone_number: "",
          website: "",
          image_url: "",
          description: "",
          beers: []
        }
      };
    },
    created() {
      axios.get("/api/breweries/" + this.$route.params.id)
        .then(response => {
          console.log(response.data);
          this.brewery = response.data;
        })
    }
  }
</script>