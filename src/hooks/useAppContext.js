import { useContext } from 'react';

import { Context } from 'app/context';

export default () => {
  const appContext = useContext(Context);
  return appContext;
};
