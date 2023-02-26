<template>
  <div class="-mt-32 sm:-mt-36">
    <img class="max-w-lg w-full" :src="orderStore.sizeSelected.image_url" />
  </div>
</template>

<script>
import { useOrderStore } from "../stores/order";

export default {
  setup() {
    const orderStore = useOrderStore();
    return { orderStore };
  },
};
</script>
