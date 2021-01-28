import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'

const AppRoutes: React.FC = () => (
            <Route path='/' component={Dashboard} />
)

export default AppRoutes;