import  { useState } from "react";

import "../css/login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const[error,setError] = useState('');

  const homeNav = useNavigate();

  const getEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const getPassword = (e: any) => {
    setPassword(e.target.value);
  };

  const goToHome = (e: FormDataEvent) => {
    e.preventDefault();
    console.log("email---->"+email);
    console.log("password---->"+password);

axios.get("http://localhost:8080/stu/mng/search/user?email="
    +email+"&password="+password).then(
        (res)=>{
            console.log("res---->"+res.data);
            if(res.data == true){
                homeNav("/showAll");
            }
            else{
                setError("Email and Password are inCorrect!!!");
            }
        }
    );

    
  };

  return (
    <div>
      <div className="container h-100">
        <div className="d-flex justify-content-center h-100">
          <div className="user_card">
            <div className="d-flex justify-content-center">
              <div className="brand_logo_container">
                <img
                  src="https://cdn.freebiesupply.com/logos/large/2x/pinterest-circle-logo-png-transparent.png"
                  className="brand_logo"
                  alt="Logo"
                />
              </div>
            </div>
            <div className="d-flex justify-content-center form_container">
              <form onSubmit={goToHome}>
              <div>
                    {error}
                  </div>
                  
                <div className="input-group mb-3">
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="email"
                    onChange={getEmail}
                    className="form-control input_user"
                    placeholder="enter email"
                  />
                </div>
                <div className="input-group mb-2">
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="fas fa-key"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    onChange={getPassword}
                    className="form-control input_pass"
                    placeholder="password"
                  />
                </div>
                <div className="d-flex justify-content-center mt-3 login_container">
                  <button type="submit" name="button" className="btn login_btn">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
