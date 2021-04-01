import React, {Fragment} from 'react';
import {Container} from "semantic-ui-react";
import { Route, Switch } from 'react-router-dom';

import HomePage from "./pages/HomePage";

const App = () => {
  return (
      <Fragment>
        <Route path='/' exact component={HomePage}/>
        <Route path={'/(.+)'} render={() => (
            <Fragment>
              <Container style={{marginTop: '7em'}}>
                <Switch>
                </Switch>
              </Container>
            </Fragment>
        )}/>
      </Fragment>
  );
}

export default App;
