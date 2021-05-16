import { useParams } from 'react-router-dom';

const season = { id: 0, name: 'season 1' };

const Season = () => {
  const { seasonId } = useParams();
  // const season = getSeason(seasonId) // from backend

  return (
    <div>
      <div> {season.name} </div>
      <div> {seasonId} </div>
      <div> im at the season</div>
    </div>
  );
};

export default Season;
