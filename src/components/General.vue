<template>
  <div class="ui center aligned container">
    <i class="icon huge microchip" />
    <h3>프로세서</h3>
    <p>{{ phone.cpu }}</p>
    <i class="fas fa-memory fa-4x" />
    <h3>메모리</h3>
    <p>{{ phone.ram }}</p>
    <i class="fas fa-calendar-minus fa-4x" />
    <h3>출시일</h3>
    <p>{{ phone.date }}</p>
    <i class="fas fa-server fa-4x" />
    <h3>출시 OS</h3>
    <p>{{ phone.os }}</p>
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
