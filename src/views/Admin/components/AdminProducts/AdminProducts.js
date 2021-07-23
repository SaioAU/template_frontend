import { Link, useHistory } from 'react-router-dom';
import { useAutheticatedFetch, useData } from 'app/hooks';

import styles from '../../Admin.scss';

const AdminProducts = () => {
  const { go } = useHistory();
  const { data } = useData('products/read/all');
  const authenticatedFetch = useAutheticatedFetch();

  const onClickDeleteProduct = async (productId) => {
    const response = await authenticatedFetch('products/delete', {
      method: 'DELETE',
      body: JSON.stringify({ id: productId }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.status !== 200) console.error(await response.text());
    else go(0);
  };

  const onClickDeleteSeason = async (seasonId) => {
    const response = await authenticatedFetch('seasons/delete', {
      method: 'DELETE',
      body: JSON.stringify({ id: seasonId }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.status !== 200) console.error(await response.text());
    else go(0);
  };

  const { data: seasons, loading, error } = useData('seasons/read/all');

  if (loading) return <div>LOADING</div>;

  if (error) return <div>ERROR: {error}</div>;
  return (
    <>
      <div>
        <h1>Admin</h1>
        {data?.length > 0 && (
          <div>
            <h2>Products</h2>
            <br />
            <table className={styles.userTable}>
              <thead>
                <tr>
                  <th>name</th>
                  <th>description</th>
                  <th>category</th>
                  <th>size</th>
                  <th>colour</th>
                  <th>price</th>
                  <th>material</th>
                  <th>care</th>
                  <th>seasonId</th>
                </tr>
              </thead>
              <tbody>
                {data?.map(({ category, name, size, id, colour, description, price, material, care, seasonId }) => (
                  <tr key={`product-${id}`}>
                    <td>{name}</td>
                    <td>{description}</td>
                    <td>{category}</td>
                    <td>{size}</td>
                    <td>{colour}</td>
                    <td>{price}</td>
                    <td>{material}</td>
                    <td>{care}</td>
                    <td>{seasonId ? seasons.find((season) => season.id === seasonId).name : 'season'}</td>
                    <td>
                      <Link to={`products/${id}`}>Edit</Link>
                    </td>
                    <td>
                      <button type="button" onClick={() => onClickDeleteProduct(id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Link to="products/create">Create Product</Link>
          </div>
        )}
      </div>

      <div>
        {seasons?.length > 0 && (
          <div>
            <h2>Seasons</h2>
            <br />
            <table className={styles.userTable}>
              <thead>
                <tr>
                  <th>name</th>
                  <th>year</th>
                </tr>
              </thead>
              <tbody>
                {seasons?.map(({ name, year, id }) => (
                  <tr key={`season-${id}`}>
                    <td>{name}</td>
                    <td>{year}</td>
                    <td>
                      <Link to={`seasons/${id}`}>Edit</Link>
                    </td>
                    <td>
                      <button type="button" onClick={() => onClickDeleteSeason(id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Link to="seasons/create">Create season</Link>
          </div>
        )}
      </div>
    </>
  );
};

export default AdminProducts;
