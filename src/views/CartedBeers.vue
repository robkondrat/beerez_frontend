<template>
  <div class="container">
    <div class="row">
      <div class="col-sm" v-for="cartedBeers in carted_beers">
        <div>
          <router-link :to="'/carted_beers/' + cartedBeers.id">{{ cartedBeers.beer.name }}</router-link>
        </div>
        <div>
          <router-link :to="'/carted_beers/' + cartedBeers.id">
            <img class="image-fluid" :src="cartedBeers.beer.image_url" :alt="cartedBeers.beer.name">
          </router-link>
        </div>
        <div>
          Status: {{ cartedBeers.status }}
        </div>
        <div>
          User ID: {{ cartedBeers.user_id }}
        </div>
        <div>
          Quantity: {{ cartedBeers.quantity }}
        </div>
        <div>
          Subtotal: ${{ cartedBeers.subtotal }}
        </div>

      </div>
    </div>
    <div class="row">
      <button v-on:click="goToCheckout()">Checkout</button>
    </div>
  </div>
</template>

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
          console.log(response.data);
          this.carted_beers = response.data;
        })
    },
    methods: {
      goToCheckout() {
        axios.post("/api/orders").then(response => {
          this.$router.push("/orders/")
        }).catch(error => console.log(error.response))
      }
    }
  }
</script>