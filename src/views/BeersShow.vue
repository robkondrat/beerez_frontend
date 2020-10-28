<template>
  <div>
    <div>
      <router-link to="/"><button class="btn btn-primary go-back" style="margin-right: 100%;">Back</button></router-link>
    </div>
    <div class="beer-show">
      <div class="column">
        <img :src="beer.image_url" :alt="beer.name">
      </div>
      <div class="column">
        <p>{{ beer.description }} * {{ beer.category }} * {{ beer.abv }}%</p>

        <h1>${{ beer.price }}</h1>

        <label for="quantity" style="font-size: 25px;">Quantity:</label>
        <input 
          type="number" 
          id="quantity" 
          name="quantity" 
          min="1"
          v-on:change="setQuantity($event)"
          >
        <button type="button" class="btn btn-primary" v-on:click="addToCart()">Add to Cart</button>

        <h4>Brewed by: </h4>
        <div>
          <router-link :to="'/breweries/' + beer.brewery.id">
            <img :src="beer.brewery.image_url" :alt="beer.brewery.name" class="brew-image">
          </router-link>
        </div>
      </div>
    </div>
  </div>
  
</template>

<style>
  .go-back {
    margin-right: 100%;
    margin-bottom: 50px;
  }
  .column {
    float: left;
    width: 50%;
  }
  img {
    max-height: 500px;
    object-fit: contain;
  }
  .brew-image {
    width: 300px;
  }
  p {
    color: white;
  }
  label {
    color: white;
  }
  input#quantity {
    margin: 6px;
    padding: 5px 6px;
    width: 60px;
    margin-bottom: 25px;
  }
  @media screen and (max-width: 600px) {
    .column {
      width: 100%;
      margin-bottom: 35px;
    }
  }
</style>

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
        selectedQuantity: ""
      };
    },
    created() {
      axios.get("/api/beers/" + this.$route.params.id)
        .then(response => {
          this.beer = response.data;
        });
    },
    methods: {
      setQuantity(event) {
        this.selectedQuantity = event.target.value
      },
      addToCart() {
        var params = {
          beer_id: this.beer.id,
          quantity: this.selectedQuantity
        }

        axios.post("/api/carted_beers", params).then(response => {
          this.$router.push("/carted_beers/")
        }).catch(error => {
          this.$router.push("/signup/")
        })
      }
    }
  }
</script>