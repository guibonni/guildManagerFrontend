import React from 'react';
import '../../App.css';
import DataGrid from '../../_components/DataGrid';
import TeamService from '../../_services/TeamService';

export default class TeamPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        TeamService.getAll(true)
            .then((response) => response.json())
            .then((data) => this.setState({ ...this.state, data }))
    }
    
    render() {
        const gridHeaders = [
            { label: 'Id', size: 2, data: 'id' },
            { label: 'Personagem 1', size: 2, data: 'personagem1' },
            { label: 'Personagem 2', size: 2, data: 'personagem2' },
            { label: 'Personagem 3', size: 2, data: 'personagem3' },
            { label: 'Personagem 4', size: 2, data: 'personagem4' },
            { label: 'Mascote', size: 2, data: 'mascote1' }
        ];

        return (
            <div className="App">
                <h1>Equipes</h1>
                <DataGrid headers={gridHeaders} data={this.state.data} />
            </div>
        )
    }
}