import { useState } from "react";
import { useAuth } from "../store/auth";
import {useNavigate} from "react-router-dom"

export const Contact=()=>{
  const [contact, setContact] = useState({
        username: "",
        email: "",
        message:"",
      });

const [userData, setUserData]=useState(true);

const {user}=useAuth();

if(userData && user){
  setContact({
  username:user.username,
  email: user.email,
  message:"",
}),
setUserData(false)
}

const navigate=useNavigate(); 

//handling the input values
  const handleInput = (e) => {
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;
    
        setContact({
          ...contact,
          [name]: value,
        });

      };
   
      

// handle form on submit
const  handleSubmit = async (e) => {
  e.preventDefault();
  console.log(contact);
  try {
    const response=await fetch(`http://localhost:4000/api/form/contact`,{
     method:"POST", 
     headers:{
      "Content-Type":"application/json",
     },
     body:JSON.stringify(contact),
    })

    if(response.ok){
      setContact({username:"",email:"",message:""})
    navigate("/")
    }
    console.log(response);
  } catch (error) {
    console.log("contact",error)
  }
};  


    return(
        <>
          <section className="section-contact">
            <div className="contact-content container">
               <h1 className="main-heading">contact us</h1> 
            </div>
            {/*contact page main */}
            <div className="container grid grid-two-cols">
              <div className="contact-img">
                <img src="/images/img1.jpg" alt="we are ready to help"/>
              </div>
            
            {/*contact page content */}
                <section className="section-form">
                  <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">username</label>
                        <input type="text" name="username" id="username" autoComplete="off" value={contact.username} onChange={handleInput} required/>
                    </div>
                    <div>
                        <label htmlFor="email">email</label>
                        <input type="email" name="email" id="email" autoComplete="off" value={contact.email} onChange={handleInput} required/>
                    </div>
                    <div>
                        <label htmlFor="message">massage</label>
                        <textarea name="message" id="message" cols="20" rows="4" autoComplete="off" value={contact.message} onChange={handleInput} required ></textarea>
                    </div>
                    <div>
                        <button type="submit">submit</button>
                    </div>
                  </form>
                </section>
            </div>
          </section>
        </>
    )
};