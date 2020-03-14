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
    this.$store.state.folderNames = ['午後準備日（ネスト）', '準備日二日目（ネスト）', '文化祭一日目（ネスト）', '文化祭二日目（ネスト）', '片付け日', '打ち上げ', '集合写真'];
  },
};
</script>