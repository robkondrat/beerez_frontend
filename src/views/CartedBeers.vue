<template>
  <div class="container">
    <div class="row" v-for="cartedBeer in carted_beers">
      <div class="col-sm">
        <div class="row">
          <div class="col-sm">
            <router-link :to="'/beers/' + cartedBeer.beer.id">
              <img class="image-fluid" :src="cartedBeer.beer.image_url" :alt="cartedBeer.beer.name" style="max-width: 50px;">
            </router-link>
          </div>
          <div class="col-sm" style="left: -20%; text-align: left;">
            <br>
            <b><router-link :to="'/beers/' + cartedBeer.beer.id">{{ cartedBeer.beer.name }}</router-link></b>
            <div>{{ cartedBeer.beer.brewery.name }}</div>
            <div>${{ cartedBeer.beer.price }}</div>
            <div>x {{ cartedBeer.quantity }}</div>
            <div>Subtotal: ${{ cartedBeer.subtotal }}</div>
          </div>
        </div>
        <hr style="height:2px;border-width:0;color:gray;background-color:gray">
      </div>
    </div>
    <div class="row">
      <button v-on:click="goToCheckout()">Checkout</button>
    </div>
  </div>
</template>

<style>
/* img {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 150px;
}

img:hover {
  box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
} */
</style>

<script>
  var axios = require("axios");

  export default {
    data() {
      return {
        carted_beers: [],
        id: "",
        status: "",
        user_id: "",
        beer_id: "",
        quantity: "",
        order_id: "",
        subtotal: "",
        beer: {
          id: "",
          name: "",
          price: "",
          tax: "",
          is_discounted: "",
          total: "",
          category: "",
          image_url: "",
          description: "",
          abv: "",
          in_stock: "",
          formatted: {
            price: "",
            tax: "",
            total: ""
          }
        }
      };
    },
    created() {
      axios.get("/api/carted_beers/")
        .then(response => {
          this.carted_beers = response.data;
        })
    },
    methods: {
      goToCheckout() {
        axios.post("/api/orders").then(response => {
          this.$router.push("/order-confirmation/")
        }).catch(error => console.log(error.response))
      }
    }
  }
</script>