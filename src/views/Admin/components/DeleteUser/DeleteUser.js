import { useCallback, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { Error } from 'app/components';
import { useAutheticatedFetch, useAuthenticatedData } from 'app/hooks';

import styles from './DeleteUser.scss';

const DeleteUser = () => {
  const { push } = useHistory();
  const { userId } = useParams();
  const data = useAuthenticatedData(`users/?id=${userId}`);
  const authenticatedFetch = useAutheticatedFetch();
  const user = data?.body;

  const [error, setError] = useState('');

  const deleteUser = useCallback(
    async (event) => {
      event.preventDefault();
      event.stopPropagation();

      const response = await authenticatedFetch('users/', {
        method: 'DELETE',
        body: JSON.stringify({ id: user?.id }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.status !== 200) setError(await response.text());
      else push('/admin');
    },
    [authenticatedFetch, push, user?.id],
  );

  const cancel = useCallback(() => push(`/admin/user/${user?.id}`), [push, user?.id]);

  return (
    <div>
      Deleting the user {user?.name} ({user?.email}) cannot be undone. Are you sure?
      <div className={styles.buttons}>
        <button onClick={deleteUser} type="button">
          Yes, delete user
        </button>
        <button onClick={cancel} type="button">
          Cancel
        </button>
      </div>
      <Error error={error} />
    </div>
  );
};

export default DeleteUser;
