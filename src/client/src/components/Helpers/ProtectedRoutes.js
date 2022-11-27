import React from 'react'
import { UserContext } from '../../UserContext'
import { Navigate } from 'react-router-dom'

const ProtectedRoutes = ({ children }) => {
    const { login } = React.useContext(UserContext)

    return (
        login ? children : <Navigate to="/login" />
    )
}

export default ProtectedRoutes