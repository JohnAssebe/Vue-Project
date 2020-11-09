import Home from './component/home.vue'
import ContactUs from './component/contactus.vue'
import Registration from './component/signup.vue'
import Login from './component/signin.vue'
export default[
    {path:'/',component:Home},
    {path:'/contact-us',component:ContactUs},
    {path:'/register',component:Registration},
    {path:'/login',component:Login}
]