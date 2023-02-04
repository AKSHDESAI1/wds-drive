import React from 'react'
import Fnavbar from './Fnavbar'
import { Container, Stack } from 'react-bootstrap'
import Addfolderbutton from './Addfolderbutton'
import useFolder from '../../hooks/useFolder'
import Folder from './Folder'
import CircularProgress from '@mui/material/CircularProgress';


const Fdashboard = () => {
    const state = useFolder('7VsnkE5tCk7gkfK4iGHA');
    // const { folder } = useFolder('7VsnkE5tCk7gkfK4iGHA');

    console.log('state', state);
    return (
        <>
            <Fnavbar />
            <Container fluid>
                <Addfolderbutton currentFolder={state.folder} />

                <hr />

                <Stack direction="horizontal" gap={2}>
                    {state.childFolders.length > 0 ? (
                        state.childFolders.map((data) => {
                            return <Folder folder={data} key={data.id} />
                        })
                    ) : <h1 className='d-flex justify-content-center'>   <CircularProgress />  <CircularProgress color="secondary" />  <CircularProgress color="success" />  <CircularProgress color="warning" />  <CircularProgress color="error" />  <CircularProgress color="info" /> Loading... </h1>}
                </Stack>
            </Container>
        </>
    )
}

export default Fdashboard
