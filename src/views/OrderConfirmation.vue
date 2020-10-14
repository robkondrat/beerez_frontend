<template>
  <div class="container">
    <h1>Order Confirmation</h1>
    <div class="row">
      <div >
        <h2>
          Order ID: {{ order.id }}
        </h2>
        <div>
          User ID: {{ order.user_id }}
        </div>
        <div>
          <ul v-for="carted_beer in order.carted_beers">
            <li>{{ carted_beer.beer.name }} x {{ carted_beer.quantity }} - {{ carted_beer.status }}</li>
          </ul>
        </div>
        <div>
          Subtotal: {{ order.subtotal }}
        </div>
        <div>
          Tax: {{ order.tax }}
        </div>
        <div>
          Total: {{ order.total }}
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
        order: {
          user_id: "",
          subtotal: "",
          tax: "",
          total: "",
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
