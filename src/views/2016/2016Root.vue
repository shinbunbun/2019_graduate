<template>
  <div class="page">
    <folder></folder>
  </div>
</template>

<script>
import folder from '../../components/folder';

export default {
  name: 'page',
  components: {
    folder
  },
  data() {
    return {
    };
  },
  beforeCreate() {
    this.$store.state.folderNames = ['2016全て'];
  },
};
</script>