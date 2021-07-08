const Product = ({ product }) => (
  <li>
    {product.name}
    <p>category:{product.category}</p>
    <p>colour: {product.colour}</p>
    <p>description: {product.description}</p>
    <p>price: {product.price}</p>
    <p>material: {product.material}</p>
  </li>
);

export default Product;
