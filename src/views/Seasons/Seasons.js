import { Switch, Route } from 'react-router-dom';
import { Season } from './components';

const Seasons = () => {
  return (
    <Switch>
      <Route path="/seasons/:seasonId">
        <Season />
      </Route>
    </Switch>
  );
};

export default Seasons;
