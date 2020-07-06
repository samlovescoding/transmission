import WelcomePage from "./pages/WelcomePage.vue";
import ConnectPage from "./pages/ConnectPage.vue";
import AddAServerPage from "./pages/AddAServerPage.vue";
import ServerPage from "./pages/ServerPage.vue";

export default [
    { path: '/', component: WelcomePage },
    { path: '/connect', component: ConnectPage },
    { path: '/add-a-server', component: AddAServerPage },
    { path: '/server', component: ServerPage },
]