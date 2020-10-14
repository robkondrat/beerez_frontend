<template>
  <div class="brewery-show">
    <div class="column">
      <img :src="brewery.image_url" :alt="brewery.name" width=300>
      <p>{{ brewery.address }}</p>
      <p>{{ brewery.phone_number }}</p>
      <a :href="brewery.website" class="brewery-website">{{ brewery.website }}</a>
    </div>
    <div class="column">
      <p>{{ brewery.description }}</p>
    </div>
    <h4>Popular Beers:</h4>
      <div class="row">
        <div class="beer-column" v-for="beer in brewery.beers">
            <router-link  :to="'/beers/' + beer.id">
              <img :src="beer.image_url" :alt="beer.name" class="beer-image">
            </router-link>
        </div>
      </div>
    <!-- <Carousel :beers="beers" /> -->
    <!-- <div class="container">
      <div class="row">
        <div class="col-md-6">

          <p>Popular Beers:</p>
          <router-link v-for="beer in brewery.beers" :to="'/beers/' + beer.id">
            {{ beer.name }}
            <img :src="beer.image_url" :alt="beer.name">
          </router-link>

          </p>
        </div>
      </div>
    </div> -->
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
    max-width: 100px;
    object-fit: contain;
  }
  .beer-column {
    float: left;
    width: 25%;
  }

</style>
<script>
  // import Carousel from "@/components/Carousel.vue";
  var axios = require("axios");

  export default {
    // components: {
    //   Carousel
    // },
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
          this.beers = response.data.beers;

        })
    }
  }
</script>