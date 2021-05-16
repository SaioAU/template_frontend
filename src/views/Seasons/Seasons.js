import { Link, Switch, Route } from 'react-router-dom';
import { Season } from './components';

const seasons = [
  { id: 1, name: 'hjkhk' },
  { id: 2, name: 'hjkhk asdasd' },
  { id: 3, name: 'hjkhk sd' },
  { id: 4, name: 'hjkhk sdf' },
];

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
