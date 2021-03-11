import { createContext, useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

const INITIAL_CONTEXT = {};

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [appContext, setContext] = useState(INITIAL_CONTEXT);

  const setAppContext = useCallback((newContext) => {
    setContext((currentContext) => ({ ...currentContext, ...newContext }));
  }, []);

  const contextValue = useMemo(() => [appContext, setAppContext], [appContext, setAppContext]);

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

ContextProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default ContextProvider;
export { Context };
