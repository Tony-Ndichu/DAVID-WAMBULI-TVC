import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, Contact, Academics } from './views';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/academics" component={Academics} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
