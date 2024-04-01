
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { SendPasswordResetEmail } from "../services/auth";
import { FirebaseError } from "firebase/app";
import Footer from "../components/Footer";

const ForgotPassword: React.FC = () => {
  let email:string;
  const [isLoading, setIsLoading] = useState(false);

  const sendPasswordResetEmailForm = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await SendPasswordResetEmail(email);
      let navigate = useNavigate()
      navigate("/login");
      alert(
        "Password reset email has been sent."
      );
    } catch (err: any) {
        alert((err as FirebaseError).message);
    }
    finally{
        setIsLoading(false);
    }
  };

  const onEmailChanged = (value:string)=>{
    email = value;
  }

  return (
    <div className="login">
    <Loading isLoading={isLoading} message="Sending password reset email..." />
    <div className="form">
      <h2>Forgot Password</h2>
      <form onSubmit={(e)=>sendPasswordResetEmailForm(e)}>
        <div className="inputBox">
          <input
            type="text"
            id= "email"
            placeholder="Email address"
            name="email"
            onChange={(e) => onEmailChanged(e.target.value)}
            required
          />
        </div>

        <button className="login-btn">Reset Password</button>
        <p>
          Back to <Link  to="/login">Login</Link>
        </p>
      </form>
    </div>
    <Footer />
  </div>
);
}


export default ForgotPassword;

