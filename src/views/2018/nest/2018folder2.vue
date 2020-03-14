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
      case 'グラウンド（ネスト）（午後準）':
        this.$store.state.folderNames = ['グラウンドその他', 'シート', 'パネル', '机・椅子'];
        break;
      case 'グラウンド（ネスト）（準備日）':
        this.$store.state.folderNames = ['シート（準備日）','ステージリハ', 'ステージ設営', 'その他（準備日）', '装飾（準備日）', '販売（準備日）'];
        break;
      case 'グラウンド（ネスト）（二日目）':
        this.$store.state.folderNames = ['準備（二日目）','本番（二日目）'];
        break;
      case '後夜祭（ネスト）':
        this.$store.state.folderNames = ['さとりょー（後夜祭）', '軽音（後夜祭）'];
        break;
      default:
        break;
    }
    console.log(this.$store.state.folderNames);
  },
};
</script>