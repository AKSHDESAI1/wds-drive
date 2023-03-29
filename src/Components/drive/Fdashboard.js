import React from 'react'
import Fnavbar from './Fnavbar'
import { Container } from 'react-bootstrap'
import Addfolderbutton from './Addfolderbutton'
import useFolder from '../../hooks/useFolder'
import Folder from './Folder'
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from 'react-router-dom'
import FolderBreadCrumbs from './FolderBreadCrumbs'
import AddFileButton from './AddFileButton'
import File from './File'


const Fdashboard = () => {
    const { folderId } = useParams();

    const state = useFolder(folderId);
    console.log('state', state);
    return (
        <>
            <Fnavbar />
            <Container fluid>
                <Addfolderbutton currentFolder={state.folder} />
                <AddFileButton currentFolder={state.folder} />
                <hr />

                <FolderBreadCrumbs currentFolder={state.folder} />
                <div className="d-flex flex-wrap">
                    {state.childFolders.length > 0 ? (
                        state.childFolders.map((data) => {
                            return <div key={data.id} className='p-2' style={{ maxWidth: "250px" }}>

                                <Folder folder={data} />
                            </div>
                        })
                    ) : (state.childFolders.length === 0 ? (<h1> No Folders </h1>) : (<h1 className='d-flex justify-content-center'>   <CircularProgress />  <CircularProgress color="secondary" />  <CircularProgress color="success" />  <CircularProgress color="warning" />  <CircularProgress color="error" />  <CircularProgress color="info" />  </h1>))}
                </div>


                {state.childFiles.length > 0 && (
                    <div className="d-flex flex-wrap">
                        {state.childFiles.map(childFile => (
                            <div
                                key={childFile.id}
                                style={{ maxWidth: "250px" }}
                                className="p-2"
                            >
                                <File file={childFile} />
                            </div>
                        ))}
                    </div>
                )}
            </Container>
        </>
    )
}

export default Fdashboard
