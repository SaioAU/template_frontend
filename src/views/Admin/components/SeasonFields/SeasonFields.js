import PropTypes from 'prop-types';

import styles from './SeasonFields.scss';

const SeasonFields = ({ name, onChangeName, year, onChangeYear }) => {
  return (
    <>
      <label htmlFor="edit-season-name" className={styles.label}>
        Name:
        <input value={name} onChange={onChangeName} type="text" id="edit-season-name" className={styles.input} />
      </label>
      <label htmlFor="edit-season-year" className={styles.label}>
        Year:
        <input value={year} onChange={onChangeYear} type="number" id="edit-season-year" className={styles.input} />
      </label>
    </>
  );
};

SeasonFields.propTypes = {
  name: PropTypes.string.isRequired,
  onChangeName: PropTypes.func.isRequired,
  year: PropTypes.number,
  onChangeYear: PropTypes.number,
};

export default SeasonFields;
