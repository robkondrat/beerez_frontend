<template>
  <div>
    <div class="row">
      <div class="column">
        <img :src="brewery.image_url" :alt="brewery.name" width=300>
        <p>{{ brewery.address }}</p>
        <p>{{ brewery.phone_number }}</p>
        <a :href="brewery.website" class="brewery-website">{{ brewery.website }}</a>
      </div>
      <div class="column">
        <p>{{ brewery.description }}</p>
      </div>
    </div>
    <div class="row">
      <h4 style="margin: 0 auto;">Popular Beers:</h4>
    </div>
    <div class="row">
      <div class="beer-column" v-for="beer in brewery.beers">
          <router-link  :to="'/beers/' + beer.id">
            <img :src="beer.image_url" :alt="beer.name" class="beer-image">
          </router-link>
      </div>
    </div>
  </div>
</template>

<style>

  img {
    max-height: 500px;
    object-fit: contain;
  }
  .row {
    padding: 10px;
  }
  .beer-image {
    /* max-width: 100px; */
    width: 200px;
    max-height: 200px;
    margin-bottom: 30px;
    object-fit: contain;
  }
  .beer-column {
    float: left;
    width: 25%;
  }
</style>
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
          this.brewery = response.data;
          this.beers = response.data.beers;

        })
    }
  }
</script>