import { Banner } from 'app/views';
import Routes from './routes';
import ContextProvider from './context';

const App = () => {
  console.log('hello');
  return (
    <ContextProvider>
      <Banner />
      <Routes />
    </ContextProvider>
  );
};

export default App;
