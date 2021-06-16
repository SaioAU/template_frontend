import { useData } from '../../hooks';

const Landing = () => {
  const { data, loading, error } = useData('products/read/all');
  console.log('✅', { data, loading, error });

  return (
    <div>
      <div>landing</div>
    </div>
  );
};

export default Landing;
