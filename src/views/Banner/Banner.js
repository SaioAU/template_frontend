import { Link } from 'react-router-dom';

import { useData } from '../../hooks';

import { Dropdown } from '../../components';
import styles from './Banner.scss';

const Banner = () => {
  const { data: seasons, loading, error } = useData('seasons/read/all');

  if (loading) return <div>LOADING</div>;

  if (error) return <div>ERROR: {error}</div>;

  const seasonOptions = seasons.map(({ id, name }) => ({ label: name, url: `/seasons/${id}` }));

  return (
    <div className={styles.banner}>
      <Link to="/">
        <h1>Ingrid Pettersen</h1>
      </Link>
      <ul>
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
    </div>
  );
};

export default Banner;
