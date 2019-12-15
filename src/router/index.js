import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import FAQ from "../components/FAQ.vue";
import Login from "../components/Login.vue";
import TicketsLayout from "../components/TicketsLayout.vue";
import Tickets from "../components/Tickets.vue";
import NewTicket from "../components/NewTicket.vue";
import Ticket from "../components/Ticket.vue";
import NotFound from "../components/NotFound.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/faq",
    name: "faq",
    component: FAQ
  },
  {
    path: "/login",
    name: "login",
    meta: {
      guest: true
    },
    component: Login
  },
  {
    path: "/tickets",

    meta: {
      private: true
    },
    component: TicketsLayout,
    children: [
      {
        path: "",
        name: "tickets",
        component: Tickets
      },
      {
        name: "newTicket",
        path: "newTicket",
        component: NewTicket
      },
      { path: ":id", name: "ticket", component: Ticket, props: true }
    ]
  },
  {
    path: "*",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savePosition) {
    if (savePosition) {
      console.log(savePosition)
      return savePosition;
    }
    if (to.hash) {
      console.log(to.hash)
      return {
        selector: to.hash
      };
    }
    return {
      x: 0,
      y: 0
    };
  },
  routes
});

export default router;
