import { useCallback, useEffect, useState } from 'react';

const API_URL = 'http://localhost:3000';

export default (url, { method } = { method: 'GET' }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const getData = useCallback(async () => {
    const response = await fetch(`${API_URL}/${url}`, { method });
    const result = await response.json();

    if (response.status < 200 || response.status >= 300) {
      setError(result);
      setLoading(false);
      return;
    }

    setData(result);
    setLoading(false);
  }, [method, url]);

  useEffect(() => {
    getData();
  }, [getData]);

  return { data, loading, error };
};
