<template>
  <div id="app">
    <!--<div v-if="this.$store.state.loading">-->
    <!-- オーバーレイ用のコンポーネント -->
    <!--<LoadingOverlay />
    </div>-->
    <!--<div v-else-if="!this.$store.state.loading">-->
    <div class="py-4"></div>
    <myheader></myheader>
    <div class="py-4"></div>

    <div v-if="this.$store.state.loading">
      <!-- オーバーレイ用のコンポーネント -->
      <LoadingOverlay />
    </div>
    <div v-else>
      <transition name="view">
        <router-view />
      </transition>
    </div>
    <div class="pageUp" @click="scrollTop">
      <i class="fas fa-chevron-up Page-Btn-Icon"></i>
    </div>
    <div class="pageBack" @click="pageBack">
      <i class="fas fa-chevron-left Page-Btn-Icon"></i>
    </div>
    <div class="py-4"></div>
    <myfooter></myfooter>
    <!--</div>-->
  </div>
</template>

<script>
import myheader from '@/components/myheader';
import myfooter from '@/components/myfooter';
import LoadingOverlay from '@/components/LoadingOverlay';
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();
//import LoadingOverlay from '@/components/LoadingOverlay';

export default {
  components: {
    myheader,
    myfooter,
    LoadingOverlay
  },
  methods: {
    scrollTop: function(){
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    pageBack: function(){
      this.$router.go(-1);
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../node_modules/vue-image-lightbox/dist/vue-image-lightbox.min.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.view-enter-active,
.view-leave-active {
  transition: opacity 0.5s;
}
.view-leave-active {
  position: absolute;
}
.view-enter,
.view-leave-to {
  opacity: 0;
}
#app {
  overflow: hidden;
}

.pageUp {
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 50%;
  background: #171c61;
}
.pageBack {
  position: fixed;
  left: 20px;
  bottom: 20px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 50%;
  background: #171c61;
}
.Page-Btn-Icon {
  color: #fff;
  font-size: 16px;
}
</style>
