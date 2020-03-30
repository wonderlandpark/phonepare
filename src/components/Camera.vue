<template>
  <div class="ui center aligned container">
    <h3>전면 카메라</h3>
    <p v-for="cam in phone.camera.front" :key="cam">
      {{cam}}
    </p>
    <h3>후면 카메라</h3>
    <p v-for="cam in phone.camera.back" :key="cam">
      {{cam}}
    </p>
  </div>

</template>

<script>
import { getData } from "../getPhone";
export default {
  name: "Camrea",
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
