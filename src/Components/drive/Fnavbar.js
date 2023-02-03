import { Button as MuiButton } from '@mui/material'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Fnavbar = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={8}>
          <h1> wds drive </h1>
        </Col>

        <Col>
          <Row md={{ span: 4 }} className='justify-content-end'>
            <Col md={4} className='text-center'>

              <Link to='/user'>
                <MuiButton variant='contained'> Profile </MuiButton>
              </Link>

            </Col>
          </Row>
        </Col>
      </Row>

    </Container>
  )
}

export default Fnavbar