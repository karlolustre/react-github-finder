import React from 'react'

const Alert = ({ alert }) => {

    const closeAlert = (props) => {
        console.log('close')
    }

    return (
        alert !== null && (
            <div className={`alert alert-${alert.type}`}>
                <i className='fas fa-info-circle'></i> {alert.msg}
                <button className='marginRight' onClick={closeAlert}><i className='fas fa-times-circle'></i></button>
            </div>
        )
    )
}

export default Alert
