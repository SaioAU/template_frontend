import PropTypes from 'prop-types';

export const ProductType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  colour: PropTypes.string,
  material: PropTypes.string.isRequired,
  care: PropTypes.string.isRequired,
  seasonId: PropTypes.string,
});
