import {defineStore} from 'pinia'
import Cookies from "js-cookie";

export const useAuthStore = defineStore('auth', () => {
    const isAuth = ref(false)
    const isPageLoading = ref(true)
    const router = useRouter()
    const { signIn,token,signOut } = useAuth()
    const setIsPageLoading=(data)=>isPageLoading.value=data
    const login = async (data) => {
        try {

            let res = await signIn(
                {...data},
                {callbackUrl: '/'}
            )

            console.log("res", res);

        } catch (error) {
            console.log("error", error);
        }

    }

    const exit = async () => {
        await signOut({callbackUrl:'/auth',external:true})
        navigateTo('/auth',{external:true})
        
    }
    return {isAuth, login, exit,isPageLoading,setIsPageLoading}
})
