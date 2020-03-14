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
    const folder = this.$route.params.folder1;
    switch (folder) {
      case '2018.9.27 午後準備日（ネスト）':
        this.$store.state.folderNames = ['グラウンド（ネスト）（午後準）', '校内（午後準）', '講堂'];
        break;
      case '2018.9.28 準備日（ネスト）':
        this.$store.state.folderNames = ['グラウンド（ネスト）（準備日）', '講堂（準備日）', '高圧洗浄（準備日）'];
        break;
      case '2018.9.29 文化祭一日目（ネスト）':
        this.$store.state.folderNames = ['グラウンド（一日目）', '校舎外その他（一日目）', '校内（一日目）', '講堂（一日目）'];
        break;
      case '2018.9.30 文化祭二日目（ネスト）':
        this.$store.state.folderNames = ['グラウンド（ネスト）（二日目）', '後夜祭（ネスト）', '校舎外その他（二日目）'];
        break;
    
      default:
        break;
    }
    console.log(this.$store.state.folderNames);
  },
};
</script>