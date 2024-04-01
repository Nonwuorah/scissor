import { getAuth, updateProfile, onAuthStateChanged, createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, signOut, User, Auth, sendPasswordResetEmail } from "firebase/auth";


let auth : Auth;

let currentUser : User;

export const InitializeAuth = () =>{
    auth = getAuth();

   currentUser = auth.currentUser as User;

   onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      currentUser = user;
      console.log("user is ", user.displayName);
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
}

export const SignUp = async (email:string, password:string) => {

    try{
         var userCred = await createUserWithEmailAndPassword(auth, email, password);
         localStorage.setItem("user", JSON.stringify({userCred}));
        
    }
    catch(error){
        throw error;
    }
}

export const Login = async (email:string, password:string) => {

    try{
        var userCred = await signInWithEmailAndPassword(auth, email, password);
        localStorage.setItem("user", JSON.stringify({userCred}));
    }
    catch(error){
        throw error;
    }
}


export const Logout =  async () => {

    try{
        await signOut(auth);
        localStorage.removeItem("user");
    }
    catch(error){
        throw error;
    }

}

export const SendPasswordResetEmail = async (email:string)=>{
    await sendPasswordResetEmail(auth, email);
}

export const UpdateProfile = async (user: User, profileUpdate:{displayName?:string,photoURL?:string}) => {
    try{
        await updateProfile(user, profileUpdate);
    }
    catch(error){
        throw error;
    }
}

export const CreateNewUser =  async (email:string, password:string, username:string ) => {

    await SignUp(email, password);

    await UpdateProfile(auth.currentUser as User, {displayName: username});
}

export const GetUserProfile =  ()=>{

    if(!currentUser){
        var localUser =  localStorage.getItem("user");
        if(localUser){
            currentUser = JSON.parse(localUser);
        }
    }
    return currentUser;
}


