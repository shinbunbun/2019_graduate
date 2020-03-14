<template>
  <div class="page">
    <folder></folder>
  </div>
</template>

<script>
import folder from '@/components/folder';

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
    const folder = this.$route.params.folder2;
    switch (folder) {
      case '校内（準備日）（ネスト）':
        this.$store.state.folderNames = ['講堂（準備日校内）'];
        break;
        
      default:
        break;
    }
    console.log(this.$store.state.folderNames);
  },
};
</script>