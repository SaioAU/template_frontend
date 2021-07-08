import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

import useAppContext from './useAppContext';

// TODO: Take expiration into account for authenticated?

const API_URL = 'http://localhost:3000';

export default () => {
  const [{ authToken }, setContext] = useAppContext();
  const { push } = useHistory();

  const authenticated = Boolean(authToken);
  const decoded = authToken ? jwtDecode(authToken) : undefined;

  const onAuthenticate = useCallback((token) => setContext({ authToken: token }), [setContext]);

  const tryRefreshToken = useCallback(
    async (next = '/') => {
      const response = await fetch(`${API_URL}/auth/refresh-token`, { credentials: 'include' });

      if (response.status !== 200) {
        push(`/login?next=${next}`);
        return undefined;
      }

      const newAuthToken = response.headers.get('authToken');
      onAuthenticate(newAuthToken);
      return newAuthToken;
    },
    [onAuthenticate, push],
  );

  return { authToken, authenticated, onAuthenticate, tryRefreshToken, userId: decoded?.userId };
};
