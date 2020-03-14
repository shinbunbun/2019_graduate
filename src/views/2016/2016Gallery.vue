<template>
  <div class="page">
    <gallery></gallery>
  </div>
</template>

<script>
import gallery from '@/components/gallery';

export default {
  name: 'page',
  components: {
    gallery
  },
  data() {
    return {
    };
  },
  beforeCreate() {
    this.$store.state.pictureCount = 69;
  },
};
</script>