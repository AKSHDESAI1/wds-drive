import React from 'react'
import Fnavbar from './Fnavbar'
import { Container } from 'react-bootstrap'
import Addfolderbutton from './Addfolderbutton'

const Fdashboard = () => {
    return (
        <>
            <Fnavbar />
            <Container fluid>
                <Addfolderbutton />
            </Container>
        </>
    )
}

export default Fdashboard
