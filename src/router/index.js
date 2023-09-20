import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import(/* webpackChunkName: "about" */ '../views/RegisterView.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/verify',
    name: 'verify',
    component: () => import(/* webpackChunkName: "about" */ '../views/VerifyView.vue'),
    meta: { hideNavigation: true }
  },

  {
    path: '/dashboard-side-bar',
    name: 'dashboardSideBar',
    component: () => import(/* webpackChunkName: "dashboardSideBar" */ '../views/DashBoard/DashBoardSideBar.vue'),
    meta: { hideNavigation: true },
    redirect: { name: 'walletsManagement' },
    children: [
      {
        path: '/over-view',
        name: 'overView',
        component: () => import(/* webpackChunkName: "overView" */ '../views/DashBoard/OverView.vue'),
        meta: { hideNavigation: true }
      },
      {
        path: '/transactions',
        name: 'transactions',
        component: () => import(/* webpackChunkName: "overView" */ '../views/DashBoard/Transactions.vue'),
        meta: { hideNavigation: true }
      },
      {
        path: '/wallets-management',
        name: 'walletsManagement',
        component: () => import(/* webpackChunkName: "overView" */ '../views/DashBoard/WalletsManagement.vue'),
        meta: { hideNavigation: true }
      },
      {
        path: '/fund-wallet',
        name: 'fundWallet',
        component: () => import(/* webpackChunkName: "overView" */ '../views/DashBoard/FundWallet.vue'),
        meta: { hideNavigation: true },
      },
      {
        path: '/withdrawal',
        name: 'withdrawal',
        component: () => import(/* webpackChunkName: "overView" */ '../views/DashBoard/Withdrawal.vue'),
        meta: { hideNavigation: true },
      },
      {
        path: '/subscription-trade',
        name: 'subscriptionTrade',
        component: () => import(/* webpackChunkName: "overView" */ '../views/DashBoard/SubscriptionTrade.vue'),
        meta: { hideNavigation: true },
      },
      {
        path: '/refer-users',
        name: 'referUsers',
        component: () => import(/* webpackChunkName: "overView" */ '../views/DashBoard/ReferUsers.vue'),
        meta: { hideNavigation: true },
      },
      {
        path: '/settings',
        name: 'settings',
        component: () => import(/* webpackChunkName: "overView" */ '../views/DashBoard/Settings.vue'),
        meta: { hideNavigation: true },
        redirect: { name: 'changePassword' },
        children: [
          {
            path: "/wallets-management2",
            name: "WalletsManagement2",
            component: () =>
                import(/* webpackChunkName: "ChangePassword" */ "../views/DashBoard/WalletsManagement2.vue"),
            meta: { hideNavigation: true },
          },
          {
            path: "/change-password",
            name: "changePassword",
            component: () =>
                import(/* webpackChunkName: "ChangePassword" */ "../views/DashBoard/ChangePassword.vue"),
            meta: { hideNavigation: true },
          },
          {
            path: "/update-account",
            name: "updateAccount",
            component: () =>
                import(/* webpackChunkName: "UpdateAccount" */ "../views/DashBoard/UpdateAccount.vue"),
            meta: { hideNavigation: true },
          },
        ]
      },
    ]
  },

  {
    path: '/admin',
    name: 'dashBoardAdminLogin',
    component: () => import(/* webpackChunkName: "dashBoardAdminLogin" */ '../views/Admin/DashBoardAdminLogin.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/dashBoard-side-bar-admin',
    name: 'dashBoardSideBarAdmin',
    component: () => import(/* webpackChunkName: "dashBoardSideBarAdmin" */ '../views/Admin/DashBoardSideBarAdmin.vue'),
    meta: { hideNavigation: true },
    redirect: { name: 'listOfUsers' },
    children: [
      {
        path: "/list-of-users",
        name: "listOfUsers",
        component: () =>
            import(/* webpackChunkName: "listOfUsers" */ "../views/Admin/ListOfUsers.vue"),
        meta: { hideNavigation: true }
      },
      {
        path: "/investments-list",
        name: "investmentsList",
        component: () =>
            import(/* webpackChunkName: "investmentsList" */ "../views/Admin/InvestmentsList.vue"),
        meta: { hideNavigation: true }
      },
      {
        path: "/deposit-requests",
        name: "depositRequests",
        component: () =>
            import(/* webpackChunkName: "depositRequests" */ "../views/Admin/DepositRequests.vue"),
        meta: { hideNavigation: true }
      },
      {
        path: "/withdrawal-requests",
        name: "withdrawalRequests",
        component: () =>
            import(/* webpackChunkName: "withdrawalRequests" */ "../views/Admin/WithdrawalRequests.vue"),
        meta: { hideNavigation: true }
      },
      {
        path: "/user-information",
        name: "userInformation",
        component: () =>
            import(/* webpackChunkName: "userInformation" */ "../views/Admin/UserInformation.vue"),
        meta: { hideNavigation: true }
      },
      {
        path: "/user-dashBoard-view",
        name: "userDashBoardView",
        component: () =>
            import(/* webpackChunkName: "UserDashBoardView" */ "../views/Admin/UserDashBoardView.vue"),
        meta: { hideNavigation: true }
      },

      {
        path: "/change-password-admin",
        name: "changePasswordAdmin",
        component: () =>
            import(/* webpackChunkName: "ChangePasswordAdmin" */ "../views/Admin/ChangePasswordAdmin.vue"),
        meta: { hideNavigation: true }
      },

      {
        path: "/add-new-user",
        name: "addNewUser",
        component: () =>
            import(/* webpackChunkName: "ChangePasswordAdmin" */ "../views/Admin/AddNewUser.vue"),
        meta: { hideNavigation: true }
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
