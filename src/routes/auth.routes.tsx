import React from 'react';
import { Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';

const AuthRoutes: React.FC = () => (
    <Route path='/' component={SignIn} />
)

export default AuthRoutes;