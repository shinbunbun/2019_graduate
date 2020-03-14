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
    this.$store.state.folderNames = ['2018.7.18 装飾', '2018.7.19 段ボール搬入', '2018.7.20 段ボール・イベントカラー配布', '2018.7.20 益神', '2018.9.6 執行部招集',  '2018.9.10 パンフ写真など', '2018.9.12 ブルーシート搬入', '2018.9.18 執行部招集(当日役職発表)', '2018.9.21 出展代表招集', '2018.9.26 出展代表招集，机テープ貼り', '2018.9.27 午後準備日（ネスト）', '2018.9.28 準備日（ネスト）', '2018.9.29 文化祭一日目（ネスト）', '2018.9.30 文化祭二日目（ネスト）', '2018.10.1 整理日', '2018.10.1 夢庵', '2018追加'];
  },
};
</script>