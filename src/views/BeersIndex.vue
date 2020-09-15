<template>
  <div class="container">
    <div class="row">
      <div class="col-sm" v-for="beer in beers">
        <div>
          <router-link :to="'/beers/' + beer.id">{{ beer.name }}</router-link>
        </div>
        <div>
          <router-link :to="'/beers/' + beer.id">
            <img class="image-fluid" :src="beer.image_url" :alt="beer.name">
          </router-link>
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
      beers: [],
      id: "",
      name: "",
      description: ""
    }
  },
  created() {
    axios.get("/api/beers").then((response) => {
      this.beers = response.data;
    })
  }
}
</script>