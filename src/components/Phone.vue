<template>
  <div class="ui center aligned container">
    <br />
    <img :src="phone.img" />
    <h1>{{ phone.name }}</h1>
    <h3>색상</h3>
    <a
    v-for="color in phone.color"
    :key="color" class="ui label" :class="color"> {{ window.innerWidth >=768 ? colors.names[color] : '' }} </a>
      <!-- <li v-for="item in phone.color">{{ item }}</li> -->
    <div class="ui divider" />
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
      phone: getData(this.company, this.id),
      colors,
      window
    };
  }
};
</script>

<style scoped>
.spacegray {
  background-color: #535150  !important;
  color: #f9f9f9 !important;
}
.apple.silver {
  background-color: #ebebe3  !important;
}
.apple.gold {
  background-color: #fad7bd  !important;
}
.midnightgreen {
  background-color: #4e5851  !important;
  color: #f9f9f9 !important;
}
.cosmicblack {
  background-color: #2d2926  !important;
  color: #f9f9f9 !important;
}
.cosmicgray {
  background-color: #5f6367  !important;
  color: #f9f9f9 !important;
}
.cloudblue {
  background-color: #a4c8e1  !important;
  color: #f9f9f9 !important;
}
.cloudwhite {
  background-color: #ece8e4  !important;
}
.crownsilver {
  background-color: #dbdbdb  !important;
}
.majesticblack {
  background-color: #000000  !important;
  color: #f9f9f9 !important;
}
.royalgold {
  background-color: #cab8a0  !important;
  color: #f9f9f9 !important;
}
.prismblack{
  background-color: #040301  !important;
  color: #f9f9f9 !important;
}
.prismwhite {
  background-color: #d5eef1  !important;
}

.ceramicwhite {
  background-color: #f4f1ed  !important;
}
.ceramicblack {
  background-color: #2a2620  !important;
  color: #f9f9f9 !important;
}
.flamingopink {
  background-color: #f2756d  !important;
  color: #f9f9f9 !important;
}
.prisimgreen {
  background-color: #1c6c78  !important;
  color: #f9f9f9 !important;
}
.canariayellow {
  background-color: #d9de4c  !important;
  color: #f9f9f9 !important;
}
.midnightblack {
  background-color: #000000  !important;
  color: #f9f9f9 !important;
}
.coralblue {
  background-color: #95b6e1  !important;
  color: #f9f9f9 !important;
}

.titaniumgray {
  background-color: #7c7b81  !important;
  color: #f9f9f9 !important;
}
.lilacpurple {
  background-color: #c19ebe  !important;
  color: #f9f9f9 !important;
}

img {
  width: 350px;
  height: 444px;
}

@media all and (max-width: 768px) {
  img {
    width: 140px;
    height: 180px;
  }
}
</style>
