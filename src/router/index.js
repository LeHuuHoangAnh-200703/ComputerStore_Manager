import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/auth/Login.vue';
import AddAdmin from '../views/auth/Register.vue';
import AdminDashboard from '../views/admin/adminDashboard.vue';
import AddProduct from '../views/admin/addProduct.vue';
import EditProduct from '../views/admin/editProduct.vue';
import EntryForm from '../views/admin/EntryForm.vue';
import EditEntryForm from '../views/admin/editEntryForm.vue';
import DetailsEntryForm from '../views/admin/detailsEntryForm.vue';
import EditDetailsEntryForm from '../views/admin/editDetailsEntryForm.vue';

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/addAdmin',
        name: 'Add Admin',
        component: AddAdmin
    },
    {
        path: '/',
        name: 'Admin Dashboard',
        component: AdminDashboard
    },
    {
        path: '/addProduct',
        name: 'Add Product',
        component: AddProduct
    },
    {
        path: '/editProduct',
        name: 'Edit Product',
        component: EditProduct
    },
    {
        path: '/entryForm',
        name: 'Entry Form',
        component: EntryForm
    },
    {
        path: '/editEntryForm',
        name: 'Edit Entry Form',
        component: EditEntryForm
    },
    {
        path: '/detailsEntryForm',
        name: 'Details Entry Form',
        component: DetailsEntryForm
    },
    {
        path: '/editDetailsEntryForm',
        name: 'Edit Details Entry Form',
        component: EditDetailsEntryForm
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router
