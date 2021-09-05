import PropTypes from 'prop-types';
import { useCallback } from 'react';

import { ScalarFieldsType, ScalarValuesType } from 'app/propTypes';
import styles from './ScalarField.scss';

const ScalarField = ({ scalarValues, setScalarValues, name, scalarFields }) => {
  const id = `scalar-field-${name}`;

  const onChange = useCallback(({ target }) => setScalarValues((current) => ({ ...current, [name]: target.value })), [
    name,
    setScalarValues,
  ]);

  return (
    <label htmlFor={id} className={styles.label}>
      {name}:
      <input
        value={scalarValues?.[name]}
        onChange={onChange}
        type={scalarFields[name]}
        id={id}
        className={styles.input}
      />
    </label>
  );
};

ScalarField.propTypes = {
  scalarValues: ScalarValuesType.isRequired,
  setScalarValues: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  scalarFields: ScalarFieldsType.isRequired,
};

export default ScalarField;
