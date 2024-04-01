import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import scissorLogo from "../assets/scissorLogo.svg";

const Header = () => {
    return (
      <header className="header">
        <nav>
          <div className="logo">
            <Link to="/"><img src={scissorLogo} alt="logo"></img></Link>
          </div>
          <ul className="navBar">
            <li className="featuresNavLink"><Link to="/Features">Features</Link>
            </li>
            <li><Link to="/Pricing">Pricing</Link></li>
            <li><Link to="/ContactUs">Contact Us</Link></li>
            <li><HashLink to="#faqsSection">FAQs</HashLink></li>
          </ul>

          <div className="registration">
            <p className="blueText">
              
              <Link to="/login"><span className="blueText"> Log in</span></Link>
            </p>
            <button className="tryForFree"><Link to="/signup">Try for free</Link></button>
            
          </div>
          
        </nav>
      </header>
    );
  }

  export default Header;