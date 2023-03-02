import React from 'react'
import { Button } from 'react-bootstrap'
// import { Button as MuiButton } from '@mui/material';
import { Link } from 'react-router-dom'
import { FaFolder } from 'react-icons/fa'

const Folder = ({ folder }) => {
  return (
    <Button to={`/folder/${folder.id}`} variant='outline-dark' as={Link} className=' mx-2 w-100 text-truncate'>
      {/* <i className="fa fa-solid fa-folder mx-2" style={{ fontSize: "2rem" }}></i> */}

      <FaFolder className="fa fa-solid fa-folder mx-2" style={{ fontSize: "2rem" }} />
      <div className="text-center"> {folder.name} </div>
    </Button>
  )
}

export default Folder