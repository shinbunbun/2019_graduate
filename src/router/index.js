import Vue from 'vue';
import VueRouter from 'vue-router';
// eslint-disable-next-line no-unused-vars
import store from '@/store';
import axios from 'axios';

import {
  // eslint-disable-next-line no-unused-vars
  components,
  // eslint-disable-next-line no-unused-vars
  AmplifyEventBus
} from 'aws-amplify-vue';
// eslint-disable-next-line no-unused-vars
import Amplify, * as AmplifyModules from 'aws-amplify';
import {
  AmplifyPlugin
} from 'aws-amplify-vue';

Vue.use(VueRouter);
Vue.use(AmplifyPlugin, AmplifyModules);

let user;

// ユーザー管理
getUser().then((user) => {
  if (user) {
    //store.state.loading = false;
    router.push({
      path: '/'
    });
  }
});

// ログイン状態管理
AmplifyEventBus.$on('authState', async (state) => {
  store.state.loading = true;
  if (state === 'signedOut') {
    user = null;
    store.commit('setUser', null);
    store.state.loading = false;
    router.push({
      path: '/signin'
    });
  } else if (state === 'signedIn') {
    user = await getUser();
    store.state.loading = false;
    router.push({
      path: '/'
    });
  }
  store.state.loading = false;
});

function getUser() {
  return Vue.prototype.$Amplify.Auth.currentAuthenticatedUser().then((data) => {
    if (data && data.signInUserSession) {
      store.commit('setUser', data);
      return data;
    }
  }).catch(() => {
    store.commit('setUser', null);
    return null;
  });
}

const getIdToken = () => {
  return Vue.prototype.$Amplify.Auth.currentSession().then((data) => {
    return data.idToken.jwtToken;
  }).catch(() => {
    return null;
  });
};

const routes = [{
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),

  },
  {
    path: '/2019',
    component: () => import('@/views/2019.vue'),

    children: [{
      name: '2019Root',
      path: '',
      component: () => import('@/views/2019/2019Root.vue'),
    }, {
      name: '2019Gallery',
      path: 'gallery-:gallery',
      component: () => import('@/views/2019/2019Gallery.vue'),
    }]
  },
  {
    path: '/2018',
    component: () => import('../views/2018'),

    children: [{
      name: '2018Root',
      path: '',
      component: () => import('@/views/2018/2018Root.vue'),
    }, {
      name: '2018Gallery',
      path: 'gallery-:gallery',
      component: () => import('@/views/2018/2018Gallery.vue'),
    }, {
      path: 'folder-:folder1',
      component: () => import('@/views/2018/2018Nest.vue'),
      children: [{
          name: '2018folder1',
          path: '',
          component: () => import('@/views/2018/nest/2018folder1.vue'),
        },
        {
          name: '2018folder2',
          path: 'folder-:folder2',
          component: () => import('@/views/2018/nest/2018folder2.vue'),
        },
        {
          name: '2018NestGallery',
          path: 'gallery-:gallery',
          component: () => import('@/views/2018/2018Gallery.vue'),
        },
        {
          name: '2018Nest2Gallery',
          path: 'folder-:folder2/gallery-:gallery',
          component: () => import('@/views/2018/2018Gallery.vue'),
        }
      ],
    }]
  },
  {
    path: '/2017',
    component: () => import('../views/2017'),

    children: [{
      name: '2017Root',
      path: '',
      component: () => import('@/views/2017/2017Root.vue'),
    }, {
      name: '2017Gallery',
      path: 'gallery-:gallery',
      component: () => import('@/views/2017/2017Gallery.vue'),
    }, {
      path: 'folder-:folder1',
      component: () => import('@/views/2017/2017Nest.vue'),
      children: [{
          name: '2017folder1',
          path: '',
          component: () => import('@/views/2017/nest/2017folder1.vue'),
        },
        {
          name: '2017folder2',
          path: 'folder-:folder2',
          component: () => import('@/views/2017/nest/2017folder2.vue'),
        },
        {
          name: '2017NestGallery',
          path: 'gallery-:gallery',
          component: () => import('@/views/2017/2017Gallery.vue'),
        },
        {
          name: '2017Nest2Gallery',
          path: 'folder-:folder2/gallery-:gallery',
          component: () => import('@/views/2017/2017Gallery.vue'),
        }
      ],
    }, ]
  },
  {
    path: '/2016',

    component: () => import('@/views/2016.vue'),
    children: [{
      name: '2016Root',
      path: '',
      component: () => import('@/views/2016/2016Root.vue'),
    }, {
      name: '2016Gallery',
      path: 'gallery-:gallery',
      component: () => import('@/views/2016/2016Gallery.vue'),
    }]
  },
  {
    path: '/person/:person',
    name: 'person',
    component: () => import('@/views/person.vue'),

  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import('@/views/signin.vue'),
    meta: {
      isPublic: true
    },
    props: true
  },
  {
    path: '/graduationCeremony',
    name: 'graduationCeremony',
    component: () => import('@/views/graduationCeremony.vue'),

  },
];

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        x: 0,
        y: 0
      };
    }
  }
});

router.beforeResolve(async (to, from, next) => {
  store.state.loading = true;
  if (!to.matched.some(page => page.meta.isPublic)) {
    user = await getUser();
    if (!user) {
      store.state.loading = false;
      return next({
        path: '/signin'
      });
    }

    const token = await getIdToken();

    let data;
    console.log(store.state.message);
    if (!store.state.message || store.state.message === '') {
      try {
        data = await axios({
          method: 'GET',
          url: 'https://xdg41ejjrc.execute-api.ap-northeast-1.amazonaws.com/prod/message',
          headers: {
            'Authorization': token
          }
        });
      } catch (e) {
        alert(`エラーが発生しました。${e}`);
        console.error(e);
      }
      const message = data.data.message;
      store.state.message = message;
    }
  }
  store.state.loading = false;
  return next();
});


export default router;