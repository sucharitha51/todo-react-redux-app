import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

// The Todo Container Component

import TodoPage from './src/todos/containers/TodoPage'


// The Routing Component providing all the routing Configuration

const Routes = (props) => {
    return (
        <BrowserRouter>
            <Switch>

                {/* It's setup at the default index route */}

                <Route path="/" component={TodoPage} />
            </Switch>
        </BrowserRouter>
    )
}

export { Routes }