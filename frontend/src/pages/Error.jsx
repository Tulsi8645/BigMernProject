import { NavLink } from "react-router-dom";

export const Error=()=>{
    return(
        <>
          <section id="error-page">
            <div className="content">
               <h2 className="header">404</h2>
               <h4>Sorry! page not found</h4>
               <p>
                opps! it seems the page you are trying to acces doesn't exist.
                If you believe there is an issue,feel free to report it.
               </p>
               <div className="btns">
                <NavLink to="/">return home</NavLink>
                <NavLink to="/contact">report problem</NavLink>
               </div>
            </div>
          </section>
        </>
    )
}