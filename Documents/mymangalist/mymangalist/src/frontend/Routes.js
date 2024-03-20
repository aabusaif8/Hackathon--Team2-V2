import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Menu from './components/Menu';
import CreateReview from "./components/CreateReview"
import MangaInfo from "./components/MangaInfo"
import Search from './components/Search';
import AllManga from "./components/AllManga"
function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path ="/" component={Menu} />
        <Route exact path ="/allmanga" component={AllManga} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path ="/:manga_id/info" component={MangaInfo} />
        <Route exact path ="/createReview" component={CreateReview} />
        <Route exact path ="/search" component={Search} />
      </Switch>
    </Router>
  );
}

export default Routes;
