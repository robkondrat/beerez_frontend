<template>
  <div class="container">
    <h1>Order Confirmation #{{ order.id }}</h1>
    <div >
      <!-- <div>
        User ID: {{ order.user_id }}
      </div> -->
      <div>
        <div v-for="carted_beer in order.carted_beers" style="align: center;">
          <li><b><router-link :to="'/beers/' + carted_beer.beer.id">{{ carted_beer.beer.name }}:</router-link></b> {{ carted_beer.beer.price }} x {{ carted_beer.quantity }}</li>
        </div>
      </div>
      <hr>
      <div>
        Subtotal: ${{ order.subtotal }}
      </div>
      <div>
        Tax: ${{ order.tax }}
      </div>
      <b><div>
        Total: ${{ order.total }}
      </div></b>
      <div>
        <button class="btn btn-primary" @click="$router.push('../')">MOOR BEER</button>
      </div>
      <div>
        <button class="btn btn-light" @click="$router.push('../orders')">Order History</button>
      </div>

    </div>
  </div>
</template>

<script>
  var axios = require("axios");

  export default {
    data() {
      return {
        order: {
          user_id: "",
          subtotal: "",
          tax: "",
          total: "",
          created_at: "",
          carted_beers: []
        }
      };
    },
    created() {
      axios.get("/api/orders/")
        .then(response => {
          console.log(response.data[response.data.length - 1]);
          this.order = response.data[response.data.length - 1];
        })
    }
  }
</script>
