<template>
  <div class="Front">
    <Header></Header>
    <router-view></router-view>
    <Cart></Cart>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/front/Header'
import Footer from '@/components/front/Footer'
import Cart from '@/components/front/Cart'

export default {
  name: 'Front',
  components: {
    Header,
    Footer,
    Cart
  }
}
</script>
