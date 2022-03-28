import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { isSendingArticle } from "../redux/articlesSlice";
import { db, storage } from "../firebase/firebaseConfig";
import firebase from "firebase/app";

type DataType = {
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

type docType = {
    user: any;
    image: File | null;
    video: string;
    description: string;
    timestamp: firebase.firestore.Timestamp;
}


export const usePostArticle = () => {
    const [error,setError] = useState<string | null>(null);
    const [isCancelled, setIsCancelled] = useState(false);

    const dispatch = useDispatch();

    const postArticle = async(doc: docType) => {
        dispatch(isSendingArticle(true));
        setError(null);

        const data: DataType = {
            actor: {
                email: doc.user.email,
                name: doc.user.displayName,
                date: doc.timestamp,
                image: doc.user.photoURL,
            },
            video: "",
            sharedImage: "",
            comments: 0,
            description: doc.description
        }

        try{
            if(doc.image !== null){
                const upload =  await storage.ref(`images/${doc.timestamp.seconds}${doc.image.name}`).put(doc.image);
                const downloadURL = await upload.ref.getDownloadURL();
                await  db.collection("articles").add({...data, sharedImage: downloadURL});
            }else if (doc.video){
                await  db.collection("articles").add({...data, video: doc.video});
            }else{
                await  db.collection("articles").add(data);
            }

            if(!isCancelled) {
                setError(null);
                dispatch(isSendingArticle(false));
            }
        }catch(error: any){
            if(!isCancelled) {
                dispatch(isSendingArticle(false));                
                setError(error.message);
            }
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true);
    }, [])


    return { error, postArticle };
}