import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Landing, Login } from 'app/views';

import AdminRoutes from './AdminRoutes';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/admin" component={AdminRoutes} />
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/">
        <Landing />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
