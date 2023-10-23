import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification} from "firebase/auth";
import app from '../../../Firebase/Firebase.init';
import { Link } from 'react-router-dom';


const auth = getAuth(app);

const SignUp = () => {

    const [error, setError] = useState("");

    const SignUpWithEmail = (event) => {

        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        if (!/(?=.*[A-Z].*[A-Z])/.test(password)){

            setError("Please provide at least 2 Uppercase");

            return;
        }

        if (password.length < 8)
        {
            setError("Please give at least more than 8 characters");

            return;
        }

        if (!/(?=.*?[#!@$%&*].*?[#!@$%&*])/.test(password)){

            setError("Please give at least 2 special characters");

            return;
        }

        setError("");


        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {

            document.getElementById("alert-head").style.display="grid";
            form.reset();
        })
        .catch(error => console.log(error))

    }

    const verityEmail = () => {

        sendEmailVerification(auth.currentUser)
        .then(() => {

            setError("Please Cheak Your Email And Verify Email")
            document.getElementById("error").classList.add('succeed')

        })
    }

    const Close = () => {

        document.getElementById("alert-head").style.display="none";
        verityEmail()
        
    }



    return (
        <div>

            <div>

                <div id='alert-head' className='alert-head'>
                    <div className="alert success">
                        <span onClick={Close} className="closebtn">&times;</span>  
                        Your <strong>SignUp</strong> is Successfully Done!
                        <Link to="/"><button className='goLOginBtn'>Go To Login</button></Link>Or
                    </div>
                </div>

                <div className="form signup">
                    <div className="form-content">

                        <p id='error' className='error'>{error}</p>

                        <form onSubmit={SignUpWithEmail}>
                            <div className="field input-field">
                                <input name='name' type="name" placeholder="Name" className="input" required/>
                            </div>
                            <div className="field input-field">
                                <input name='email' type="email" placeholder="Email" className="password" required/>
                            </div>
                            <div className="field input-field">
                                <input name='password' type="password" placeholder="password" className="password" required/>
                            </div>
                            <div className="field button-field">
                                <button type='submit'>Sign Up</button>
                            </div>
                        </form>

                    </div>
                
                </div>

            </div>

        </div>
    );
};

export default SignUp;