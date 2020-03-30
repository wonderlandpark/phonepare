<template lang="html">
  <div>
  제조사: <sui-dropdown
    placeholder="제조사"
    selection
    :options="options"
    v-model="current"
    
    
  />
  <Dropdown :count="count" :company="current" v-on:selected="onData" />
  </div>
</template>

<script>
import Dropdown from './Dropdown.vue'
export default {
  name: 'Company',
  components: {
    Dropdown
  },
  watch: {
    current: function(event){
      this.$data.current = event
    }
  },
  methods: {
    onData: function(event){
      console.log(event)
      this.$emit('selected', event)
    }
  },
  
  data() {
    return {
      current: null,
      product: '',
      options: [
        {
          text: 'Apple',
          value: 'apple',
        },
        {
          text: 'Samsung',
          value: 'samsung',
        },
        {
          text: 'LG',
          value: 'lg',
        },
      ],
    };
  },
};
</script>