import { Banner, Footer } from 'app/views';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import ContextProvider from './context';

const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Banner />
        <Routes />
        <Footer />
      </BrowserRouter>
    </ContextProvider>
  );
};

export default App;
