import PropTypes from 'prop-types';
import { useState } from 'react';

import styles from './ProductFields.scss';

import { useData } from '../../../../hooks';
import { Dropdown } from '../../../../components';

const sizeLimitKb = 10 * 1024;

const readFiles = async (files) => {
  const readFilesPromises = Array.from(files).map(
    (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          const sizeKb = file.size / 1024;
          if (sizeKb > sizeLimitKb) reject(new Error(`File exceeds limit of ${sizeLimitKb} kB`));
          resolve({ data: reader.result });
        };
        reader.onabort = () => reject(new Error(reader.error));
      }),
  );

  const result = await Promise.all(readFilesPromises);
  return result;
};

const ProductFields = ({
  name,
  onChangeName,
  category,
  onChangeCategory,
  size,
  onChangeSize,
  price,
  onChangePrize,
  description,
  onChangeDescription,
  colour,
  onChangeColour,
  material,
  onChangeMaterial,
  care,
  onChangeCare,
  seasonId,
  setSeasonId,
  images,
  setImages,
}) => {
  const { data: seasons, loading, error } = useData('seasons/read/all');

  if (loading) return <div>LOADING</div>;

  if (error) return <div>ERROR: {error}</div>;

  const seasonOptions = seasons.map(({ id, name: seasonName }) => ({
    label: seasonName,
    onClick: () => setSeasonId(id),
  }));
  const chosenSeason = seasonId ? seasons.find(({ id }) => id === seasonId).name : 'season';

  const onUploadFile = async ({ target }) => {
    const result = await readFiles(target.files);
    setImages(result.map(({ data }) => ({ data, colour: 'red' }))); // TODO:colour
  };

  return (
    <>
      <label htmlFor="edit-product-name" className={styles.label}>
        Name:
        <input value={name} onChange={onChangeName} type="text" id="edit-product-name" className={styles.input} />
      </label>
      <label htmlFor="edit-product-category" className={styles.label}>
        Category:
        <input
          value={category}
          onChange={onChangeCategory}
          type="text"
          id="edit-product-category"
          className={styles.input}
        />
      </label>
      <label htmlFor="edit-product-size" className={styles.label}>
        Size:
        <input value={size} onChange={onChangeSize} type="text" id="edit-product-size" className={styles.input} />
      </label>
      <label htmlFor="edit-product-prize" className={styles.label}>
        Prize:
        <input value={price} onChange={onChangePrize} type="number" id="edit-product-prize" className={styles.input} />
      </label>
      <label htmlFor="edit-product-description" className={styles.label}>
        Description:
        <input
          value={description}
          onChange={onChangeDescription}
          type="text"
          id="edit-product-description"
          className={styles.input}
        />
      </label>
      <label htmlFor="edit-product-colour" className={styles.label}>
        Colour:
        <input value={colour} onChange={onChangeColour} type="text" id="edit-product-colour" className={styles.input} />
      </label>
      <label htmlFor="edit-product-material" className={styles.label}>
        Material:
        <input
          value={material}
          onChange={onChangeMaterial}
          type="text"
          id="edit-product-material"
          className={styles.input}
        />
      </label>
      <label htmlFor="edit-product-care" className={styles.label}>
        Care:
        <input value={care} onChange={onChangeCare} type="text" id="edit-product-care" className={styles.input} />
      </label>

      <Dropdown options={seasonOptions} title={chosenSeason} />

      <label htmlFor="edit-product-images" className={styles.label}>
        Upload images:
        <input type="file" onChange={onUploadFile} multiple />
      </label>

      {images.map(({ data }, idx) => (
        <img src={data} key={`image-${idx}`} style={{ width: '150px', height: '150px' }} />
      ))}
    </>
  );
};

ProductFields.propTypes = {
  name: PropTypes.string.isRequired,
  onChangeName: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  onChangeCategory: PropTypes.func.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChangeSize: PropTypes.func,
  price: PropTypes.number.isRequired,
  onChangePrize: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  onChangeDescription: PropTypes.func.isRequired,
  colour: PropTypes.string,
  onChangeColour: PropTypes.func,
  material: PropTypes.string.isRequired,
  onChangeMaterial: PropTypes.func.isRequired,
  care: PropTypes.string.isRequired,
  onChangeCare: PropTypes.func.isRequired,
  seasonId: PropTypes.string,
  setSeasonId: PropTypes.func,
  images: PropTypes.arrayOf(PropTypes.object),
  setImages: PropTypes.func,
};

export default ProductFields;
