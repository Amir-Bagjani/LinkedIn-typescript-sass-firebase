import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllArticles } from "../redux/articlesSlice";
import { db } from "../firebase/firebaseConfig";


export const useGetArticles = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        let payload: any[] = [];
        const unsubscribe = db.collection("articles").orderBy("actor.date", "desc").onSnapshot((snapshot) => {
            payload = snapshot.docs.map((doc) => doc.data());         
            dispatch(getAllArticles(payload));
        })

        return () => unsubscribe()
    }, [])
}
