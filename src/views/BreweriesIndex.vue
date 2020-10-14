<template>
  <div class="breweries-index">
    <h1 class="text-center mb-5">
      Breweries
    </h1>

    <div class="row">
      <div class="col-sm-4 mb-2" v-for="brewery in breweries">
        <router-link :to="'/breweries/' + brewery.id">
          <div class="card text-white bg-dark mb-3 h-100">
            <img :src="brewery.image_url" :alt="brewery.name" class="card-img-top index-img">
            <div class="card-body text-info">
              <h5 class="card-title">
                {{ brewery.name }}
              </h5>
              <p class="card-text">
                {{ brewery.name}}
              </p>
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
      breweries: [],
      id: "",
      name: "",
      description: ""
    }
  },
  created() {
    axios.get("/api/breweries").then((response) => {
      this.breweries = response.data;
    })
  }
}
</script>