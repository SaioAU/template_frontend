import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import useAuth from './useAuth';

export default () => {
  const { pathname } = useLocation();
  const { tryRefreshToken, authenticated } = useAuth();

  useEffect(() => {
    if (!authenticated) tryRefreshToken(pathname);
  }, [authenticated, tryRefreshToken, pathname]);
};
