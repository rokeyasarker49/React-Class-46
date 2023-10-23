import { getAuth, signInWithEmailAndPassword, signOut } from '@firebase/auth';
import React, { useState } from 'react';
import app from '../../../Firebase/Firebase.init';


const auth = getAuth(app);

const SignIn = () => {

    const [sUser, setUser] = useState({})
    console.log(sUser);

    const SignInWithEmail = (event) => {

        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInWithEmailAndPassword(auth, email, password)
        .then(result => {

            const user = result.user;
            setUser(user);
            document.getElementById("alert-head").style.display="grid";
            form.reset();
        })
        .catch(error => console.log(error))

    }

    const SignOut = () => {
        
        signOut(auth)
        .then(() => {

            setUser({})
            
        }).catch((error) => console.log('LogOut', error));
    }


    const Close = () => {

        document.getElementById("alert-head").style.display="none";
        
    }

    


    return (
        
        <div>

            <div id='alert-head' className='alert-head'>
                <div className="alert success">
                    <span onClick={Close} className="closebtn">&times;</span>  
                    Your <strong>Sign In</strong> is Successfully Done!
                </div>
            </div>

            <div className="form login">
                <div className="form-content">
                    <form onSubmit={SignInWithEmail}>
                        <div className="field input-field">
                            <input name='email' type="email" placeholder="Email" className="input"/>
                        </div>
                        <div className="field input-field">
                            <input name='password' type="password" placeholder="Password" className="password"/>
                        </div>
                        <div className="form-link">
                            <a href="#" className="forgot-pass">Forgot password?</a>
                        </div>
                        <div className="field button-field">
                            <button type='submit'>Login</button>
                        </div>
                    </form>
                </div>
            </div>


            {
                sUser.uid && <div className='userItem'>
                    <div className='Sign'>
                    <button onClick={SignOut} className='SignOut'>SignOut</button>
                    </div>
                    <h4>ProviderId : {sUser.providerId}</h4>
                    <h4>Email : {sUser.email}</h4>
                    <h4>CreationTime : {sUser.metadata.creationTime}</h4>
                </div>
            }

        </div>
    );
};

export default SignIn;