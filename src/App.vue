<template>
  <div>
    <ProductList />
    <ShoppingCart />
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue';
import ShoppingCart from "./components/ShoppingCart.vue";


export default {
  components: {
    ProductList,
    ShoppingCart
  }
};
</script>