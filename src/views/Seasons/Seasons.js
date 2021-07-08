import { Switch, Route } from 'react-router-dom';
import { Season } from './components';

const Seasons = () => {
  console.log('HERE🇹🇿');
  // const seasons = fetchSeasons();
  return (
    <Switch>
      <Route path="/seasons/:seasonId">
        <Season />
      </Route>
    </Switch>
  );
};

export default Seasons;
