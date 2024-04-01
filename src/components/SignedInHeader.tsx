import { Link, NavLink, useNavigate } from "react-router-dom";
import scissorLogo from "../assets/scissorLogo.svg";
import { Logout } from "../services/auth";

const SignedInHeader = () => {
  let navigate = useNavigate();
  const logout = async ()=>{
    try{
      await Logout();
      navigate("/login");

    }
    catch(e){
    }
  }
    return (
      <header className="signedInHeader">
         <div className="logo">
            <Link to="/"><img src={scissorLogo} alt="logo"></img></Link>
          </div>
        <nav>
          <ul className="navBar">
            <li><NavLink to="/formUrl">Create</NavLink></li>
            <li><NavLink to="/dashboard">My URLs</NavLink></li>
            <li onClick={logout}>Log Out</li>
          </ul>

          
        </nav>
      </header>
    );
  }
  export default SignedInHeader;