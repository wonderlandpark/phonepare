<template lang="html">
  <div>
    <div class="ui divider" />
    <h4>
      이 페이지는
      <a>
        <i class="icon red heart"/></a
      >와 <i class="icon vuejs" />로 제작되었습니다.<br />
      Copyright 2020 wonderlandpark, All rights reserved.<br />
      <a href="https://github.com/wonderlandpark/phonepare"
        ><i class="icon github" />Github</a
      >
    </h4>
    <div class="ui divider"></div>
    <img src="/kwc.png" width="100"/><br/>
    해당 웹페이지는 <a href="http://www.21kwc.com/">KWC</a>에 출품작입니다!
    <br/>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      count: 0
    };
  }
};
</script>
