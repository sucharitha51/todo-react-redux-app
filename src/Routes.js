import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// The Todo Container Component
import TodoPage from './todos/containers/TodoPage/TodoPage'

// The Routing Component providing all the routing Configuration
const Routes = (props) => {
    return (
        <BrowserRouter>
            <Switch>
               <Route path="/" component={TodoPage} />
            </Switch>
        </BrowserRouter>
    )
}
export { Routes }