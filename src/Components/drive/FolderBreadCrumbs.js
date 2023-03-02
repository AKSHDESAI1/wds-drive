import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { ROOT_FOLDER } from '../../hooks/useFolder';
import { Link } from 'react-router-dom';

const FolderBreadCrumbs = ({ currentFolder }) => {
    let path = currentFolder === ROOT_FOLDER ? [] : [ROOT_FOLDER];
    if (currentFolder) {
        path = [...path, ...currentFolder.path]
    };
    console.log('path', path);
    return (
        <Breadcrumb className='flex-grow-1'>
            {path.map((item) => {
                return <Breadcrumb.Item key={item.id} className='text-truncate d-inline-block' style={{ maxWidth: "200px" }} linkAs={Link} linkProps={{ to: item.name === 'Root' ? "/dashboard" : `/folder/${item.id}` }}> {item.name}  </Breadcrumb.Item>
            })}
            {
                currentFolder && (

                    <Breadcrumb.Item className='text-truncate d-inline-block' style={{ maxWidth: "200px" }} active> {currentFolder.name} </Breadcrumb.Item>
                )
            }
        </Breadcrumb >
    )
}

export default FolderBreadCrumbs
