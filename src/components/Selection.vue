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
      this.$emit("selected", null)
    }
  },
  methods: {
    onData: function(event) {
      this.$emit("selected", event);
    }
  },
  beforeMount() {
    this.$data.current = this.company;
  },
  data() {
    return {
      current: null,
      product: "",
      options: [
        {
          text: "Apple",
          value: "apple"
        },
        {
          text: "Samsung",
          value: "samsung"
        },
        {
          text: "LG",
          value: "lg"
        }
      ]
    };
  }
};
</script>
