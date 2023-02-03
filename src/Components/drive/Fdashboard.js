import React from 'react'
import Fnavbar from './Fnavbar'
import { Container } from 'react-bootstrap'
import Addfolderbutton from './Addfolderbutton'
import useFolder from '../../hooks/useFolder'
import Folder from './Folder'

const Fdashboard = () => {
    const state = useFolder('7VsnkE5tCk7gkfK4iGHA');
    // const { folder } = useFolder('7VsnkE5tCk7gkfK4iGHA');

    console.log('state', state);
    return (
        <>
            <Fnavbar />
            <Container fluid>
                <Addfolderbutton currentFolder={state.folder} />
                {state.folder && <Folder folder={state.folder} />}
            </Container>
        </>
    )
}

export default Fdashboard
