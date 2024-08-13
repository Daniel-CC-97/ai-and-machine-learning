import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// Import the components
import HomeView from "../views/HomeView.vue";

// Define routes with lazy-loaded components for AI/ML features
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/image-classification",
    name: "image-classification",
    component: () => import("../views/ImageClassification.vue"),
  },
  {
    path: "/text-generation",
    name: "text-generation",
    component: () => import("../views/TextGeneration.vue"),
  },
  {
    path: "/sentiment-analysis",
    name: "sentiment-analysis",
    component: () => import("../views/SentimentAnalysis.vue"),
  },
  {
    path: "/object-detection",
    name: "object-detection",
    component: () => import("../views/ObjectDetection.vue"),
  },
  {
    path: "/recommendation-system",
    name: "recommendation-system",
    component: () => import("../views/RecommendationSystem.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
