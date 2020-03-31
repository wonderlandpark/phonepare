<template lang="html">
  <div>
    제조사:
    <sui-dropdown
      fluid
      placeholder="제조사"
      selection
      :options="options"
      v-model="current"
    />
    제품:
    <Dropdown
      :count="count"
      :company="current"
      :phone="phone"
      v-on:selected="onData"
    />
  </div>
</template>

<script>
import Dropdown from "./Dropdown.vue";

export default {
  name: "Company",
  components: {
    Dropdown
  },
  props: ["company", "phone"],
  watch: {
    current: function(event) {
      this.$data.current = event;
      this.$emit("selected", null);
    }
  },
  methods: {
    onData: function(event) {
      this.$emit("selected", event);
      this.$emit("company", this.current);
    }
  },
  beforeMount() {
    this.$data.current = this.company;
    this.$emit("company", this.current);
  },
  data() {
    return {
      current: null,
      product: "",
      options: [
        {
          text: "애플",
          value: "apple",
          icon: 'apple'
        },
        {
          text: "삼성전자",
          value: "samsung",
          image: { src: "/icon/samsung.jpg"}
        },
        {
          text: "LG전자",
          value: "lg",
          image: { src: "/icon/lg.jpg"}
        }
      ]
    };
  }
};
</script>

<style scoped>
i.icon.apple {
  width: 28px !important;
}
</style>