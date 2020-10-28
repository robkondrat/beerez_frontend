<template>
  <div class="container">
    <h1>Order History</h1>
      <div v-for="order in orders" v-if="order.total">

        <h2>
          Order #{{ order.id }}
        </h2>
        <div>
          Date: {{ order.created_at }}
        </div>
        <div>
          <div v-for="carted_beer in order.carted_beers">
            <li><b><router-link :to="'/beers/' + carted_beer.beer.id">{{ carted_beer.beer.name }}: </router-link></b> ${{ carted_beer.beer.price }} x {{ carted_beer.quantity }}</li>
          </div>
        </div>
        <div>
          Subtotal: ${{ order.subtotal }}
        </div>
        <div>
          Tax: ${{ order.tax }}
        </div>
        <b><div>
          Total: ${{ order.total }}
        </div></b>
        <hr>
      </div>
  </div>
</template>

<script>
  var axios = require("axios");

  export default {
    data() {
      return {
        orders: [],
        user_id: "",
        subtotal: "",
        tax: "",
        total: "",
        created_at: "",
        carted_beers: []
      };
    },
    created() {
      axios.get("/api/orders/")
        .then(response => {
          console.log(response.data);
          this.orders = response.data;
        })
    }
  }
</script>
