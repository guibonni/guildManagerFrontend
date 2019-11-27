import React from 'react';
import '../../App.css';
import DataGrid from '../../_components/DataGrid';
import BattleRecordService from '../../_services/BattleRecordService';

export default class BattleRecordPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        BattleRecordService.getAll(true)
            .then((response) => response.json())
            .then((data) => this.setState({ ...this.state, data }))
    }
    
    render() {
        const gridHeaders = [
            { label: 'Id', size: 2, data: 'id' },
            { label: 'Membro', size: 7, data: 'membro' },
            { label: 'Data', size: 3, data: 'data' }
        ];

        return (
            <div className="App">
                <h1>Registros de Batalha de Guilda</h1>
                <DataGrid headers={gridHeaders} data={this.state.data} />
            </div>
        )
    }
}