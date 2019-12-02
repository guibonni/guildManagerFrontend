import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import './Components.css';

const GridHeader = (props) => (
  <Grid xs={props.header.size} className="Grid-Header">
    {props.header.label}
  </Grid>
)

const GridData = (props) => (
  <Grid xs={props.header.size} className="Grid-Header">
    {props.data[props.header.data]}<br/>
  </Grid>
)

const GridRow = (props) => {
  const {row, headers, alterarClick, deletarClick} = props;

  return (
    <div className="Grid-Row">
      {
        headers.map((header, index) => {
          return (<GridData header={header} data={row} key={index} />)
        })
      }
      <Grid xs={2} className="Grid-Header">
        <ButtonGroup fullWidth variant="contained" color="primary">
          <Button onClick={() => alterarClick(row)}>Alterar</Button>
          <Button onClick={() => deletarClick(row)}>Excluir</Button>
        </ButtonGroup>
      </Grid>
    </div>
  )
}

export default class DataGrid extends React.Component {
  render() {
    const {headers, data, alterarClick, deletarClick} = this.props;

    return (
      <div className="Data-Grid">
        <Grid container>
          <Grid xs={0} md={1} />
          <Grid item xs={12} md={10} container className="Grid-Header-Bar">
            {
              headers.map((header, index) => {
                return (<GridHeader header={header} key={index} />)
              })
            }
            <GridHeader header={{ label: '', size: 2, data: '' }} />
          </Grid>
          <Grid xs={0} md={1} />
        </Grid>
        <Grid container>
          <Grid xs={0} md={1} />
          <Grid item xs={12} md={10} container className="Grid-Header-Data">
            {
              data.map((row, index) => {
                return (
                  <GridRow 
                    row={row} 
                    headers={headers} 
                    alterarClick={alterarClick} 
                    deletarClick={deletarClick} 
                    key={index} 
                  />
                )
              })
            }
          </Grid>
          <Grid xs={0} md={1} />
        </Grid>
      </div>
    )
  }
}