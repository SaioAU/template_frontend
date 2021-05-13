import { Link, Switch, Route } from 'react-router-dom';
import { Season } from './components';

const seasons = [
  { id: 1, name: 'hjkhk' },
  { id: 2, name: 'hjkhk asdasd' },
  { id: 3, name: 'hjkhk sd' },
  { id: 4, name: 'hjkhk sdf' },
];

const Seasons = () => {
  // const seasons = fetchSeasons();
  return (
    <div>
      <ul>
        <li>
          <Link to={`/seasons/${seasons[0].id}`}> {seasons[0].name} </Link>
        </li>
        <li>
          <Link to={`/seasons/${seasons[1].id}`}> {seasons[1].name} </Link>
        </li>
        <li>
          <Link to={`/seasons/${seasons[2].id}`}> {seasons[2].name} </Link>
        </li>
        <li>
          <Link to={`/seasons/${seasons[3].id}`}> {seasons[3].name} </Link>
        </li>
      </ul>
      <Switch>
        <Route path="/seasons/:seasonId">
          <Season />
        </Route>
      </Switch>
    </div>
  );
};

export default Seasons;
