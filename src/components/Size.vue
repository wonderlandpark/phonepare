<template>
  <div class="ui center aligned container">
    <h3>크기 (W×H×D)</h3>
    <p>{{ phone.size }} mm</p>

    <h3>무게</h3>
    <p>{{ phone.weight }}g</p>
  </div>
</template>

<script>
import { getData } from "../getPhone";
export default {
  name: "Size",
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
