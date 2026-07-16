// src/config/routesConfig.js

import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/admin/Dashboard";
import NotFound from "../pages/NotFound";

import PublicLayout from "../layouts/PublicLayout";
import AuthLayout from "../layouts/AuthLayout";
import AdminLayout from "../layouts/AdminLayout";

const routes = [

    {
        id: "home",

        title: "Inicio",

        path: "/",

        component: Home,

        layout: PublicLayout,

        showInNavbar: true,

        requiresAuth: false,

        roles: []
    },

    {
        id: "login",

        title: "Login",

        path: "/login",

        component: Login,

        layout: AuthLayout,

        showInNavbar: true,

        requiresAuth: false,

        roles: []
    },

    {
        id: "register",

        title: "Registro",

        path: "/register",

        component: Register,

        layout: AuthLayout,

        showInNavbar: true,

        requiresAuth: false,

        roles: []
    },

    {
        id: "dashboard",

        title: "Panel",

        path: "/admin",

        component: Dashboard,

        layout: AdminLayout,

        showInNavbar: false,

        requiresAuth: true,

        roles: ["admin"]
    },

    {
        id: "404",

        title: "404",

        path: "*",

        component: NotFound,

        layout: PublicLayout,

        showInNavbar: false,

        requiresAuth: false,

        roles: []
    }

];

export default routes;