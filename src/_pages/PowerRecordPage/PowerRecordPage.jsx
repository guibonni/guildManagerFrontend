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
        this.alterar = this.alterar.bind(this);
        this.deletar = this.deletar.bind(this);
    }

    componentDidMount() {
        PowerRecordService.getAll(true)
            .then((response) => response.json())
            .then((data) => this.setState({ ...this.state, data }))
    }

    alterar(dataRow) {
        console.log('Alterar');
        console.log(dataRow);
    }

    deletar(dataRow) {
        console.log('Deletar');
        console.log(dataRow);
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
                <DataGrid 
                    headers={gridHeaders} 
                    data={this.state.data} 
                    alterarClick={this.alterar} 
                    deletarClick={this.deletar} 
                />
            </div>
        )
    }
}