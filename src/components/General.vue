<template>
  <div class="ui center aligned container">
    <i class="icon huge microchip" />
    <h3>프로세서</h3>
    <p>{{ phone.cpu }}</p>
   <i class="fas fa-memory fa-4x"/>
    <h3>메모리</h3>
    <p>{{ phone.ram }}</p>
    <i class="fas fa-calendar-minus fa-4x"/>
    <h3>출시일</h3>
    <p>{{ phone.date }}</p>
    <i class="fas fa-server fa-4x"/>
    <h3>출시 OS</h3>
    <p>{{ phone.os }}</p>
  </div>
</template>

<script>
import { getData } from "../getPhone";
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

<style scoped>

.fas.large {
    font-size: 4em !important;
}
.spacegray {
  color: #535150;
}
.apple.silver {
  color: #ebebe3;
}
.apple.gold {
  color: #fad7bd;
}
.midnightgreen {
  color: #4e5851;
}
.cosmicblack {
  color: #2d2926;
}
.cosmicgray {
  color: #5f6367;
}
.cloudblue {
  color: #a4c8e1;
}
.cloudwhite {
  color: #ece8e4;
}
.crownsilver {
  color: #dbdbdb;
}
.majesticblack {
  color: #000000;
}
.royalgold {
  color: #cab8a0;
}
.prisimblack {
  color: #040301;
}
.prisimwhite {
  color: #d5eef1;
}

.ceramicwhite {
  color: #f4f1ed;
}
.ceramicblack {
  color: #2a2620;
}
.flamingopink {
  color: #f2756d;
}
.prisimgreen {
  color: #1c6c78;
}
.canariayellow {
  color: #d9de4c;
}
.midnightblack {
  color: #000000;
}
.coralblue {
  color: #95b6e1;
}

.titaniumgray {
  color: #7c7b81;
}
.lilacpurple {
  color: #c19ebe;
}
</style>
