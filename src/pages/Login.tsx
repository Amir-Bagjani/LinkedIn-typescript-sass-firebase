import { useEffect } from "react";
import { useLogin } from "../hooks/useLogin";

import "../styles/login.scss";


const Login = () => {

  const { login, error } = useLogin();

  useEffect(() => {
    if(error) alert(error)
  }, [error])
  

  return (
    <div className="login-page">
        <div className="wrapper">
        
            <header>
                <img src="images/login-logo.svg" alt="linkedin" />
                <nav className="navbar">
                    <a className="join-btn">Join now</a>
                    <a className="signin-btn">Sign in</a>
                </nav>
            </header>


            <section>
                <div className="hero">
                    <h1>Welcome to your professional community</h1>
                    <button onClick={login}>
                        <img src="images/google.svg" alt="google-image" />
                        Sign in with google
                    </button>
                </div>
                <img src="images/login-hero-2.svg" alt="login-hero-image" />
            </section>

        </div>             
    </div>
  )
}

export default Login;