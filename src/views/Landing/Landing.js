import { useData } from '../../hooks';
import { Product } from '../../components';

const Landing = () => {
  const { data, loading, error } = useData('products/read/all');
  if (loading) return <div> loading </div>;
  if (error) return <div> error </div>;

  return (
    <div>
      {data.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Landing;
