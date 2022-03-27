import { useRef, useState } from "react";

import ReactPlayer from "react-player";
import Avatar from "./Avatar";

import "../styles/postModal.scss";

type ModalProps = {
    openModal: boolean;
    closeModal: () => void;
}

const PostModal: React.FC<ModalProps> = ({openModal, closeModal}) => {

    const [shareText,setShareText] = useState("");
    const [shareImg,setShareImg] = useState<File | null>(null);
    const [shareVideo,setShareVideo] = useState("");
    const [area,setArea] = useState("");
    const imgRef = useRef({} as HTMLInputElement)

    const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
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

    const handleCloseModal = () => {
        setShareText("");
        setShareImg(null);
        setShareVideo("");
        closeModal();
    }

    const handleSubmit = () => { 
        handleCloseModal();
    }

  return (
    <>{openModal && 
        <div className="parent-modal">
            <div className="modal">

                <div className="modal-header">
                    <h2>Create a post</h2>
                    <i className="fas fa-times" onClick={handleCloseModal}></i>
                </div>

                <div className="modal-content">
                    <div className="modal-content-user">
                        <Avatar src="images/user.svg" width={55} /> 
                        <span>Amir Bagjani</span>
                    </div>

                    <div className="modal-content-editor">
                        <textarea 
                            value={shareText} 
                            onChange={e=>setShareText(e.target.value)}
                            placeholder="What do you want to talk about?"
                            autoFocus={true}
                        />
                        <input type="file" ref={imgRef} style={{display: "none"}} onChange={handleImage} />

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
                    <button className="post-btn" onClick={handleSubmit} disabled={!shareText}>Post</button>
                </div>            

            </div>
        </div>
    }</>
  )
}

export default PostModal;