// Import the functions you need from the SDKs you need
import * as app from "firebase/app";
import { createContext } from "react";
import { InitializeAuth } from "../services/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgFMvqi2OvIrE7t82EKItkS1OZJTBu_Ck",
  authDomain: "scissor-56fb2.firebaseapp.com",
  projectId: "scissor-56fb2",
  storageBucket: "scissor-56fb2.appspot.com",
  messagingSenderId: "921181906484",
  appId: "1:921181906484:web:4235d3712496021cf20c61",
  measurementId: "G-YDGG8M265Z",
  databaseURL: "https://scissor-56fb2-default-rtdb.europe-west1.firebasedatabase.app/",
};

const FirebaseContext = createContext( app.getApp());
export { FirebaseContext }


 export default ({ children }:any) => {
  if(!app.getApps().length){
    app.initializeApp(firebaseConfig);
    InitializeAuth();
  }
    
  return (
    <FirebaseContext.Provider value={ app.getApp() }>
      { children }
    </FirebaseContext.Provider>
  );
}



// Initialize Firebase
// export const firebaseAnalytics = getAnalytics(firebaseApp);