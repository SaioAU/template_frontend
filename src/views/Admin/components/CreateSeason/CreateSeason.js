import { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useAutheticatedFetch } from 'app/hooks';
import SeasonFields from '../SeasonFields';
import styles from './CreateSeason.scss';

const CreateSeason = () => {
  const authenticatedFetch = useAutheticatedFetch();
  const { go, back } = useHistory();

  const [name, setName] = useState('');
  const [year, setYear] = useState('');

  const onChangeName = useCallback(({ target }) => setName(target.value), []);
  const onChangeYear = useCallback(({ target }) => setYear(target.value), []);

  const onSubmitCreate = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const response = await authenticatedFetch('seasons/create', {
      method: 'POST',
      body: JSON.stringify({ name, year }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.status !== 200) console.log('season isnt creating');
    else go(0);
  };

  return (
    <div>
      <h1>Season create</h1>
      <div>
        <h2>Season</h2>
        <form autoComplete="off" className={styles.seasonForm} onSubmit={onSubmitCreate}>
          <SeasonFields name={name} onChangeName={onChangeName} year={year} onChangeYear={onChangeYear} />
          <button type="submit">Create</button>
          <button type="button" onClick={back}>
            Back
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateSeason;
