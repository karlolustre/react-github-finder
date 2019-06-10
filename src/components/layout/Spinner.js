import React, { Fragment } from 'react'
import spinner from './spinner.gif';

const Spinner = () => {
    return(
        <Fragment>
            <img src={spinner} alt='Loading...' className='spinnerStyle centered'/>
        </Fragment>
    )
}

export default Spinner