import { useEffect, useState } from "react"
import { auth, authGoogle } from "../firebase/firebaseConfig";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/userSlice";


export const useLogin = () => {

    const[isPending, setIsPending] = useState(false);
    const[error, setError] = useState<string | null>(null);
    const[isCancelled, setIsCancelled] = useState(false);

    const dispatch = useDispatch();

    const login = async() => {
        setIsPending(true);
        setError(null);
        try{
            const res = await auth.signInWithPopup(authGoogle);
            dispatch(loginUser(res.user))
            
            if(!isCancelled){
                setIsPending(false);
                setError(null);
            }
        }catch(error: any){
            if(!isCancelled){
                setIsPending(false);
                setError(error.message);
            }
        }
    }


    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])


    return {login, isPending, error};
}