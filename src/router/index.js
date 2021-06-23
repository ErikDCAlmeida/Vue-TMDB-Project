import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
  {
    path: "/favourites",
    name: "Favourites",
    component: () =>
      import(/* webpackChunkName: "favourites" */ "../views/Favourites.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/search/:id",
    name: "SearchResult",
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "searchresult" */ "../views/SearchResult.vue"
      ),
  },
  {
    path: "/movie/infos/:id",
    name: "MovieInfos",
    component: () =>
      import(/* webpackChunkName: "movieinfos" */ "../views/MovieInfos.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
