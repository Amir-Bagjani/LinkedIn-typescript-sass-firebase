import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/userSlice";
import { auth } from "../firebase/firebaseConfig";

export const useLogout = () => {

    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isCancelled, setIsCancelled] = useState(false);

    const dispatch = useDispatch()

    const logout = async() => {
        setError(null);
        setIsPending(true);
        try{
            await auth.signOut();
            dispatch(logoutUser())
            if (!isCancelled) {
                setIsPending(false)
                setError(null)
            }
        }catch(error: any){
            if (!isCancelled) {
                setError(error.message)
                setIsPending(false)
            }
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return {isPending, error, logout};
}