import { useEffect } from "react";
import { useLogout } from "../hooks/useLogout";
import Avatar from "./Avatar";

import "../styles/navbar.scss";

const Navbar = () => {

  const { error, logout } = useLogout();

  useEffect(() => {
    if(error) alert(error)
  }, [error])

  return (
    <header className="header">
        <div className="wrapper">

            <a className="logo"><img src="images/home-logo.svg" alt="home-logo" /></a>

            <div className="search">
                <i className="fas fa-search"></i>
                <input type="search" placeholder="search here" />
            </div>

            <nav>
                <ul>
                    <li className="active">
                        <a><i className="fas fa-home"></i> Home</a>
                    </li>
                    <li>
                        <a><i className="fas fa-user-friends"></i> Network</a>
                    </li>
                    <li>
                        <a><i className="fas fa-briefcase"></i> Job</a>
                    </li>
                    <li>
                        <a><i className="fas fa-comment-dots"></i> Messaging</a>
                    </li>
                    <li>
                        <a><i className="fas fa-bell"></i> Notification</a>
                    </li>
                    <li className='user'>
                        <Avatar src="images/user.svg" width={25} /> 
                        <span>Me <i className="fas fa-caret-down"></i></span>
                        <p onClick={logout}>Sign Out</p>
                    </li>
                    <li className='work'>
                        <a>
                            <i className="fas fa-th"></i>
                            <span>Work <i className="fas fa-caret-down"></i></span>
                        </a>
                    </li>
                    
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Navbar