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
    const folder = this.$route.params.gallery;
    switch (folder) {
        case '集合写真':
          this.$store.state.pictureCount = 8;
        break;
        case 'グラウンド':
          this.$store.state.pictureCount = 78;
        break;
        case 'ゲート運搬':
          this.$store.state.pictureCount = 11;
        break;
        case 'その他（午後準）':
          this.$store.state.pictureCount = 2;
        break;
        case '椅子机運搬（午後準）':
          this.$store.state.pictureCount = 29;
        break;
        case '教壇運搬（午後準）':
          this.$store.state.pictureCount = 21;
        break;
        case 'グラウンドその他（準備日）':
          this.$store.state.pictureCount = 71;
        break;
        case 'ステージリハ（準備日）':
          this.$store.state.pictureCount = 12;
        break;
        case 'ステージ設営（準備日）':
          this.$store.state.pictureCount = 111;
        break;
        case 'テント設営（準備日）':
          this.$store.state.pictureCount = 31;
        break;
        case '荷物搬入（準備日）':
          this.$store.state.pictureCount = 44;
        break;
        case '講堂（準備日校内）':
          this.$store.state.pictureCount = 13;
        break;
        case '祭事本部設営（準備日）':
          this.$store.state.pictureCount = 19;
        break;
        case '水かき、雑巾がけ（準備日）':
          this.$store.state.pictureCount = 122;
        break;
        case '耐熱シート張り（準備日）':
          this.$store.state.pictureCount = 21;
        break;
        case '打ち上げ':
          this.$store.state.pictureCount = 22;
        break;
        case 'グラウンド（モノクロ）':
          this.$store.state.pictureCount = 65;
        break;
        case 'グラウンドその他（一日目）':
          this.$store.state.pictureCount = 87;
        break;
        case 'モノクロその他（一日目）':
          this.$store.state.pictureCount = 19;
        break;
        case '催事（一日目）':
          this.$store.state.pictureCount = 13;
        break;
        case '催事集合写真（一日目）':
          this.$store.state.pictureCount = 4;
        break;
        case 'グラウンド（二日目）':
          this.$store.state.pictureCount = 39;
        break;
        case 'その他（二日目）':
          this.$store.state.pictureCount = 31;
        break;
        case '後夜祭（二日目）':
          this.$store.state.pictureCount = 25;
        break;
        case '催事（二日目）':
          this.$store.state.pictureCount = 23;
        break;
        case '正門列（二日目）':
          this.$store.state.pictureCount = 5;
        break;
        case '片付け日':
          this.$store.state.pictureCount = 267;
        break;
        case 'あああ':
          this.$store.state.pictureCount = 102;
        break;
  
      default:
        break;
    }
    
    //this.$store.state.folderPath = `${decodeURI(((this.$route.path).replace( /gallery-/g , '' )).replace( /folder-/g , '' ))}`;//${folder}
  },
};
</script>