<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-4 mb-2" v-for="beer in beers">
        <router-link :to="'/beers/' + beer.id">
          <div class="card text-white bg-dark mb-3">
            <img class="card-img-top" :src="beer.image_url" :alt="beer.name">
            <div class="card-body text-info">
              <h5 class="card-title">
                {{ beer.name }}
              </h5>
              <p class="card-text">{{ beer.price }}</p>
            </div>
          </div>
        </router-link>
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