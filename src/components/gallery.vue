<template>
  <div class="container gallery">
    <div class="row">
      <div class="col" style="text-align: left;">PATH: {{path}}</div>
    </div>
    <div class="row">
      <div class="col">
        <div class="btn-group float-right" role="group" aria-label="基本のボタングループ">
          <button
            type="button"
            class="btn size-btn"
            :class="btnClass.min"
            @click="sizeChange"
            value="min"
          >小</button>
          <button
            type="button"
            class="btn size-btn"
            :class="btnClass.mid"
            @click="sizeChange"
            value="mid"
          >中</button>
          <button
            type="button"
            class="btn size-btn"
            :class="btnClass.big"
            @click="sizeChange"
            value="big"
          >大</button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="py-3" :class="imgClass" v-for="n in pictureCount" v-bind:key="n">
        <a :href="require(`../../static${path}/${n}.jpg`)" class="luminous">
          <img
            style="width:100%"
            v-lazy="require(`../../static${path}/${n}.jpg`)"
            class="img-fluid"
            :alt="n"
          />
        </a>
        <!--<v-lazy-image src="http://lorempixel.com/400/200/" />
        <v-lazy-image
          style="width:100%"
          :src="require(`../../static/2019/all/${200}.jpg`)"
          class="img-fluid"
          alt
        />-->
        <!--{{n}}-->
      </div>
    </div>
  </div>
</template>

<script>
import { LuminousGallery } from 'luminous-lightbox';
import 'luminous-lightbox/dist/luminous-basic.css';
export default {
  name: 'gallery',
  data() {
    return {
      pictureCount: this.$store.state.pictureCount,//10,
      path: '',//'/2019/all'
      btnClass: {
            min: 'btn-light',
            mid: 'btn-secondary',
            big: 'btn-light'
          },
      imgClass: 'col-6 col-md-4'
    };
  },
  mounted: function() 
    {
      const options = {
        caption: function (trigger) {
          return trigger.querySelector('img').getAttribute('alt'); //'<img width="500px" src="https://www.takanawa.ed.jp/wp/wp-content/themes/takanawa/images/common/logo_01.svg" />';
        },
      };
        new LuminousGallery(document.querySelectorAll('.luminous'), {}, options);
    },
  created() {
    this.path = decodeURI(((this.$route.path).replace( /gallery-/g , '' )).replace( /folder-/g , '' ));
    console.log(this.path);
  },
  methods: {
    sizeChange(e) {
      const value = e.target.value;
      switch (value) {
        case 'min':
          this.btnClass = {
            min: 'btn-secondary',
            mid: 'btn-light',
            big: 'btn-light'
          };
          this.imgClass = 'col-4 col-md-3';
          break;
        case 'mid':
          this.btnClass = {
            min: 'btn-light',
            mid: 'btn-secondary',
            big: 'btn-light'
          };
          this.imgClass = 'col-6 col-md-4';
          break;
        case 'big':
          this.btnClass = {
            min: 'btn-light',
            mid: 'btn-light',
            big: 'btn-secondary'
          };
          this.imgClass = 'col-12 col-md-6';
          break;
      
        default:
          break;
      }
    }
  },
};
</script>

<style scoped>
.size-btn {
  border: 1px solid;
}
</style>