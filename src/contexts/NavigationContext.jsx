import React, { createContext, useContext, useReducer, useEffect } from 'react';

const NavigationContext = createContext();

const initialState = {
  recentPaths: JSON.parse(localStorage.getItem('recentPaths')) || []
};

function navigationReducer(state, action) {
  switch (action.type) {
    case 'ADD_PATH':
      const newPaths = [
        {
          id: Date.now(),
          path: action.payload.path,
          label: action.payload.label,
          timestamp: new Date().toISOString()
        },
        ...state.recentPaths.filter(p => p.path !== action.payload.path)
      ].slice(0, 4);
      
      localStorage.setItem('recentPaths', JSON.stringify(newPaths));
      return { ...state, recentPaths: newPaths };
      
    default:
      return state;
  }
}

export function NavigationProvider({ children }) {
  const [state, dispatch] = useReducer(navigationReducer, initialState);

  const addPath = (path, label) => {
    dispatch({ type: 'ADD_PATH', payload: { path, label } });
  };

  return (
    <NavigationContext.Provider value={{ ...state, addPath }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}