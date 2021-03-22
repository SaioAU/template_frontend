import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Admin, EditUser, Landing, Login } from 'app/views';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/admin/user/:userId" exact>
        <EditUser />
      </Route>
      <Route path="/admin" exact>
        <Admin />
      </Route>
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
