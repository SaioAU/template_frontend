import { useParams } from 'react-router-dom';

const season = { id: 0, name: 'test name' };

const Season = () => {
  const { seasonId } = useParams();
  // const season = getSeason(seasonId) // from backend

  return <div> {season.name} </div>;
};

export default Season;
