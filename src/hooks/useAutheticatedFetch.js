import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';

import useAuth from './useAuth';

const addAuthToHeaders = (authToken, { headers, ...rest } = {}) => ({
  ...rest,
  headers: { ...headers, auth: authToken },
});

export default () => {
  const { pathname } = useLocation();
  const { authToken, tryRefreshToken } = useAuth();

  const authenticatedFetch = useCallback(
    async (url, originalConfig, ...remainingParams) => {
      let token = authToken;

      // Not authenticated; use refresh token
      if (!token) {
        token = await tryRefreshToken(pathname);
      }

      let config = addAuthToHeaders(token, originalConfig);
      let response = await fetch(url, config, ...remainingParams);

      // Auth token was unauthorized; try getting a new one
      if (authToken && response.status === 401) {
        token = await tryRefreshToken(pathname);
        config = addAuthToHeaders(token, originalConfig);
        response = await fetch(url, config, ...remainingParams);
      }

      return response;
    },
    [authToken, pathname, tryRefreshToken],
  );

  return authenticatedFetch;
};
