import "../styles/login.scss";


const Login = () => {
  return (
    <div className="login-page">
        <div className="wrapper">
            <header>
                <img src="images/login-logo.svg" alt="linkedin" />
                <nav className="navbar">
                    <a href="#" className="join-btn">Join now</a>
                    <a href="#" className="signin-btn">Sign in</a>
                </nav>
            </header>

            <section>
                <div className="hero">
                    <h1>Welcome to your professional community</h1>
                    <button>
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