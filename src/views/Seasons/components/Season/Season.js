import { useParams } from 'react-router-dom';

import { Product } from '../../../../components';
import { useData } from '../../../../hooks';

const Season = () => {
  const { seasonId } = useParams();
  const { data, loading, error } = useData(`seasons/read?id=${seasonId}`);

  if (loading) return <div> loading </div>;
  if (error) return <div> error </div>;

  const { products } = data;
  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Season;
