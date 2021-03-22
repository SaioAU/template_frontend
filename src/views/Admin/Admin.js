import { Link } from 'react-router-dom';

import { useAuthenticatedQuery } from 'app/hooks';

import styles from './Admin.scss';

const Admin = () => {
  const data = useAuthenticatedQuery('users/all');
  const users = data?.body;

  return (
    <div>
      <h1>Admin</h1>
      {users?.length > 0 && (
        <div>
          <h2>Users</h2>
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
        </div>
      )}
    </div>
  );
};

export default Admin;
