import { useParams } from 'react-router-dom';

import { ProductList } from '../../../../components';
import { useData } from '../../../../hooks';

const Season = () => {
  const { seasonId } = useParams();
  const { data, loading, error } = useData(`seasons/read?id=${seasonId}`);
  const products = data?.products ?? [];

  return <ProductList products={products} loading={loading} error={error} />;
};

export default Season;
