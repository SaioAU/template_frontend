import { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useAutheticatedFetch } from 'app/hooks';
import ProductFields from '../ProductFields';
import styles from './CreateProduct.scss';

const CreateProduct = () => {
  const authenticatedFetch = useAutheticatedFetch();
  const { go, back } = useHistory();

  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [size, setSize] = useState('');
  const [price, setPrize] = useState('');
  const [description, setDescription] = useState('');
  const [colour, setColour] = useState('');
  const [material, setMaterial] = useState('');
  const [care, setCare] = useState('');
  const [seasonId, setSeasonId] = useState('');
  const onChangeName = useCallback(({ target }) => setName(target.value), []);
  const onChangeCategory = useCallback(({ target }) => setCategory(target.value), []);
  const onChangeSize = useCallback(({ target }) => setSize(target.value), []);
  const onChangePrize = useCallback(({ target }) => setPrize(target.value), []);
  const onChangeDescription = useCallback(({ target }) => setDescription(target.value), []);
  const onChangeColour = useCallback(({ target }) => setColour(target.value), []);
  const onChangeMaterial = useCallback(({ target }) => setMaterial(target.value), []);
  const onChangeCare = useCallback(({ target }) => setCare(target.value), []);

  const onSubmitCreate = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const response = await authenticatedFetch('products/create', {
      method: 'POST',
      body: JSON.stringify({ name, category, size, price, description, colour, material, care, seasonId }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.status !== 200) console.log('product isnt creating');
    else go(0);
  };

  return (
    <div>
      <h1>Product create</h1>
      <div>
        <h2>Products</h2>
        <form autoComplete="off" className={styles.productForm} onSubmit={onSubmitCreate}>
          <ProductFields
            name={name}
            onChangeName={onChangeName}
            category={category}
            onChangeCategory={onChangeCategory}
            size={size}
            onChangeSize={onChangeSize}
            price={price}
            onChangePrize={onChangePrize}
            description={description}
            onChangeDescription={onChangeDescription}
            colour={colour}
            onChangeColour={onChangeColour}
            material={material}
            onChangeMaterial={onChangeMaterial}
            care={care}
            onChangeCare={onChangeCare}
            seasonId={seasonId}
            setSeasonId={setSeasonId}
          />
          <button type="submit">Create</button>
          <button type="button" onClick={back}>
            Back
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
