import { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Error } from 'app/components';
import { useAutheticatedFetch } from 'app/hooks';

import UserFields from '../UserFields';
import styles from './CreateUser.scss';

const CreateUser = () => {
  const { push } = useHistory();
  const authenticatedFetch = useAutheticatedFetch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onChangeName = useCallback(({ target }) => setName(target.value), []);
  const onChangeEmail = useCallback(({ target }) => setEmail(target.value), []);
  const onChangePassword = useCallback(({ target }) => setPassword(target.value), []);

  const back = useCallback(() => push('/admin'), [push]);

  const onSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      event.stopPropagation();

      const response = await authenticatedFetch('users/', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.status !== 200) setError(await response.text());
      else back();
    },
    [authenticatedFetch, back, email, name, password],
  );

  return (
    <form autoComplete="off" className={styles.userForm} onSubmit={onSubmit}>
      <UserFields
        name={name}
        onChangeName={onChangeName}
        email={email}
        onChangeEmail={onChangeEmail}
        password={password}
        onChangePassword={onChangePassword}
      />
      <button type="submit">Create</button>
      <button type="button" onClick={back}>
        Back
      </button>
      <Error error={error} />
    </form>
  );
};

export default CreateUser;
