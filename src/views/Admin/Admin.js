import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from 'app/hooks';

const Admin = () => {
  const { push } = useHistory();
  const { authenticated /* , userId */ } = useAuth();

  useEffect(() => {
    if (!authenticated) push('/login?next=/admin');
  }, [authenticated, push]);

  return <div>Admin</div>;
};

export default Admin;
