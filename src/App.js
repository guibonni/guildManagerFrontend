import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './_pages/HomePage/HomePage';
import MemberPage from './_pages/MemberPage/MemberPage';
import TeamPage from './_pages/TeamPage/TeamPage';
import BattleRecordPage from './_pages/BattleRecordPage/BattleRecordPage';
import BossRecordPage from './_pages/BossRecordPage/BossRecordPage';
import PowerRecordPage from './_pages/PowerRecordPage/PowerRecordPage';

export default () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/members" component={MemberPage} />
        <Route exact path="/teams" component={TeamPage} />
        <Route exact path="/records/battle" component={BattleRecordPage} />
        <Route exact path="/records/boss" component={BossRecordPage} />
        <Route exact path="/records/power" component={PowerRecordPage} />
      </div>
    </Router>
  );
}