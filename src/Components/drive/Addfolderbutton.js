import Modal from 'react-bootstrap/Modal';
import { Button as MuiButton } from '@mui/material';
import { useState, useRef } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { database } from '../../config/firebase-config';
import { addDoc, serverTimestamp } from "firebase/firestore";
import SnackbarMui from '../SnackbarMui';
import { useAuth } from '../../Context/AuthContext';
import { ROOT_FOLDER } from '../../hooks/useFolder';

import { FaFolder } from 'react-icons/fa'


const Addfolderbutton = ({ currentFolder }) => {

  const { currentUser } = useAuth();

  // Modal 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // Modal End 

  const { enqueueSnackbar } = SnackbarMui();

  const Submitbtn = useRef(null);

  // useEffect(() => {
  //   const unsub = onSnapshot(database.folders, (snapshot) => {
  //     snapshot.docChanges().forEach((change) => {
  //       if (change.type === "added") {
  //         console.log("added: ", change.doc.data(), change.doc.id);
  //       }
  //       if (change.type === "modified") {
  //         console.log("Modified city: ", change.doc.data(), change.doc.id);
  //       }
  //       if (change.type === "removed") {
  //         console.log("Removed city: ", change.doc.data(), change.doc.id);
  //       }
  //     });
  //   });
  //   return (() => {
  //     unsub();
  //   })
  // }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShow(false);

    if (currentFolder === null) return

    let form = new FormData(e.currentTarget);
    let data = form.get('FolderName');

    const path = [...currentFolder.path];

    if (currentFolder !== ROOT_FOLDER) {
      path.push({ name: currentFolder.name, id: currentFolder.id })
    }

    try {
      await addDoc(database.folders, {
        name: data,
        userId: currentUser.uid,
        parentId: currentFolder.id,
        path,
        createdAt: serverTimestamp()
      });
      enqueueSnackbar('Folder Added Successfully', { variant: "success" });
    } catch (error) {

      enqueueSnackbar(`${JSON.stringify(error.message)}`, { variant: "error" });
    }
  };

  return (
    <>

      <MuiButton size='large' variant='outlined' color='success' sx={{ margin: "10px 10px" }}> Create Folder </MuiButton>
      <Button size='lg' variant='outline-success' className='px-4'> Create Folder  </Button>

      {/* <MuiButton style={{ fontSize: "2rem" }} sx={{ margin: "10px 10px" }} color='success' variant='outlined' onClick={handleShow}>
        <i className="fa fa-folder" aria-hidden="true"></i>
      </MuiButton> */}

      <MuiButton style={{ fontSize: "2rem" }} sx={{ margin: "10px 10px" }} color='success' variant='outlined' onClick={handleShow}>
        <FaFolder className="fa fa-solid fa-folder mx-2" style={{ fontSize: "2rem" }} />
      </MuiButton>

      <Button size='lg' variant='outline-success' className='px-4'> Create Folder  </Button>

      {/* Modal  Start*/}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >

        <Modal.Header closeButton>
          <Modal.Title> Folder Name </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form id='Folder-Name-Form' onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">

              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control required name='FolderName' type="text" placeholder="Enter Folder Name " />
            </Form.Group>

            <Button variant="primary" type="submit" ref={Submitbtn} hidden>
              Submit
            </Button>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <MuiButton variant="contained" color='error' onClick={handleClose} sx={{ margin: "0 10px" }}>
            Close
          </MuiButton>

          <Button variant="success" color='success' onClick={() => Submitbtn.current.click()}> Add Folder </Button>
        </Modal.Footer>

      </Modal>
      {/* Modal End  */}



    </>
  )
}

export default Addfolderbutton;