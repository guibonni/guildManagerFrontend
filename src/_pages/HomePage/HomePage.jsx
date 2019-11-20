import React from 'react';
import '../../App.css';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

export default class HomePage extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Grand Chase Guild Manager</h1>
        <Grid container>
          <Grid xs={0} md={1} />
          <Grid item xs={12} md={10}>
            <ButtonGroup fullWidth variant="contained" color="primary" aria-label="menu button group">
              <Button href="/members"><b>Membros</b></Button>
              <Button href="/teams"><b>Equipes</b></Button>
              <Button href="/records/battle"><b>Batalha de Guilda</b></Button>
              <Button href="/records/boss"><b>Chefe de Guilda</b></Button>
              <Button href="/records/power"><b>Poder de Batalha</b></Button>
            </ButtonGroup>
          </Grid>
          <Grid xs={0} md={1} />
        </Grid>
      </div>
    )
  }
}