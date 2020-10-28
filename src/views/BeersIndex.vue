<template>
  <div class="container-fluid">

    <img src="/logo.png">
    <h3>Select from our beer selection below for more info and to order!</h3>
    <div class="row">
      <div class="col-sm-4 mb-2" v-for="beer in beers">
        <router-link :to="'/beers/' + beer.id">
          <div class="card text-white bg-dark mx-auto mb-2 h-100">
              <img class="card-img-top index-img" :src="beer.image_url" :alt="beer.name">
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
<style>
.index-img {
  margin-top: 10px;
}
.card {
  padding-bottom: -50%;
  margin-bottom: 20px;
}
/* .shadowfilter {
  -webkit-filter: drop-shadow(12px 12px 7px rgba(255, 255, 255, 0));
  filter: drop-shadow(12px 12px 7px rgba(255, 255, 255, 0));
} */
</style>

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