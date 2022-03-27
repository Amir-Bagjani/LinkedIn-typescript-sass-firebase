import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { authIsReady } from "./redux/userSlice";
import { UserSelect } from "./redux/store";
import { auth } from "./firebase/firebaseConfig";
//components
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Loading from "./components/Loading";

function App() {

  const { user, userIsReady } = useSelector(UserSelect);
  const dispatch = useDispatch()
  
  //check if auth is ready
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      dispatch(authIsReady(user));
    })
  }, [])
  

  return (
    <>{userIsReady &&
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={user ? <Navigate to="/" /> : <Login />}/>
            <Route path="/" element={user ? <HomePage /> : <Navigate to="/login" />} />
          </Routes>
        </BrowserRouter>
      }
      {!userIsReady && <Loading />}
    </>
  );
}

export default App;
