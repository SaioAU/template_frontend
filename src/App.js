import { Banner, Footer } from 'app/views';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import { Helmet } from 'react-helmet';

import Routes from './routes';
import ContextProvider from './context';

const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>
        <Banner />
        <Routes />
        <Footer />
      </BrowserRouter>
    </ContextProvider>
  );
};

export default App;
