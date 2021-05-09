<template>
    <div>
        <Header />
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">Product</th>
                    <th>Title</th>
                    <th>Quality</th>
                    <th>Price</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in getItemList" :key="index">
                    <td>
                        <button class="btn btn-outline-danger" @click="delItem(index)">X</button>
                    </td>
                    <td>
                        <img :src="item.img" />
                    </td>
                    <td>{{ item.title }}</td>
                    <td>
                        <input type="number" v-model="item.cartNumber" />
                    </td>
                    <td>${{ item.price }}</td>
                    <td>${{ item.price * item.cartNumber }}</td>
                </tr>
                <tr>
                    <td colspan="4"></td>
                    <td><b>Sub-total:</b></td>
                    <td>{{subTotal}}</td>
                </tr>
                <tr style="border:none">
                    <td colspan="4"></td>
                    <td><b>Total:</b></td>
                    <td>{{totalSum}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import Header from './Header';
import {mapGetters} from 'vuex'
export default {
    components: {
        Header,
    },
    data() {
        return {
            item: {
                cartNumber: '',
            }
        }
    },
    computed: {
        ...mapGetters({getItemList: 'list/cartProduct'}),
        subTotal() {
            return this.getItemList.reduce((sum,item) => Math.round(sum + item.price),0 );
        },
        totalSum() {
            return this.getItemList.reduce((sum, item) => (item.cartNumber > 0) ? Math.round(sum + item.price * item.cartNumber) : this.delItem(), 0 );
        },
        
    },
    methods: {
        delItem(index) {
            this.$store.dispatch('list/getAllCart', this.getItemList)
            this.$store.dispatch('list/deleteCart', index)
        },
    },
};
</script>

<style scoped>
.table,
.table-striped,
th,
td {
    border: 1px solid #757678;
}
.table {
    margin-top: 40px;
}
img {
    width: 80px;
}
input[type='number'] {
    width: 50px;
}
button {
    padding: 2px 5px;
}
</style>
