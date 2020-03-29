<template lang="html">
  <div>
  제조사: <sui-dropdown
    placeholder="제조사"
    selection
    :options="options"
    v-model="current"
    
  />
  <Dropdown/>
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
      console.log(event)

    }
  },
  data() {
    return {
      current: null,
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