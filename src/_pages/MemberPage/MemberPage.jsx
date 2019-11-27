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
        MemberService.getAll(true)
            .then((response) => response.json())
            .then((data) => this.setState({ ...this.state, data }))
    }
    
    render() {
        const gridHeaders = [
            { label: 'Id', size: 2, data: 'id' },
            { label: 'Nome', size: 5, data: 'nome' },
            { label: 'Cargo', size: 5, data: 'cargo' }
        ];

        return (
            <div className="App">
                <h1>Membros da Guilda</h1>
                <DataGrid headers={gridHeaders} data={this.state.data} />
            </div>
        )
    }
}