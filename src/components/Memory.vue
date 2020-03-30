<template>
  <div class="ui center aligned container">
    <div v-for="mem in phone.memory" :key="mem"> {{mem}}{{ isNaN(mem) ? '' : 'G'}} <br/></div>
  </div>
</template>

<script>
import { getData } from "../getPhone";
export default {
  name: "Display",
  props: {
    company: String,
    id: String
  },
  watch: {
    company: function() {
      this.$data.phone = getData(this.company, this.id);
    },
    id: function() {
      this.$data.phone = getData(this.company, this.id);
    }
  },
  data() {
    return {
      phone: getData(this.company, this.id)
    };
  }
};
</script>

