import React from 'react'
import { Button } from 'react-bootstrap'

const Folder = ({ folder }) => {
  return (
    <Button as="a" variant="primary">
      {folder.name}
    </Button>
  )
}

export default Folder