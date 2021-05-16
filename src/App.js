import { Banner } from 'app/views';
import Routes from './routes';
import ContextProvider from './context';

const App = () => {
  return (
    <ContextProvider>
      <Routes>
        <Banner />
      </Routes>
    </ContextProvider>
  );
};

export default App;
