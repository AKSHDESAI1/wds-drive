import { useState, useRef } from 'react'
import { useAuth } from '../Context/AuthContext';
import { NavLink, useNavigate } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import { useSnackbar } from 'notistack';
import { SnackbarProvider } from 'notistack'

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { login, currentUser } = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        setOpen(true);
        try {
            setLoading(true);
            setError('');
            await login(emailRef.current.value, passwordRef.current.value);
            setOpen(false);
            enqueueSnackbar('Login Successfully', { variant: "success" });
            setTimeout(() => {

                navigate('/');
            }, 1000);
        } catch (e) {
            let msg = JSON.stringify(e.message);
            enqueueSnackbar(msg, { variant: "error" });
            setError(`${e.message}`)
        }
        setOpen(false);
        setLoading(false);
    }

    // Backdrop 
    const [open, setOpen] = useState(false);
    const Backdrop_handleClose = () => {
        setOpen(false);
    };
    // Backdrop Ends 

    // Mui Snackbar begins 
    const { enqueueSnackbar } = useSnackbar();

    //    Mui Snackbar ends 

    return (
        <div className="row d-flex justify-content-center vh-100 align-items-center">
            <div className="col-md-6  mx-auto bg-dark text-light">
                <SnackbarProvider />
                {currentUser && currentUser.email}
                {error === '' ? null : <h6 className="alert alert-danger" hidden> {error}  </h6>}

                <form onSubmit={handleSubmit}>
                    <h1 className="text-center"> Sign Up </h1>
                    <div className="mb-3">
                        <label htmlFor="email" classNa1me="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" ref={emailRef} aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" ref={passwordRef} id="password" />
                    </div>

                    <button type="submit" disabled={loading} className="btn btn-primary"> {loading ? "Loading" : "Login"} </button>

                    <br />
                    <NavLink to='/signup' className="text-white">Don't have an account? Signup Here </NavLink>
                </form>
            </div>

            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={Backdrop_handleClose}
            >
                <CircularProgress color="inherit" />
            </Backdrop>

            {/* <Button onClick={handleClick_SnackBar}>Show snackbar</Button>
            <Button onClick={handleClickVariant('success')}>Show success snackbar</Button> */}
        </div>
    )
}

export default Login;