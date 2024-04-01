import { Component } from "react";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";

// import "App.css";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import { Login as LoginUser} from '../services/auth';
import { FirebaseError } from "firebase/app";

export default ()=>{

  var navigate  =  useNavigate();

  return(
    <Login navigate={navigate} />
  )

}

interface LoginProps{
  navigate : NavigateFunction
}

let email:string;
let password:string;
class Login extends Component<LoginProps>{
  constructor(props:any){
    super(props);
    this.state={
      isCreatingUser:false
    }
  }
  onEmailChanged = (value:string) => {
    email = value;
  }
  onPasswordChanged = (value:string) => {
    password = value;
  }
  handleSubmit = async (e:any) => {
    e.preventDefault();
    this.setState({isCreatingUser: true});

    try{
      await LoginUser(email, password);
      console.log("reachdd here");
      this.props.navigate("/dashboard");
    }
    catch(e :unknown){
      alert(`There was an error logging in.\n${(e as FirebaseError).message}` );
    }
    finally{
    this.setState({isCreatingUser: false});
    }
   
  }

  render() {
    return (
      <div className="login">
        <Loading isLoading={(this.state as {isCreatingUser:boolean}).isCreatingUser} message="Logging in..." />
        <div className="form">
          <h2>Log in with</h2>
          <form onSubmit={(e)=>this.handleSubmit(e)}>
            <div className="inputBox">
              <input
                type="text"
                id= "email or username"
                placeholder="Email address or Username"
                name="email"
                onChange={(e) => this.onEmailChanged(e.target.value)}
                required
              />
            </div>
            <div className="inputBox">
              <input
                type="password"
                id="password"
                placeholder="Password"
                name="password"
                onChange={(e) => this.onPasswordChanged(e.target.value)}
                required
              />
            </div>

            <p className="forgotPassword"><Link to="/forgotPassword">Forgot Password?</Link></p>

            <button className="login-btn">Log in</button>
            <p>
              Don't have an account? <Link  to="/signup">Signup</Link>
            </p>

            <div>
              <p>By signing in with an account, you agree to</p>
              <p>
                Scissor's <a href="#">Terms of Service</a>,{" "}
                <a href="#">Privacy Policy</a> and Acceptable Use Policy.
              </p>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

