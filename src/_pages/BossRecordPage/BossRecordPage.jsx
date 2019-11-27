import React from 'react';
import '../../App.css';
import DataGrid from '../../_components/DataGrid';
import BossRecordService from '../../_services/BossRecordService';

export default class BossRecordPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        BossRecordService.getAll(true)
            .then((response) => response.json())
            .then((data) => this.setState({ ...this.state, data }))
    }
    
    render() {
        const gridHeaders = [
            { label: 'Id', size: 1, data: 'id' },
            { label: 'Membro', size: 5, data: 'membro' },
            { label: 'Data', size: 3, data: 'data' },
            { label: 'Dano', size: 3, data: 'dano' }
        ];

        return (
            <div className="App">
                <h1>Registros de Chefes de Guilda</h1>
                <DataGrid headers={gridHeaders} data={this.state.data} />
            </div>
        )
    }
}