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
    }

    componentDidMount() {
        MemberService.getAll()
            .then((response) => response.json())
            .then((data) => this.setState({ ...this.state, data }))
            .catch(err => console.log(err))
    }
    
    render() {
        console.log(this.state)
        const gridHeaders = [
            { label: 'Id', size: 2, data: 'id' },
            { label: 'Nome', size: 5, data: 'nome' },
            { label: 'Cargo', size: 5, data: 'cargo' }
        ];

        // const data = [
        //     {
        //         "id": 1,
        //         "nome": "Xolotl",
        //         "cargo": "Sub-Líder"
        //     },
        //     {
        //         "id": 2,
        //         "nome": "Jamal",
        //         "cargo": "Líder"
        //     }
        // ];

        return (
            <div className="App">
                <h1>Membros da Guilda</h1>
                <DataGrid headers={gridHeaders} data={this.state.data} />
            </div>
        )
    }
}