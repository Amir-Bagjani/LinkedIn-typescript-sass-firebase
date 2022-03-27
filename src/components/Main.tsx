import Avatar from "./Avatar"

const Main = () => {

  const button = (icon: string, text: string) => (
    <button className="btn">
      <i className={icon}></i> {text}
    </button>
  )

  return (
    <div className="main">

      <div className="share-box">
        <div className="user-button">
          <Avatar src="images/user.svg" width={55} />
          <button>Start a post</button>
        </div>
        <div className="buttons">
          {button("fas fa-image", "Photo")}
          {button("fab fa-youtube", "Video")}
          {button("fas fa-briefcase", "Job")}
          {button("fas fa-align-left", "Write article")}
        </div>
      </div>

      <div className="article">

        <div className="actor">
          <i className="fas fa-ellipsis-h"></i>
          <Avatar src="images/user.svg" width={55} />
          <div>
            <p>title</p>
            <p>description</p>
            <p>date</p>
          </div>
        </div>

        <div className="description">
          Description
        </div>

        <div className="shared-image">
          <img loading="lazy" src="images/shared-img.jpg" alt="shared-img" />
        </div>

        <div className="social-counts">
          <div>
            <img src="images/like-emoji.svg" alt="like-emoji" />
            <img src="images/clap-emoji.svg" alt="clap-emoji" />
            <span>75</span>
          </div>
          <div>
            <span>comments: 75</span>
          </div>
        </div>

        <div className="social-actions">
          {button("fas fa-thumbs-up", "Like")}
          {button("far fa-comment-dots", "Comments")}
          {button("fas fa-share", "Shared")}
          {button("fas fa-paper-plane", "Send")}
        </div>

      </div>

    </div>
  )
}

export default Main