<template>
  <div class="ui center aligned container">
    <h3>배터리용량</h3>
    <p>{{ phone.battery }}mAh</p>

    <h3>충전방식</h3>
    <p>{{ phone.charge }}</p>
  </div>
</template>

<script>
import { getData } from "../getPhone";
export default {
  name: "Battery",
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
