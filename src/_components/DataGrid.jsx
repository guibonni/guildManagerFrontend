import React from 'react';
import Grid from '@material-ui/core/Grid';
import './Components.css';

const GridHeader = (props) => (
  <Grid xs={props.header.size} className="Grid-Header">
    {props.header.label}
  </Grid>
)

export default class DataGrid extends React.Component {
  render() {
    const {headers, data} = this.props;

    return (
      <div className="Data-Grid">
        <Grid container>
          <Grid xs={0} md={1} />
          <Grid item xs={12} md={10} container className="Grid-Header-Bar">
            {
              headers.map((header) => {
                return (<GridHeader header={header} />)
              })
            }
          </Grid>
          <Grid xs={0} md={1} />
        </Grid>
        <Grid container>
          <Grid xs={0} md={1} />
          <Grid item xs={12} md={10} container className="Grid-Header-Data">
            {
              headers.map((header) => {
                return (<GridHeader header={header} />)
                // Fazer um map para cada linha dos dados e dentro de cada uma dessas linhas fazer um map igual o do header
              })
            }
          </Grid>
          <Grid xs={0} md={1} />
        </Grid>
      </div>
    )
  }
}