<template>
  <div class="ui center aligned container">
    <h1 class="ui header">Phone Hub </h1>
    <p>핸드폰끼리 비교해드립니다.</p>
  <div class="ui three column grid">
    <div class="column">
      <div class="ui segment">
        <Selection :count="first" v-on:selected="first"/>

      </div>
    </div>
    <div class="column">
      <div class="ui segment">
       <Selection :count="two" v-on:selected="second"/>
      </div>
    </div>
    <div class="column">
      <div class="ui segment">
        <Selection :count="three" v-on:selected="third" />
      </div>
    </div>
  </div>
  {{ one }} {{ two }} {{ three }}
  <br/>
  <a class="ui yellow button" :class="{'disabled': !(one&&two||two&&three||one&&three) }">비교하기</a>
  </div>
</template>

<script>
import Selection from './Selection.vue'
export default {
  name: 'HelloWorld',
  components: {
    Selection
  },
  methods: {
    first: function(e){
      this.one = e
    },
      second: function(e){
      this.two = e
    },
      third: function(e){
      this.three = e
    }
  },
  data(){
    return{
      one: null,
      two: null,
      three: null
    }
  }
}
</script>

