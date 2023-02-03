import { useState } from 'react'
import { auth } from '../../config/firebase-config';
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const Signup = () => {

  const Oncaptchaverify = () => {
    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
      'size': 'normal',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        onSignInSubmit();
      }
    }, auth);

  }

  function onSignInSubmit(e) {
    e.preventDefault();
    Oncaptchaverify()
    const phoneNumber = '+91' + phone;
    const appVerifier = window.recaptchaVerifier;

    // const auth = getAuth();
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        alert('otp sendwd')
        // ...
      }).catch((error) => {
        // Error; SMS not sent
        // ...
      });
  }

  function verifyCode(e) {
    e.preventDefault();
    window.confirmationResult.confirm(sub).then((result) => {
      // User signed in successfully.
      // const user = result.user;
      // ...
      alert('successfully done');
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
      alert('invalid otp');
    });
  };

  const [phone, setPhone] = useState('');
  const [sub, setSub] = useState('');

  // const handleSubmit = ((e) => {
  //   e.preventDefault();
  //   const form = new FormData(e.currentTarget);
  //   console.log(form.get('phone'));
  // })

  return (
    <>
    
    <form action="" onSubmit={onSignInSubmit}>
      <div id="sign-in-button"></div>
      <input type="number" onChange={(e) => setPhone(e.target.value)} name='phone' />
      <input type="submit" value='verify' />
    </form>

    <form action="" onSubmit={verifyCode}>
      <input type="number" onChange={(e) => setSub(e.target.value)} name='phone' />
      <input type="submit" value='submit' />
    </form>
    </>
  )
}

export default Signup;


// import { useState, useRef } from 'react'
// import { useAuth } from '../../Context/AuthContext';
// import { NavLink, useNavigate } from 'react-router-dom';


// const Signup = () => {
//   const emailRef = useRef();
//   const passwordRef = useRef();
//   const passwordConfirmRef = useRef();

//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const { signup, currentUser } = useAuth();

//   const navigate = useNavigate();

//   async function handleSubmit(e) {
//     e.preventDefault();

//     if (passwordRef.current.value !== passwordConfirmRef.current.value) {
//       return setError('Password do not Match.');
//     }

//     try {
//       setLoading(true);
//       setError('');
//       await signup(emailRef.current.value, passwordRef.current.value);
//       navigate('/');
//     } catch (e) {
//       setError(`${e.message}`)
//     }

//     setLoading(false);
//   }
//   return (

//     <div className="row d-flex justify-content-center vh-100 align-items-center">
//       <div className="col-md-6  mx-auto bg-dark text-light">
//         {currentUser && currentUser.email}
//         {error === '' ? null : <h6 className="alert alert-danger"> {error}  </h6>}

//         <form onSubmit={handleSubmit}>
//           <h1 className="text-center"> Sign Up </h1>
//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">Email address</label>
//             <input type="email" className="form-control" id="email" ref={emailRef} aria-describedby="emailHelp" />
//             <div id="emailHelp" className="form-text text-white">We'll never share your email with anyone else.</div>
//           </div>
//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">Password</label>
//             <input type="password" className="form-control" ref={passwordRef} id="password" />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="confirm-password" className="form-label">Password Confirm</label>
//             <input type="password" className="form-control" ref={passwordConfirmRef} id="confirm-password" />
//           </div>

//           <button type="submit" disabled={loading} className="btn btn-primary"> {loading ? "Loading" : "Submit"} </button>

//           <br />
//           <NavLink to='/login' className="text-white">Already have an account? Login Here </NavLink>
//         </form>
//       </div>

//     </div>
//   )
// }

// export default Signup;
