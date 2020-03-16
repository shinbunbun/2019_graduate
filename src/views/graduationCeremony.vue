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
  created() {
    this.$store.state.pictureCount = 60;
    //this.$store.state.folderPath = `${decodeURI(((this.$route.path).replace( /gallery-/g , '' )).replace( /folder-/g , '' ))}`;//${folder}
  },
};
</script>