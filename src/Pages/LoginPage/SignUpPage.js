import React, { useState, useContext } from 'react';
import {Link} from 'react-router-dom'
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { firebaseConfig } from './firebaseConfig';
import {userContext} from '../../App'
import {useNavigate, useLocation} from 'react-router-dom';



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const SignUpPage = () => {
    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const googleProvider = new GoogleAuthProvider();


    const [setLoggedInUser] = useContext(userContext);
    const [userDetail, setUserDetail] = useState({})
    const [errorMessage, setErrorMessage] = useState();
    const handleBlur = (e) => {
        const newDetail = {...userDetail};
        newDetail[e.target.name] = e.target.value;
        setUserDetail(newDetail);
        console.log(userDetail);
    }
    //FUNCTION TO GET CREATE USER EMAIL AND PASSWORD
    const handleSignIn = (e) => {
        if(userDetail.email && userDetail.password){
            createUserWithEmailAndPassword(auth, userDetail.email, userDetail.password)
            .then((userCredential) => {
                const user = userCredential.user;
                setLoggedInUser({email:user.email})
                navigate(from, { replace: true });
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage("error Massege:",errorMessage,"Error Code:",errorCode);
            });
            e.preventDefault();
        }
    }

    //SIGNIN WITH GOOGLE
    const handleGoogleSingIn =()=>{
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            console.log(user)
            setLoggedInUser({email:user.email})
            navigate(from, { replace: true });
            
        }).catch((error) => {
            throw error;
        });
    }
    return (
        <div className="flex justify-center items-center h-screen w-screen">
            <div className="m-1" style={{width:'350px'}}>
                <h1 className="text-xl text-blue-500">Please Signup to Continue</h1>
                <div className="mt-4">
                    <form className="w-full">
                        <input onBlur={handleBlur} className="outline-1 p-1 mt-2 w-full bg-gray-100" required name="name" type="text" placeholder="Name"/><br/>
                        <input onBlur={handleBlur} className="outline-1 p-1 mt-2 w-full bg-gray-100" required name="email" type="email" placeholder="Email"/><br />
                        <input onBlur={handleBlur} className="outline-1 p-1 mt-2 w-full bg-gray-100" required name="password" type="password" placeholder="password"/><br/>
                        <button onClick={handleSignIn} className="w-full bg-blue-500 px-4 py-2 mt-2 text-white">Sign Up</button>
                        {errorMessage && <p>{errorMessage}</p>}
                    </form>
                </div>
                {errorMessage && <div className="text-red-500">{errorMessage}</div>}
                <br />
                <hr></hr>
                <button onClick={handleGoogleSingIn} style={{width:'350px'}} className="py-2 text-white bg-yellow-400 mt-4">Continue with Google</button>
                <div className="flex justify-between mt-3 w-full">
                    <p>Already have an account? </p>
                    <Link to="/login" ><p className="text-blue-400 hover:text-blue-700">Login</p></Link>
                </div>

            </div>
        </div>
    );
};

export default SignUpPage;