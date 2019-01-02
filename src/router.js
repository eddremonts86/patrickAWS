import Vue from "vue"
import Router from "vue-router"


Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [         
        {
            path: "/",
            name: "Home",
            component: () => import("./views/general/Home.vue")
        },
        {
            path: "/login",
            name: "login",
            component: () => import("./views/login/login.vue")
        },{
            path: "/dashboard",
            name: "dashboard",
            component: () => import("./views/general/Home.vue")
        },
        {
            path: "/about",
            name: "about",
            component: () => import("./views/general/About.vue")
        },        
        {
            path: "/company",
            name: "company",
            component: () => import("./views/Companies/companies.vue")
        },
        {
            path: "/users",
            name: "users",
            component: () => import("./views/users/users.vue")
        },
        {
            path: "/users-groups",
            name: "users-groups",
            component: () => import("./views/users/userGroups.vue")
        },
        {
            path: "/campaigns",
            name: "campaigns",
            component: () => import("./views/campaigns/campaignDasboard.vue")
        }





    ]
})


/*
router.beforeResolve((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      let user;
      Vue.prototype.$Amplify.Auth.currentAuthenticatedUser().then((data) => {
        if (data && data.signInUserSession) {
          user = data;
        next()
        } 
      }).catch((e) => {
         alert("Something is wrong !!!")
      });
      if (!user) {
        next({path:'/'});
      }else {
        next()
      }
    } else {
    next()
    }
  })
*/
  export default router;