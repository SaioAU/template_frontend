import { useCallback } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { useAutheticatedFetch, useData } from 'app/hooks';

import styles from '../../Admin.scss';

const AdminProducts = () => {
  const { push, go } = useHistory();
  const { data } = useData('products/read/all');
  const onClickCreateProduct = useCallback(() => push('/admin/products'), [push]);
  const authenticatedFetch = useAutheticatedFetch();
  const onClickDelete = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const response = await authenticatedFetch('user/', {
      method: 'DELETE',
      body: JSON.stringify({ id: user?.id }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.status !== 200) setError(await response.text());
    else push('/admin');
  };

  const onClickDeleteProduct = async (productId) => {
    const response = await authenticatedFetch('products/delete', {
      method: 'DELETE',
      body: JSON.stringify({ id: productId }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.status !== 200) console.error(await response.text());
    else go(0);
  };
  return (
    <div>
      <h1>Admin</h1>
      {data?.length > 0 && (
        <div>
          <h2>Products</h2>
          <button type="button" onClick={onClickCreateProduct}>
            Create
          </button>
          <br />
          <br />
          <table className={styles.userTable}>
            <thead>
              <tr>
                <th>category</th>
                <th>name</th>
                <th>colour</th>
                <th>size</th>
              </tr>
            </thead>
            <tbody>
              {data?.map(({ category, name, size, id }) => (
                <tr key={`product-${id}`}>
                  <td>{category}</td>
                  <td>{name}</td>
                  <td>{size}</td>
                  <td>
                    <Link to={`admin/products/${id}`}>EDIT</Link>
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
        </div>
      )}
    </div>
  );
};

export default AdminProducts;
