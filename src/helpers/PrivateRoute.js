'use client'
import useFirebase from "@/hooks/useFirebase";
import { useRouter } from 'next/navigation'

const PrivateRoute = ({ children }) => {
    const { user,loading } = useFirebase()
    const router = useRouter()
    console.log(children)
   
    if (!loading) {
        
        if (!user.auth) {
            router.push('/login')
            return
            
        }
            else {
                return children
        }
    }
};

export default PrivateRoute;