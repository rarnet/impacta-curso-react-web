import {BrowserRouter, Route, Switch } from 'react-router-dom'
import Form from '../components/Form';
import Home from '../pages/Home';
import Login from '../pages/Login';
import UrlNotFound from '../pages/UrlNotFound';

const RouterService = () => (
    <BrowserRouter>
        <Switch>
            <Route exact  path="/" component={Home} />
            <Route exact path="/register" component={Form} />
            <Route exact path="/login" component={Login} />
            <Route component={ResolverUrl} />
        </Switch>
    </BrowserRouter>
);

export default RouterService;

const ResolverUrl = () => {    
    return ( <UrlNotFound url={window.location.pathname} />);
}