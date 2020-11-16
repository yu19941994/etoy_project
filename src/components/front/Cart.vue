<template>
  <div class="cart mr-5 text-sixth mb-3">
    <div class="btn-group" v-if="!disabledCart">
      <div type="button" class="carticon text-secondary "
      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span class="costcart d-flex"><p>{{ carts.carts.length }}</p></span>
        <i class="fas fa-cart-plus fa-2x shopicon"></i>
        <p class="shoptx"><b>購物車</b></p>
      </div>
      <div class="dropdown-menu cart-dropdown mb-2 mr-2 mb-md-1 mr-md-8 px-3 py-2">
        <h5 class="text-primary">購物清單</h5>
        <div class="d-flex">
          <table class="table">
            <tbody>
              <tr v-for="item in carts.carts" :key="item.id">
                <td @click="removeCartItem(item.id)"><i class="fas fa-trash-alt pr-1"></i></td>
                <td>{{ item.product.title }}</td>
                <td>{{ item.qty }}<span>{{ item.product.unit }}</span></td>
                <td>{{ item.total|currency }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <router-link to="/checkout"
        type="button" class="btn btn-fifth d-flex justify-content-center" v-if="carts.carts.length!==0">結帳去</router-link>
        <router-link to="/customerorders"
        type="button" class="btn btn-third d-flex justify-content-center" v-else>購物去</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      carts: { carts: [] }
    }
  },
  methods: {
    getCart () {
      const vm = this
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      vm.$http.get(api).then((response) => {
        vm.carts = response.data.data
      })
    },
    addtoCart (id, qty) {
      const vm = this
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      const cart = {
        product_id: id,
        qty: qty
      }
      vm.isLoading = true
      vm.$http.post(api, { data: cart }).then((response) => {
        vm.isLoading = false
        vm.getCart()
      })
    },
    removeCartItem (id) {
      const vm = this
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`
      vm.$http.delete(api).then((response) => {
        vm.getCart()
      })
    }
  },
  computed: {
    disabledCart () {
      return (
        this.$route.path === '/checkout'
      )
    }
  },
  created () {
    const vm = this
    vm.$bus.$on('cart:addtoCart', (id, qty = 1) => {
      vm.addtoCart(id, qty)
    })
    vm.getCart()
  }
}
</script>
