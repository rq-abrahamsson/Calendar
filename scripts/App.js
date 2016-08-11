import React, {Component} from 'react';
import Navigation from './containers/Navigation.jsx';

const App = ({children}) => {
  return (
    <div>
      <Navigation />
    {children}
    </div>
  );
}

export default App;
