import React from 'react'
import { useAuth } from '../../Context/AuthContext';

import { collection, addDoc } from "firebase/firestore";
import { query, getDocs } from "firebase/firestore";


import Button from '@mui/material/Button';
import SnackbarMui from '../SnackbarMui';
import db from '../../config/firebase-config';
import { Link, useNavigate } from 'react-router-dom';

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
      <Link className="mx-2 btn btn-success" to='/'>Back</Link>
      <button className="btn btn-primary" onClick={handleClick}>Logout</button>

      <Button onClick={() => {
        enqueueSnackbar('20CE020 -Aksh', { variant: "info" })
        enqueueSnackbar('20CE018 -Bhargavi', { variant: "warning" })
        enqueueSnackbar('20CE016 -Krutik', { variant: "success" })
        enqueueSnackbar('20CE015 -Ayush ', { variant: "warning" })
        enqueueSnackbar('20CE001 - Bhargav', { variant: "info" })
      }
      } > See Admin People </Button>
      {/* <Button onClick={handleClickVariant('success')}>Show success snackbar</Button> */}

      <hr />

      <h3> How to Use Whatsapp Bot Feature </h3>

      <h4>
      1. Go to this Whatsapp Number:- <b>4155238886</b>
      <br />  <br />

      2. Enter this Secret Code <b>join heat-slowly</b> to allow them that they can share Documents to you. 
      <br /> <br />

      3. Now For Get All Files Names just Enter a command <b>List</b>
      <br /> <br />

      4. And If you want to downlaod particular file then Enter Command <b>download 'file_number'</b>
      <br /> <br />

      5. If you want to Stop this Procedure, then just Enter <b>stop</b> command. After that if you want to start again then follow this procedure from step-1.
      </h4>
    </>
  )
}

export default Dashboard
