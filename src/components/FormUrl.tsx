import magicWand from "../assets/magicWand.png";
import { Component } from "react";
import SignedInHeader from "./SignedInHeader";
import { getDatabase, push, ref, set } from "firebase/database";
import { FirebaseContext } from "../config/firebase";
import { FirebaseApp } from "firebase/app";
import { GetUserProfile } from "../services/auth";
import { DBLinkModel } from "../models";

let url:string;
let shortenedUrl:string;
// let brandDomain:string;
class Form extends Component {

  static contextType= FirebaseContext;

  handleSubmit = (e:any) => {
    e.preventDefault();
    let currentUser =  GetUserProfile();
    shortenedUrl = btoa(url+currentUser.uid).slice(0, 15);
    let firebaseApp =  this.context;
    let db = getDatabase(firebaseApp as FirebaseApp);
    const postListRef = ref(db, 'links/' + currentUser.uid);
    const newPostRef = push(postListRef);
    var link:DBLinkModel = {
      originalLink: url,
      shortenedLink: shortenedUrl
    };
    set(newPostRef, link);
  
  }

  onUrlChanged(value:string){
    url = value;
  }
  // onBrandDomainChanged(value:string){
  //   brandDomain = value;
  // }

  render() {
  return (
<section className="createUrlPage">
  <SignedInHeader />
  <form className="trimURLForm" onSubmit={this.handleSubmit}>
    <input
      className="pasteURLHere"
      type="url"
      placeholder="Paste URL here..."
      id="url"
      name="url"
      onChange={(e) => this.onUrlChanged(e.target.value)}
      required
    />
    <div className="domainAlias">
      <input
        className="typeAliasHere"
        type="url"
        placeholder="Type brand domain"
        id="alias"
        name="alias"
        required
      />
    </div>
    <button className="trimURL">
      Trim URL <img src={magicWand} alt=""></img>
    </button>
    <p className="termsOfServices">
      By clicking TrimURL, I agree to the{" "}
      <strong>Terms of Service,</strong>
      <br />
      <strong>Privacy Policy</strong> and Use of Cookies.
    </p>
  </form>
</section>
    )
  }
}

export default Form;