'use client'
import useFirebase from "@/hooks/useFirebase";
import { useRouter } from 'next/navigation'

const PrivateRoute = ({ children }) => {
    const { user,loading } = useFirebase()
    const router = useRouter()
    console.log(user)


        
           
            if ( user.auth) {
            
                return children
            }
            if( !user.auth) {
                router.push('/login')
            return null
                    
            }
        
        
        
    
};

export default PrivateRoute;