
const RightSide = () => {

  const feedList = () => (
    <li>
      <a><img src="images/hashtag.svg" alt="hashtag" /></a>
      <div>
        <h4>#LinkedIn</h4>
        <button><i className="fas fa-plus"></i> Follow</button>
      </div>
    </li>
  )


  return (
    <div className="right">

      <div className="content">

        <div className="title">
          <h2>Add to your feed</h2>
          <i className="fas fa-info-circle"></i>
        </div>

        <ul className="feed">
          {feedList()}
          {feedList()}
        </ul>

        <div className="recommendation">
          View all recommendations
          <i className="fas fa-arrow-right"></i>
        </div>

      </div>

      <div className="banner-card">
        <img src="images/banner-img.jpg" alt="banner" />
      </div>
    </div>
  )
}

export default RightSide