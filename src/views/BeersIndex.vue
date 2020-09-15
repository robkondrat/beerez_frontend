<template>
  <div class="container">
    <div class="row">
      <div class="col" v-for="beer in beers">

          <img :src="beer.image_url" :alt="beer.name" width="200">


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