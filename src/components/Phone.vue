<template>
  <div>
      <br />
     <img :src="phone.img ? phone.img : '/phones/NotSelected.jpg'" />
    <div class="ui center aligned container">
      <h1>{{ phone.name }}</h1>
      <h3>색상</h3>
      <a
        v-for="color in phone.color"
        :key="color"
        class="ui label"
        :class="color"
      > 
        {{ a >= 768 ? colors.names[color] : "" }}
      </a>
      <!-- <li v-for="item in phone.color">{{ item }}</li> -->
      <div class="ui divider" />
    </div>
  </div>
</template>

<script>
import { getData } from "../getPhone";
import colors from "../color";
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
  created() {
    window.addEventListener("resize", () => {
      this.$data.a = window.innerWidth;
    });
    this.handleResize();
  },
  data() {
    return {
      phone: getData(this.company, this.id),
      colors,
      a: window.innerWidth
    };
  }
};
</script>

<style scoped>
.spacegray {
  background: #535150 !important;
  color: #f9f9f9 !important;
}
.apple.silver {
  background: #ebebe3 !important;
}
.apple.gold {
  background: #fad7bd !important;
}
.midnightgreen {
  background: #4e5851 !important;
  color: #f9f9f9 !important;
}
.cosmicblack {
  background: #2d2926 !important;
  color: #f9f9f9 !important;
}
.cosmicgray {
  background: #5f6367 !important;
  color: #f9f9f9 !important;
}
.cloudblue {
  background: #a4c8e1 !important;
  color: #f9f9f9 !important;
}
.cloudwhite {
  background: #ece8e4 !important;
}
.crownsilver {
  background: #dbdbdb !important;
}
.majesticblack {
  background: #000000 !important;
  color: #f9f9f9 !important;
}
.royalgold {
  background: #cab8a0 !important;
  color: #f9f9f9 !important;
}
.prismblack {
  background: #040301 !important;
  color: #f9f9f9 !important;
}
.prismwhite {
  background: #d5eef1 !important;
}

.ceramicwhite {
  background: #f4f1ed !important;
}
.ceramicblack {
  background: #2a2620 !important;
  color: #f9f9f9 !important;
}
.flamingopink {
  background: #f2756d !important;
  color: #f9f9f9 !important;
}
.prismgreen {
  background: #1c6c78 !important;
  color: #f9f9f9 !important;
}
.canariayellow {
  background: #d9de4c !important;
  color: #f9f9f9 !important;
}
.midnightblack {
  background: #000000 !important;
  color: #f9f9f9 !important;
}
.coralblue {
  background: #95b6e1 !important;
  color: #f9f9f9 !important;
}

.titaniumgray {
  background: #7c7b81 !important;
  color: #f9f9f9 !important;
}
.lilacpurple {
  background: #c19ebe !important;
  color: #f9f9f9 !important;
}
.deepseablue {
  background: #8f8b9c !important;
  color: #f9f9f9 !important;
}
.orchidgray {
  background: #183168 !important;
  color: #f9f9f9 !important;
}
.maplegold {
  background: #c4b69c !important;
  color: #f9f9f9 !important;
}

.oceanblue {
  background: #183168 !important;
  color: #f9f9f9 !important;
}

.lavenderpurple {
  background: #c19ebe !important;
  color: #000 !important;
}

.metalliccopper {
  background: #d29880 !important;
}
.applepurple {
  background: #d1cdda !important;
}

.appleyellow {
  background: #ffe681 !important;
}

.applegreen {
  background: #aee1cd !important;
}
.productred {
  background: #ba0c2e !important;
  color: #f9f9f9 !important;
}

.applegray {
  background: #262529 !important;
  color: white !important;
}

.aurared {
  background: #ff4848 !important;
  color: white !important;
}

.aurapink {
  background: #fd846e !important;
  color: white !important;
}

.auraglow {
  background: linear-gradient(
    to right,
    #cdc0c9,
    #be9eaf,
    #3f77bb,
    #00bbcd
  ) !important;
}

.aurablue {
  background: #072676 !important;
  color: white !important;
}

.aura.white {
  background: #f5f5f5 !important;
}

.prismblue {
  background: #95b6e1 !important;
}

.appleblue {
  background: #51b8f2 !important;
}

.rose.gold {
  background: #f9d2ce !important;
}

.coral {
  background: #ff6e5a !important;
  color: white !important;
}

.zetblack {
  background: #000000 !important;
  color: white !important;
}

.appleblack {
  background: #353535 !important;
  color: white !important;
}

.oldspacegray {
  background: #b1b2b7 !important;
  color: white;
}

.newaurorablack {
  background: #181D30 !important;
  color: white !important;
}
.newmoroccanblue {
  background: #003153 !important;
  color: white !important
}
.carminered {
  background: #6F1111 !important;
  color: white !important;
}
.moroccanblue {
  background: #003153 !important;
  color: white !important;
} 
.cloudsilver {
  background: #D3D3D3 !important;
}
.lavenderviolet {
  background: #D8BFD8 !important;
}
.aurora.white {
  background: #cfd4e7 !important;
}
.aurora.gray {
  background: #1f2020 !important;
  color: white;
}
.aurora.green {
  background: #00545f !important;
}
.illusion.sunset {
  background: linear-gradient(to right, #FFEF00, #E39829, #D46C3D, #C64051, #C64051);
}
img {
  width: 350px;
  height: 444px;
}

@media all and (max-width: 768px) {
  img {
    width: 150px;
    height: 200px;
  }
}
</style>
