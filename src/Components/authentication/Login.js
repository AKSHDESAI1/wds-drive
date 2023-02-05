// import { useState, useRef } from 'react'
// import { useAuth } from '../../Context/AuthContext';
// import { NavLink, useNavigate } from 'react-router-dom';
// import Backdrop from '@mui/material/Backdrop';
// import CircularProgress from '@mui/material/CircularProgress';
// import SnackbarMui from '../SnackbarMui';

// const Login = () => {
//     const emailRef = useRef();
//     const passwordRef = useRef();

//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(false);

//     const { login, currentUser } = useAuth();
//     const navigate = useNavigate();

//     async function handleSubmit(e) {
//         e.preventDefault();
//         setOpen(true);
//         try {
//             setLoading(true);
//             setError('');
//             await login(emailRef.current.value, passwordRef.current.value);
//             setOpen(false);
//             enqueueSnackbar('Login Successfully', { variant: "success" });
//             setTimeout(() => {

//                 navigate('/');
//             }, 1000);
//         } catch (e) {
//             let msg = JSON.stringify(e.message);
//             enqueueSnackbar(msg, { variant: "error" });
//             setError(`${e.message}`)
//         }
//         setOpen(false);
//         setLoading(false);
//     }

//     // Backdrop 
//     const [open, setOpen] = useState(false);
//     const Backdrop_handleClose = () => {
//         setOpen(false);
//     };
//     // Backdrop Ends 


//     // Mui Snackbar begins 
//     const { enqueueSnackbar } = SnackbarMui();
//     //    Mui Snackbar ends 

//     return (
//         <div className="row d-flex justify-content-center vh-100 align-items-center">
//             <div className="col-md-6  mx-auto bg-dark text-light">
//                 {currentUser && currentUser.email}
//                 {error === '' ? null : <h6 className="alert alert-danger" hidden> {error}  </h6>}

//                 <form onSubmit={handleSubmit}>
//                     <h1 className="text-center"> Sign Up </h1>
//                     <div className="mb-3">
//                         <label htmlFor="email" classNa1me="form-label">Email address</label>
//                         <input type="email" className="form-control" id="email" ref={emailRef} aria-describedby="emailHelp" />

//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="password" className="form-label">Password</label>
//                         <input type="password" className="form-control" ref={passwordRef} id="password" />
//                     </div>

//                     <button type="submit" disabled={loading} className="btn btn-primary"> {loading ? "Loading" : "Login"} </button>

//                     <br />
//                     <NavLink to='/signup' className="text-white">Don't have an account? Signup Here </NavLink>
//                 </form>
//             </div>

//             <Backdrop
//                 sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
//                 open={open}
//                 onClick={Backdrop_handleClose}
//             >
//                 <CircularProgress color="inherit" />
//             </Backdrop>

//             {/* <Button onClick={handleClick_SnackBar}>Show snackbar</Button>
//             <Button onClick={handleClickVariant('success')}>Show success snackbar</Button> */}
//         </div>
//     )
// }

// export default Login;


import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useRef } from 'react'
import { useAuth } from '../../Context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import SnackbarMui from '../SnackbarMui';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" to="/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

function Login() {
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
            console.log(emailRef.current.value, passwordRef.current.value)
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
    const { enqueueSnackbar } = SnackbarMui();
    //    Mui Snackbar ends

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} >
                        F
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Log in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            type='email'
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            inputRef={emailRef}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            inputRef={passwordRef}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Log In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" >
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="/signup" >
                                    Don't have an account? Sign Up
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                    <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={open}
                        onClick={Backdrop_handleClose}
                    >
                        <CircularProgress color="inherit" />
                    </Backdrop>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}

export default (Login)