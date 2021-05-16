import { Link, useHistory } from 'react-router-dom';

const seasons = [
  { id: 1, name: 'winter' },
  { id: 2, name: 'spring' },
  { id: 3, name: 'summer' },
  { id: 4, name: 'autumn' },
];

const Banner = () => {
  const { push } = useHistory();
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
          <select name="seasons" onChange={({ target }) => push(`/seasons/${target.value}`)}>
            <option>seasons</option>
            <option value={seasons[0].id}>{seasons[0].name}</option>
            <option value={seasons[1].id}>{seasons[1].name}</option>
            <option value={seasons[2].id}>{seasons[2].name}</option>
            <option value={seasons[3].id}>{seasons[3].name}</option>
          </select>
        </ul>
        <br />
      </div>
      <div>picture</div>
    </div>
  );
};

export default Banner;
