import Auth from "../components/screens/auth/Auth";
import NewPetting from "../components/screens/new-petting/NewPetting";
import Profile from "../components/screens/profile/Profile";
import App from "../components/screens/home/App";

export const routes = [
    {
        path: '/',
        component: App,
        isAuth: false
    }, 
    {
        path: '/auth',
        component: Auth,
        isAuth: false
    }, 
    {
        path: '/new-petting',
        component: NewPetting,
        isAuth: true
    }, 
    {
        path: '/profile',
        component: Profile,
        isAuth: false
    }
]