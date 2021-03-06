import { useSelector } from "react-redux";
import { UserSelect } from "../redux/store";

import Avatar from "./Avatar";


const LeftSide = () => {

  const { user } = useSelector(UserSelect);

  const widget = (content: string, number: number) => (
    <div>
        <h5>{content}</h5>
        <p>{number}</p>
    </div>
  )
  
  return (
    <div className="left">
        <img className="img-bg" src="images/card-bg.svg" alt="card-background" />

        <div className="user-info">
            <Avatar src={user?.photoURL ? user.photoURL : "images/photo.svg"} width={70} />
            <h3>{user?.displayName}</h3>
            <p>ReactJS developer</p>
        </div>

        <div className="widget">
            {widget("Who viewed your profile", 190)}
            {widget("Views of your post", 25000)}
        </div>

        <div className="items">
            <i className="fas fa-bookmark"></i>
            My items
        </div>
    </div>
  )
}

export default LeftSide

