import { createStore } from 'vuex';

export default createStore({
  state: {
    products: [
      { id: 1, name: 'Product A', price: 10 },
      { id: 2, name: 'Product B', price: 20 },
      { id: 3, name: 'Product C', price: 30 },
      { id: 4, name: 'Product D', price: 40 },
      { id: 5, name: 'Product E', price: 50 },
      { id: 6, name: 'Product F', price: 60 },
      { id: 7, name: 'Product G', price: 70 },
      { id: 8, name: 'Product H', price: 80 },
      { id: 9, name: 'Product I', price: 90 },
      { id: 10, name: 'Product J', price: 100 }
    ],
    cart: []
  },
  mutations: {
    addToCart(state, productId) {
      const item = state.cart.find(item => item.id === productId);
      if (item) {
        item.quantity++;
      } else {
        state.cart.push({ id: productId, quantity: 1 });
      }
    },
    removeFromCart(state, productId) {
      const index = state.cart.findIndex(item => item.id === productId);
      if (index !== -1) {
        if (state.cart[index].quantity > 1) {
          state.cart[index].quantity--;
        } else {
          state.cart.splice(index, 1);
        }
      }
    }
  },
  getters: {
    cartDetails(state) {
      return state.cart.map(cartItem => {
        const product = state.products.find(product => product.id === cartItem.id);
        return { ...product, quantity: cartItem.quantity };
      });
    },
    cartTotal(state, getters) {
      return getters.cartDetails.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    cartItemCount(state) {
      return state.cart.reduce((count, item) => count + item.quantity, 0);
    }
  }
});