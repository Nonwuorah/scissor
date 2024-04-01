import { Component } from "react";

// import "App.css";
import Footer from "../components/Footer";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import { CreateNewUser } from "../services/auth";
import Loading from "../components/Loading";
import { FirebaseError } from "firebase/app";


export default ()=>{

  var navigate  =  useNavigate();

  return(
    <Signup navigate={navigate} />
  )

}

interface SignupProps{
  navigate : NavigateFunction
}

let password:string;
// let confirmPassword:string;
let email:string;
let username:string;

class Signup extends Component<SignupProps>{

  constructor(props:any){
    super(props);
    this.state={
      isCreatingUser:false
    }
  }
  
  usernameChanged(value:string){
    username = value;
  }

  emailChanged(value:string){
    email = value;
  }

  passwordChanged(value:string){
    password = value;
  }

  // confirmPasswordChanged(value:string){
  //   confirmPassword = value;
  // }

  async handleSignUpSubmit(e:any){

    e.preventDefault();
    this.setState({isCreatingUser: true});

    try{
      await CreateNewUser(email, password, username);
      this.props.navigate("/dashboard");
    }
    catch(e :unknown){
      alert(`There was an error creating this account.\n${(e as FirebaseError).message}` );
    }
    finally{
    this.setState({isCreatingUser: false});
    }
    console.log("Sign up worked");
    
  }

    render() {  
    return (
      <div className="sign-up">
        <Loading isLoading={(this.state as {isCreatingUser:boolean}).isCreatingUser} message="Creating account..." />
        <div className="form">
          <p>Sign Up with</p>
          {/* <div className="social">
            <img src={Google} alt="Icon"></img>
            <img src={Apple} alt="Icon"></img>
          </div> */}

          {/* <div className="or">
            <img src={line} alt="Icon"></img>
            <h2>or</h2>
            <img src={line} alt="Icon"></img>
          </div> */}

          <form onSubmit={(e)=>this.handleSignUpSubmit(e)}>
            <div className="inputBox">
              <input
                type="text"
                id= "username"
                placeholder="Username"
                name="userName"
                onChange={(e) => this.usernameChanged(e.target.value)}
                required
              />
            </div>
            <div className="inputBox">
              <input
                type="email"
                id= "email"
                placeholder="Email"
                name="Email"
                onChange={(e) => this.emailChanged(e.target.value)}
                required />
            </div>
            

            <div className="inputBox">
              <input
                type="password"
                id="password"
                placeholder="Password"
                name="password"
                onChange={(e) => this.passwordChanged(e.target.value)}
                required
              />
            </div>
            <div className="inputBox">
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
                name="confirmPassword"
                required
              />
            </div>

            <input type="submit" value="Sign up with Email" />
            <p>
              Already have an account? <Link  to="/login">Log in</Link>
            </p>

            <div>
              <p>By signing up, you agree to</p>
              <p>
                Scissor's <a href="#">Terms of Service</a>,{" "}
                <a href="#">Privacy Policy</a> and Acceptable Use Policy.
              </p>
            </div>
          </form>
        </div>
        <Footer/>
      </div>
    );
  }
}

