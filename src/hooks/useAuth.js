import jwtDecode from 'jwt-decode';

import useAppContext from './useAppContext';

export default () => {
  const [{ authToken }] = useAppContext();
  const decoded = authToken ? jwtDecode(authToken) : undefined;

  return { authenticated: Boolean(authToken), userId: decoded?.userId };
};
