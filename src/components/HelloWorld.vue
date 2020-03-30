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
            v-on:selected="first"
            v-on:company="fuckingfirst"
            phone="galaxys20ultra"
            company="samsung"
          />
           <Phone
            :id="one"
            :company="onec"
          />
      </div>
      <div class="column">
          <Selection
            v-on:selected="second"
            v-on:company="fuckingsecond"
            phone="iphone11pro"
            company="apple"
          />
           <Phone
            :id="two"
            :company="twoc"
          />
      </div>
      <div class="column" v-if="window.width > 1199">
          <Selection
            v-on:selected="third"
            v-on:company="fuckingthird"
            phone="galaxys20plus"
            company="samsung"
          />
           <Phone
            :id="three"
            :company="threec"
          />
        </div>
  </div>
</div>
{{ one }}
  <h2>기본 스펙</h2>
    <div class="ui center aligned grid">
       <div
      :class="{
        'ui three column row': window.width > 1199,
        'ui two column row': window.width <= 1199
      }"
    >
<div class="column">
          <General
            :id="one"
            :company="onec"
          />
      </div>
      <div class="column">
          <General
            :id="two"
            :company="twoc"
          />
      </div>
      <div class="column" v-if="window.width > 1199">
          <General
            :id="three"
            :company="threec"
          />
        </div>
  </div>
</div>
  </div>
</template>

<script>
import Selection from "./Selection.vue";
import General from "./General.vue";
import Phone from "./Phone.vue";
export default {
  name: "HelloWorld",
  components: {
    Selection,
    General,
    Phone
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
    fuckingfirst: function(e) {
      this.onec = e;
    },
    fuckingsecond: function(e) {
      this.twoc = e;
    },
    fuckingthird: function(e) {
      this.threec = e;
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
      one: 'galaxys20ultra',
      two: 'iphone11pro',
      three: 'galaxys20plus',
      onec: 'samsung',
      twoc: 'apple',
      threec: 'samsung',
      compared: false,
      window: {
        width: 0,
        height: 0
      }
    };
  }
};
</script>

