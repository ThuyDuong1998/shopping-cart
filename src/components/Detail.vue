<template>
  <div>
    <Header />
    <div class="row">
      <div class="col-lg-6 detail_right">
        <img :src="itemList.image" />
      </div>
      <div class="col-lg-6">
        <div class="detail_left">
          <h3>{{ itemList.title }}</h3>
          <h6>Application - Speaker</h6>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
          <span> 466 Sold | 44 Stocks Left</span>
          <p class="detail-price">P{{ itemList.price }}</p>
          <div class="detail_quality">
            Quality:
            <button class="quality-add" @click="clickSub">-</button>
            <span> {{ quality }} </span>
            <button class="quality-sub" @click="clickAdd">+</button>
          </div>
          <div class="detail_cart">
            <button class="detail_cart-add" @click="clickCart">
              Add to cart
            </button>
            <button class="detail_cart-sub">Buy now</button>
          </div>
          <p class="description">{{ itemList.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "./Header";
export default {
  data() {
    return {
        quality: 1,
        cartItem: {
            productID: '',
            cartNumber: '',
            img: '',
            title: '',
            price: ''
        }
    };
  },
  components: {
    Header,
  },
  computed: {
    ...mapGetters({ itemList: "list/itemList", cart: "list/cartProduct" }),
  },
  methods: {
    clickAdd() {
      this.quality++;
    },
    clickSub() {
      if (this.quality > 1) {
        this.quality--;
      }
    },
    clickCart() {
      this.cartItem.productID = this.itemList.id
      this.cartItem.cartNumber = this.quality
      this.cartItem.img = this.itemList.image 
      this.cartItem.title = this.itemList.title
      this.cartItem.price = this.itemList.price
      this.$store.dispatch("list/getCartProduct", this.cartItem);
    },
  },
  mounted() {
    this.$store.dispatch("list/getProduct");
  },
};
</script>

<style lang="scss" scoped>
.detail_right {
  margin-top: 80px;
  img {
    width: 80%;
  }
}
.detail_left {
  margin-top: 80px;
  h3 {
    color: #087e8b;
    font-weight: bold;
  }
  .detail-price {
    color: green;
    font-size: 30px;
    font-weight: bold;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  i {
    color: #f7aa35;
  }
  .description {
    margin-top: 30px;
  }
  .quality {
    color: white;
    border: none;
    outline: none;
    padding: 5px 10px;
  }
  .detail_quality {
    .quality-add {
      @extend .quality;
      background-color: #d17979;
      margin-left: 20px;
    }
    .quality-sub {
      @extend .quality;
      background-color: green;
    }
    span {
      padding: 10px;
    }
  }
  .detail_cart {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    .detail_cart-button {
      padding: 10px 50px;
      font-size: 13px;
      font-weight: bold;
      border: none;
    }
    .detail_cart-add {
      @extend .detail_cart-button;
      background-color: #d17979;
      color: black;
    }
    .detail_cart-sub {
      @extend .detail_cart-button;
      background-color: #087e8b;
      color: white;
    }
  }
}
</style>
