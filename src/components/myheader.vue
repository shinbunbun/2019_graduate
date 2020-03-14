<template>
  <div>
    <message ref="message"></message>
    <nav class="navbar nav-menu navbar-expand-lg navbar-light bg-white" style="text-align:center;">
      <div class="col-xs-12 col-md-5 col-lg-3">
        <router-link to="/">
          <img style="width: 100%;" class src="../assets/logo.svg" alt />
        </router-link>
      </div>
      <button
        type="button"
        class="navbar-toggler"
        data-toggle="collapse"
        data-target="#Navber"
        aria-controls="Navber"
        aria-expanded="false"
        aria-label="ナビゲーションの切替"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="Navber">
        <ul class="navbar-nav w-100 nav-justified">
          <li class="nav-item active">
            <router-link class="nav-link active" to="/">
              <div class="nav-bar-title">Home</div>
            </router-link>
          </li>
          <li class="nav-item active">
            <div v-if="hash == '/'">
              <router-link class="nav-link active" v-scroll-to="'#year'" to>
                <div class="nav-bar-title">Year</div>
              </router-link>
            </div>
            <div v-else>
              <router-link class="nav-link active" :to="{path: '/', query: {scroll: '#year'}}">
                <div class="nav-bar-title">Year</div>
              </router-link>
            </div>
          </li>
          <li class="nav-item active">
            <div v-if="hash == '/'">
              <router-link class="nav-link active" v-scroll-to="'#person'" to>
                <div class="nav-bar-title">Person</div>
              </router-link>
            </div>
            <div v-else>
              <router-link class="nav-link active" :to="{path: '/', query: {scroll: '#person'}}">
                <div class="nav-bar-title">Person</div>
              </router-link>
            </div>
          </li>
          <li class="nav-item active">
            <a class="nav-link active" href="#" @click="message">
              <div class="nav-bar-title">Message</div>
            </a>
          </li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </nav>
    <hr />
  </div>
</template>

<script>
import message from '@/components/message';
export default {
  data() {
    return {
      hash: this.$route.hash
    };
  },
  components: {
    message
  },
  watch: {
    '$route': function() {
      this.hash = this.$route.path;
      console.log(this.hash);
    }
  },
  methods: {
    message() {
      this.$refs.message.openModal();
    }
  },
};
</script>

<style scoped>
.nav-bar-title {
  font-size: 20px;
  font-weight: 500;
  color: #171c61;
}
</style>