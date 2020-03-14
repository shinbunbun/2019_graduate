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
      case '2018.7.18 装飾':
        this.$store.state.pictureCount = 8;
        break;
      case '2018.7.19 段ボール搬入':
        this.$store.state.pictureCount = 134;
        break;
        case '2018.7.20 段ボール・イベントカラー配布':
          this.$store.state.pictureCount = 9;
        break;
        case '2018.7.20 益神':
          this.$store.state.pictureCount = 2;
        break;
        case '2018.9.6 執行部招集':
          this.$store.state.pictureCount = 18;
        break;
        case '2018.9.10 パンフ写真など':
          this.$store.state.pictureCount = 252;
        break;
        case '2018.9.12 ブルーシート搬入':
          this.$store.state.pictureCount = 10;
        break;
        case '2018.9.18 執行部招集(当日役職発表)':
          this.$store.state.pictureCount = 16;
        break;
        case '2018.9.21 出展代表招集':
          this.$store.state.pictureCount = 4;
        break;
        case '2018.9.26 出展代表招集，机テープ貼り':
          this.$store.state.pictureCount = 39;
        break;
        case '2018.10.1 整理日':
          this.$store.state.pictureCount = 645;
        break;
        case '2018.10.1 夢庵':
          this.$store.state.pictureCount = 101;
        break;
        case 'グラウンドその他':
          this.$store.state.pictureCount = 18;
        break;
        case 'シート':
          this.$store.state.pictureCount = 4;
        break;
        case 'パネル':
          this.$store.state.pictureCount = 8;
        break;
        case '机・椅子':
          this.$store.state.pictureCount = 2;
        break;
        case '校内（午後準）':
          this.$store.state.pictureCount = 9;
        break;
        case '講堂':
          this.$store.state.pictureCount = 4;
        break;
        case 'シート（準備日）':
          this.$store.state.pictureCount = 8;
        break;
        case 'ステージリハ':
          this.$store.state.pictureCount = 14;
        break;
        case 'ステージ設営':
          this.$store.state.pictureCount = 113;
        break;
        case 'その他（準備日）':
          this.$store.state.pictureCount = 32;
        break;
        case '装飾（準備日）':
          this.$store.state.pictureCount = 27;
        break;
        case '販売（準備日）':
          this.$store.state.pictureCount = 22;
        break;
        case '講堂（準備日）':
          this.$store.state.pictureCount = 1;
        break;
        case '高圧洗浄（準備日）':
          this.$store.state.pictureCount = 9;
        break;
        case 'グラウンド（一日目）':
          this.$store.state.pictureCount = 6;
        break;
        case '校舎外その他（一日目）':
          this.$store.state.pictureCount = 1;
        break;
        case '校内（一日目）':
          this.$store.state.pictureCount = 1;
        break;
        case '講堂（一日目）':
          this.$store.state.pictureCount = 17;
        break;
        case '準備（二日目）':
          this.$store.state.pictureCount = 6;
        break;
        case '本番（二日目）':
          this.$store.state.pictureCount = 17;
        break;
        case 'さとりょー（後夜祭）':
          this.$store.state.pictureCount = 5;
        break;
        case '軽音（後夜祭）':
          this.$store.state.pictureCount = 145;
        break;
        case '校舎外その他（二日目）':
          this.$store.state.pictureCount = 3;
        break;
        /*case '':
          this.$store.state.pictureCount = ;
        break;*/

    
      default:
        break;
    }
    
    //this.$store.state.folderPath = `${decodeURI(((this.$route.path).replace( /gallery-/g , '' )).replace( /folder-/g , '' ))}`;//${folder}
  },
};
</script>