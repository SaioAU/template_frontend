import { useParams } from 'react-router-dom';

import { ProductList } from '../../../../components';
import { useData } from '../../../../hooks';

const Season = () => {
  const { seasonId } = useParams();
  const { data, loading, error } = useData(`seasons/read?id=${seasonId}`);

  if (loading) return <div> loading </div>;
  if (error) return <div> error </div>;

  const { products } = data;

  return <ProductList products={products} />;
};

export default Season;
