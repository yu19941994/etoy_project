<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <Banner></Banner>
    <div class="container mt-md-5 mt-3">
      <div class="row">
        <!-- 選單 -->
        <div class="col-md-3">
          <ul class="list-group menu text-secondary sticky-top">
            <li class="list-group-item"
            :class="{ 'active' : '' === chosenmenu }" @click="chosenmenu = '' ">全部顯示</li>
            <li class="list-group-item"
            v-for="item in categories" :key="item"
            :class="{ 'active' : item === chosenmenu }" @click="chosenmenu = item ">{{ item }}</li>
          </ul>
        </div>
        <div class="col-md-9 mt-3 mt-md-0">
          <div class="row no-gutters">
            <div class="col-lg-4 col-md-6 mt-3" v-for="item in filterData" :key="item.id">
              <div class="card mx-md-2">
                <div class="CO-img"
                :style="{ backgroundImage: `url(${ item.imageUrl })` }">
                </div>
                <div class="card-body py-1">
                  <span class="badge badge-fifth mt-3">{{ item.category }}</span>
                  <router-link class="d-flex h4 card-title text-secondary mt-1"
                   :to="`/productintroduce/${item.id}`">{{ item.title }}</router-link>
                  <div class="d-flex justify-content-between">
                    <div>
                      <p class="card-text text-primary mb-0"><del>NT${{ item.origin_price }}</del></p>
                      <p class="h3 text-third">NT${{ item.price }}</p>
                    </div>
                    <a href="#" class="mt-2" @click.stop="addtoCart(item.id)">
                      <img src="../../assets/image/shopping-cart.svg" alt="" width="40">
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-center mt-5">
            <Pagination :childPagination="pg" @gP="getProducts"></Pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/front/Banner'
import Pagination from '@/components/Pagination'

export default {
  data () {
    return {
      isLoading: false,
      pg: {},
      products: [],
      chosenmenu: '',
      categories: {},
      product: {},
      productId: ''
    }
  },
  components: {
    Banner,
    Pagination
  },
  computed: {
    filterData () {
      const vm = this
      if (vm.chosenmenu) {
        return vm.products.filter((item) => {
          const data = item.category.match(vm.chosenmenu)
          return data
        })
      }
      return this.products
    }
  },
  methods: {
    getProducts (page = 1) {
      const vm = this
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/products/?page=${page}`
      vm.isLoading = true
      vm.$http.get(api).then((response) => {
        vm.products = response.data.products
        vm.pg = response.data.pagination
        vm.getUnique()
        vm.isLoading = false
      })
    },
    getUnique () {
      const vm = this
      const categories = new Set()
      vm.products.forEach((item) => {
        categories.add(item.category)
      })
      vm.categories = Array.from(categories)
    },
    addtoCart (id, qty) {
      this.$bus.$emit('cart:addtoCart', id, 1)
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
