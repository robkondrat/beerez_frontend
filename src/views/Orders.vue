<template>
  <div class="container">
    <div class="row">
      <div class="col-sm" v-for="order in orders">

        <div>
          User ID: {{ order.user_id }}
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
        orders: [],
        user_id: "",
        subtotal: "",
        tax: "",
        total: "",
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
