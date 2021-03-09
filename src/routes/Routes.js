import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Admin, Landing } from 'app/views';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/admin" exact>
        <Admin />
      </Route>
      <Route path="/">
        <Landing />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
