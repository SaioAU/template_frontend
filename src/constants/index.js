import { filter } from 'ramda';

export const FIELD_TYPES = Object.freeze({
  TEXT: 'text',
  NUMBER: 'number',
  SPECIAL: 'special',
});

export const DEFAULT_VALUES = Object.freeze({
  [FIELD_TYPES.TEXT]: '',
  [FIELD_TYPES.NUMBER]: 0,
  [FIELD_TYPES.SPECIAL]: undefined,
});

export const SCALAR_FIELD_TYPES = [FIELD_TYPES.TEXT, FIELD_TYPES.NUMBER];

export const PRODUCT_FIELDS = Object.freeze({
  name: FIELD_TYPES.TEXT,
  category: FIELD_TYPES.TEXT,
  size: FIELD_TYPES.NUMBER,
  price: FIELD_TYPES.NUMBER,
  description: FIELD_TYPES.TEXT,
  colour: FIELD_TYPES.TEXT,
  material: FIELD_TYPES.TEXT,
  care: FIELD_TYPES.TEXT,
  season_id: FIELD_TYPES.SPECIAL,
  images: FIELD_TYPES.SPECIAL,
});

export const SCALAR_PRODUCT_FIELDS = filter((type) => SCALAR_FIELD_TYPES.includes(type), PRODUCT_FIELDS);

export const DEFAULT_SCALAR_PRODUCT_VALUES = Object.entries(SCALAR_PRODUCT_FIELDS).reduce(
  (values, [name, type]) => ({ ...values, [name]: DEFAULT_VALUES[type] }),
  {},
);
