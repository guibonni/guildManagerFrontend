import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './_pages/HomePage/HomePage';
import MemberPage from './_pages/MemberPage/MemberPage';

export default () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/members" component={MemberPage} />
      </div>
    </Router>
  );
}