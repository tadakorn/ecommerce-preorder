<template>
  <header>
    <NavBar />
  </header>
  <main>
    <div class="flex flex-col px-8 md:flex-row gap-6 mt-36 md:mt-32 container">
      <div class="w-full md:top-32 md:left-40 relative md:sticky"><ProductImage /></div>
      <div class="w-full md:right-20"><ProductDetail /></div>
    </div>
  </main>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import ProductImage from "./components/ProductImage.vue";
import ProductDetail from "./components/ProductDetail.vue";
import { useOrderStore } from "./stores/order";
export default {
  components: {
    NavBar,
    ProductImage,
    ProductDetail,
  },
  mounted() {
    this.orderStore.getProduct();
  },
  setup() {
    const orderStore = useOrderStore();
    return { orderStore };
  },
};
</script>

<style scoped></style>
