<template>
  <div class="page">
    <div class="container gallery">
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
          <a :href="require(`../../static/${json[n].path}`)" class="luminousGallery">
            <img
              style="width:100%"
              v-lazy="require(`../../static/${json[n].path}`)"
              class="img-fluid"
              :alt="`No. ${n}<br>Path: ${json[n].path}`"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LuminousGallery } from 'luminous-lightbox';
import 'luminous-lightbox/dist/luminous-basic.css';

export default {
  name: 'page',
  components: {
  },
  data() {
    return {
      json: {},
      pictureCount: 1,
      person: this.$route.params.person,
      btnClass: {
            min: 'btn-light',
            mid: 'btn-secondary',
            big: 'btn-light'
          },
      imgClass: 'col-6 col-md-4'
    };
  },
  methods: {
    load(){
      const person = this.person;
        const json = require(`@/json/${person}.json`);
        this.json = json;
        console.log(json[1].path);
        this.pictureCount = Object.keys(json).length;
    },
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
  mounted: function() 
    {
      const options = {
        caption: function (trigger) {
          return trigger.querySelector('img').getAttribute('alt'); //'<img width="500px" src="https://www.takanawa.ed.jp/wp/wp-content/themes/takanawa/images/common/logo_01.svg" />';
        },
      };
        new LuminousGallery(document.querySelectorAll('.luminousGallery'), {}, options);
    },
  created() {
    this.load();
  },
  
  /*watch: {
    person: function () {
      this.load();
    }
  }*/
};
</script>

<style scoped>
.size-btn {
  border: 1px solid;
}
</style>