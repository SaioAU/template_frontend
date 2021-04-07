import { useCallback, useEffect, useState } from 'react';

import useAutheticatedFetch from './useAutheticatedFetch';

export default (url, { method } = { method: 'GET' }) => {
  const [data, setData] = useState();
  const authenticatedFetch = useAutheticatedFetch();

  const fetchData = useCallback(async () => {
    const response = await authenticatedFetch(url, { method });

    if (response.status !== 200) return;

    try {
      setData({ ...response, body: await response.json() });
    } catch (err) {
      console.error(err); // eslint-disable-line no-console
      setData(response);
    }
  }, [authenticatedFetch, method, url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return data;
};
