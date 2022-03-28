import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllArticles } from "../redux/articlesSlice";
import { db } from "../firebase/firebaseConfig";
import firebase from "firebase/app";

type Article = {
    actor: {
        email: string ;
        name: string;
        date: firebase.firestore.Timestamp;
        image: string | null;
    },
    video: string;
    sharedImage: string;
    comments: number;
    description: string;
}

export const useGetArticles = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        let payload: any | Article[] = [];
        const unsubscribe = db.collection("articles").orderBy("actor.date", "desc").onSnapshot((snapshot) => {
            payload = snapshot.docs.map((doc) => doc.data())            
            dispatch(getAllArticles(payload));
        })

        return () => unsubscribe()
    }, [])
}
