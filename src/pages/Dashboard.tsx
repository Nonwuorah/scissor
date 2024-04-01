import { useNavigate } from "react-router-dom";
import SignedInHeader from "../components/SignedInHeader";
import { Component } from "react";
import { getDatabase, onChildAdded, onChildChanged, onChildRemoved, ref } from "firebase/database";
import { FirebaseContext } from "../config/firebase";
import { FirebaseApp } from "firebase/app";
import { User } from "firebase/auth";
import { GetUserProfile } from "../services/auth";
import { NavigateFunction } from "react-router";
import { LinkModel } from "../models";

export default ()=>{

  var navigate  =  useNavigate();

  return(
    <Dashboard navigate={navigate} />
  )

}

interface DashboardProps{
  navigate : NavigateFunction
}

let database;
let firebaseApp;
let urlListRef;
let currentUser :User;

class Dashboard extends Component<DashboardProps>{

  static contextType= FirebaseContext;
  constructor(props:any){
    super(props);
    this.state={
      "links":[]
    } as {links:LinkModel[]}
  }

  componentDidMount() {
    currentUser =  GetUserProfile();
    firebaseApp =  this.context;
    console.log(firebaseApp, currentUser);
    database = getDatabase(firebaseApp as FirebaseApp);
    urlListRef = ref(database, 'links/' + currentUser.uid);
    onChildAdded(urlListRef, (data) => {
       this.setState({"links":[...(this.state as {links:LinkModel[]}).links,
        {...data.val(),id:data.key}]})
    });
    
    onChildChanged(urlListRef, (data) => {
      var linkArray = (this.state as {links:LinkModel[]}).links;
      var updatedLinkArray = linkArray.map((val)=>{
        if(val.id == data.key){
          return {...val,...data.val()}
        }
      });
      this.setState({"links":updatedLinkArray});
    });
    
    onChildRemoved(urlListRef, (data) => {
      var linkArray = (this.state as {links:LinkModel[]}).links;
      var updatedLinkArray = linkArray.filter((val)=>{
        if(val.id != data.key){
          return val;
        }
      });
      this.setState({"links":updatedLinkArray});
    });
  }

  // shareLink(id:string){

  // }

  // showQRCode(id:string){
    
  // }

  // editLink(id:string){
    
  // }

  // viewStats(id:string){
    
  // }

  render () {
  return (
    
    <div className="dashboard">

      <SignedInHeader />

      <section className="dashboard">
        <h1 style={{textAlign:"center"}}>My URLs</h1>
          <p style={{textAlign:"center"}}>Here are the URLs you have shortened with Scissor</p>
        <section className="myUrls">
          <div className="urlList">
            {/* <button className="create"><Link to="/formUrl">Create</Link></button> */}
            {
              (this.state as {links:LinkModel[]}).links.map((val)=>{
                return(
                  <div className="url">
                  <div className="urlDetails">
                    <div>
                      <label>Original Url:</label> <br/>
                      <p>{val.originalLink}</p>
                    </div>
                   
                   <div>
                      <label>Shorten Url:</label> <br/>
                      <p>{val.shortenedLink}</p>
                   </div>
                    
                  </div>
    
                  <div className="urlActions">
                    <button className="share">
                      <i className="fa-solid fa-share-nodes"></i> Share Link
                    </button>
                    <button className="qrCode">
                      <i className="fa-solid fa-qrcode"></i> QR Code
                    </button>
                    <button className="edit">
                      <i className="fa-solid fa-pen-to-square"></i> Edit
                    </button>
                    <button className="stats">
                      <i className="fa-solid fa-chart-line"></i> View Stats
                    </button>
    
                    <i className="fa-solid fa-trash"></i>
                  </div>
                </div>
    
                );
              })
            }
          
          </div>
        </section>

      </section>

    </div>
  );
  }
}
