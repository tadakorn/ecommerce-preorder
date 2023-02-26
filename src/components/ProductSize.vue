<template>
  <!-- <pre>{{ orderStore.productList }}</pre>
       -->
  <p class="text-2xl font-semibold my-8">ขนาด</p>
  <div class="grid grid-cols-2 gap-4 text-center">
    <div
      class="border py-7 px-5 rounded-lg"
      v-for="data in orderStore.modelSelected.data"
      :key="data"
      role="button"
      :class="{
        'border-primary': orderStore.sizeSelected.size === data.size,
        'border-slate-200': orderStore.sizeSelected.size !== data.size,
      }"
      @click="clickSize(data)"
    >
      <div class="font-semibold text-xl">{{data.size}}</div>
      <div class="mt-4">฿{{ formatNumber(data.price) }}</div>
    </div>
  </div>
</template>
<script>
import { useOrderStore } from "../stores/order";

export default {
  setup() {
    const orderStore = useOrderStore();
    return { orderStore };
  },
  methods: {
    formatNumber(num) {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    },
    clickSize(new_size) {
      this.orderStore.setSize(new_size);
    },
  }
};
</script>
