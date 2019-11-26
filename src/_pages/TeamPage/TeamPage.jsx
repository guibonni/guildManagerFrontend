import React from 'react';
import '../../App.css';
import DataGrid from '../../_components/DataGrid';

export default class TeamPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        const data = [
            {
                "id": 1,
                "personagem1": "Elesis",
                "personagem2": "Amy",
                "personagem3": "Zero",
                "personagem4": "Werner",
                "mascote1": "Musa"
            },
            {
                "id": 2,
                "personagem1": "Jin",
                "personagem2": "Edel",
                "personagem3": "Rey",
                "personagem4": "Nellia",
                "mascote1": "Armon"
            },
            {
                "id": 3,
                "personagem1": "Elesis",
                "personagem2": "Lire",
                "personagem3": "Nellia",
                "personagem4": "Werner",
                "mascote1": "Porco Dourado"
            }
        ];

        this.setState({ ...this.state, data });
    }
    
    render() {
        console.log(this.state)
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