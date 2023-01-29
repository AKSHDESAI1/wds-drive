import React from 'react'
import { useAuth } from '../Context/AuthContext';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import SnackbarMui from './SnackbarMui';

const Dashboard = (props) => {
  const { currentUser, signout } = useAuth();

  // Mui Snackbar begins 
  const { enqueueSnackbar } = SnackbarMui();
  // Mui Snackbar ends

  async function handleClick() {
    try {
      await signout();
      enqueueSnackbar('LogOut Successfully', { variant: 'success' });
      // setTimeout(async () => {

      // }, 1000);
      // navigate('/login')
    } catch (error) {
      console.log('error', error)
      enqueueSnackbar(`${JSON.stringify(error.message)}`, { variant: 'error' });
    }
  }

  return (
    <>

      <h3> DashBoard  </h3>
      <p>
        Name - {currentUser && currentUser.email}
      </p>

      <Link className='btn btn-primary w-100' to='update-profile'>Update Profile</Link>
      <button className="btn-primary" onClick={handleClick}>Logout</button>

      <Button onClick={() => {
        enqueueSnackbar('Aksh', { variant: "info" })
        enqueueSnackbar('Bhargavi', { variant: "warning" })
        enqueueSnackbar('Krutik', { variant: "success" })
        enqueueSnackbar('Ayush ', { variant: "warning" })
        enqueueSnackbar('Bhargav', { variant: "info" })
      }
      } >Show snackbar</Button>
      {/* <Button onClick={handleClickVariant('success')}>Show success snackbar</Button> */}

    </>
  )
}

export default Dashboard
