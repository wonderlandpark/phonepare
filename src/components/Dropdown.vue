<template lang="html">
  <sui-dropdown
    class="large"
    fluid
    :options="products"
    placeholder="제품"
    search
    selection
    v-model="current"
  />
</template>

<script>
import { getDropdown } from "../getPhone";
export default {
  name: "Company",
  props: { company: String, phone: String },
  watch: {
    company: function() {
      this.$data.products = getDropdown(this.company);
      this.$data.company = this.company;
      this.$data.current = null;
    },
    current: function() {
      this.$emit("selected", this.current);
    }
  },
  beforeMount() {
    this.$data.products = getDropdown(this.company);
    this.$data.current = this.phone;
  },
  data() {
    return {
      current: null,
      companyName: this.company,
      products: []
    };
  }
};
</script>
