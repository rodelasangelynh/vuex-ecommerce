<template>
    <div>
      <h2>Shopping Cart</h2>
      <p v-if="cartDetails.length === 0">Cart is empty</p>
      <ul v-else>
        <li v-for="item in cartDetails" :key="item.id">
          {{ item.name }} - ${{ item.price }} x {{ item.quantity }}
          <button @click="removeFromCart(item.id)">Remove</button>
        </li>
      </ul>
      <p>Total Items: {{ cartItemCount }}</p>
      <p>Total Price: ${{ cartTotal }}</p>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapMutations } from 'vuex/dist/vuex.esm-browser.js';

  
  export default {
    name: "ShoppingCart",
    computed: {
      ...mapGetters(['cartDetails', 'cartTotal', 'cartItemCount'])
    },
    methods: {
      ...mapMutations(['removeFromCart'])
    }
  };
  </script>