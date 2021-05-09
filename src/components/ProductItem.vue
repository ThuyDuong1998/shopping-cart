<template>
    <div class="col-lg-3" >
        <div class="product">
            <img v-bind:src="item.image" />
            <h5>
                <router-link :to="'/products/'+ item.id">
                    {{ item.title }}
                </router-link>
            </h5>
            <div class="product-content">
                <div class="product-star">
                    <span>2 </span>
                    <i class="fas fa-star"></i>
                    <span class="product-text"> Adskdsfk</span>
                </div>
                <div class="product-price">P{{ item.price }}</div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        item: Object,
    }
};
</script>

<style lang="scss" scoped>
.list_products {
    .product {
        background-color: white;
        padding: 15px;
        margin-bottom: 15px;
        height: 400px;
        img {
            width: 100%;
            height: 250px;
            object-fit: contain;
        }
        h5 {
            margin-top: 20px;
            font-size: none;
            font-size: 15px;
        }
        .product-content {
            display: flex;
            justify-content: space-between;
            .product-star {
                .product-text {
                    font-size: 11px;
                    color: #bcaba3;
                }
                i {
                    color: #f7aa35;
                }
            }
            .product-price {
                color: #008357;
                font-weight: bold;
            }
        }
    }
}
</style>
