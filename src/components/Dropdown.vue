<template lang="html">
  <sui-dropdown
    fluid
    :options="countries"
    placeholder="비교할 폰을 선택하세요"
    search
    selection
    v-model="current"
  />
</template>

<script>
export default {
  name: 'Company',
  data() {
    return {
      current: null,
      countries: [
        { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
        { key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands' },
        { key: 'al', value: 'al', flag: 'al', text: 'Albania' },
        { key: 'dz', value: 'dz', flag: 'dz', text: 'Algeria' },
        { key: 'as', value: 'as', flag: 'as', text: 'American Samoa' }
      ],
    };
  },
};
</script>