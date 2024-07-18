import { useState } from "react";
import {useNavigate} from "react-router-dom"
import { useAuth } from "../store/auth";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

const navigate=useNavigate();
const {storeTokenInLS}=useAuth();

  // let handle the input field value
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

    // handle form on submit
    const  handleSubmit = async (e) => {
      e.preventDefault();
      console.log(user);
      try {
        const response=await fetch(`http://localhost:4000/api/auth/login`,{
         method:"POST", 
         headers:{
          "Content-Type":"application/json",
         },
         body:JSON.stringify(user),
        })
  
        if(response.ok){
          alert("Login sucessful")
          const res_data=await response.json();
          console.log("res from server",res_data)

          //store token in local storage

          // localStorage.setItem("token",res_data);
          storeTokenInLS(res_data.token);

          setUser({email:"",password:""})
          navigate("/")
        }else{
          alert("Inalid Credentials")
        }
        console.log(response);
      } catch (error) {
        console.log("login",error)
      }
    };

  return (
    <>
      <section>
        <main>
          <div className="section-form">
            <div className="container grid grid-two-cols">
              <div className="registration-image reg-img">
                <img
                  src="/images/img2.jpg"
                  alt="a girl with a Register"
                  width="600"
                  height="600"
                />
              </div>
              {/* our main login code  */}
              <div className="form">
                <h1 className="main-heading mb-3">Login form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="text"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                      placeholder="email"
                    />
                  </div>

                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      placeholder="password"
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};