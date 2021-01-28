import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import {useAuth} from '../contexts/auth';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

const Routes: React.FC = () => {
    const { signed, loading } = useAuth();

    if (loading) {
        return <h1>Loading</h1>
    }

    return (
        <BrowserRouter>
            <Switch>
               { signed ? <AppRoutes /> : <AuthRoutes />  }
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
