<template lang="html">
  <sui-dropdown
    fluid
    :options="products"
    placeholder="제품"
    search
    selection
    v-model="current"
  />
</template>

<script>
import { getDropdown } from '../getPhone'
console.log(global)
export default {
  name: 'Company',
  props: {company: String, count: String||Number},
  watch: {
      company: function(){
          this.$data.products = getDropdown(this.company)
      },
      current: function(){
          console.log(this.current)
          this.$emit('selected', this.current)
      }
      
  },
  data() {
    return {
      current: null,
      companyName: this.company,
      products: [],
    };
  },
};
</script>

