import React from 'react';
import { Navigate } from 'react-router-dom';

//children is passed by React Router which give us access to the Dashboard because it is child of ProtectedRoute in App.js
function ProtectedRoute({ children, user }) {
    if (!user) {
        return <Navigate to='/' />
    };
    return children;
}

export default ProtectedRoute;