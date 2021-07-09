import { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuthenticatedData } from 'app/hooks';

import styles from './Admin.scss';

const Admin = () => {
  const { push } = useHistory();
  const data = useAuthenticatedData('users/all');
  const users = data?.body;

  const onClickCreateUser = useCallback(() => push('/admin/user/create'), [push]);

  return (
    <div>
      <h1>Admin</h1>
      {users?.length > 0 && (
        <div>
          <h2>Users</h2>
          <button type="button" onClick={onClickCreateUser}>
            Create
          </button>
          <br />
          <br />
          <table className={styles.userTable}>
            <thead>
              <tr>
                <th>ID</th>
                <th>User name</th>
                <th>Email</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {users?.map(({ id, name, email }) => (
                <tr key={`user-${id}`}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>
                    <Link to={`admin/user/${id}`}>EDIT</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link to="/admin/products">
            <h2>Products</h2>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Admin;
