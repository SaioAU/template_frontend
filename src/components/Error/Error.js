import PropTypes from 'prop-types';

import styles from './Error.scss';

const Error = ({ error }) => {
  if (!error) return null;

  return <div className={styles.error}>{error}</div>;
};

Error.propTypes = {
  error: PropTypes.string,
};

export default Error;
