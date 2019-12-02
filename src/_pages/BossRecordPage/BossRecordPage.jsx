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
        this.alterar = this.alterar.bind(this);
        this.deletar = this.deletar.bind(this);
    }

    componentDidMount() {
        BossRecordService.getAll(true)
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
            { label: 'Dano', size: 2, data: 'dano' }
        ];

        return (
            <div className="App">
                <h1>Registros de Chefes de Guilda</h1>
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