import { useCallback, useEffect, useState } from 'react';

import { useAutheticatedFetch, useEnsureAuthenticated } from 'app/hooks';

import styles from './Admin.scss';

const API_URL = 'http://localhost:3003';

const Admin = () => {
  const [users, setUsers] = useState([]);
  const authenticatedFetch = useAutheticatedFetch();

  useEnsureAuthenticated(); // TODO: Won't need this here; move to admin route?

  const fetchUsers = useCallback(async () => {
    const response = await authenticatedFetch(`${API_URL}/users/all`);
    if (response.status !== 200) return;
    setUsers(await response.json());
  }, [authenticatedFetch]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div>
      <h1>Admin</h1>
      {users.length > 0 && (
        <div>
          <h2>Users</h2>
          <table className={styles.userTable}>
            <tr>
              <th>ID</th>
              <th>User name</th>
              <th>Email</th>
            </tr>
            {users.map(({ id, name, email }) => (
              <tr key={`user-${id}`}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
              </tr>
            ))}
          </table>
        </div>
      )}
    </div>
  );
};

export default Admin;
