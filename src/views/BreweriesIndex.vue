<template>
  <div class="container">
    <div class="row">
      <div class="col-sm" v-for="brewery in breweries">
        <div>
          <router-link :to="'/breweries/' + brewery.id">{{ brewery.name }}</router-link>
        </div>
        <div>
          <router-link :to="'/breweries/' + brewery.id">
            <img class="image-fluid" :src="brewery.image_url" :alt="brewery.name">
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