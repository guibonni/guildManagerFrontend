import React from 'react';
import '../../App.css';
import DataGrid from '../../_components/DataGrid';

export default class BossRecordPage extends React.Component {
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
                "id": 5,
                "data": "22/11/2019"
            },
            {
                "id": 4,
                "data": "21/11/2019"
            },
            {
                "id": 3,
                "data": "20/11/2019"
            },
            {
                "id": 2,
                "data": "19/11/2019"
            },
            {
                "id": 1,
                "data": "18/11/2019"
            }
        ];

        this.setState({ ...this.state, data });
    }
    
    render() {
        console.log(this.state)
        const gridHeaders = [
            { label: 'Id', size: 5, data: 'id' },
            { label: 'Data', size: 7, data: 'data' }
        ];

        return (
            <div className="App">
                <h1>Registros de Chefes de Guilda</h1>
                <DataGrid headers={gridHeaders} data={this.state.data} />
            </div>
        )
    }
}