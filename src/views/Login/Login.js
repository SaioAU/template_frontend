import { useCallback, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { Error } from 'app/components';
import { useAuth } from 'app/hooks';

import styles from './Login.scss';

const API_URL = 'http://localhost:3000';

const Login = () => {
  const { search } = useLocation();
  const { push } = useHistory();
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { onAuthenticate } = useAuth();

  const onChangeEmail = useCallback(({ target }) => setEmail(target.value), []);
  const onChangePassword = useCallback(({ target }) => setPassword(target.value), []);

  const onSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      event.stopPropagation();
      setError('');

      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'post',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.status !== 200) {
        setError("Couldn't login");
        return;
      }

      const authToken = response.headers.get('authToken');
      const next = new URLSearchParams(search).get('next') ?? '/';

      onAuthenticate(authToken);
      push(next);
    },
    [email, password, onAuthenticate, push, search],
  );

  return (
    <div className={styles.container}>
      <h1>Log in</h1>
      <br />
      <form autoComplete="off" onSubmit={onSubmit}>
        <label htmlFor="email-input">
          Email: <input value={email} type="email" onChange={onChangeEmail} id="email-input" />
        </label>
        <br />
        <br />
        <label htmlFor="password-input">
          Password: <input value={password} type="password" onChange={onChangePassword} id="password-input" />
        </label>
        <br />
        <br />
        <button type="submit">Log in</button>
        <Error error={error} />
      </form>
    </div>
  );
};

export default Login;
