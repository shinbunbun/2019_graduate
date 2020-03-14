<template>
  <div class="page container">
    <div class="raw">
      <div class="col">
        <div class="signin">
          <amplify-authenticator></amplify-authenticator>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Amplify from 'aws-amplify';
// eslint-disable-next-line no-unused-vars
import { components, AmplifyEventBus } from 'aws-amplify-vue';
import aws_exports from '@/aws-exports'; 
Amplify.configure(aws_exports);

export default {
  mounted() {
    //console.log(document.getElementsByTagName('button')[1]);
  },
  methods: {
  },
};
</script>

<style>
@media screen and (max-width: 600px) {
  .signin * {
    min-width: 0;
  }
}
</style>