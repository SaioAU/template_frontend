import Routes from './routes';
import ContextProvider from './context';

const App = () => {
  return (
    <ContextProvider>
      <Routes />
    </ContextProvider>
  );
};

export default App;
