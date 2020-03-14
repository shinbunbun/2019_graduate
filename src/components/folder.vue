<template>
  <div class="container folder">
    <div class="row">
      <div
        class="col"
        style="text-align: left;"
      >PATH: {{decodeURI(($route.path).replace( /folder-/g , '' ))}}</div>
    </div>
    <div class="row">
      <div class="col-3 col-md-2 py-4" v-for="folderName in folderNames" v-bind:key="folderName">
        <div v-if="folderName.includes('ネスト')">
          <div v-if="folder1">
            <router-link :to="{name: `${year}folder2`, params:{folder2: folderName}}">
              <img style="width:100%" src="../../static/folder.jpg" class="img-fluid" alt />
              <p>{{folderName}}</p>
            </router-link>
          </div>
          <div v-else>
            <router-link :to="{name: `${year}folder1`, params:{folder1: folderName}}">
              <img style="width:100%" src="../../static/folder.jpg" class="img-fluid" alt />
              <p>{{folderName}}</p>
            </router-link>
          </div>
        </div>
        <div v-else>
          <div v-if="folder1">
            <div v-if="folder2">
              <router-link :to="{name: `${year}Nest2Gallery`, params:{gallery: folderName}}">
                <img style="width:100%" src="../../static/folder.jpg" class="img-fluid" alt />
                <p>{{folderName}}</p>
              </router-link>
            </div>
            <div v-else>
              <router-link :to="{name: `${year}NestGallery`, params:{gallery: folderName}}">
                <img style="width:100%" src="../../static/folder.jpg" class="img-fluid" alt />
                <p>{{folderName}}</p>
              </router-link>
            </div>
          </div>
          <div v-else>
            <router-link :to="{name: `${year}Gallery`, params:{gallery: folderName}}">
              <img style="width:100%" src="../../static/folder.jpg" class="img-fluid" alt />
              <p>{{folderName}}</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'folder',
  data() {
    return {
      folderNames: this.$store.state.folderNames,
      //folderNames: this.$route.params.folder1,
      path: this.$route.path, 
      year: (this.$route.matched[0].path).substr(1),
      folder1: this.$route.params.folder1,
      folder2: this.$route.params.folder2
    };
  },
  created() {
    
  },
};
//
</script>