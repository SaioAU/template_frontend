import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Landing, Login, Seasons } from 'app/views';

import AdminRoutes from './AdminRoutes';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/admin" component={AdminRoutes} />
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/seasons">
        <Seasons />
      </Route>
      <Route path="/">
        <Landing />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
