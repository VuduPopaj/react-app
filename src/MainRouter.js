import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Courses, Students } from './components';

const MainRouter = () => {
    return (
<Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/courses' component={Courses} />
    <Route exact path='/students' component={Students} />
</Switch>
    );
}

export default MainRouter;