import React,{useContext, useState} from 'react';
import {Link} from 'react-router-dom'
import { initializeApp } from "firebase/app";
import { firebaseConfig } from './firebaseConfig';
import {userContext} from '../../App'
import { getAuth,
     GoogleAuthProvider,
     signInWithPopup,
     signInWithEmailAndPassword
     } from "firebase/auth";
import {useNavigate, useLocation} from 'react-router-dom';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const LoginPage = () => {
    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const googleProvider = new GoogleAuthProvider();

    //CAPTURE FORM EMAIL AND PASSWORD
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [userDetail, setUserDetail] = useState({});
    const handleBlur = (e) => {
        const newDetail = {...userDetail};
        newDetail[e.target.name] = e.target.value;
        setUserDetail(newDetail);
    }
    //LOGIN WITH EMAIL AND PASSWORD
    const handleSignInWithEmail = (e) => {
        if(userDetail.email && userDetail.password){
            signInWithEmailAndPassword(auth, userDetail.email, userDetail.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setLoggedInUser({email:user.email})
                navigate(from, { replace: true });
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
        }
        e.preventDefault();
    }

    //LOGIN WITH GOOGLE PROVIDER
    const handleGoogleSingIn =()=>{
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            setLoggedInUser({email:user.email})
            navigate(from, { replace: true });
            
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }
    return (
        <div className="flex justify-center items-center h-screen w-screen">
            <div className="m-1" style={{width:'350px'}}>
                <h1 className="text-xl text-blue-500">Please Login to Continue</h1>
                <div className="mt-4">
                    <form className="w-full">
                        <input onBlur={handleBlur} className="outline-1 p-1 mt-2 w-full bg-gray-100" type="text" placeholder="Email"/><br />
                        <input onBlur={handleBlur} className="outline-1 p-1 mt-2 w-full bg-gray-100" type="password" placeholder="password"/><br/>
                        <button onClick={handleSignInWithEmail} className="w-full bg-blue-500 px-4 py-2 mt-2 text-white">Login</button>
                    </form>
                </div>
                <br />
                <hr></hr>
                <button onClick={handleGoogleSingIn} style={{width:'350px'}} className="py-2 text-white bg-yellow-400 mt-4">Continue with Google</button>
                <div className="flex justify-between mt-3 w-full">
                    <p>Don't have an account? </p>
                    <Link to="/signup" ><p className="text-blue-400 hover:text-blue-700">Create account</p></Link>
                </div>
            </div>
        </div>
    );
}
export default LoginPage;
