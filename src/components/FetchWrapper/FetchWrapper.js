import PropTypes from 'prop-types';

const FetchWrapper = ({ loading, error, children }) => {
  if (loading) return <div>LOADING</div>;
  if (error) return <div>ERROR: {error}</div>;
  return children;
};

FetchWrapper.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default FetchWrapper;
