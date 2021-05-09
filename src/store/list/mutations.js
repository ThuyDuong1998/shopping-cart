export default {
  getListProduct(state, payload) {
    state.listProduct = [...payload];
  },
  getProduct(state, payload) {
    state.itemList = { ...payload };
  },
  getCartProduct(state, payload) {
    const idn = state.cartProduct.find(
      (item) => item.productID === payload.productID
    );
    if (!idn) {
      state.cartProduct.push({
        ...payload,
      });
    } else {
      const index = state.cartProduct.findIndex(
        (item) => item.productID === payload.productID
      );
      const newValue = [...state.cartProduct];
      newValue[index] = { ...payload };
      state.cartProduct = [...newValue];
      console.log(newValue, index);
    }
    localStorage.setItem("cartProduct", JSON.stringify(state.cartProduct));
  },
  getCartItem(state, payload) {
    state.cartProduct = payload;
  },
  getAllCart(state, payload) {
    state.cartProduct = payload;
    localStorage.setItem("cartProduct", JSON.stringify(state.cartProduct));
  },
  deleteCart(state, payload) {
    state.cartProduct.splice(payload, 1);
  },
  search(state, payload) {
    state.searchValue = payload;
  },
};
