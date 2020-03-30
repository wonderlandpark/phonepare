<template>
  <div class="ui center aligned container">
    <h1 class="ui header">Phone Hub</h1>
    <p>핸드폰끼리 비교해드립니다.</p>
    <div class="ui center aligned grid">
       <div
      :class="{
        'ui three column row': window.width > 1199,
        'ui two column row': window.width <= 1199
      }"
    >
<div class="column">
          <Selection
            :count="first"
            v-on:selected="first"
            phone="galaxys20ultra"
            company="samsung"
          />
      </div>
      <div class="column">
          <Selection
            :count="two"
            v-on:selected="second"
            phone="iphone11pro"
            company="apple"
          />
      </div>
      <div class="column" v-if="window.width > 1199">
          <Selection
            :count="three"
            v-on:selected="third"
            phone="galaxys20plus"
            company="samsung"
          />
        </div>
  </div>
</div>
{{ one }} {{ two }} {{ three }} 
  <h2>기본 스펙</h2>
    <div class="ui center aligned grid">
       <div
      :class="{
        'ui three column row': window.width > 1199,
        'ui two column row': window.width <= 1199
      }"
    >
<div class="column">
          <Selection
            :count="first"
            v-on:selected="first"
            phone="galaxys20ultra"
            company="samsung"
          />
      </div>
      <div class="column">
          <Selection
            :count="two"
            v-on:selected="second"
            phone="iphone11pro"
            company="apple"
          />
      </div>
      <div class="column" v-if="window.width > 1199">
          <Selection
            :count="three"
            v-on:selected="third"
            phone="galaxys20plus"
            company="samsung"
          />
        </div>
  </div>
</div>
  </div>
</template>

<script>
import Selection from "./Selection.vue";
export default {
  name: "HelloWorld",
  components: {
    Selection
  },
  methods: {
    first: function(e) {
      this.one = e;
    },
    second: function(e) {
      this.two = e;
    },
    third: function(e) {
      this.three = e;
    },
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    }
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  data() {
    return {
      one: null,
      two: null,
      three: null,
      compared: false,
      window: {
        width: 0,
        height: 0
      }
    };
  }
};
</script>

