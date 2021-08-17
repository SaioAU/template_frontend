import { useData } from '../../hooks';
import { Product } from '../../components';

const Shop = () => {
  const { data, loading, error } = useData('products/read/all');
  // console.log(data, 'here is my data');
  if (loading) return <div> loading </div>;
  if (error) return <div> error </div>;
  const paintings = data.filter(function (item) {
    return item.category === 'painting';
  });
  const handbags = data.filter(function (item) {
    return item.category === 'handbag';
  });
  return (
    <>
      <div>
        {paintings.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <div>
        {handbags.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Shop;
