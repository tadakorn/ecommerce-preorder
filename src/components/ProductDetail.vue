<template>
  <div>
    <p class="text-3xl md:text-4xl font-semibold mb-10" :class="'font-size-2.5rem'">
      ซื้อ {{ orderStore.productSelected.name }}
    </p>
    <p class="text-2xl font-semibold mb-8">รุ่น</p>

    <div
      v-for="product in orderStore.productList"
      :key="product.name"
      role="button"
      class="border p-7 flex justify-between my-4 align-middle rounded-lg"
      :class="{
        'border-primary': orderStore.productSelected.name === product.name,
        'border-slate-200': orderStore.productSelected.name !== product.name,
      }"
      @click="clickProduct(product)"
    >
      <div class="font-semibold">{{ product.name }}</div>
      <div>฿{{ formatNumber(product.model[0].data[0].price) }}</div>
    </div>
  </div>
  <ProductModel />
  <ProductSize />
  <ProductRecieve />
  <div class="border-b border-slate-200 my-10"></div>
  <SubmitModal />
</template>

<script>
import { useOrderStore } from "../stores/order";
import ProductModel from "./ProductModel.vue";
import ProductSize from "./ProductSize.vue";
import ProductRecieve from "./ProductReceive.vue";
import SubmitModal from "./SubmitModal.vue";
export default {
  components: {
    ProductModel,
    ProductSize,
    ProductRecieve,
    SubmitModal,
  },
  setup() {
    const orderStore = useOrderStore();
    return { orderStore };
  },
  methods: {
    clickProduct(new_product) {
      this.orderStore.setProduct(new_product);
    },
    formatNumber(num) {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    },
  },
};
</script>