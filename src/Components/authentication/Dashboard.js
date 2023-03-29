import React from 'react'
import { useAuth } from '../../Context/AuthContext';

import { collection, addDoc } from "firebase/firestore";
import { query, getDocs } from "firebase/firestore";


import Button from '@mui/material/Button';
import SnackbarMui from '../SnackbarMui';
import db from '../../config/firebase-config';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate()

  const { currentUser, signout } = useAuth();
  const [show, setShow] = React.useState(true);
  const [showPhone, setShowPhone] = React.useState(null);

  // Mui Snackbar begins 
  const { enqueueSnackbar } = SnackbarMui();
  // Mui Snackbar ends

  async function handleSubmit(e) {
    e.preventDefault();
    let form = new FormData(e.currentTarget);
    let phone = form.get("phone");

    console.log('first', currentUser);
    await addDoc(collection(db, "number"), {
      email: currentUser.email,
      uid: currentUser.uid,
      phone: phone
    });
    enqueueSnackbar('Phone Added Successfully', { variant: "success" });
    navigate('/');
  }

  async function handleClick() {
    try {
      await signout();
      enqueueSnackbar('LogOut Successfully', { variant: 'success' });
    } catch (error) {
      console.log('error', error)
      enqueueSnackbar(`${JSON.stringify(error.message)}`, { variant: 'error' });
    }
  }

  React.useEffect(() => {

    async function a1() {

      const q = query(collection(db, "number"));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.data().uid , currentUser.uid);

        if (doc.data().uid === currentUser.uid) {
          setShow(false);
          setShowPhone(doc.data().phone);
        }

      });
    }

    a1();
    // eslint-disable-next-line
  }, [])
  return (
    <>

      <h3> DashBoard  </h3>
      <p>
        Name - {currentUser && currentUser.email}
        {showPhone !== null ? `Phone - ${showPhone}` : ""}
      </p>

      {show === null ? `Loading` : ""}
      {show === true ? <form onSubmit={handleSubmit}>
        <h3 className='text-center'> Add Phone Number </h3>
        <div className="mb-3">
          <label htmlFor="number" className="form-label"> Mobile Number </label>
          <input type="tel" name='phone' required className="form-control" id="number" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form > : ""}


      <br /> <br /> <br />
      {/* <Link className='btn btn-primary w-100' to='update-profile'>Update Profile</Link> */}
      <button className="btn btn-primary" onClick={handleClick}>Logout</button>

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
