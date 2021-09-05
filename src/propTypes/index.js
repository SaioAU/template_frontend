import PropTypes from 'prop-types';

import { FIELD_TYPES } from '../constants';

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

export const ScalarFieldsType = PropTypes.objectOf(PropTypes.oneOf(Object.values(FIELD_TYPES)));

export const ScalarValuesType = PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]));
