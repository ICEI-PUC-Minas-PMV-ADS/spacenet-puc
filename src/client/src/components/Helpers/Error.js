import React from 'react'

const Error = ({error}) => {
    
    if (!error) return null
   
    return (
        <p style={{color: '#f31', margin: '0rem 0 1rem 0', fontSize:'0.875rem'}}>{error}</p>
    )
}

export default Error