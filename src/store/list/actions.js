import http, {api} from '../../api'
import router from '../../router'
export default {
    async getListProduct({commit}) {
        const result = await http.get(api.listProduct.url)
        commit('getListProduct', result.data)
    },
    async getProduct({commit}) {
        const result = await http.get(`${api.listProduct.url}${router.currentRoute.params.id}`);
        commit('getProduct', result.data);
    },
    getCartProduct({commit}, payload) {
        commit('getCartProduct', payload)
    },
    getCartItem({commit}, payload) {
        commit('getCartItem', payload)
    },
    getAllCart({commit}, payload) {
        commit('getAllCart', payload)
    },
    deleteCart({commit}, payload) {
        commit('deleteCart', payload)
    },
    search({commit}, payload) {
        commit('search', payload)
    }
}