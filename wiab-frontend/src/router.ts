import { createRouter, createWebHashHistory } from "vue-router";

import BlockchainPageView from "./views/BlockchainPageView.vue";
import BlockPageView from "./views/BlockPageView.vue";
import CertificatePageView from "./views/CertificatePageView.vue";
import LandingPageView from "./views/LandingPageView.vue";
import MiningPageView from "./views/MiningPageView.vue";

const routes = [
  { path: "/", component: LandingPageView },
  { path: "/block", component: BlockPageView },
  { path: "/blockchain", component: BlockchainPageView },
  { path: "/mining", component: MiningPageView },
  { path: "/certificate", component: CertificatePageView },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
