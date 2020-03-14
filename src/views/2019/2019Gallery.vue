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
    this.$store.state.pictureCount = 269;
    //this.$store.state.folderPath = `${this.$route.matched[0].path}/${this.$route.query.folder}`;
  },
};
</script>