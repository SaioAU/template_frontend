import { useData } from '../../hooks';
import { Product } from '../../components';

const Paintings = () => {
  const { data, loading, error } = useData('products/read/all');
  console.log(data);
  // console.log(data, 'here is my data');
  if (loading) return <div> loading </div>;
  if (error) return <div> error </div>;
  const paintings = data.filter(function (item) {
    return item.category === 'painting';
  });

  return (
    <div>
      {paintings.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Paintings;
