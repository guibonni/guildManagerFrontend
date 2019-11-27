import React from 'react';
import '../../App.css';
import DataGrid from '../../_components/DataGrid';
import PowerRecordService from '../../_services/PowerRecordService';

export default class PowerRecordPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        PowerRecordService.getAll(true)
            .then((response) => response.json())
            .then((data) => this.setState({ ...this.state, data }))
    }
    
    render() {
        const gridHeaders = [
            { label: 'Id', size: 1, data: 'id' },
            { label: 'Membro', size: 5, data: 'membro' },
            { label: 'Data', size: 2, data: 'data' },
            { label: 'Poder', size: 2, data: 'poder' }
        ];

        return (
            <div className="App">
                <h1>Registros de Poder</h1>
                <DataGrid headers={gridHeaders} data={this.state.data} />
            </div>
        )
    }
}