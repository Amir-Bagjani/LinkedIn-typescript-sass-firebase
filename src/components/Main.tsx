import { useState } from "react";
import { useSelector } from "react-redux";
import { useGetArticles } from "../hooks/useGetArticles";
import { ArticlesSelect, UserSelect } from "../redux/store";
import ReactPlayer from "react-player";

import Avatar from "./Avatar";
import PostModal from "./PostModal";


const Main = () => {

  const [openModal,setOpenModal] = useState(false);
  const { user } = useSelector(UserSelect);
  const { articles } = useSelector(ArticlesSelect);
  
  //get articles when elements mounts
  useGetArticles();

  const closeModal = () => {
    setOpenModal(false);
  }

  const button = (icon: string, text: string) => (
    <button className="btn">
      <i className={icon}></i> {text}
    </button>
  )

  return (
    <div className="main">

      <div className="share-box">
        <div className="user-button">
          <Avatar src={user?.photoURL ? user.photoURL : "images/user.svg"} width={45} />
          <button onClick={() => setOpenModal(true)}>Start a post</button>
        </div>
        <div className="buttons">
          {button("fas fa-image", "Photo")}
          {button("fab fa-youtube", "Video")}
          {button("fas fa-briefcase", "Job")}
          {button("fas fa-align-left", "Write article")}
        </div>
      </div>

      {articles.length > 0 && articles.map((article, ind) => (

          <div className="article" key={ind} >

            <div className="actor">
              <i className="fas fa-ellipsis-h"></i>
              <Avatar src={article.actor.image ? article.actor.image : "images/user.svg"} width={45} />
              <div>
                <p>{article.actor.name}</p>
                <p>{article.actor.email}</p>
                <p>{article.actor.date.toDate().toLocaleDateString()}</p>
              </div>
            </div>

            <div className="description">
              {article.description}
            </div>

            {article.sharedImage && <div className="shared-image">
              <img loading="lazy" src={article.sharedImage} alt="shared-img" />
            </div>}

            {article.video && <div className="shared-video">
              <ReactPlayer width="100" url={article.video} />
            </div>}

            <div className="social-counts">
              <div>
                <img src="images/like-emoji.svg" alt="like-emoji" />
                <img src="images/clap-emoji.svg" alt="clap-emoji" />
                <span>0</span>
              </div>
              <div>
                <span>comments: {article.comments}</span>
              </div>
            </div>

            <div className="social-actions">
              {button("fas fa-thumbs-up", "Like")}
              {button("far fa-comment-dots", "Comments")}
              {button("fas fa-share", "Shared")}
              {button("fas fa-paper-plane", "Send")}
            </div>

          </div>

      ))}

      <PostModal openModal={openModal} closeModal={closeModal}  />

    </div>
  )
}

export default Main