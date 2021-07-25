import { Route, Switch } from 'react-router-dom';

import { Landing, Login, Seasons, Paintings, Shop, Bio } from 'app/views';

import AdminRoutes from './AdminRoutes';

const Routes = () => (
  <Switch>
    <Route path="/admin" component={AdminRoutes} />
    <Route path="/login" exact>
      <Login />
    </Route>
    <Route path="/seasons">
      <Seasons />
    </Route>
    <Route path="/paintings">
      <Paintings />
    </Route>
    <Route path="/shop">
      <Shop />
    </Route>
    <Route path="/bio">
      <Bio />
    </Route>
    <Route path="/">
      <Landing />
    </Route>
  </Switch>
);

export default Routes;
