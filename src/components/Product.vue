<template>
<h2 class="ui left aligned header">기본 정보</h2>
    <div class="ui divider" />
    <div class="ui center aligned grid">
      <div
        :class="{
          'ui three column row': window.width > 1199,
          'ui two column row': window.width <= 1199
        }"
      >
        <div class="column">
          <General :id="one" :company="onec" />
        </div>
        <div class="column">
          <General :id="two" :company="twoc" />
        </div>
        <div class="column" v-if="window.width > 1199">
          <General :id="three" :company="threec" />
        </div>
      </div>
    </div>
        <h2 class="ui left aligned header">배터리</h2>
    <div class="ui divider" />
    <div class="ui center aligned grid">
      <div
        :class="{
          'ui three column row': window.width > 1199,
          'ui two column row': window.width <= 1199
        }"
      >
        <div class="column">
          <Battery :id="one" :company="onec" />
        </div>
        <div class="column">
          <Battery :id="two" :company="twoc" />
        </div>
        <div class="column" v-if="window.width > 1199">
          <Battery :id="three" :company="threec" />
        </div>
      </div>
    </div>
        <h2 class="ui left aligned header">디스플레이</h2>
    <div class="ui divider" />
    <div class="ui center aligned grid">
      <div
        :class="{
          'ui three column row': window.width > 1199,
          'ui two column row': window.width <= 1199
        }"
      >
        <div class="column">
          <Display :id="one" :company="onec" />
        </div>
        <div class="column">
          <Display :id="two" :company="twoc" />
        </div>
        <div class="column" v-if="window.width > 1199">
          <Display :id="three" :company="threec" />
        </div>
      </div>
    </div>

        <h2 class="ui left aligned header">저장공간</h2>
    <div class="ui divider" />
    <div class="ui center aligned grid">
      <div
        :class="{
          'ui three column row': window.width > 1199,
          'ui two column row': window.width <= 1199
        }"
      >
        <div class="column">
          <Memory :id="one" :company="onec" />
        </div>
        <div class="column">
          <Memory :id="two" :company="twoc" />
        </div>
        <div class="column" v-if="window.width > 1199">
          <Memory :id="three" :company="threec" />
        </div>
      </div>
   </div>
    <h2 class="ui left aligned header">크기 및 무게</h2>
    <div class="ui divider" />
    <div class="ui center aligned grid">
      <div
        :class="{
          'ui three column row': window.width > 1199,
          'ui two column row': window.width <= 1199
        }"
      >
        <div class="column">
          <Size :id="one" :company="onec" />
        </div>
        <div class="column">
          <Size :id="two" :company="twoc" />
        </div>
        <div class="column" v-if="window.width > 1199">
          <Size :id="three" :company="threec" />
        </div>
</template>

<script>
import { getData } from "../getPhone";
import colors from '../color'
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

