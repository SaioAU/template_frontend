import { useData } from '../../hooks';
import { ProductList } from '../../components';

const Landing = () => {
  const { data, loading, error } = useData('products/read/all');
  if (loading) return <div> loading </div>;
  if (error) return <div> error </div>;

  return <ProductList products={data} />;
};

export default Landing;
