import React from 'react';
import '../../App.css';
import DataGrid from '../../_components/DataGrid';
import MemberService from '../../_services/MemberService';

export default class MemberPage extends React.Component {
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
        MemberService.getAll(true)
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
            { label: 'Id', size: 2, data: 'id' },
            { label: 'Nome', size: 4, data: 'nome' },
            { label: 'Cargo', size: 4, data: 'cargo' }
        ];

        return (
            <div className="App">
                <h1>Membros da Guilda</h1>
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