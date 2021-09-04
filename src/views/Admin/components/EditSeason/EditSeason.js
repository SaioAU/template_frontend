import { useCallback, useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { useAutheticatedFetch, useData } from 'app/hooks';
import { FetchWrapper } from 'app/components';

import SeasonFields from '../SeasonFields';
import styles from './EditSeason.scss';

const EditProduct = () => {
  const authenticatedFetch = useAutheticatedFetch();
  const { go } = useHistory();
  const { push } = useHistory();
  const { seasonId } = useParams();
  const { data, loading, error } = useData(`seasons/read/?id=${seasonId}`);

  const [name, setName] = useState('');
  const [year, setYear] = useState('');

  const onChangeName = useCallback(({ target }) => setName(target.value), []);
  const onChangeYear = useCallback(({ target }) => setYear(target.value), []);

  const back = useCallback(() => push('/admin/seasons'), [push]);

  useEffect(() => {
    if (!data) return;
    setName(data.name);
    setYear(data.year);
  }, [data]);

  const onSubmitEdit = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    const response = await authenticatedFetch('seasons/update', {
      method: 'PATCH',
      body: JSON.stringify({
        id: seasonId,
        name,
        year,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.status !== 200) console.log('season isnt editing');
    else go(0);
  };
  return (
    <FetchWrapper loading={loading} error={error}>
      <h1>Season edit</h1>
      <div>
        <h2>Seasons</h2>
        <form autoComplete="off" className={styles.productForm} onSubmit={onSubmitEdit}>
          <SeasonFields name={name} onChangeName={onChangeName} year={year} onChangeYear={onChangeYear} />
          <button type="submit">Edit</button>
          <button type="button" onClick={back}>
            Back
          </button>
        </form>
      </div>
    </FetchWrapper>
  );
};

export default EditProduct;
