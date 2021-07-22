import { Link, useHistory } from 'react-router-dom';

import { useData } from '../../hooks';

import { Dropdown } from '../../components';

// const seasons = [
//   { id: 1, name: 'winter' },
//   { id: 2, name: 'spring' },
//   { id: 3, name: 'summer' },
//   { id: 4, name: 'autumn' },
// ];

const Banner = () => {
  const { push } = useHistory();

  const { data: seasons, loading, error } = useData('seasons/read/all');

  if (loading) return <div>LOADING</div>;

  if (error) return <div>ERROR: {error}</div>;

  const seasonOptions = seasons.map(({ id, name }) => ({ label: name, url: `/seasons/${id}` }));

  return (
    <div>
      <div>
        <ul>
          <li>
            <Link to="/">
              <h1>Ingrid Pettersen</h1>
            </Link>
          </li>
          <li>
            <Link to="/shop/"> shop </Link>
          </li>
          <li>
            <Link to="/paintings/"> paintings </Link>
          </li>
          <li>
            <Link to="/bio/"> bio </Link>
          </li>
          <Dropdown options={seasonOptions} title="seasons" />
        </ul>
        <br />
      </div>
      <div>picture</div>
    </div>
  );
};

export default Banner;
