<template>
  <p class="text-xl py-8 font-semibold">สี</p>
  <div class="grid grid-cols-2 gap-4 text-center">
    <div
      class="border py-7 px-5 rounded-lg"
      v-for="model in orderStore.productSelected.model"
      :key="model"
      role="button"
      :class="{
        'border-primary': orderStore.modelSelected.color === model.color,
        'border-slate-200': orderStore.modelSelected.color !== model.color,
      }"
      @click="clickModel(model)"
    >
      <div class="flex justify-center">
        <div
          class="w-10 h-10 rounded-full"
          :style="{ 'background-color': `#${model.color_hex}` }"
        ></div>
      </div>
      <div class="mt-4">{{ model.color }}</div>
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
    clickModel(new_model) {
      this.orderStore.setModel(new_model);
    },
  }
};
</script>

<style scoped></style>
