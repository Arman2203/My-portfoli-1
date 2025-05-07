


import { useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./component/login";
import SignUp from "./component/register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./component/profile";
import { useState } from "react";
import { auth } from "./component/firebase";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./component/Header/Header"
import Cart from "./Pages/Cart";
import Products from "./Pages/Products"
import Electronic from "./component/Electronic";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });
 

  return (
   
      
       <Router>
            
            <div className="App">
            
            
                
                 <Routes>
                  <Route path="/" element={<Header/>}/>
                  <Route path="/" element={<Products></Products>}></Route>
                  <Route path="/cart" element={<Cart></Cart>}></Route>
                  <Route path="/electronic" element={<Electronic></Electronic>}></Route>
               
                  
                 
                    <Route
                      path="/"
                      element={user ? <Navigate to="/profile" /> : <Login />}
                    />
                    
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<SignUp />} />
                    <Route path="/profile" element={<Profile />} />
                    
                   
                 
                  </Routes>
                 
                  <ToastContainer />
                 
            </div>
            </Router>
 
  );
}

export default App;
