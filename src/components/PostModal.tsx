import { useEffect, useRef, useState } from "react";
import { ArticlesSelect, UserSelect } from "../redux/store";
import { useSelector } from "react-redux";
import { usePostArticle } from "../hooks/usePostArticle";
import firebase from "firebase/app";

import ReactPlayer from "react-player";
import Avatar from "./Avatar";
import Loading from "./Loading";

import "../styles/postModal.scss";


type ModalProps = {
    openModal: boolean;
    closeModal: () => void;
}

const PostModal: React.FC<ModalProps> = ({openModal, closeModal}) => {

    const [shareImg,setShareImg] = useState<File | null>(null);
    const [shareVideo,setShareVideo] = useState("");
    const [area,setArea] = useState("");
    const imgRef = useRef({} as HTMLInputElement);
    const shareText = useRef({} as HTMLTextAreaElement);
    const [disableBtn, setDisableBtn] = useState(true);

    const { user } = useSelector(UserSelect);
    const { isSendingArticle } = useSelector(ArticlesSelect);
    const { postArticle, error } = usePostArticle();


    const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        setShareImg(null);
        const image= e.target.files?.[0];

        if(!image){
            alert("Please select a photo");
            return
        }
        if(!image.type.includes("image")){
            alert("Selected file must be an image!!")
            return
        }
        setShareImg(image)
    }

    const handleArea = (showArea: string) => {
        if(showArea === "image"){
            setArea(showArea);
            setShareVideo("");
            imgRef.current.click();

        }else{//show video section and clear previous image data(if exists)
            setArea(showArea);
            setShareImg(null);
            imgRef.current.value = "";
        }
    }

    const resetModal = () => {
        shareText.current.value = "";
        setShareImg(null);
        setShareVideo("");
        setDisableBtn(true);
        setArea("");
        closeModal();
    }

    const handleSubmit = async() => { 
        if(shareText.current.value !== ""){
            const doc = {
                user: user,
                image: shareImg,
                video: shareVideo,
                description: shareText.current.value,
                timestamp: firebase.firestore.Timestamp.now(),
            }
            await postArticle(doc);
            resetModal();
        }
    }

    const isDisable = () => {
        shareText.current.value ? setDisableBtn(false) : setDisableBtn(true);
    }  

    useEffect(() => {
        if(error) alert(error);
    }, [error])

  return (
    <>{openModal && 
        <div className="parent-modal"  onClick={e => e.target === e.currentTarget && resetModal()}>
            <div className="modal">

                {isSendingArticle && <Loading />}

                <div className="modal-header">
                    <h2>Create a post</h2>
                    <i className="fas fa-times" onClick={resetModal}></i>
                </div>

                <div className="modal-content">
                    <div className="modal-content-user">
                        <Avatar src={user?.photoURL ? user.photoURL : "images/user.svg"} width={45} /> 
                        <span>{user?.displayName}</span>
                    </div>

                    <div className="modal-content-editor">
                        <textarea 
                            ref={shareText}
                            onChange={isDisable}
                            placeholder="What do you want to talk about?"
                            autoFocus={true}
                        />
                        <input type="file" ref={imgRef} style={{display: "none"}} onChange={handleChangeImage} />

                        {area === "image" && shareImg && 
                            <img src={URL.createObjectURL(shareImg)} alt="shared-img" />
                        }

                        {area === "video" && 
                            <input value={shareVideo}
                                type="text"
                                onChange={(e) => setShareVideo(e.target.value)}
                                placeholder="Input video URL" 
                            />
                        }
                        {area === "video" && shareVideo && 
                            <ReactPlayer url={shareVideo} width="100%"/>
                        }
                    </div>
                </div>

                <div className="modal-footer">
                    <div className="buttons">
                        <button className="btn" onClick={() => handleArea("image")}>
                            <i className="fas fa-image"></i> Photo
                        </button>
                        <button className="btn" onClick={() => handleArea("video")}>
                            <i className="fab fa-youtube"></i> Video
                        </button>
                        <button className="btn">
                            <i className="fas fa-briefcase"></i> Job
                        </button>
                    </div>
                    <button className="post-btn" onClick={handleSubmit} disabled={disableBtn}>Post</button>
                </div>            

            </div>
        </div>
    }</>
  )
}

export default PostModal;