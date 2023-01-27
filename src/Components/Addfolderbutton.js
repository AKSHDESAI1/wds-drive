import Modal from 'react-bootstrap/Modal';
import { Button as MuiButton } from '@mui/material';
import { useState, useRef } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const Addfolderbutton = () => {
  // Modal 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // Modal End 

  const Submitbtn = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let form = new FormData(e.currentTarget);
    let data = form.get('FolderName');
    const updatedForm = Array.from(data).filter((e, index) => {
      console.log(index, e, data[index])
      // eslint-disable-next-line 
      return data[index] != data[index + 1] != ' ';
    })

    if (updatedForm.length !== 0) {
      setShow(false);
    }
  };

  return (
    <>

      <MuiButton size='large' variant='outlined' color='success' sx={{ margin: "10px 10px" }}> Create Folder </MuiButton>
      <Button size='lg' variant='outline-success' className='px-4'> Create Folder  </Button>

      <MuiButton style={{ fontSize: "2rem" }} sx={{ margin: "10px 10px" }} color='success' variant='outlined' onClick={handleShow}>
        <i className="fa fa-folder" aria-hidden="true"></i>
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