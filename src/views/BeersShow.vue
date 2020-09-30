<template>
  <div class="beer-show">
    <h1>{{ beer.name }}</h1>
    <p>${{ beer.price }}</p>

    <label for="quantity">Quantity:</label>
    <input 
      type="number" 
      id="quantity" 
      name="quantity" 
      min="1"
      v-on:change="setQuantity($event)"
      >
    <button type="button" class="btn btn-primary" v-on:click="getQuantity($event)">Add to Cart</button>

    <p>{{ beer.category }}</p>
    <img :src="beer.image_url" :alt="beer.name" width=300>
    <p>{{ beer.description }}</p>
    <p>ABV: {{ beer.abv }}%</p>
      Brewery: 
      <div>
        <router-link :to="'/breweries/' + beer.brewery.id">
          {{ beer.brewery.name }}
        </router-link>
      </div>
      <div>
        <router-link :to="'/breweries/' + beer.brewery.id">
          <img :src="beer.brewery.image_url" :alt="beer.brewery.name">
        </router-link>
      </div>
  </div>
</template>

<script>
  var axios = require("axios");

  export default {
    data() {
      return {
        beer: {
          id: "",
          name: "",
          price: "",
          tax: "",
          is_discounted: "",
          categories: [],
          total: "",
          category: "",
          image_url: "",
          description: "",
          abv: "",
          in_stock: "",
          brewery: {
            id: "",
            name: "",
            image_url: ""
          }
        },
        formCompleted: false,
        selectedQuantity: ""
      };
    },
    created() {
      axios.get("/api/beers/" + this.$route.params.id)
        .then(response => {
          console.log(response.data);
          this.beer = response.data;
        });
    },
    methods: {
      setQuantity(event) {
        this.selectedQuantity = event.target.value
        console.log(this.selectedQuantity)
      },
      getQuantity(event) {
        // console.log(event.target)
      }
    }
  }
</script>