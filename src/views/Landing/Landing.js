import { useData } from '../../hooks';

const Landing = () => {
  const { data, loading, error } = useData('products/read/all');
  console.log('hello world', { data, loading, error });

  if (loading) return <div> loading </div>;
  if (error) return <div> error </div>;

  return (
    <div>
      <div>
        {data.map((product) => (
          <div>{product.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Landing;
