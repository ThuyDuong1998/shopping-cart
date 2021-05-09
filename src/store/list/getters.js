export default {
    listProduct: state => state.listProduct,
    itemList: state => state.itemList,
    cartProduct: state => state.cartProduct,
    cartItems: state => state.cartItems,
    searchValue(state) {
        const keyword = state.searchValue;
        if (!keyword.length) {
            return state.listProduct;
        } else {
            return state.listProduct.filter((item) => {
                if (item.title.toLowerCase().includes(state.searchValue.toLowerCase())) return item;
            });
        }
    },
};
