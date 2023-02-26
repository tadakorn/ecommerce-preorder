import { defineStore } from "pinia";
import axios from "axios";

export const useOrderStore = defineStore("order", {
  state: () => ({
    productList: [],
    productSelected: {
      name: "",
      model: [],
      image_url: "",
    },
    modelSelected: {
      color: "",
      color_hex: "",
      data: [],
    },
    sizeSelected: {
      size: "",
      price: "",
      image_url: "",
      id: null,
    },
   
  }),
  actions: {
    getProduct() {
      axios.get(`https://interview.com7.in/api/pre-order`).then((res) => {
        this.productList = res.data.data.main_product;
        // console.log(JSON.stringify(res.data.data))
        this.productList.reverse();
        this.setProduct(this.productList[0]);
      });
    },
    setProduct(new_product) {
      this.productSelected.name = new_product.name;
      this.productSelected.model = new_product.model;
      this.productSelected.image_url = new_product.model[0].data[0].image_url;
      this.setModel(new_product.model[0]);
    },
    setModel(new_model) {
      this.modelSelected.color = new_model.color;
      this.modelSelected.color_hex = new_model.color_hex;
      this.modelSelected.data = new_model.data;
      this.setSize(new_model.data[0]);
    },
    setSize(new_size) {
      this.sizeSelected.size = new_size.size;
      this.sizeSelected.price = new_size.price;
      this.sizeSelected.image_url = new_size.image_url
      this.sizeSelected.id = new_size.id;
    },
  },
});
