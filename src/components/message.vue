<template>
  <!-- コンポーネント MyModal -->
  <div class="row">
    <div class="col-auto"></div>
    <MyModal @close="closeModal" v-if="messageModal" class="col">
      <div class="header">
        <div class="row py-3">
          <div class="col-auto"></div>
          <h5 class="col text-center">Message</h5>
          <div class="col-auto"></div>
        </div>
      </div>
      <!-- default スロットコンテンツ -->
      <template slot="default">
        <div class="row">
          <div class="col">
            <p>{{message}}</p>
          </div>
          <div class="col-auto"></div>
        </div>
      </template>
      <!-- /default -->
      <div class="row">
        <div class="col-auto"></div>
        <button class="btn btn-danger col" @click="closeModal">戻る</button>
        <div class="col-auto"></div>
      </div>
      <div class="py-2"></div>
    </MyModal>
    <div class="col-auto"></div>
  </div>
</template>

<script>
import MyModal from '@/components/modal.vue';
export default {
  data: function() {
    return {
      messageModal: false,
      message: ''
    };
  },
  components: {
    MyModal
  },
  methods: {
    openModal() {
      this.messageModal = true;
      this.message = this.$store.state.message;
    },
    closeModal() {
      this.messageModal = false;
    }
  },
  mounted() {
  }
};
</script>
