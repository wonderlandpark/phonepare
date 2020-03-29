<template>
  <div class="ui center aligned container">
    <h1 class="ui header">Phones</h1>
    <p>핸드폰끼리 비교해드립니다.</p>
  <div class="ui three column grid">
    <div class="column">
      <div class="ui segment">
        <Selection/>

      </div>
    </div>
    <div class="column">
      <div class="ui segment">
        <img>
      </div>
    </div>
    <div class="column">
      <div class="ui segment">
        <img>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Selection from './Selection.vue'
export default {
  name: 'HelloWorld',
  components: {
    Selection
  }
}
</script>

