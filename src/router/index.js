import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import SearchView from '../views/SearchView.vue';
import AddProperty from '../views/AddProperty.vue';
import DetailView from '../views/DetailView.vue';
import AboutView from '../views/AboutView.vue';
import PrivacyView from '../views/PrivacyView.vue';
import ConditionsView from '../views/TermsView.vue';
import PlotsView from '../views/PlotsView.vue';
import ComercialView from '../views/ComercialView.vue';
import RentView from '../views/RentView.vue';
import AgentView from '../views/AgentView.vue';
import TrendingView from '../views/TrendingView.vue';
import ProjectsView from '../views/ProjectsView.vue';
import Properties from '../views/PropertyView.vue';
import Gallery from '../views/GalleryView.vue';
import Realtors from '../views/realtorsView.vue';
import Blog from '../views/blogView.vue';
import Contact from '../views/contactView.vue';
import PropertyDetails from '../views/PropertyDetailsView.vue';
import MyProperty from '../views/MyPropertyView.vue';
import PostDetails from '../views/PostDetailView.vue';
import Favorite from '../views/FavoriteView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/search',
    name: 'search',
    component: SearchView
  },
  {
    path: '/property-detail',
    name: 'property-details',
    component: PropertyDetails
  },
  {
    path: '/plots',
    name: 'plots',
    component: PlotsView
  },
  {
    path: '/comercial',
    name: 'comercial',
    component: ComercialView
  },
  {
    path: '/rent',
    name: 'rent',
    component: RentView
  },
  {
    path: '/add-property',
    name: 'addproperty',
    component: AddProperty
  },
  {
    path: '/detail',
    name: 'detail',
    component: DetailView
  },
  {
    path: '/:agent',
    name: 'agent',
    component: AgentView
  },
  {
    path: '/trending',
    name: 'trending',
    component: TrendingView
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog,
  },
  {
    path: '/blog/post/:id',
    name:'post',
    component: PostDetails,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: PrivacyView
  },
  {
    path: '/term-conditions',
    name: 'term conditions',
    component: ConditionsView,
  },
  {
    path: '/properties',
    name: 'properties',
    component: Properties,
  },
  {
    path: '/realtors',
    name: 'realtors',
    component: Realtors,
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: Gallery,
  },
  {
    path: '/my-properties',
    name: 'myProperty',
    component: MyProperty,
  },
  {
    path: '/favorites',
    name: 'FavoriteView',
    component: Favorite,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.path === '/search' || to.path === '/blog') return
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ behavior: 'smooth', left: 0, top: 0 })
      }, 100)
    })
  },
})

export default router
