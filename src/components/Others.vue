<template>
  <div class="ui center aligned container">
    <h3>방수등급</h3>
    <p>{{ phone.waterproof }}</p>
  </div>
</template>

<script>
import { getData } from "../getPhone";
export default {
  name: "Phone",
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
