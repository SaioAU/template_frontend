import { Route, Switch } from 'react-router-dom';

import Admin, { DeleteUser, EditUser } from 'app/views/Admin';

const AdminRoutes = () => (
  <Switch>
    <Route path="/admin/user/:userId" exact>
      <EditUser />
    </Route>
    <Route path="/admin/user/delete/:userId" exact>
      <DeleteUser />
    </Route>
    <Route path="/admin" exact>
      <Admin />
    </Route>
  </Switch>
);

export default AdminRoutes;
