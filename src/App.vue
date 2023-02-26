<template>
  <header>
    <NavBar />
  </header>
  <main>
    <div class="px-8 mt-36 md:mt-32 sm:container md:container mx-auto">
      <div
        class="flex flex-col justify-center md:flex-row gap-6 max-w-5xl mx-auto"
      >
        <div class="w-full h-full md:top-32 relative md:sticky">
          <ProductImage />
        </div>
        <div class="w-full"><ProductDetail /></div>
      </div>
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
