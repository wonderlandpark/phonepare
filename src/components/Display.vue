<template>
  <div class="ui center aligned container">
    <h3>디스플레이</h3>
    <h1 class="size">{{ phone.display.size }}"</h1>
    <p v-bind:style="{ 'margin-top': '-10px' }">{{ phone.display.type }}</p>

    <h3>해상도</h3>
    <p>{{ phone.display.resolution }}</p>

    <h3>PPI</h3>
    <p>{{ phone.display.ppi }}</p>
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

<style scoped>
.size {
  font-size: 4em;
}
</style>
