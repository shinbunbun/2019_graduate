<template>
  <div class="Home container">
    <h3>Happy graduation！</h3>
    <br />
    <div class="row">
      <div class="col"></div>
      <div class="col-lg-8">
        <a :href="require('../../static/2018/2018.10.1 整理日/644.jpg')" class="luminous">
          <img v-lazy="require('../../static/2018/2018.10.1 整理日/644.jpg')" class="img-fluid" alt />
        </a>
      </div>
      <div class="col"></div>
    </div>
    <div class="py-4"></div>
    <div class="row green-background">
      <div class="col">
        <h4 id="year">Year</h4>
      </div>
    </div>
    <br />
    <div class="row year-pics">
      <div class="col-6 col-md-3 py-3">
        <router-link to="/2019">
          <img v-lazy="require('../../static/2019.jpg')" alt />
        </router-link>
      </div>
      <div class="col-6 col-md-3 py-3">
        <router-link to="/2018">
          <img v-lazy="require('../../static/2018.jpg')" alt />
        </router-link>
      </div>
      <div class="col-6 col-md-3 py-3">
        <router-link to="/2017">
          <img v-lazy="require('../../static/2017.jpg')" alt />
        </router-link>
      </div>
      <div class="col-6 col-md-3 py-3">
        <router-link to="/2016">
          <img v-lazy="require('../../static/2016.jpg')" alt />
        </router-link>
      </div>
    </div>
    <div class="py-4"></div>
    <div class="row green-background">
      <div class="col">
        <h4 id="person">Person</h4>
      </div>
    </div>
    <div class="row person-pics">
      <div class="col-6 col-md-3 py-3">
        <router-link :to="{name: 'person', params:{person: 'katoriki'}}">
          <img v-lazy="require('../../static/person/katoriki.jpg')" alt />
        </router-link>
      </div>
      <div class="col-6 col-md-3 py-3">
        <router-link :to="{name: 'person', params:{person: 'masu'}}">
          <img v-lazy="require('../../static/person/masu.jpg')" alt />
        </router-link>
      </div>
      <div class="col-6 col-md-3 py-3">
        <router-link :to="{name: 'person', params:{person: 'endo'}}">
          <img v-lazy="require('../../static/person/endo.jpg')" alt />
        </router-link>
      </div>
      <div class="col-6 col-md-3 py-3">
        <router-link :to="{name: 'person', params:{person: 'kohira'}}">
          <img v-lazy="require('../../static/person/kohira.jpg')" alt />
        </router-link>
      </div>
      <div class="col-6 col-md-3 py-3">
        <router-link :to="{name: 'person', params:{person: 'keino'}}">
          <img v-lazy="require('../../static/person/keino.jpg')" alt />
        </router-link>
      </div>
      <div class="col-6 col-md-3 py-3">
        <router-link :to="{name: 'person', params:{person: 'shigeno'}}">
          <img v-lazy="require('../../static/person/shigeno.jpg')" alt />
        </router-link>
      </div>
      <div class="col-6 col-md-3 py-3">
        <router-link :to="{name: 'person', params:{person: 'satoryo'}}">
          <img v-lazy="require('../../static/person/satoryo.jpg')" alt />
        </router-link>
      </div>
      <div class="col-6 col-md-3 py-3">
        <router-link :to="{name: 'person', params:{person: 'ishii'}}">
          <img v-lazy="require('../../static/person/ishii.jpg')" alt />
        </router-link>
      </div>
      <div class="col-6 col-md-3 py-3">
        <router-link :to="{name: 'person', params:{person: 'ego'}}">
          <img v-lazy="require('../../static/person/ego.jpg')" alt />
        </router-link>
      </div>
      <div class="col-6 col-md-3 py-3">
        <router-link :to="{name: 'person', params:{person: 'harupyon'}}">
          <img v-lazy="require('../../static/person/harupyon.jpg')" alt />
        </router-link>
      </div>
      <div class="col-6 col-md-3 py-3">
        <router-link :to="{name: 'person', params:{person: 'oshimi'}}">
          <img v-lazy="require('../../static/person/oshimi.jpg')" alt />
        </router-link>
      </div>
      <div class="col-6 col-md-3 py-3">
        <router-link :to="{name: 'person', params:{person: 'nagamitsu'}}">
          <img v-lazy="require('../../static/person/nagamitsu.jpg')" alt />
        </router-link>
      </div>
      <div class="col-6 col-md-3 py-3">
        <router-link :to="{name: 'person', params:{person: 'otsuzuki'}}">
          <img v-lazy="require('../../static/person/otsuzuki.jpg')" alt />
        </router-link>
      </div>
      <div class="col-6 col-md-3 py-3">
        <router-link :to="{name: 'person', params:{person: 'tamama'}}">
          <img v-lazy="require('../../static/person/tamama.jpg')" alt />
        </router-link>
      </div>
      <div class="col-6 col-md-3 py-3">
        <router-link :to="{name: 'person', params:{person: 'taiyu'}}">
          <img v-lazy="require('../../static/person/taiyu.jpg')" alt />
        </router-link>
      </div>
      <div class="col-6 col-md-3 py-3">
        <router-link :to="{name: 'person', params:{person: 'takane'}}">
          <img v-lazy="require('../../static/person/takane.jpg')" alt />
        </router-link>
      </div>
    </div>

    <!--<div class="columns is-multiline">
      <div
        v-for="(image, index) in images"
        :key="image.id"
        class="column is-one-quarter has-text-centered"
      >
        <a class="luminous" :href="image.src">
          <img v-lazy="image.src" @click="openGallery(index)" class="thumbnail" />
        </a>
        <p>{{ image.title }}</p>
      </div>
    </div>-->
  </div>
</template>

<script>
// @ is an alias to /src
import { Luminous/*, LuminousGallery*/ } from 'luminous-lightbox';
import 'luminous-lightbox/dist/luminous-basic.css';
//const LuminousGallery = require('luminous-lightbox').LuminousGallery;

export default {
  name: 'Home',
  components: {
  },
  data() {
        return {
        };
    },
  methods: {
    openGallery () {
    }
  },
  mounted: function() {
    new Luminous(document.querySelector('.luminous'));
    const scroll = this.$route.query.scroll;
    if(scroll) {
      this.$scrollTo(scroll, 0, { offset: 215 });
    }
  }
};
</script>

<style lang="scss" scoped>
img.thumbnail {
  height: 100px;
  cursor: pointer;
}
.green-background {
  background-color: #171c61;
  text-align: left;
}
.green-background h4 {
  padding: 5px;
  color: white;
  font-weight: 700;
}
.year-pics img {
  max-width: 100%;
}
.person-pics img {
  max-width: 100%;
}
h4 {
  margin: 0;
}
</style>
