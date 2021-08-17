import { useData } from '../../hooks';
import { ProductList } from '../../components';

const Paintings = () => {
  const { data, loading, error } = useData('products/read/all');

  if (loading) return <div> loading </div>;
  if (error) return <div> error </div>;
  const paintings = data.filter(function (item) {
    return item.category === 'painting';
  });

  return <ProductList products={paintings} />;
};

export default Paintings;
