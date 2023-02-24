import puppy from '../../Assets/puppy__340.jpg';
import './error.css'

import React from 'react';

function error() {
  return (
    <>   
    <h3>Error 404 Page Not Found</h3>
    <div className='app__error'>
      <img src={puppy} alt="" />
    </div>
   
    </>
  )
}

export default error