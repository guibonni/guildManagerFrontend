import React from 'react';
import Grid from '@material-ui/core/Grid';
import '../../App.css';
import DataGrid from '../../_components/DataGrid';

export default class MemberPage extends React.Component {
    render() {
        const gridHeaders = [
            { label: 'Id', size: 2 },
            { label: 'Nome', size: 5 },
            { label: 'Cargo', size: 5 }
        ];

        return (
            <div className="App">
                <h1>Membros da Guilda</h1>
                <DataGrid headers={gridHeaders} />
            </div>
        )
    }
}