<template>
    <div>
        <Header />
        <h3>Appliances Department</h3>
        <div class="list_products">
           <div class="row">
               <ProductItem v-for="item in search" :key='item.id' :item ='item'/>
           </div>
        </div>
    </div>
</template>

<script>
import ProductItem from './ProductItem'
import Header from './Header'
import {mapGetters} from 'vuex'
export default {
    components: {
        Header,
        ProductItem
    },
    computed: {
        ...mapGetters({
            product: 'list/listProduct',
            search: 'list/searchValue'
        })
    },
    mounted() {
        this.$store.dispatch('list/getListProduct')
    }
};
</script>

<style>
h3 {
    margin-bottom: 50px;
}
</style>
