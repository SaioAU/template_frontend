import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Landing, Login, Seasons, Paintings, Shop, Bio } from 'app/views';

import AdminRoutes from './AdminRoutes';

const Routes = ({ children }) => (
  <BrowserRouter>
    {children}
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
  </BrowserRouter>
);

export default Routes;
