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
      case '午後準備日（ネスト）':
        this.$store.state.folderNames = ['グラウンド', 'ゲート運搬', 'その他（午後準）', '椅子机運搬（午後準）', '教壇運搬（午後準）'];
        break;
      case '準備日二日目（ネスト）':
        this.$store.state.folderNames = ['グラウンドその他（準備日）', 'ステージリハ（準備日）', 'ステージ設営（準備日）', 'テント設営（準備日）', '荷物搬入（準備日）', '校内（準備日）（ネスト）', '祭事本部設営（準備日）', '水かき、雑巾がけ（準備日）', '耐熱シート張り（準備日）'];
        break;
      case '文化祭一日目（ネスト）':
        this.$store.state.folderNames = ['グラウンド（モノクロ）', 'グラウンドその他（一日目）', 'モノクロその他（一日目）', '催事（一日目）', '催事集合写真（一日目）'];
        break;
      case '文化祭二日目（ネスト）':
        this.$store.state.folderNames = ['グラウンド（二日目）', 'その他（二日目）', '後夜祭（二日目）', '催事（二日目）', '正門列（二日目）'];
        break;
    
      default:
        break;
    }
    console.log(this.$store.state.folderNames);
  },
};
</script>