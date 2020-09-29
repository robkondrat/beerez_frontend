<template>
  <div class="container-fluid">
    <!-- <div class="col-sm-4 mb-2" v-for="beer in beers">
      <router-link :to="'/beers/' + beer.id">
        <b-card
          :title="beer.name"
          :img-src="beer.img_url"
          :img-alt="beer.name"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
          <b-img class="card-img-top" :src="beer.image_url"></b-img>
          <b-card-text>
            {{ beer.price }}
          </b-card-text>
        </b-card>
      </router-link>
    </div> -->
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