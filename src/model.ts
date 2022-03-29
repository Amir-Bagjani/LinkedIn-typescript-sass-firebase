import firebase from "firebase/app";

export type Article = {
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

export type DocType = {
    user: any;
    image: File | null;
    video: string;
    description: string;
    timestamp: firebase.firestore.Timestamp;
}