<template>
    <div class="header_shop">
        <router-link to="/">
            <div class="header_shop-right">
                <i class="fas fa-atom"></i>
                <span> Calzada</span>
            </div>
        </router-link>
        <div class="header_shop-left">
            <input type="text" placeholder="Search product" v-model="searchValue" />
            <i class="fas fa-search search"></i>
            <i class="fas fa-shopping-cart cart" @click="clickMainCart">
                <span class="cart-count">{{ cart.length }}</span>
            </i>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
export default {
    computed: {
        ...mapGetters({ cart: 'list/cartProduct', search: 'list/searchValue' }),
        ...mapState(['list/searchValue']),
        searchValue: {
            get() {
                return this.$store.state.list.searchValue
            },
            set(value) {
                this.$store.commit('list/search', value);
            },
        },
    },
    created() {
        let data = JSON.parse(localStorage.getItem('cartProduct')) ? JSON.parse(localStorage.getItem('cartProduct')) : [];
        this.$store.dispatch('list/getCartItem', data);
    },
    methods: {
        clickMainCart() {
            this.$router.push('/cart').catch(()=>{});
        },
    },
};
</script>

<style lang="scss" scoped>
.header_shop {
    display: flex;
    justify-content: space-between;
    padding-top: 30px;
    a {
        text-decoration: none;
    }
    .header_shop-right {
        font-size: 30px;
        i {
            color: #087e8b;
        }
        span {
            color: #087e8b;
            font-weight: bold;
        }
    }
    .header_shop-left {
        cursor: pointer;
        input[type='text'] {
            background-color: #e5ded2;
            border: none;
            border-bottom: 2px solid #087e8b;
            text-align: right;
            outline: none;
        }
        .header-search {
            padding: 15px;
            border-radius: 50%;
            margin: 8px;
        }
        .search {
            @extend .header-search;
            color: #087e8b;
            border: 1px solid #087e8b;
        }
        .cart {
            @extend .header-search;
            color: white;
            background-color: #087e8b;
            position: relative;
            .cart-count {
                position: absolute;
                background-color: white;
                color: #087e8b;
                border-radius: 50%;
                top: 0;
                width: 20px;
                height: 20px;
                line-height: 20px;
                text-align: center;
            }
        }
    }
}
</style>
