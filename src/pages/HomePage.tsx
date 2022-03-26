import Navbar from "../components/Navbar";
import LeftSide from "../components/LeftSide";
import Main from "../components/Main";
import RightSide from "../components/RightSide";

import "../styles/homePage.scss";


const HomePage = () => {
  return (
    <>
      <Navbar />
      
      <main className="home-page">
        <div className="wrapper">
          <LeftSide />
          <Main />
          <RightSide />
        </div>
      </main>
    </>
  )
}

export default HomePage;