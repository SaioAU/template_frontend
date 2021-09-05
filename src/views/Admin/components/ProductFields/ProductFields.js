import PropTypes from 'prop-types';
import { useMemo } from 'react';

import { Dropdown, FetchWrapper, ScalarField } from 'app/components';
import { SCALAR_PRODUCT_FIELDS } from 'app/constants';
import { useData } from 'app/hooks';
import { ScalarValuesType } from 'app/propTypes';

import styles from './ProductFields.scss';

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

const ProductFields = ({ scalarValues, setScalarValues, seasonId, setSeasonId, images, setImages }) => {
  const { data: seasons, loading, error } = useData('seasons/read/all');

  const seasonOptions = useMemo(
    () =>
      (seasons ?? []).map(({ id, name: seasonName }) => ({
        label: seasonName,
        onClick: () => setSeasonId(id),
      })),
    [seasons, setSeasonId],
  );

  const chosenSeason = seasonId ? (seasons ?? []).find(({ id }) => id === seasonId)?.name : 'season';

  // TODO: Fix upload  for large images
  const onUploadFile = async ({ target }) => {
    const result = await readFiles(target.files);

    // TODO: colour
    setImages((existingImages) => [...existingImages, ...result.map(({ data }) => ({ data, colour: 'red' }))]);
  };

  const deleteImageByIndex = (index) => {
    setImages((currentImages) => [...currentImages.slice(0, index), ...currentImages.slice(index + 1)]);
  };

  return (
    <FetchWrapper loading={loading} error={error}>
      {Object.keys(scalarValues).map((field) => (
        <ScalarField
          key={`product-scalar-field-${field}`}
          name={field}
          scalarValues={scalarValues}
          setScalarValues={setScalarValues}
          scalarFields={SCALAR_PRODUCT_FIELDS}
        />
      ))}

      <Dropdown options={seasonOptions} title={chosenSeason} />

      <label htmlFor="edit-product-images" className={styles.label}>
        Upload images:
        <input type="file" onChange={onUploadFile} multiple />
      </label>

      <div className={styles.images}>
        {images.map(({ data }, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={`image-${idx}`}>
            <img src={data} style={{ width: '150px', height: '150px' }} alt="Uploaded" />
            <button onClick={() => deleteImageByIndex(idx)} type="button">
              Delete
            </button>
          </div>
        ))}
      </div>
    </FetchWrapper>
  );
};

ProductFields.propTypes = {
  scalarValues: ScalarValuesType.isRequired,
  setScalarValues: PropTypes.func.isRequired,
  seasonId: PropTypes.string,
  setSeasonId: PropTypes.func,
  images: PropTypes.arrayOf(PropTypes.object),
  setImages: PropTypes.func,
};

export default ProductFields;
