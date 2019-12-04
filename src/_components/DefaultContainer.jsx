import React from 'react';
import Grid from '@material-ui/core/Grid';
import './Components.css';

export default class DefaultContainer extends React.Component {
    render() {
        return (
            <Grid container>
                <Grid xs={0} md={1} />
                <Grid item xs={12} md={10} container className="Default-Container">
                    {this.props.children}
                </Grid>
                <Grid xs={0} md={1} />
            </Grid>
        )
    }
}