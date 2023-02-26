<template>
  <button
    class="confirm py-3 px-4 rounded-lg mb-10 w-full text-white bg-primary"
    @click="openModal"
  >
    ยืนยันการสั่งซื้อล่วงหน้า
  </button>

  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" static="true" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-2 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white py-12 px-10 text-left align-middle shadow-xl transition-all text-center"
            >
              <DialogTitle
                as="h4"
                class="font-medium leading-6 text-gray-900 confirms text-black"
              >
                <div class="flex justify-center">
                  <SubmitImage />
                </div>
                <div class="my-8 text-2xl font-semibold">
                  การสั่งซื้อล่วงหน้าสำเร็จ
                </div>
              </DialogTitle>
              <div class="text-base text-black">
                การชำระเงินของคุณสำเร็จแล้ว!
              </div>
              <div class="text-base text-black">
                ตอนนี้เราจะส่งอีเมลยืนยันคำสั่งซื้อสำเร็จให้คุณ
              </div>

              <div class="mt-12">
                <button
                  type="button"
                  class="py-3 w-9/12 rounded-lg text-white bg-primary text-xl font-semibold"
                  @click="closeModal"
                >
                  ยืนยัน
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";
import axios from "axios";
import { useOrderStore } from "../stores/order";
import SubmitImage from "./SubmitImage.vue";

export default {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    SubmitImage,
  },
  data() {
    return {
      isOpen: false,
      svg: '<svg width="198" height="128" viewBox="0 0 198 128" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-pxaq92"><circle cx="166" cy="18" r="6" fill="url(#paint0_linear_5_394)" class="svelte-pxaq92"></circle><circle cx="21" cy="85" r="6" fill="url(#paint1_linear_5_394)" class="svelte-pxaq92"></circle><circle cx="179" cy="5" r="4" fill="url(#paint2_linear_5_394)" class="svelte-pxaq92"></circle><circle cx="24" cy="27" r="3" fill="url(#paint3_linear_5_394)" class="svelte-pxaq92"></circle><ellipse cx="99" cy="66.2371" rx="60" ry="59.2371" fill="url(#paint4_linear_5_394)" class="svelte-pxaq92"></ellipse><path fill-rule="evenodd" clip-rule="evenodd" d="M55 108.42V47.5295C55 45.3204 56.7909 43.5295 59 43.5295H138.273C140.482 43.5295 142.273 45.3204 142.273 47.5295V108.42C131.333 119.86 115.829 127 98.6364 127C81.4433 127 65.9393 119.86 55 108.42Z" fill="white" class="svelte-pxaq92"></path><path d="M93.7444 72.5044L108.176 57.6833C108.624 57.2228 109.195 56.9925 109.888 56.9925C110.581 56.9925 111.152 57.2228 111.6 57.6833C112.049 58.1438 112.273 58.73 112.273 59.4417C112.273 60.1535 112.049 60.7396 111.6 61.2002L95.4566 77.7796C94.9674 78.2821 94.3967 78.5333 93.7444 78.5333C93.0921 78.5333 92.5214 78.2821 92.0322 77.7796L85.6726 71.2483C85.2242 70.7878 85 70.2016 85 69.4899C85 68.7782 85.2242 68.192 85.6726 67.7315C86.1211 67.2709 86.6918 67.0407 87.3848 67.0407C88.0779 67.0407 88.6486 67.2709 89.097 67.7315L93.7444 72.5044Z" fill="url(#paint5_linear_5_394)" class="svelte-pxaq92"></path><rect x="85" y="91.9963" width="27.2727" height="4.03889" rx="1" fill="#EEEEEE" class="svelte-pxaq92"></rect><rect x="87.7273" y="110.844" width="21.8182" height="4.03889" rx="1" fill="#EEEEEE" class="svelte-pxaq92"></rect><rect x="79.5454" y="101.42" width="38.1818" height="4.03889" rx="1" fill="#EEEEEE" class="svelte-pxaq92"></rect><defs class="svelte-pxaq92"><linearGradient id="paint0_linear_5_394" x1="166" y1="12" x2="166" y2="24" gradientUnits="userSpaceOnUse" class="svelte-pxaq92"><stop stop-color="#5BBA47" class="svelte-pxaq92"></stop><stop offset="1" stop-color="#198F00" class="svelte-pxaq92"></stop></linearGradient><linearGradient id="paint1_linear_5_394" x1="21" y1="79" x2="21" y2="91" gradientUnits="userSpaceOnUse" class="svelte-pxaq92"><stop stop-color="#5BBA47" class="svelte-pxaq92"></stop><stop offset="1" stop-color="#198F00" class="svelte-pxaq92"></stop></linearGradient><linearGradient id="paint2_linear_5_394" x1="179" y1="1" x2="179" y2="9" gradientUnits="userSpaceOnUse" class="svelte-pxaq92"><stop stop-color="#5BBA47" class="svelte-pxaq92"></stop><stop offset="1" stop-color="#198F00" class="svelte-pxaq92"></stop></linearGradient><linearGradient id="paint3_linear_5_394" x1="24" y1="24" x2="24" y2="30" gradientUnits="userSpaceOnUse" class="svelte-pxaq92"><stop stop-color="#5BBA47" class="svelte-pxaq92"></stop><stop offset="1" stop-color="#198F00" class="svelte-pxaq92"></stop></linearGradient><linearGradient id="paint4_linear_5_394" x1="99" y1="7" x2="99" y2="125.474" gradientUnits="userSpaceOnUse" class="svelte-pxaq92"><stop stop-color="#5BBA47" class="svelte-pxaq92"></stop><stop offset="1" stop-color="#198F00" class="svelte-pxaq92"></stop></linearGradient><linearGradient id="paint5_linear_5_394" x1="98.6364" y1="56.9925" x2="98.6364" y2="78.5333" gradientUnits="userSpaceOnUse" class="svelte-pxaq92"><stop stop-color="#5BBA47" class="svelte-pxaq92"></stop><stop offset="1" stop-color="#198F00" class="svelte-pxaq92"></stop></linearGradient></defs></svg>',
    };
  },
  setup() {
    const orderStore = useOrderStore();
    return { orderStore };
  },
  methods: {
    openModal() {
      const payload = {
        id: this.orderStore.sizeSelected.id,
      };
      axios.post("https://interview.com7.in/api/pre-order", payload);

      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false;
    },
  },
};
</script>
