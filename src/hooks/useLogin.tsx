import { useEffect, useState } from "react"
import { auth, authGoogle } from "../firebase/firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { authIsReady, loginUser } from "../redux/userSlice";
import { UserSelect } from "../redux/store";


export const useLogin = () => {

    const[isPending, setIsPending] = useState(false);
    const[error, setError] = useState<string | null>(null);
    const[isCancelled, setIsCancelled] = useState(false);

    // const user = firebase.auth().currentUser;

    const dispatch = useDispatch();
    const { user: uu } = useSelector(UserSelect);

    const login = async() => {
        setIsPending(true);
        setError(null);
        try{
            const res = await auth.signInWithPopup(authGoogle);
            dispatch(loginUser(res.user))
            console.log(res.user);
            
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
        // auth.onAuthStateChanged(uu => {
        //     dispatch(authIsReady(uu))
        // })
        return () => setIsCancelled(true)
    }, [])


    return {login, isPending, error};
}