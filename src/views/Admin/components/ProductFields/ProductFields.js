import PropTypes from 'prop-types';

import styles from './ProductFields.scss';

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
  onChangeSeasonId,
}) => (
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
    <label htmlFor="edit-product-seasonId" className={styles.label}>
      SeasonId:
      <input
        value={seasonId}
        onChange={onChangeSeasonId}
        type="text"
        id="edit-product-seasonId"
        className={styles.input}
      />
    </label>
  </>
);

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
  onChangeSeasonId: PropTypes.func,
};

export default ProductFields;