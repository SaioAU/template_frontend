import { useCallback, useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { useAutheticatedFetch, useData } from 'app/hooks';
import ProductFields from '../ProductFields';
import styles from './EditProduct.scss';

const EditProduct = () => {
  const authenticatedFetch = useAutheticatedFetch();
  const { go } = useHistory();
  const { push } = useHistory();
  const { productId } = useParams();
  const { data: product, loading, error } = useData(`products/read/?id=${productId}`);
  console.log(product, loading, error, '😍');

  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [size, setSize] = useState('');
  const [price, setPrize] = useState(0);
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
  const onChangeSeasonId = useCallback(({ target }) => setSeasonId(target.value), []);

  const back = useCallback(() => push('/admin/products'), [push]);

  useEffect(() => {
    if (!product) return;
    setName(product.name);
    setCategory(product.category);
    setSize(product.size);
    setPrize(product.price);
    setDescription(product.description);
    setColour(product.colour);
    setMaterial(product.material);
    setCare(product.care);
    setSeasonId(product.seasonId);
  }, [product]);

  const onSubmitEdit = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(typeof price, '🐶');
    const response = await authenticatedFetch('update', {
      method: 'PATCH',
      body: JSON.stringify({
        id: productId,
        name,
        category,
        size,
        price: Number(price),
        description,
        colour,
        material,
        care,
        seasonId,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.status !== 200) console.log('product isnt editing');
    else go(0);
  };
  console.log(name, '✅', product);
  return (
    <div>
      <h1>Product edit</h1>
      <div>
        <h2>Products</h2>
        <form autoComplete="off" className={styles.productForm} onSubmit={onSubmitEdit}>
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
            onChangeSeasonId={onChangeSeasonId}
          />
          <button type="submit">Edit</button>
          <button type="button" onClick={back}>
            Back
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
