import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import FAQ from "../components/FAQ.vue";
import Login from "../components/Login.vue";
import TicketsLayout from "../components/TicketsLayout.vue";
import Tickets from "../components/Tickets.vue";
import NewTicket from "../components/NewTicket.vue";
import Ticket from "../components/Ticket.vue";
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
      { path: ":id", name: "ticket", component: Ticket,props:true }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
