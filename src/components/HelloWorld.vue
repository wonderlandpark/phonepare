<template>
  <div>
    <div class="ui center aligned container">
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
            <Phone :id="one" :company="onec" />
          </div>
          <div class="column">
            <Selection
              v-on:selected="second"
              v-on:company="fuckingsecond"
              phone="iphone12"
              company="apple"
            />
            <Phone :id="two" :company="twoc" />
          </div>
          <div class="column" v-if="window.width > 1199">
            <Selection
              v-on:selected="third"
              v-on:company="fuckingthird"
              phone="velvet"
              company="lg"
            />
            <Phone :id="three" :company="threec" />
          </div>
        </div>
      </div>
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

  <h2 class="ui left aligned header">카메라</h2>
      <div class="ui divider" />
      <div class="ui center aligned grid">
        <div
          :class="{
            'ui three column row': window.width > 1199,
            'ui two column row': window.width <= 1199
          }"
        >
          <div class="column">
            <Camera :id="one" :company="onec" />
          </div>
          <div class="column">
            <Camera :id="two" :company="twoc" />
          </div>
          <div class="column" v-if="window.width > 1199">
            <Camera :id="three" :company="threec" />
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
        </div>
      </div>
      <h2 class="ui left aligned header">기타</h2>
      <div class="ui divider" />
      <div class="ui center aligned grid">
        <div
          :class="{
            'ui three column row': window.width > 1199,
            'ui two column row': window.width <= 1199
          }"
        >
          <div class="column">
            <Others :id="one" :company="onec" />
          </div>
          <div class="column">
            <Others :id="two" :company="twoc" />
          </div>
          <div class="column" v-if="window.width > 1199">
            <Others :id="three" :company="threec" />
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Selection from "./Selection.vue";
import General from "./General.vue";
import Phone from "./Phone.vue";
import Battery from "./Charge.vue";
import Display from "./Display.vue";
import Memory from "./Memory.vue";
import Size from "./Size.vue";
import Others from "./Others.vue";
import Camera from "./Camera.vue";
import Footer from "./Footer.vue";
export default {
  name: "HelloWorld",
  components: {
    Selection,
    General,
    Phone,
    Footer,
    Battery,
    Display,
    Memory,
    Size,
    Camera,
    Others
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
      one: "galaxys20ultra",
      two: "iphone11promax",
      three: "galaxys20plus",
      onec: "samsung",
      twoc: "apple",
      threec: "samsung",
      compared: false,
      window: {
        width: 0,
        height: 0
      }
    };
  }
};
</script>