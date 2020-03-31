<template lang="html">
  <div>
    <div class="ui divider" />
    <h4>
      이 페이지는
      <a v-on:click="add()" :href="count > 4 ? '/PHHI' : '#'">
        <i class="icon red heart"/></a
      >와 <i class="icon vuejs" />로 제작되었습니다.<br />
      Copyright 2020 wonderlandpark, All rights reserved.<br />
      <a href="https://github.com/wonderlandpark/phonepare"
        ><i class="icon github" />Github</a
      >
    </h4>
  </div>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    add: function() {
      this.count++;
      if (this.count == 4) {
        var con_test = confirm("Are you Sure?");
        if (con_test == true) {
          this.count++;
          alert("PH Mode Enabled Press One More to Active.");
        }
      } else if (this.count > 5) this.count = 0;
    }
  },
  data() {
    return {
      count: 0
    };
  }
};
</script>
