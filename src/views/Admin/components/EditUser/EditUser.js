import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Error } from 'app/components';
import { useAutheticatedFetch, useAuthenticatedQuery } from 'app/hooks';

import styles from './EditUser.scss';

const EditUser = () => {
  const { userId } = useParams();
  const data = useAuthenticatedQuery(`users/?id=${userId}`);
  const authenticatedFetch = useAutheticatedFetch();
  const user = data?.body;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const onChangeName = useCallback(({ target }) => setName(target.value), []);
  const onChangeEmail = useCallback(({ target }) => setEmail(target.value), []);

  useEffect(() => {
    if (user && (!name || !email)) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [email, name, user]);

  const onSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      event.stopPropagation();

      const response = await authenticatedFetch('users/', {
        method: 'PATCH',
        body: JSON.stringify({ id: user?.id, name, email }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.status !== 200) setError(await response.text());
      else setMessage('Updated ✓');
    },
    [authenticatedFetch, email, name, user],
  );

  useEffect(() => {
    if (!message) return undefined;
    const timeoutId = setTimeout(() => setMessage(''), 3000);
    return () => clearTimeout(timeoutId);
  }, [message]);

  return (
    <form autoComplete="off" className={styles.userForm} onSubmit={onSubmit}>
      <label htmlFor="edit-user-name">
        Name:
        <input value={name} onChange={onChangeName} type="text" id="edit-user-name" />
      </label>
      <label htmlFor="edit-user-email">
        Email:
        <input value={email} onChange={onChangeEmail} type="email" id="edit-user-email" />
      </label>
      <button type="submit">Update</button>
      <Error error={error} />
      {message && (
        <div>
          <br />
          {message}
        </div>
      )}
    </form>
  );
};

export default EditUser;
